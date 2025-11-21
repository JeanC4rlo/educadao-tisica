
function setUsuario(usuario){
    localStorage.setItem("UsuarioAtivo", JSON.stringify(usuario));
}

function getUsuario(){
    let  usuario = localStorage.getItem("UsuarioAtivo");

    if(usuario == null || usuario == undefined){
        usuario == null;
    }

    return JSON.parse(usuario);
}

function logout(){
    let usuario = {};

    localStorage.setItem("UsuarioAtivo", JSON.stringify(usuario));
    window.location.replace('index.html');
}

