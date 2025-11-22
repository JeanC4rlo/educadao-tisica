function meuTorneioHTML(nome, esporte, visibilidade, descricao, id) {
    const STRING =
    `
    <div class="torneio">
        <img class="torneio-imagem" src="${getImgEsporte(esporte)}">
        <div class="torneio-dados">
            <h3 class="torneio-titulo">${nome}</h3>
            <p class="torneio-dado">${getEsporteName(esporte)}</p>
            <p class="torneio-dado">${getVisibilidadeName(visibilidade)}</p>
            <p class="torneio-descricao">${descricao.slice(0, 50)}...</p>
            <button class="torneio-botao" onclick="verTorneio('${id}')">Ver Mais</button>
            <button class="torneio-botao" onclick="editarTorneio('${id}')">Editar</button>
        </div>
    </div>
    `;

    return STRING;
}

function torneioHTML(nome, autor, esporte, descricao, id) {
    const STRING =
    `
    <div class="torneio">
        <img class="torneio-imagem" src="${getImgEsporte(esporte)}">
        <div class="torneio-dados">
            <h3 class="torneio-titulo">${nome}</h3>
            <p class="torneio-autor">Autor: @${autor}</p>
            <p class="torneio-descricao">${descricao.slice(0, 50)}...</p>
            <button class="torneio-botao" onclick="verTorneio('${id}')">Ver Mais</button>
        </div>
    </div>
    `;

    return STRING;
}

function barraUsuarioHTML(nome, sobrenome) {
    const STRING =
    `
    <div onclick="window.location.replace('mostrar-usuario.html')" class="avatar">${nome.slice(0, 2)}</div>
    <h1>Bem Vindo ${nome} ${sobrenome}!</h1>
    `;

    return STRING;
}

function TorneioCompleteViewHTML(TORNEIO) {
    const STRING =
    `
    <div class="show-torneio">
        <img class="imagem-torneio" src="${getImgEsporte(TORNEIO.esporte)}">
        <div class="dados-torneio">
            <h2>${TORNEIO.nome}</h2>
            <p>Autor: @${TORNEIO.autor}</p>
            <p>Descrição: ${TORNEIO.descricao}</p>

            <h3>Mais Informações:</h3>
            <p>Esporte: ${TORNEIO.esporte}</p>
            <p>Campeonato: ${TORNEIO.tipoCampeonato}</p>
            <p class="numero-de-seguidores">💫 Hype: ${TORNEIO.seguidores}</p>
            <button class="botao-seguir" onclick="ficSeguidores(${TORNEIO.seguidores})">Hypar</button>
        </div>
    </div>
    `;

    return STRING;
}

function confrontoHTML(confronto) {
    const STRING =
    `
    <div class="confronto-surface">
        <p>Confronto ${confronto.status}</p>
        <p>Data: ${confronto.data} | local: ${confronto.lugar}</p>
        <div class="confronto-table">
            <div class="confronto-lado">${confronto.ladoA}</div>
            <div class="confronto-result">${confronto.resultadoA}</div>
            <div class="confronto-mid"> VS </div>
            <div class="confronto-result">${confronto.resultadoB}</div>
            <div class="confronto-lado">${confronto.ladoB}</div>
        </div>
    </div>
    `;

    return STRING;
}

function formularioCriacaoTorneioHTML() {
    const STRING =
    `
    <div class="formulario-surface">
        <h1>Criar Torneio:</h1>
        <form onsubmit="cadastrarTorneio(event)">
            <div class="formulario-section">
                <h2>Dados Iniciais:</h2>
                <input class="input-texto" id="nome-torneio" type="text" placeholder="Nome do torneio">
                <textarea class="text-area" id="descricao" rows="1" cols="30" placeholder="Descrição do torneio..."></textarea>
            </div>             
            
            <div class="formulario-section">
                <div>
                    <h2>Tipo:</h2>
                    
                    <label class="radio">
                        <input type="radio" name="estilo" value="Eliminatorias"> 
                        <span class="checkmark"></span>
                        Eliminatórias
                    </label>

                    <label class="radio">
                        <input type="radio" name="estilo" value="Liga"> 
                        <span class="checkmark"></span>
                        Pontos corridos
                    </label>   
                </div>  

                <div>
                    <h2>Visibilidade:</h2>

                    <label class="radio">
                        <input type="radio" name="visibilidade" value="Publico">
                        <span class="checkmark"></span>
                        Público
                    </label>

                    <label class="radio">
                        <input type="radio" name="visibilidade" value="Privado"> 
                        <span class="checkmark"></span>
                        Privado
                    </label>   
                </div> 
            </div>
                        

            <div class="formulario-section">
                <h2>Seu Esporte:</h2>
                <select class="select" id="esporte" required>
                    <option class="select-option" value="FUTEBOL" selected>Futebol</option>
                    <option class="select-option" value="BASQUETE">Basquete</option>
                    <option class="select-option" value="VOLEI">Volei</option>
                    <option class="select-option" value="FUTEBOL_AMERICANO">Futebol Amereicano</option>
                    <option class="select-option" value="XADREZ">Xadrez</option>
                    <option class="select-option" value="CUSTOM">Personalizado...</option>
                </select>
            </div>

            <div class="formulario-section">
                <h2>Configurar tabela:</h2>
                    
                <table id="placar-config">
                    <tr>
                        <th>Lado A</th>
                        <th>Versus</th>
                        <th>Lado B</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>-</th>
                        <th>1</th>
                    </tr>
                </table>
            </div>

            <div class="formulario-section">
                <h2>Quantidade de sets:</h2>
                <input class="input-number" type="number" min="1" id="qnt-sets" value="1">

                <h2>Valor dos pontos:</h2>
                <input class="input-number" type="number" min="1" id="pts-value" value="1"> 
            </div>

            <button class="submit-button" type="submit">CRIAR TORNEIO!</button>
        </form>
    </div>
    `;

    return STRING;
}
