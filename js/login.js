function login() {
    const USUARIO = document.getElementById("usuario-input").value;
    const SENHA = document.getElementById("senha-input").value;

    if (USUARIO === "") {
        abrirPopUp("Preencha corretamente seu nome de usuário!");
    } else if (SENHA === "") {
        abrirPopUp("Preencha o campo de senha!");
    } else {
        let ListaUsuariosAtual = obterDadosUsuarios();
        let encontrado = false;

        ListaUsuariosAtual.forEach(usuario => {
            if (usuario.email === USUARIO) {
                encontrado = true;
                if (usuario.senha === SENHA) {
                    setUsuario(usuario);
                    window.location.replace('main.html');
                }
                else {
                    abrirPopUp("Senha incorreta!");
                }
            }
        });

        if (!encontrado) {
            abrirPopUp("Usuário ainda não registrado! Cadastre-se!");
        }
    }
}