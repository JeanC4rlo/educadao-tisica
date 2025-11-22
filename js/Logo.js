class Logo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });

        shadow.innerHTML = 
        `
        <style>
            h1, p {
                font-family: Inter;
                margin: 0;
            }
            h1 {
                font-size: 40pt;
                color: var(--main);
                font-weight: 800;
            }
            p {
                text-transform: uppercase;
                font-size: 14pt;
                font-weight: 500;
            }
            img {
                border-radius: 10px;
                margin-right: 12px;
            }
            :host {
                display: flex;
                align-items: center;
                user-select: none;
                cursor: pointer;
            }
            :host .logo-text {
                display: flex;
                flex-direction: column;
                gap: 0;
            }
        </style>

        <img src="/favicon.ico">
        <div class="logo-text">
            <h1>SVS</h1>
            <p>Sistema de Gerenciamento de Torneios</p>
        </div>
        `;

        setTimeout(() => {
            const img = shadow.querySelector('img');
            const logoText = shadow.querySelector('.logo-text');
            
            if (img && logoText) {
                const logoTextHeight = logoText.getBoundingClientRect().height;
                img.style.height = `${logoTextHeight}px`;
                img.style.width = 'auto';
            }
        }, 0);

        this.onclick = () => {
            window.location.href = "/index.html";
        }
    }
}

customElements.define('custom-logo', Logo);