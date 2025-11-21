const SECAO_LOGIN = document.getElementById("loginSection");
const SECAO_CADASTRO = document.getElementById("cadastroSection");

function carregarSectionLogin(){
    let string = "";

    string += 
    `
        <div class="login-surface">
            <h2>Entre para: Organizar e Acompanhar seus campeonatos!</h2>
            
            <div class="login-inputs-surface">
                <input class="login-input" id="usuarioInput" type="email" placeholder="Email">
                <input class="login-input" id="senhaInput" type="password" placeholder="Senha">
            </div>
            
            
            <div class="login-buttons-surface">
                <button id="loginButton" onclick="login()">Entrar</button>
                <button id="cadastroButton" onclick="carregarSectionCadastro()">Cadastrar</button>
            </div>
        </div>
    `;

    SECAO_LOGIN.innerHTML = string;
    SECAO_CADASTRO.innerHTML = ``;
}

function carregarSectionCadastro(){
    let string = "";

    string += 
    `
            <div class="cadastro-surface">
                <h2>Cadastro:</h2>
                <form onsubmit="cadastrar(event)">
                    <div class="input-text-surface">
                        <input id="nomeInput" class="input-padrao" type="text" placeholder="Nome" required>
                        <input id="sobrenomeInput" class="input-padrao" type="text" placeholder="Sobrenome">
                    </div>
                    
                    <select class="select" id="nacionalidade" required>
                        <option value="ARG">Argentina</option>
                        <option value="BR" selected>Brasil</option>
                        <option value="COL">Colômbia</option>
                        <option value="USA">Estados Unidos</option>
                        <option value="PT">Portugal</option>
                        <option value="VNZ">Venezuela</option>
                    </select>

                    <div>
                        <label class="radio">
                            <input type="radio" name="nivel" value="Organizador">
                            <span class="checkmark"></span>
                            Organizador
                        </label>

                        <label class="radio">
                            <input type="radio" name="nivel" value="Visitante">
                            <span class="checkmark"></span>
                            Visitante
                        </label>
                    </div>

                    <div class="input-text-surface">
                        <input id="emailInput" class="input-padrao" type="email" placeholder="seuemail@email.com" required>
                        <input id="senhaInput" class="input-padrao" type="password" placeholder="Crie uma Senha" required>
                    </div>
                    <div class="cadastro-buttons-surface">    
                        <button type="submit" id="loginButton">Registrar</button>
                        <button onclick="carregarSectionLogin()">Voltar</button>
                    <div>
                </form>
            </div>
    `;

    SECAO_CADASTRO.innerHTML = string;
    SECAO_LOGIN.innerHTML = ``;
}

carregarSectionLogin();