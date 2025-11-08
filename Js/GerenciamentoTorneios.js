
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

function createTorneio(autorP, nomeP, descricaoP, visibilidadeP, esporteP, tipoP, placarConfigP){
    
    const TORNEIOS_ATIVOS = obterTorneiosAtivos();
    let id = 0;

    if(TORNEIOS_ATIVOS.length != 0){
        console.log(TORNEIOS_ATIVOS.length);

        const ULTIMO = TORNEIOS_ATIVOS[TORNEIOS_ATIVOS.length - 1];
        console.log(ULTIMO);

        if(ULTIMO.id != null || ULTIMO.id != undefined){
            console.log(ULTIMO.id);
            id = ULTIMO.id + 1;
            console.log(id);
        }
    }
        
    let DadosNovoTorneio = {
        id: id,
        seguidores: Math.floor(Math.random() * (1500 - 1 + 1) + 1),
        autor: autorP,
        nome: nomeP,
        descricao: descricaoP,
        visibilidade: visibilidadeP,
        esporte: esporteP,
        tipoCampeonato: tipoP,
        placarConfig: placarConfigP,
        confrontos: [],
        participantes: [],
    }

    
    TORNEIOS_ATIVOS.push(DadosNovoTorneio);
    salvarTorneiosAtivos(TORNEIOS_ATIVOS);
    
}

function getTorneio(nome) {
    const TORNEIOS_ATIVOS = obterTorneiosAtivos();

    for (let torneio of TORNEIOS_ATIVOS) {
        if (torneio.nome === nome) {
            return torneio;
        }
    }
    return null;
}

function getTorneioById(id) {
    const TORNEIOS_ATIVOS = obterTorneiosAtivos();

    for (let torneio of TORNEIOS_ATIVOS) {
        if (torneio.id === id) {
            return torneio;
        }
    }
    return null;
}
