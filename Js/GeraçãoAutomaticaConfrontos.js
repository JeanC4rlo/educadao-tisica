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

function gerarConfrontos(ID_Torneio, saltoDias) {
    const NOMES_PARTICIPANTES = getAllEquipesTorneio(ID_Torneio);
    const TORNEIO = getTorneioById(ID_Torneio);
    if (!NOMES_PARTICIPANTES || !Array.isArray(NOMES_PARTICIPANTES) || NOMES_PARTICIPANTES.length === 0) {
        return null;
    }
    saltoDias = (typeof saltoDias === 'number' && saltoDias > 0) ? saltoDias : 7;

    // copia para não alterar original
    const ordem = NOMES_PARTICIPANTES.slice();
    let n = ordem.length;

    // se ímpar, adiciona "Folga" (bye)
    let temFolga = false;
    if (n % 2 !== 0) {
        ordem.push('Folga');
        n = ordem.length;
        temFolga = true;
    }

    const numRodadas = n - 1;
    const jogosPorRodada = n / 2;
    const horaPadrao = TORNEIO?.horaPadrao || '19:00';
    const lugarPadrao = TORNEIO?.sede || 'A definir';
    const rawDataInicio = TORNEIO?.dataInicio || null; // aceita "YYYY-MM-DD", Date, etc.
    const dataInicioParsed = parseDateSafe(rawDataInicio) || new Date(); // hoje se não houver

    let totalCriados = 0;

    // ordem será modificada a cada rodada (mantemos ordem[0] fixo)
    const rota = ordem.slice(); // trabalha na cópia

    for (let rodada = 0; rodada < numRodadas; rodada++) {
        // calcula data da rodada
        const dataRodada = new Date(dataInicioParsed.getTime() + rodada * saltoDias * 24 * 60 * 60 * 1000);

        for (let i = 0; i < jogosPorRodada; i++) {
            const ladoA = rota[i];
            const ladoB = rota[n - 1 - i];

            // se um dos lados for 'Folga', pulamos (não adiciona confronto)
            if (ladoA === 'Folga' || ladoB === 'Folga') continue;

            const confronto = {
                status: "Não Iniciado",
                ladoA: ladoA,
                ladoB: ladoB,
                data: formatarData(dataRodada),
                hora: horaPadrao,
                lugar: lugarPadrao,
                resultadoA: "-",
                resultadoB: "-",
            };

            addConfrontoBASIC(ID_Torneio, confronto);
            totalCriados++;
        }

        const fixa = rota[0];
        const resto = rota.slice(1);
        resto.unshift(resto.pop());
        // reconstrói rota
        rota.length = 0;
        rota.push(fixa, ...resto);
    }

    return totalCriados;
}
