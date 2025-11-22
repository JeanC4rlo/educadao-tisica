function getAllEquipesTorneio(ID_Torneio){
    const TORNEIO = getTorneioById(ID_Torneio);
    if(TORNEIO){
        let vetor = [];
        const COMPETIDORES = TORNEIO.participantes;
        COMPETIDORES.forEach(competidor => {
            vetor.push(competidor.nome);
        });

        return vetor;
    }

    return null;
}

function gerarConfrontos(
    ID_Torneio,
    PG_rodadas,           // 'com-rodadas' | 'sem-rodadas'
    PG_turnos,            // 'turno' | 'returno'
    PG_dataInicio,        // string ou Date ou null
    PG_maxJogosPorDia,    // Number (mínimo 1)
    PG_intervalo,         // Number (dias entre rodadas, >= 0)
    PG_endereco           // string (lugar)
) {
    const NOMES_PARTICIPANTES = getAllEquipesTorneio(ID_Torneio);
    const TORNEIO = getTorneioById(ID_Torneio);
    if (!NOMES_PARTICIPANTES || !Array.isArray(NOMES_PARTICIPANTES) || NOMES_PARTICIPANTES.length === 0) {
        return null;
    }

    const maxPorDia = (typeof PG_maxJogosPorDia === 'number' && PG_maxJogosPorDia >= 1) ? Math.floor(PG_maxJogosPorDia) : 1;
    const intervalo = (typeof PG_intervalo === 'number' && PG_intervalo >= 0) ? PG_intervalo : 7;
    const usarNumeracaoRodadas = (PG_rodadas !== 'sem-rodadas');
    const modosTurno = (PG_turnos === 'returno') ? 'returno' : 'turno';
    const horaPadrao = TORNEIO?.horaPadrao || '19:00';
    const lugarPadrao = PG_endereco || TORNEIO?.sede || 'A definir';

    const rawDataInicio = PG_dataInicio ?? TORNEIO?.dataInicio ?? null;
    const dataInicioParsed = parseDateSafe(rawDataInicio) || new Date();

    
    const ordem = NOMES_PARTICIPANTES.slice();
    let n = ordem.length;

    // se ímpar, adiciona "Folga" (bye)
    let temFolga = false;
    if (n % 2 !== 0) {
        ordem.push('Folga');
        n = ordem.length;
        temFolga = true;
    }

    const numRodadasBase = n - 1;           // número de rodadas para um turno
    const rodadasTotais = (modosTurno === 'returno') ? numRodadasBase * 2 : numRodadasBase;

    // helper para somar dias
    function addDays(date, days) {
        const d = new Date(date.getTime());
        d.setDate(d.getDate() + days);
        return d;
    }

    let totalCriados = 0;
    const rotaInicial = ordem.slice(); // trabalhar em cópia

    // Gera as rodadas do 1º turno (array de rodadas, cada rodada = array de pares)
    const rodadasArray = []; // cada item = [{ladoA, ladoB}, ...] para cada rodada do 1º turno

    
    const rota = rotaInicial.slice();

    for (let rodada = 0; rodada < numRodadasBase; rodada++) {
        const jogosEstaRodada = [];
        for (let i = 0; i < n / 2; i++) {
            const ladoA = rota[i];
            const ladoB = rota[n - 1 - i];
            if (ladoA === 'Folga' || ladoB === 'Folga') continue;
            jogosEstaRodada.push({ ladoA, ladoB });
        }
        rodadasArray.push(jogosEstaRodada);

        
        const fixa = rota[0];
        const resto = rota.slice(1);
        resto.unshift(resto.pop());
        rota.length = 0;
        rota.push(fixa, ...resto);
    }

    function agendarListaJogos(listaJogos, dataBase, rodadaIndex, marcarNumRodada) {
        let currentDate = new Date(dataBase.getTime());
        let jogosNoDia = 0;
        for (let j = 0; j < listaJogos.length; j++) {
            if (jogosNoDia >= maxPorDia) {
                
                currentDate = addDays(currentDate, 1);
                jogosNoDia = 0;
            }

            const par = listaJogos[j];
            const confronto = {
                status: "Não iniciado",
                ladoA: par.ladoA,
                ladoB: par.ladoB,
                data: formatarData(currentDate),
                hora: horaPadrao,
                lugar: lugarPadrao,
                resultadoA: "-",
                resultadoB: "-",
                rodada: marcarNumRodada ? (rodadaIndex + 1) : 0,
            };

            addConfrontoBASIC(ID_Torneio, confronto);
            totalCriados++;
            jogosNoDia++;
        }

        
        return addDays(currentDate, 0);
    }
    
    let dataCursor = new Date(dataInicioParsed.getTime()); // data inicial para agendamento do 1º turno
    for (let r = 0; r < rodadasArray.length; r++) {
        const jogos = rodadasArray[r];
        // agendar os jogos desta rodada a partir de dataCursor, respeitando maxPorDia
        const ultimoDiaDaRodada = agendarListaJogos(jogos, dataCursor, r, usarNumeracaoRodadas);
        // next round base date = ultimoDiaDaRodada + intervalo dias
        dataCursor = addDays(ultimoDiaDaRodada, intervalo);
    }

    // --- 2º turno (returno) se solicitado ---
    if (modosTurno === 'returno') {
        // cria jogos invertendo lados na mesma ordem das rodadas do 1º turno
        const inicioReturno = new Date(dataCursor.getTime()); // começo do returno
        for (let r = 0; r < rodadasArray.length; r++) {
            const jogos = rodadasArray[r].map(p => ({ ladoA: p.ladoB, ladoB: p.ladoA }));
            const ultimoDiaDaRodada = agendarListaJogos(jogos, inicioReturno, r + numRodadasBase, usarNumeracaoRodadas);
            // avançar inicioReturno para depois do último dia usado dessa rodada
            inicioReturno.setTime(addDays(ultimoDiaDaRodada, intervalo).getTime());
        }
    }

    return totalCriados;
}

