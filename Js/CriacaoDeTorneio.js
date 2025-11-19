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

    string += 
    `
        <div class="formulario-surface">
            <h1>Criar Torneio:</h1>
            <form onsubmit="cadastrarTorneio(event)">
                <div class="formulario-section">
                    <h2>Dados Iniciais:</h2>
                    <input class="input-texto" id="nomeTorneio" type="text" placeholder="Nome do Torneio">
                    <textarea class="textArea" id="descricao" rows="1" cols="30" placeholder="Descrição do Torneio..."></textarea>
                </div>             
                
                <div class="formulario-section">
                    <div>
                        <h2>Tipo :</h2>
                        
                        <label class="radio">
                            <input type="radio" name="estilo" value="Eliminatorias"> 
                            <span class="checkmark"></span>
                            Eliminatórias
                        </label>

                        <label class="radio">
                            <input type="radio" name="estilo" value="Liga"> 
                            <span class="checkmark"></span>
                            Pontos Corridos
                        </label>   
                    </div>  

                    <div>
                        <h2>Visibilidade:</h2>

                        <label class="radio">
                            <input type="radio" name="visibilidade" value="Publico">
                            <span class="checkmark"></span>
                            Publico
                        </label>

                        <label class="radio">
                            <input type="radio" name="visibilidade" value="Privado"> 
                            <span class="checkmark"></span>
                            Privado
                        </label>   
                    </div> 
                </div>
                           

                <div class="formulario-section">
                    <h2>Seu Esporte:</h2>
                    <select class="select" id="esporte" required>
                        <option class="select-option" value="FUTEBOL" selected>Futebol</option>
                        <option class="select-option" value="BASQUETE">Basquete</option>
                        <option class="select-option" value="VOLEI">Volei</option>
                        <option class="select-option" value="FUTEBOLAMERICANO">Futebol Amereicano</option>
                        <option class="select-option" value="XADREZ">Xadrez</option>
                        <option class="select-option" value="CUSTOM">Personalizado...</option>
                    </select>
                </div>

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

                <div class="formulario-section">
                    <h2>Quantidade de Sets:</h2>
                    <input class="input-number" type="number" min="1" id="qntSets" value="1">

                    <h2>Valor dos Pontos:</h2>
                    <input class="input-number" type="number" min="1" id="ptsValue" value="1"> 
                </div>

                <button class="submit-button" type="submit">Criar Torneio!</button>
            </form>
        </div>
        
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
    
    setTimeout(()=>{window.location.replace('main.html')}, 3000);
}