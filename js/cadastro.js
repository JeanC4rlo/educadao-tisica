function salvarDadosUsuarios(dados) {
    localStorage.setItem("lista-usuarios", JSON.stringify(dados));
}

function obterDadosUsuarios() {
    let lista = localStorage.getItem("lista-usuarios");
    if (!lista) {
        lista = [];
        salvarDadosUsuarios(lista);
        return lista;
    }
    return JSON.parse(lista);
}

function cadastrar(event) {
    event.preventDefault(); 
    
    const NOME = document.getElementById("nome-input").value.trim();
    const SOBRENOME = document.getElementById("sobrenome-input").value.trim();
    const RADIO = document.querySelector('input[name="nivel"]:checked');
    const TIPO_USUARIO = RADIO ? RADIO.value : "";
    const PAIS = document.getElementById("nacionalidade").value.trim();
    const EMAIL = document.getElementById("email-input").value.trim();
    const SENHA = document.getElementById("senha-input").value.trim();

    if (!NOME || !SOBRENOME || !TIPO_USUARIO || !PAIS || !EMAIL || !SENHA) {
        abrirPopUp("Preencha corretamente todos os campos!");
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
