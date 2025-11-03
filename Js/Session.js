
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

