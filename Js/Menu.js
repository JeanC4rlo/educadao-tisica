function redirecionarMenu(){
    window.location = "main.html";
}

function montarMenu(){
    const TELA_BOAS_VINDAS = document.getElementById("BoasVindas");
    const TELA_MEUS_TORNEIOS = document.getElementById("MeusTorneios");
    const TELA_TORNEIOS = document.getElementById("TorneiosAtivos");
    const TELA_CRIACAO = document.getElementById("Criacao");

    const usuario = getUsuario();

    let stringHtml = `
        <h1>Bem Vindo ${usuario.nome} ${usuario.sobrenome}!</h1>
        <p>🌐: ${getPaisString(usuario.pais)}</p>
    `;

    TELA_BOAS_VINDAS.innerHTML = stringHtml;
    TELA_MEUS_TORNEIOS.innerHTML = `
        <h2>👤 Meus Torneios:</h2>
        <p>Tá Vazio, O Samuel Ainda vai cuidar disso...🙃😶‍🌫️</p>
    `;

    const TORNEIOS_ATIVOS = obterTorneiosAtivos();
    stringHtml = "<h2>🔥 Torneios: </h2>";

    if(TORNEIOS_ATIVOS.length == 0){
        stringHtml += "<p>Sem torneios</p>"
    }
    else{
        TORNEIOS_ATIVOS.forEach(torneio => {
            stringHtml += `
                <div class="torneio">
                    <h3>${torneio.nome}</h3>
                    <p>👤 ${torneio.autor}</p>
                    <p>${torneio.descricao}</p>
                    <button onclick="verTorneio('${torneio.nome}')">Ver Mais</button>
                </div>
            `;
        });
    }

    TELA_TORNEIOS.innerHTML = stringHtml; 
    TELA_CRIACAO.innerHTML = `<button onclick="window.location = 'CriarTorneio.html'">Criar Novo Torneio</button>`
}

function verTorneio(nome){
    const TORNEIO = getTorneio(nome);
    const TELA_TORNEIOS = document.getElementById("TorneiosAtivos");

    
}
