const SECAO_CRIACAO = document.getElementById("CriarTorneio");

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
            <option value="BS">Basquete</option>
            <option value="VL">Volei</option>
            <option value="FT">Futebol Amereicano</option>
            <option value="CH">Xadrez</option>
            <option value="CUSTOM">Personalizado...</option>
        </select>
        <br>

        <button>Configurar Placares</button>
        <br>

        <input type="radio" name="estilo" value="Eliminatorias"> Eliminatórias
        <input type="radio" name="estilo" value="Liga"> Pontos Corridos
        <br><br>

        <input type="file">
        <button>Criar Torneio!</button>
    `;

    SECAO_CRIACAO.innerHTML = string;
}

IniciarSecaoCriacao();