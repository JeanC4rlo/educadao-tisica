const SECAO_MENU = document.getElementById("menu");
const TORNEIO = getTorneioTarget();
const TITULO = document.getElementById("torneio-title");

TITULO.innerHTML = `${TORNEIO.nome}`;

function mostrarTorneio() {
    let stringHtml = "<h1>Visualizar torneio:</h1>";

    if (TORNEIO == null) {
        stringHtml += "<p>Nenhum torneio escolhido</p>";
    }
    else {
        stringHtml += TorneioCompleteViewHTML(TORNEIO);
    }

    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(1);
}

function mostrarConfrontos() {
    let stringHtml = "<h1>Confrontos:</h1>";

    if (TORNEIO.confrontos.length == 0) {
        stringHtml += `<p><b>${TORNEIO.nome}</b> ainda não possui confrontos definidos.</p>`;
    } else {
        const Array = TORNEIO.confrontos.slice().reverse();
        stringHtml += `<h3>${Array.length} Confrontos:</h3><div class='confronto-collection'>`;

        let ultimaRodada = null;

        Array.forEach(confronto => {
            const rodadaNum = Number(confronto.rodada) || 0;

            if (rodadaNum !== 0 && rodadaNum !== ultimaRodada) {
                stringHtml += `<h3 class="rodada">Rodada ${rodadaNum}</h3>`;
                ultimaRodada = rodadaNum;
            }

            stringHtml += confrontoHTML(confronto);
        });

        stringHtml += "</div>";
    }

    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(2);
}

function mostrarCompetidores() {
    let stringHtml = "<h1>Competidores:</h1>";

    if (TORNEIO.participantes.length == 0) {
        stringHtml += `<p><b>${TORNEIO.nome}</b> ainda não possui competidores definidos.</p>`;
    } else {
        const Array = TORNEIO.participantes.sort();
        stringHtml += 
        `
        <h3>${Array.length} Competidores:</h3>
        <table id="tabela-participantes">
        <tr>
            <th> </th>
            <th> Participantes: </th>
            <th> Tipo: </th>
        </tr>
        `;

        let i = 1;
        Array.forEach(participante => {
            stringHtml += 
            `
            <tr>
                <td>${i} -</td>
                <td> ${participante.nome} </td>
                <td> ${participante.tipo} </td>
            </tr>
            `;
            i++;
        });

        stringHtml += "</table>";
    }

    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(3);
}

function ficSeguidores(num) {
    const SEGUIDORES = num + 1;
    const BOTAO = document.querySelector(".botao-seguir");
    const DISPLAY = document.querySelector(".numero-de-seguidores");

    BOTAO.innerHTML = "Hypado";
    DISPLAY.innerHTML = `💫 Hype: ${SEGUIDORES}`;
}

mostrarTorneio();
loadSecaoMenu(1);
