const SECAO_CRIACAO = document.getElementById("CriarTorneio");
const SECAO_TABELAS = document.getElementById("ConfigurarTabela");
const SECAO_PLACARES = document.getElementById("ConfigurarPlacar");

function fecharSecao(id){
    const SECAO = document.getElementById(id);
    SECAO.innerHTML = "";
    SECAO.style.display = "none";
}

function abrirSecao(id){
    const SECAO = document.getElementById(id);
    SECAO.style.display = "block";
}

function IniciarSecaoCriacao(){
    let string = "";

    //Template p mexer dps q o CSS tiver pronto! Trabalhe Jeans!
    string += 
    `
        <h2>Criar Torneio:</h2>
            <form onsubmit="cadastrarTorneio(event)">
            <input id="nomeTorneio" type="text" placeholder="Nome do Torneio">
            <br>
            <textarea id="descricao" rows="4" cols="30" placeholder="Descrição do Torneio..."></textarea>
            <br><br>
            
            <input type="radio" name="visibilidade" value="Publico"> Publico
            <input type="radio" name="visibilidade" value="Privado"> Privado
            <br><br>

            <select id="esporte" required>
                <option value="FUTEBOL" selected>Futebol</option>
                <option value="BASQUETE">Basquete</option>
                <option value="VOLEI">Volei</option>
                <option value="FUTEBOLAMERICANO">Futebol Amereicano</option>
                <option value="XADREZ">Xadrez</option>
                <option value="CUSTOM">Personalizado...</option>
            </select>
            <br>

            <h2>Configurar Tabela:</h2>
                    
            <table id="placar-config">
                <tr>
                    <th>Lado A</th>
                    <th>Versus</th>
                    <th>Lado B</th>
                </tr>
                <tr>
                    <th>1</th>
                    <th>-</th>
                    <th>1</th>
                </tr>
            </table>

            <h3>Quantidade de Sets:</h3>
            <input type="number" min="1" id="qntSets" value="1">
            <br><br>

            <h3>Valor dos Pontos:</h3>
            <input type="number" min="1" id="ptsValue" value="1">
            <br><br>

            <input type="radio" name="estilo" value="Eliminatorias"> Eliminatórias
            <input type="radio" name="estilo" value="Liga"> Pontos Corridos
            <br><br>

            <button type="submit">Criar Torneio!</button>
        </form>
    `;

    SECAO_CRIACAO.innerHTML = string;
    abrirSecao("placar-config");
    fecharSecao("ConfigurarTabela");
    fecharSecao("ConfigurarPlacar");
}

function gerarSets(sets, value){
    let string = "";
    for(let i =0; i < sets; i ++){
        string += `
            <tr>
                <th>${value}</th>
                <th>-</th>
                <th>${value}</th>
            </tr>
        `;
    }

    return string;
}

function placarUpdate(){
    const TABLE = document.getElementById("placar-config"); 
    const INPUT_SETS = document.getElementById("qntSets"); 
    const INPUT_PTS = document.getElementById("ptsValue");

    function update(){
        let qntSets = parseInt(INPUT_SETS.value, 10);
        if (isNaN(qntSets) || qntSets < 0) qntSets = 0;
        let pts = INPUT_PTS.value;

        let html = `
            <tr>
                <th>Lado A</th>
                <th>Versus</th>
                <th>Lado B</th>
            </tr>
        `;
        html += gerarSets(qntSets, pts);
        TABLE.innerHTML = html;
    }

    INPUT_SETS.addEventListener("input", update);
    INPUT_PTS.addEventListener("input", update);

    update();
}

IniciarSecaoCriacao();
placarUpdate();

function cadastrarTorneio(event) {
    event.preventDefault(); 

    const NOME = document.getElementById("nomeTorneio").value.trim();
    const DESCRICAO = document.getElementById("descricao").value.trim();

    const VISIBILIDADE = document.querySelector('input[name="visibilidade"]:checked');
    const TIPO_VISAO = VISIBILIDADE ? VISIBILIDADE.value : "";

    const ESPORTE = document.getElementById("esporte").value.trim();

    const CAMPEONATO = document.querySelector('input[name="estilo"]:checked');
    const TIPO_CAMPEONATO = CAMPEONATO ? CAMPEONATO.value : "";

    const QNT_SETS = document.getElementById("qntSets").value.trim();
    const PTS_VALUE = document.getElementById("ptsValue").value.trim();

    if (!NOME || !DESCRICAO || !VISIBILIDADE || !TIPO_VISAO || !ESPORTE || !CAMPEONATO || !TIPO_CAMPEONATO ||!QNT_SETS ||!PTS_VALUE) {
        abrirPopUp("Preencha Corretamente Todos os Campos!");
        return;
    }

    const AUTOR = getUsuario().nome;
    const PLACAR = {
        qntSets: QNT_SETS,
    }

    createTorneio(AUTOR, NOME, DESCRICAO, TIPO_VISAO, ESPORTE, TIPO_CAMPEONATO, PLACAR);
    abrirPopUp(`Torneio: ${NOME} foi criado com sucesso! Agora cadastre Equipes e Jogos para o seu torneio!`);
    
    setTimeout(()=>{window.location = "main.html"}, 3000);
}