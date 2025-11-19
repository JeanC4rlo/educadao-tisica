function redirecionarMenu(){
    window.location.replace('main.html');
}

function montarMenu(){
    const TELA_BOAS_VINDAS = document.getElementById("BoasVindas");
    const TELA_MEUS_TORNEIOS = document.getElementById("MeusTorneios");
    const TELA_TORNEIOS = document.getElementById("TorneiosAtivos");
    const TELA_CRIACAO = document.getElementById("Criacao");

    const usuario = getUsuario();

    let stringHtml = `
        <div onclick="window.location.replace('mostrarUsuario.html')" class="avatar">${usuario.nome.slice(0, 2)}</div>
        <h1>Bem Vindo ${usuario.nome} ${usuario.sobrenome}!</h1>
    `;

    const TORNEIOS_ATIVOS = obterTorneiosAtivos();

    TELA_BOAS_VINDAS.innerHTML = stringHtml;
    if(usuario.tipoUsuario == "Organizador"){
        stringHtml = "<h2>Meus Torneios:</h2>";
        let vazio = true;
        TORNEIOS_ATIVOS.forEach(torneio =>{
            if(torneio.autor == usuario.nome){
                vazio = false;
                stringHtml += `
                    <div class="torneio">
                        <img src="${getImgEsporte(torneio.esporte)}">
                        <div class="torneio-dados">
                            <h3>${torneio.nome}</h3>
                            <p>Esporte: <b>${torneio.esporte}</b> | Visibilidade: <b>${torneio.visibilidade}</b></p>
                            <p>${torneio.descricao.slice(0, 50)}...</p>
                            <button onclick="verTorneio('${torneio.nome}')">Ver Mais</button>
                            <button onclick="editarTorneio('${torneio.nome}')">Editar</button>
                        </div>
                    </div>
                `;
            }
        })
        if(vazio){
            stringHtml += "<p>Você não possui nenhum torneio!</p>";
        }
        TELA_MEUS_TORNEIOS.innerHTML = stringHtml;
    }
    else{
        TELA_MEUS_TORNEIOS.style.display = "none";
    }
    
    stringHtml = "<h2>Torneios Ativos: </h2>";

    if(TORNEIOS_ATIVOS.length == 0){
        stringHtml += "<p>Sem torneios</p>"
    }
    else{
        TORNEIOS_ATIVOS.forEach(torneio => {
            if(torneio.visibilidade != "Privado"){
                stringHtml += `
                    <div class="torneio">
                        <img src="${getImgEsporte(torneio.esporte)}">
                        <div class="torneio-dados">
                            <h3>${torneio.nome}</h3>
                            <p>Autor: @${torneio.autor}</p>
                            <p>${torneio.descricao.slice(0, 50)}...</p>
                            <button onclick="verTorneio('${torneio.nome}')">Ver Mais</button>
                        </div>
                    </div>
                `;
            }
        });
    }

    TELA_TORNEIOS.innerHTML = stringHtml;
    if(usuario.tipoUsuario == "Organizador"){
        TELA_CRIACAO.innerHTML = `<button onclick="window.location = 'CriarTorneio.html'">Criar Novo Torneio</button>`;
    }
}

function torneioTarget(torneio){
    localStorage.setItem("torneioAlvo", JSON.stringify(torneio));
} 

function verTorneio(nome){
    const TORNEIO = getTorneio(nome);
    torneioTarget(TORNEIO);
    window.location = "torneio.html";
}

function editarTorneio(nome){
    const TORNEIO = getTorneio(nome);
    torneioTarget(TORNEIO);
    window.location = "EditarTorneio.html";
}