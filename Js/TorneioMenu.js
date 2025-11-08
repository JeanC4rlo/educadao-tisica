const SECAO_MENU = document.getElementById("menu");
const TORNEIO = getTorneioTarget();
const TITULO = document.getElementById("Torneio-Title");

TITULO.innerHTML = `${TORNEIO.nome}`;

function mostrarTorneio(){
    let stringHtml = "<h1>Visualizar Torneio:</h1>";

    if(TORNEIO == null){
        stringHtml += "<p>Nenhum Torneio Escolhido</p>";
    }
    else{
        stringHtml += `
            <div class="show-torneio">
                <img src="${getImgEsporte(TORNEIO.esporte)}">
                <h2>${TORNEIO.nome}</h2>
                <a href="">Autor: @${TORNEIO.autor}</a>
                <p>Descrição: ${TORNEIO.descricao}</p>

                <h3>Mais Informações:</h3>
                <p>Esporte: ${TORNEIO.esporte}</p>
                <p>Campeonato: ${TORNEIO.tipoCampeonato}</p>
                <p id="numero-de-seguidores">💫 Hype: ${TORNEIO.seguidores}</p>
                <button id="botao-seguir" onclick="ficSeguidores(${TORNEIO.seguidores})">Hypar</button>
            </div>
        `;
    }

    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(1);
}

function mostrarConfrontos(){
    let stringHtml = "<h1>Confrontos:</h1>";

    if(TORNEIO.confrontos.length == 0){
        stringHtml += `<p><b>${TORNEIO.nome}</b> ainda não possui confrontos definidos.</p>`;
    } else{
        const Array = TORNEIO.confrontos.slice().reverse();
            Array.forEach(confronto => {
                if(confronto.status == "concluído"){
                    stringHtml += `
                            <div>
                                <p>Data: ${confronto.data} | local: ${confronto.local}</p>
                                <div>${confronto.nomeLadoA}</div>
                                <div>Versus</div>
                                <div>${confronto.nomeLadoB}</div>
                            </div>
                    `;
                } else {
                    stringHtml += `
                            <div>
                                <p>Data: ${confronto.data} | local: ${confronto.local}</p>
                                <div>${confronto.nomeLadoA}</div>
                                <div>${confronto.placarLadoA}</div>
                                <div>Versus</div>
                                <div>${confronto.placarLadoB}</div>
                                <div>${confronto.nomeLadoB}</div>
                            </div>
                    `;
                }
        });
    }
    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(2);
}

function mostrarCompetidores(){
    let stringHtml = "<h1>Competidores:</h1>";

    if(TORNEIO.participantes.length == 0){
        stringHtml += `<p><b>${TORNEIO.nome}</b> ainda não possui competidores definidos.</p>`;
    } else{

        const Array = TORNEIO.participantes.sort();
        stringHtml += `
                    <table id="tabela-participantes">
                    <tr>
                        <th> - </th>
                        <th> Participantes: </th>
                        <th> Tipo: </th>
                    </tr>
            `;

        Array.forEach(participante => {
            stringHtml += `
                    <tr>
                        <th> - </th>
                        <th> ${participante.nome} </th>
                        <th> ${participante.tipo} </th>
                    </tr>
            `;
        });

        stringHtml += "</table>";
    }

    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(3);
}

function ficSeguidores(num){
    const SEGUIDORES = num + 1;
    const BOTAO = document.getElementById("botao-seguir");
    const DISPLAY = document.getElementById("numero-de-seguidores");

    BOTAO.innerHTML = "Hypado";
    DISPLAY.innerHTML = `💫 Hype: ${SEGUIDORES}`;
}

mostrarTorneio();
loadSecaoMenu(1);