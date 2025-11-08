function lerAtletas(){
    const campos = document.querySelectorAll('#listaAtletas input');
    const atletas = [];

    campos.forEach(input => {
        atletas.push(input.value.trim());
    });

    return atletas;
}

function addCompetidor(event){
    event.preventDefault();

    console.log("oi?");
    const NOME = document.getElementById("nomeCompetidor").value.trim();
    const TIPO = document.querySelector('input[name="tipoCompetidor"]:checked');
    const TIPO_COMPETIDOR = TIPO ? TIPO.value : "";

    if (!NOME || !TIPO_COMPETIDOR) {
        abrirPopUp("Preencha Corretamente Todos os Campos!");
        return;
    }
    
    let Competidor = {};

    if(TIPO_COMPETIDOR === "solo"){
        Competidor = {
            nome: NOME,
            atletas: [NOME],
            qntAtletas: 1,
            tipo: "Jogador Solo",
        }
    }
    else{
        const atletas = lerAtletas();

        Competidor = {
            nome: NOME,
            atletas: atletas,
            qntAtletas: atletas.length,
            tipo: "Equipe de Atletas",
        }
    }

    const TORNEIO = getTorneioTarget();
    const id = TORNEIO.id;
    const TORNEIOS = obterTorneiosAtivos();

    TORNEIOS.forEach(torneio => {
        if(torneio.id == id){
            torneio.participantes.push(Competidor);
        }
    });

    salvarTorneiosAtivos(TORNEIOS);
}