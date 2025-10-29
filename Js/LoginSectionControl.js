const SECAO_LOGIN = document.getElementById("loginSection");
const SECAO_CADASTRO = document.getElementById("cadastroSection");

function carregarSectionLogin(){
    let string = "";

    //Template p mexer dps q o CSS tiver pronto! Trabalhe Jeans!
    string += 
    `
        <h2>Login:</h2>
        <input id="usuarioInput" type="text" placeholder="Usuário">
        <br>
        <input id="senhaInput" type="password" placeholder="Senha">
        <br><br>
        <button id="loginButton" onclick="login()">Entrar</button>
        <button id="cadastroButton" onclick="carregarSectionCadastro()">Cadastrar</button>

        <ul>
            <li>Seu usuário é o seu nome!</li>
        </ul>
    `;

    SECAO_LOGIN.innerHTML = string;
    SECAO_CADASTRO.innerHTML = ``;
}

function carregarSectionCadastro(){
    let string = "";
    
    //Template p mexer dps q o CSS tiver pronto! Trabalhe Jeans!
    string += 
    `
            <h2>Cadastro:</h2>
            <form onsubmit="cadastrar(event)">
                <input id="nomeInput" type="text" placeholder="Nome" required>
                <input id="sobrenomeInput" type="text" placeholder="Sobrenome">
                <br><br>
                
                <select id="nacionalidade" required>
                    <option value="ARG">Argentina</option>
                    <option value="BR" selected>Brasil</option>
                    <option value="COL">Colômbia</option>
                    <option value="USA">Estados Unidos</option>
                    <option value="PT">Portugal</option>
                    <option value="VNZ">Venezuela</option>
                </select>
                <br><br>

                <input type="radio" name="nivel" value="Organizador"> Organizador
                <input type="radio" name="nivel" value="Visitante"> Visitante
                <br><br>

                <input id="emailInput" type="email" placeholder="seuemail@email.com" required>
                <input id="senhaInput" type="password" placeholder="Crie uma Senha" required>

                <br><br>
                <button type="submit" id="loginButton">Registrar</button>
                <button onclick="carregarSectionLogin()">Voltar</button>
            </form>
    `;

    SECAO_CADASTRO.innerHTML = string;
    SECAO_LOGIN.innerHTML = ``;
}

carregarSectionLogin();