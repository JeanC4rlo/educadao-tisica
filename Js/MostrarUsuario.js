const VIEW_USUARIO = document.querySelector(".dados-usuario");

function mostrarDadosUsuario(){
    const DADOS = getUsuario();
    let stringHTML = `
    <div class="dados-usuario-surface">
        <h1>Olá, ${DADOS.nome}</h1>
        <div class="dados">
            <h2>Seus Dados:</h2>
            <p>Nome Completo: ${DADOS.nome} ${DADOS.sobrenome}</p>
            <p> ${DADOS.tipoUsuario} de Torneios</p>
            <p>Email: ${DADOS.email}</p>
            <p>Nacionalidade: ${getPaisString(DADOS.pais)}</p>
        </div>
        <div class="opcoes">
            <button onclick="window.location.replace('main.html')">Voltar</button>
            <button onclick="logout()">Sair</button>
        </div>     
    </div>`;

    VIEW_USUARIO.innerHTML = stringHTML;
}

mostrarDadosUsuario();