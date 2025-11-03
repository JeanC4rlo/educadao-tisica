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
        <input id="usuarioInput" type="text" placeholder="Nome do Torneio">
        <br>
        <textarea id="descricao" name="descricao" rows="4" cols="30" placeholder="Descrição do Torneio..."></textarea>
        <br><br>
        
        <input type="radio" name="visibilidade" value="Publico"> Publico
        <input type="radio" name="visibilidade" value="Privado"> Privado
        <br><br>

        <select id="nacionalidade" required>
            <option value="SC" selected>Futebol</option>
            <option value="BS">Basquete</ofecharSecao("ConfigurarTabela");
    fecharSecao("ConfigurarPlacar");ption>
            <option value="VL">Volei</option>
            <option value="FT">Futebol Amereicano</option>
            <option value="CH">Xadrez</option>
            <option value="CUSTOM">Personalizado...</option>
        </select>
        <br>

        <button onclick="InciarSecaoTabelas()">Configurar Placares</button>
        <br>

        <input type="radio" name="estilo" value="Eliminatorias"> Eliminatórias
        <input type="radio" name="estilo" value="Liga"> Pontos Corridos
        <br><br>

        <button>Criar Torneio!</button>
    `;

    SECAO_CRIACAO.innerHTML = string;
    abrirSecao("CriarTorneio");
    fecharSecao("ConfigurarTabela");
    fecharSecao("ConfigurarPlacar");
}

function InciarSecaoTabelas(){
    let string = "";

    //Template p mexer dps q o CSS tiver pronto! Trabalhe Jeans!
    string += 
    `
        <h2>Configurar Tabela:</h2>
                
        <table>
            <tr>
                <th>Lado A</th>
                <th>Versus</th>
                <th>Lado B</th>
            </tr>
            <tr>
                <th>0</th>
                <th>-</th>
                <th>0</th>
            </tr>
        </table>

        <h3>Quantidade de Sets:</h3>
        <input type="number" name="qntSets" value="1">
        <br><br>

        <h3>Valor dos Pontos:</h3>
        <input type="number" name="PontosValue" value="1">
        <br><br>

        <button>Definir</button>
        <button onclick="IniciarSecaoCriacao()">Voltar</button>
    `;

    SECAO_TABELAS.innerHTML = string;
    abrirSecao("ConfigurarTabela");
    fecharSecao("CriarTorneio");
    fecharSecao("ConfigurarPlacar");
}

IniciarSecaoCriacao();