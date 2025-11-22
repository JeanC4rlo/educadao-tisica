const TORNEIO = getTorneioTarget();
const TITULO = document.getElementById("torneio-title");
const CAMADA_CADASTRO = document.getElementById("camada-cadastro");
const CAMADA_OPCOES = document.querySelector(".menu-options");

TITULO.innerHTML = `${TORNEIO.nome}:`;

function loadAddCompetidor() {
    let string = 
    `
    <div class="formulario add-competidor">
        <h2>Adicionar Competidor:</h2>
        <form id="formCompetidor" onsubmit="addCompetidor(event)">
            <input id="nome-competidor" type="text" placeholder="Nome do competidor ou equipe...">

            <label class="radio">
                <input type="radio" name="tipo-competidor" value="solo" onchange="mostrarCamposEquipe()">
                <span class="checkmark"></span>
                Competidor solo
            </label>

            <label class="radio">
                <input type="radio" name="tipo-competidor" value="equipe" onchange="mostrarCamposEquipe()">
                <span class="checkmark"></span>
                Equipe
            </label>              

            <div id="area-equipe"></div>

            <button type="submit">Adicionar ao Torneio</button>
        </form>
    </div>
    `;


    CAMADA_CADASTRO.innerHTML = string;
    CAMADA_OPCOES.innerHTML = `
        <button class="option-target" onclick="loadAddCompetidor()">Adicionar Competidor</button>
        <button onclick="loadAddConfronto()">Adicionar Confronto</button>
    `;
}

function mostrarCamposEquipe() {
    const tipo = document.querySelector('input[name="tipo-competidor"]:checked').value;
    const area = document.getElementById("area-equipe");

    if (tipo === "equipe") {
        area.innerHTML = 
        `
        <label>Número de atletas:</label>
        <input id="qtd-atletas" type="number" min="1" onchange="gerarCamposAtletas()">
        <br><br>
        <div id="lista-atletas"></div>
        `;
    } else {
        area.innerHTML = "";
    }
}

function gerarCamposAtletas() {
    const qtd = document.getElementById("qtd-atletas").value;
    const lista = document.getElementById("lista-atletas");

    let inputs = "";
    for (let i = 1; i <= qtd; i++) {
        inputs += `<input type="text" placeholder="Nome do Atleta ${i}"><br>`;
    }

    lista.innerHTML = inputs;
}

function loadAddConfronto() {
    const array = TORNEIO.participantes;

    let string = "<div class='formulario add-competidor'><h2>Adicione 2 ou mais equipes para poder configurar confrontos!</h2></div>";

    if (TORNEIO.participantes.length > 1) {
        string = 
        `
        <div class="formulario add-competidor">
        <h2>Adicionar Confronto:</h2>
        `;

        if (TORNEIO.confrontos.length == 0 && TORNEIO.participantes.length % 2 == 0) {
            string += `<button onclick="callGeracaoAutomatica()">Gerar automaticamente</button>`;
        }

        string += `
        <form onsubmit="addConfronto(event)">
            <h3>Data do confronto:</h3>
            <input id="data-competicao" type="date">

            <h3>Hora Do confronto</h3>
            <input type="time" id="hora-competicao">

            <h3>Competidor A</h3>
        `;

        array.forEach(participante => {
            string += 
            `
            <label class="radio">
                <input type="radio" name="competidorA" value="${participante.nome}"> 
                <span class="checkmark"></span>
                ${participante.nome}
            </label> 
            `;
        });

        string += "<h3>Competidor B</h3>";

        array.forEach(participante => {
            string += 
            `
            <label class="radio">
                <input type="radio" name="competidorB" value="${participante.nome}"> 
                <span class="checkmark"></span>
                ${participante.nome}
            </label> 
            `;
        });

        string += 
        `
                <h3>Lugar Competição:</h3>
                <input id="lugar-competicao" type="text" placeholder="Digite o endereço...">

                <button type="submit">Adicionar ao torneio</button>
            </form>
        </div>
        `;
    }
    CAMADA_CADASTRO.innerHTML = string;

    CAMADA_OPCOES.innerHTML = 
    `
    <button onclick="loadAddCompetidor()">Adicionar competidor</button>
    <button class="option-target" onclick="loadAddConfronto()">Adicionar confronto</button>
    `;
}

function callGeracaoAutomatica() {
    window.location.replace('geracao-automatica.html');
}

loadAddCompetidor();