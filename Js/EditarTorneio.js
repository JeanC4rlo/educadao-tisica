const TORNEIO = getTorneioTarget();
const TITULO = document.getElementById("Torneio-Title");
const CAMADA_CADASTRO = document.getElementById("camada-cadastro");
const CAMADA_OPCOES = document.querySelector(".menu-options");

TITULO.innerHTML = `${TORNEIO.nome}:`;

function loadAddCompetidor(){
    let string = `
        <div class="formulario addCompetidor">
            <h2>Adicionar Competidor:</h2>
            <form id="formCompetidor" onsubmit="addCompetidor(event)">

                <input id="nomeCompetidor" type="text" placeholder="Nome: Competidor/Equipe...">


                <label class="radio">
                    <input type="radio" name="tipoCompetidor" value="solo" onchange="mostrarCamposEquipe()">
                    <span class="checkmark"></span>
                    Competidor Solo
                </label>

                <label class="radio">
                    <input type="radio" name="tipoCompetidor" value="equipe" onchange="mostrarCamposEquipe()">
                    <span class="checkmark"></span>
                    Equipe
                </label>              

                <div id="areaEquipe"></div>

                <button type="submit">Adicionar Ao Torneio</button>
            </form>
        </div>
    `;

    
    CAMADA_CADASTRO.innerHTML = string;
    CAMADA_OPCOES.innerHTML = `
        <button class="option-target" onclick="loadAddCompetidor()">Adicionar Competidor</button>
        <button onclick="loadAddConfronto()">Adicionar Confronto</button>
    `;
}

function mostrarCamposEquipe(){
    const tipo = document.querySelector('input[name="tipoCompetidor"]:checked').value;
    const area = document.getElementById("areaEquipe");

    if(tipo === "equipe"){
        area.innerHTML = `
            <label>Número de atletas:</label>
            <input id="qtdAtletas" type="number" min="1" onchange="gerarCamposAtletas()">
            <br><br>
            <div id="listaAtletas"></div>
        `;
    } else {
        area.innerHTML = "";
    }
}

function gerarCamposAtletas(){
    const qtd = document.getElementById("qtdAtletas").value;
    const lista = document.getElementById("listaAtletas");

    let inputs = "";
    for(let i = 1; i <= qtd; i++){
        inputs += `<input type="text" placeholder="Nome do Atleta ${i}"><br>`;
    }

    lista.innerHTML = inputs;
}

function loadAddConfronto(){
    const array = TORNEIO.participantes;

    let string = "<div class='formulario addCompetidor'><h2>Adicione 2 ou mais Equipes Para Poder configurar Confrontos!</h2></div>";

    if(TORNEIO.participantes.length > 1){
        string = `
            <div class="formulario addCompetidor">
                <h2>Adicionar Confronto:</h2>
                <form onsubmit="addConfronto(event)">

                    <h3>Data do Confronto:</h3>
                    <input id="dataCompeticao" type="date">

                    <h3>Hora Do Confronto</h3>
                    <input type="time" id="horaCompeticao">

                    <h3>Competidor A</h3>
        `;

        array.forEach(participante => {
            string += `
                <label class="radio">
                    <input type="radio" name="competidorA" value="${participante.nome}"> 
                    <span class="checkmark"></span>
                    ${participante.nome}
                </label> 
            `;
        });
                
        string +="<h3>Competidor B</h3>";
        
        array.forEach(participante => {
            string += `
                <label class="radio">
                    <input type="radio" name="competidorB" value="${participante.nome}"> 
                    <span class="checkmark"></span>
                    ${participante.nome}
                </label> 
            `;
        });

        string += `
                    <h3>Lugar Competição:</h3>
                    <input id="lugarCompeticao" type="text" placeholder="Digite o Endereço...">

                    <button type="submit">Adicionar Ao Torneio</button>
                </form>
            </div>
        `;
    }
    CAMADA_CADASTRO.innerHTML = string;

    CAMADA_OPCOES.innerHTML = `
        <button onclick="loadAddCompetidor()">Adicionar Competidor</button>
        <button class="option-target" onclick="loadAddConfronto()">Adicionar Confronto</button>
    `;
}

loadAddCompetidor();