function redirecionarMenu() {
    window.location.replace('main.html');
}

function montarMenu() {
    const TELA_BOAS_VINDAS = document.querySelector(".user-bar");
    const TELA_MEUS_TORNEIOS = document.querySelector(".meus-torneios");
    const TELA_TORNEIOS = document.querySelector(".torneios-ativos");
    const TELA_CRIACAO = document.querySelector(".secao-criacao");

    const USUARIO = getUsuario();

    if (USUARIO == null || USUARIO == undefined || Object.keys(USUARIO).length === 0) {
        window.location.replace('index.html');
    }

    let stringHtml = barraUsuarioHTML(USUARIO.nome, USUARIO.sobrenome);
    TELA_BOAS_VINDAS.innerHTML = stringHtml;

    const TORNEIOS_ATIVOS = obterTorneiosAtivos();

    if (USUARIO.tipoUsuario == "Organizador") {
        stringHtml = "<h2>Meus Torneios:</h2>";
        let vazio = true;
        TORNEIOS_ATIVOS.forEach(torneio => {
            if (torneio.autor == USUARIO.nome) {
                vazio = false;
                stringHtml += meuTorneioHTML(torneio.nome, torneio.esporte, torneio.visibilidade, torneio.descricao, torneio.id);
            }
        })
        if (vazio) {
            stringHtml += "<p>Você não possui nenhum torneio!</p>";
        }
        TELA_MEUS_TORNEIOS.innerHTML = stringHtml;
    }
    else {
        TELA_MEUS_TORNEIOS.style.display = "none";
    }

    stringHtml = "<h2>Torneios Ativos: </h2>";

    if (TORNEIOS_ATIVOS.length == 0) {
        stringHtml += "<p>Sem torneios</p>";
    }
    else {
        TORNEIOS_ATIVOS.forEach(torneio => {
            if (torneio.visibilidade != "Privado") {
                stringHtml += torneioHTML(torneio.nome, torneio.autor, torneio.esporte, torneio.descricao, torneio.id);
            }
        });
    }

    TELA_TORNEIOS.innerHTML = stringHtml;
    if (USUARIO.tipoUsuario == "Organizador") {
        TELA_CRIACAO.innerHTML = `<button onclick="window.location = 'CriarTorneio.html'">Criar Novo Torneio</button>`;
    }
}

function torneioTarget(torneio) {
    localStorage.setItem("torneioAlvo", JSON.stringify(torneio));
}

function verTorneio(id) {
    const TORNEIO = getTorneioById(id);
    torneioTarget(TORNEIO);
    window.location = "torneio.html";
}

function editarTorneio(id) {
    const TORNEIO = getTorneioById(id);
    torneioTarget(TORNEIO);
    window.location = "EditarTorneio.html";
}

montarMenu();