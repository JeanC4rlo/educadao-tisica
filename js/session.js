function setUsuario(usuario){
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

function getUsuario(){
    let usuario = localStorage.getItem("usuario");

    if(usuario == null || usuario == undefined){
        usuario == null;
    }

    return JSON.parse(usuario);
}

function logout(){
    let usuario = {};

    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.replace('index.html');
}
