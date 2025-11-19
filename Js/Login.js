function login(){
    const USUARIO = document.getElementById("usuarioInput").value;
    const SENHA = document.getElementById("senhaInput").value;

    const TELA = document.getElementById("loginSection");

    if(USUARIO === ""){
        abrirPopUp("Preencha corretamente seu nome de Usuario!");
    } else if(SENHA === ""){
        abrirPopUp("Preencha o Campo de Senha!");
    } else {
        let ListaUsuariosAtual = obterDadosUsuarios();
        let encontrado = false;
        
        ListaUsuariosAtual.forEach(usuario => {
            if(usuario.email === USUARIO){
                encontrado = true;
                if(usuario.senha === SENHA){
                    setUsuario(usuario);
                    redirecionarMenu();
                }
                else{
                    abrirPopUp("Senha Incorreta!");
                }
            }
        });  
        
        if(!encontrado){
            abrirPopUp("Usuário ainda não registrado! Cadastre-se!");
        }
    }
}