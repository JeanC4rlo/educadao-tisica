
function setUsuario(usuario){
    localStorage.setItem("UsuarioAtivo", JSON.stringify(usuario));
}

function getUsuario(){
    let  usuario = localStorage.getItem("UsuarioAtivo");
    console.log(usuario);

    if(usuario == null || usuario == undefined){
        usuario == null;
    }

    return JSON.parse(usuario);
}