const SECAO_VIEW = document.getElementById("view");

function getTorneioTarget(){
    let  torneioAlvo = localStorage.getItem("torneioAlvo");

    if(torneioAlvo == null || torneioAlvo == undefined){
        torneioAlvo == null;
    }

    return JSON.parse(torneioAlvo);
}

function mostrarTorneio(){
    const TORNEIO = getTorneioTarget();
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

function ficSeguidores(num){
    const SEGUIDORES = num + 1;
    const BOTAO = document.getElementById("botao-seguir");
    const DISPLAY = document.getElementById("numero-de-seguidores");

    BOTAO.innerHTML = "Hypado";
    DISPLAY.innerHTML = `💫 Hype: ${SEGUIDORES}`;
}

mostrarTorneio();