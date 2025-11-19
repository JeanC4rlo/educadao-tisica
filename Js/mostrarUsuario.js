const VIEW_USUARIO = document.getElementById("view");

function mostrarDadosUsuario(){
    const DADOS = getUsuario();
    let stringHTML = `
    <div>
        <h1>Olá, ${DADOS.nome}</h1>
        <h2>Seus Dados:</h2>
        <p>Nome Completo: ${DADOS.nome} ${DADOS.sobrenome}</p>
        <p> ${DADOS.tipoUsuario} de Torneios</p>
        <p>Email: ${DADOS.email}</p>
        <p>Nacionalidade: ${getPaisString(DADOS.pais)}</p>

        <button onclick="window.location = 'main.html'">Voltar</button>
        <button onclick="window.location = 'index.html'">Sair</button>
    </div>`;

    VIEW_USUARIO.innerHTML = stringHTML;
}

mostrarDadosUsuario();