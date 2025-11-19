const SECAO_VIEW = document.getElementById("view");


function getTorneioTarget(){
    let  torneioAlvo = localStorage.getItem("torneioAlvo");

    if(torneioAlvo == null || torneioAlvo == undefined){
        torneioAlvo == null;
    }

    return JSON.parse(torneioAlvo);
}

function loadSecaoMenu(id){
    const botoes = [
        { texto: "Principal", acao: "mostrarTorneio()" },
        { texto: "Confrontos", acao: "mostrarConfrontos()" },
        { texto: "Competidores", acao: "mostrarCompetidores()" }
    ];

    SECAO_MENU.innerHTML = `
        <div class="menu-options">
            ${botoes.map((botao, index) => {
                const isAtivo = (index + 1) === id ? 'class="option-target"' : '';
                return `<button ${isAtivo} onclick="${botao.acao}">${botao.texto}</button>`;
            }).join("")}
        </div>
    `;
}

