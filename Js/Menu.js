function redirecionarMenu(){
    window.location = "main.html";

}

function montarMenu(){
    const TELA_BOAS_VINDAS = document.getElementById("BoasVindas");
    const TELA_MEUS_TORNEIOS = document.getElementById("MeusTorneios");
    const TELA_CRIACAO = document.getElementById("Criacao");

    const usuario = getUsuario();
    console.log(usuario);

    let stringHtml = `
        <h1>Bem Vindo ${usuario.nome} ${usuario.sobrenome}!</h1>
        <p>🌐: ${getPaisString(usuario.pais)}</p>
    `;

    TELA_BOAS_VINDAS.innerHTML = stringHtml;
    TELA_MEUS_TORNEIOS.innerHTML = `
        <h2>Meus Torneios:</h2>
        <p>Tá Vazio, O Samuel Ainda vai cuidar disso...🙃😶‍🌫️</p>
    `;

    TELA_CRIACAO.innerHTML = `<button>Criar Novo Torneio</button>`
}