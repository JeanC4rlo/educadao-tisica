function abrirPopUp(mensagem) {
    const POPUP = document.getElementById("popup");

    let stringHtml = 
    `
    <h1>Aviso:</h1>
    <p>${mensagem}</p>
    <button onclick="fecharPopUp()">Fechar</button>
    `;
    POPUP.innerHTML = stringHtml;
    POPUP.style.display = "flex";

    setTimeout(() => {
        POPUP.style.opacity = 1;
    }, 100);
}

function fecharPopUp() {
    const POPUP = document.getElementById("popup");
    POPUP.style.opacity = 0;

    setTimeout(() => {
        POPUP.style.display = "none";
        POPUP.innerHTML = "";
    }, 500);
}
