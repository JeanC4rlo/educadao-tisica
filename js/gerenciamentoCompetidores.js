function lerAtletas() {
    const campos = document.querySelectorAll('#lista-atletas input');
    const atletas = [];

    campos.forEach(input => {
        atletas.push(input.value.trim());
    });

    return atletas;
}

function addCompetidor(event) {
    event.preventDefault();

    const NOME = document.getElementById("nome-competidor").value.trim();
    const TIPO = document.querySelector('input[name="tipo-competidor"]:checked');
    const TIPO_COMPETIDOR = TIPO ? TIPO.value : "";

    if (!NOME || !TIPO_COMPETIDOR) {
        abrirPopUp("Preencha corretamente todos os campos!");
        return;
    }

    let Competidor = {};

    if (TIPO_COMPETIDOR === "solo") {
        Competidor = {
            nome: NOME,
            atletas: [NOME],
            qntAtletas: 1,
            tipo: "Jogador solo",
        }
    }
    else {
        const atletas = lerAtletas();

        Competidor = {
            nome: NOME,
            atletas: atletas,
            qntAtletas: atletas.length,
            tipo: "Equipe de atletas",
        }
    }

    const TORNEIO = getTorneioTarget();
    const id = TORNEIO.id;
    const TORNEIOS = obterTorneiosAtivos();

    TORNEIOS.forEach(torneio => {
        if (torneio.id == id) {
            torneio.participantes.push(Competidor);
        }
    });

    salvarTorneiosAtivos(TORNEIOS);
    endOfEvent();
}

function addCompetidorBASIC(ID_TORNEIO, Competidor) {
    const TORNEIOS = obterTorneiosAtivos();

    TORNEIOS.forEach(torneio => {
        if (torneio.id == ID_TORNEIO) {
            torneio.participantes.push(Competidor);
        }
    });

    salvarTorneiosAtivos(TORNEIOS);
}

function endOfEvent() {
    abrirPopUp("Adicionado com sucesso!");
    setTimeout(() => { window.location.reload(); }, 1000);
}
