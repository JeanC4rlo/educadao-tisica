
function salvarTorneiosAtivos(torneios) {
    localStorage.setItem("LISTA_TORNEIOS", JSON.stringify(torneios));
}

function obterTorneiosAtivos() {
    let lista = localStorage.getItem("LISTA_TORNEIOS");
    if (!lista) {
        lista = [];
        salvarTorneiosAtivos(lista);
        return lista;
    }
    return JSON.parse(lista);
}


function setUsuario(usuario){
    localStorage.setItem("UsuarioAtivo", JSON.stringify(usuario));
}

function createTorneio(autorP, nomeP, descricaoP, visibilidadeP, esporteP, placarP){
    let DadosNovoTorneio = {
        autor: autorP,
        nome: nomeP,
        descricao: descricaoP,
        visibilidade: visibilidadeP,
        esporte: esporteP,
        placar: placarP,
    }

    const TORNEIOS_ATIVOS = obterTorneiosAtivos();
    TORNEIOS_ATIVOS.push(DadosNovoTorneio);
    salvarTorneiosAtivos(TORNEIOS_ATIVOS);
}

function getTorneio(nome){
    const TORNEIOS_ATIVOS = obterTorneiosAtivos();

    TORNEIOS_ATIVOS.forEach(torneio => {
        if(torneio.nome === nome){
            return torneio;
        }
    });
}