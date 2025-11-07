const SECAO_MENU = document.getElementById("menu");

function loadSecaoMenu(id){
    const botoes = [
        { texto: "Principal", acao: "mostrarTorneio()" },
        { texto: "Confrontos", acao: "mostrarConfrontos()" },
        { texto: "Competidores", acao: "mostrarCompetidores()" }
    ];

    SECAO_MENU.innerHTML = `
        <div class="menu-options">
            ${botoes.map((botao, index) => {
                const isAtivo = (index + 1) === id ? 'id="option-target"' : '';
                return `<button ${isAtivo} onclick="${botao.acao}">${botao.texto}</button>`;
            }).join("")}
        </div>
    `;
}

function mostrarConfrontos(){
    const TORNEIO = getTorneioTarget();
    let stringHtml = "<h1>Confrontos:</h1>";

    if(TORNEIO.confrontos.length == 0){
        stringHtml += `<p><b>${TORNEIO.nome}</b> ainda não possui confrontos definidos.</p>`;
    } 

    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(2);
}

function mostrarCompetidores(){
    const TORNEIO = getTorneioTarget();
    let stringHtml = "<h1>Competidores:</h1>";

    if(TORNEIO.participantes.length == 0){
        stringHtml += `<p><b>${TORNEIO.nome}</b> ainda não possui competidores definidos.</p>`;
    } else{

        const Array = TORNEIO.participantes.sort();
        stringHtml += `
                    <table id="tabela-participantes">
                    <tr>
                        <th> - </th>
                        <th> Participantes: </th>
                        <th> Tipo: </th>
                    </tr>
            `;

        Array.participantes.forEach(participante => {
            stringHtml += `
                    <tr>
                        <th> - </th>
                        <th> ${participante.nome} </th>
                        <th> ${participante.tipo} </th>
                    </tr>
            `;
        });

        stringHtml += "</table>";
    }

    SECAO_VIEW.innerHTML = stringHtml;
    loadSecaoMenu(3);
}




loadSecaoMenu(1);