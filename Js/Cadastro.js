function salvarDadosUsuarios(dados) {
    localStorage.setItem("Lista_Usuarios", JSON.stringify(dados));
}

function obterDadosUsuarios() {
    let lista = localStorage.getItem("Lista_Usuarios");
    if (!lista) {
        lista = [];
        salvarDadosUsuarios(lista);
        return lista;
    }
    return JSON.parse(lista);
}

function cadastrar(event) {
    event.preventDefault(); 
    
    const NOME = document.getElementById("nomeInput").value.trim();
    const SOBRENOME = document.getElementById("sobrenomeInput").value.trim();
    const RADIO = document.querySelector('input[name="nivel"]:checked');
    const TIPO_USUARIO = RADIO ? RADIO.value : "";
    const PAIS = document.getElementById("nacionalidade").value.trim();
    const EMAIL = document.getElementById("emailInput").value.trim();
    const SENHA = document.getElementById("senhaInput").value.trim();

    if (!NOME || !SOBRENOME || !TIPO_USUARIO || !PAIS || !EMAIL || !SENHA) {
        abrirPopUp("Preencha Corretamente Todos os Campos!");
        return;
    }

    const novoUsuario = { 
        nome: NOME, 
        sobrenome: SOBRENOME, 
        tipoUsuario: TIPO_USUARIO, 
        pais: PAIS, 
        email: EMAIL, 
        senha: SENHA 
    };

    const listaUsuarios = obterDadosUsuarios();
    listaUsuarios.push(novoUsuario);
    salvarDadosUsuarios(listaUsuarios);

    abrirPopUp("Você foi cadastrado com sucesso!");
}
