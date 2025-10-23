class Logo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });

        shadow.innerHTML = `
            <style>
                h1, p {
                    font-family: Inter;
                    margin: 0;
                }
                h1 {
                    font-size: 40pt;
                }
                p {
                    text-transform: uppercase;
                    font-size: 14pt
                }
                :host {
                    display: flex;
                    flex-direction: column;
                }
            </style>

            <h1>SVS</h1>
            <p>Sistema de Gerenciamento de Torneios</p>
        `;
    }
}

customElements.define('custom-logo', Logo);