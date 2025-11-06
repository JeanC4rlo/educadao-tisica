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
                <button>Seguir</button>
            </div>
        `;
    }

    SECAO_VIEW.innerHTML = stringHtml;
}

mostrarTorneio();