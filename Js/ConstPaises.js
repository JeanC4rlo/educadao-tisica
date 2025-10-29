const PAISES = {
    ARG: "Argentina 🇦🇷",
    BR: "Brasil 🇧🇷",
    COL: "Colômbia 🇨🇴",
    USA: "Estados Unidos 🇺🇸",
    PT: "Portugal 🇵🇹",
    VNZ: "Venezuela 🇻🇪",
}

function getAllPaises(){
    return PAISES;
}

function getPaisString(chave){
    return PAISES[chave];
}

