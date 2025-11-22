const SECAO_CRIACAO = document.getElementById("criar-torneio");

function IniciarSecaoCriacao(){
    SECAO_CRIACAO.innerHTML = formularioCriacaoTorneioHTML();
}

function gerarSets(sets, value){
    let string = "";
    for(let i =0; i < sets; i ++){
        string += `
            <tr>
                <th>${value}</th>
                <th>-</th>
                <th>${value}</th>
            </tr>
        `;
    }

    return string;
}

function placarUpdate(){
    const TABLE = document.getElementById("placar-config"); 
    const INPUT_SETS = document.getElementById("qnt-sets"); 
    const INPUT_PTS = document.getElementById("pts-value");

    function update(){
        let qntSets = parseInt(INPUT_SETS.value, 10);
        if (isNaN(qntSets) || qntSets < 0) qntSets = 0;
        let pts = INPUT_PTS.value;

        let html = `
            <tr>
                <th>Lado A</th>
                <th>Versus</th>
                <th>Lado B</th>
            </tr>
        `;
        html += gerarSets(qntSets, pts);
        TABLE.innerHTML = html;
    }

    INPUT_SETS.addEventListener("input", update);
    INPUT_PTS.addEventListener("input", update);

    update();
}

IniciarSecaoCriacao();
placarUpdate();

function cadastrarTorneio(event) {
    event.preventDefault(); 

    const NOME = document.getElementById("nome-torneio").value.trim();
    const DESCRICAO = document.getElementById("descricao").value.trim();

    const VISIBILIDADE = document.querySelector('input[name="visibilidade"]:checked');
    const TIPO_VISAO = VISIBILIDADE ? VISIBILIDADE.value : "";

    const ESPORTE = document.getElementById("esporte").value.trim();

    const CAMPEONATO = document.querySelector('input[name="estilo"]:checked');
    const TIPO_CAMPEONATO = CAMPEONATO ? CAMPEONATO.value : "";

    const QNT_SETS = document.getElementById("qnt-sets").value.trim();
    const PTS_VALUE = document.getElementById("pts-value").value.trim();

    if (!NOME || !DESCRICAO || !VISIBILIDADE || !TIPO_VISAO || !ESPORTE || !CAMPEONATO || !TIPO_CAMPEONATO ||!QNT_SETS ||!PTS_VALUE) {
        abrirPopUp("Preencha corretamente todos os campos!");
        return;
    }

    const AUTOR = getUsuario().nome;
    const PLACAR = {
        qntSets: QNT_SETS,
    }

    createTorneio(AUTOR, NOME, DESCRICAO, TIPO_VISAO, ESPORTE, TIPO_CAMPEONATO, PLACAR);
    abrirPopUp(`Torneio: ${NOME} foi criado com sucesso! Agora cadastre equipes e jogos para o seu torneio!`);
    
    setTimeout(()=>{window.location.replace('main.html')}, 3000);
}