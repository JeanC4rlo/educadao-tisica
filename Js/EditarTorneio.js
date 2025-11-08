const TORNEIO = getTorneioTarget();
const TITULO = document.getElementById("Torneio-Title");
const CAMADA_CADASTRO = document.getElementById("camada-cadastro");

TITULO.innerHTML = `${TORNEIO.nome}:`;

function loadAddCompetidor(){
    let string = `
        <h2>Adicionar Competidor:</h2>
        <form id="formCompetidor" onsubmit="addCompetidor(event)">

            <input id="nomeCompetidor" type="text" placeholder="Nome: Competidor/Equipe...">
            <br><br>

            <label>
                <input type="radio" name="tipoCompetidor" value="solo" onchange="mostrarCamposEquipe()"> Competidor Solo
            </label>

            <label>
                <input type="radio" name="tipoCompetidor" value="equipe" onchange="mostrarCamposEquipe()"> Equipe
            </label>

            <br><br>

            <div id="areaEquipe"></div>

            <br><br>
            <button type="submit">Adicionar Ao Torneio</button>
        </form>
    `;

    CAMADA_CADASTRO.innerHTML = string;
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

    let string = "<h2>Adicionar Equipes Para Poder configurar Confrontos!</h2>";

    if(TORNEIO.participantes.length != 0){
        string = `
            <h2>Adicionar Confronto:</h2>
            <form onsubmit="">

                <h3>Data do Confronto:</h3>
                <input id="dataCompeticao" type="date">

                <h3>Competidor A</h3>
        `;

        array.forEach(participante => {
            string += `
                <label>
                    <input type="radio" name="competidorA" value="${participante.nome}"> ${participante.nome}
                </label>
            `;
        });
                
        string +="<h3>Competidor B</h3>";
        
        array.forEach(participante => {
            string += `
                <label>
                    <input type="radio" name="competidorB" value="${participante.nome}"> ${participante.nome}
                </label>
            `;
        });

        string += `
                <br><br>

                <h3>Lugar Competição:</h3>
                <input id="lugar" type="text" placeholder="Digite o Endereço...">

                <br><br>
                <button type="submit">Adicionar Ao Torneio</button>
            </form>
        `;
    }
    CAMADA_CADASTRO.innerHTML = string;
}

loadAddConfronto();