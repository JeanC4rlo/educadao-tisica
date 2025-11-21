const ESPORTES_IMG = {
    FUTEBOL: "Imagens/futebol.jpeg",
    BASQUETE: "Imagens/basquete.jpg",
    VOLEI: "Imagens/volei.webp",
    FUTEBOLAMERICANO: "Imagens/americanoFutebol.webp",
    XADREZ: "Imagens/xadrez.jpg",
    CHAMPIONS: "Imagens/champions.png",
    BRASILEIRAO: "Imagens/brasileirao.png",
    CUSTOM: "Imagens/esportes.webp",
}

const ESPORTES_NAME = {
    FUTEBOL: "Campeonato de Futebol",
    BASQUETE: "Campeonato de Basquete",
    VOLEI: "Campeonato de Vôlei",
    FUTEBOLAMERICANO: "Campeonato de Futebol Americano",
    XADREZ: "Campeonato de Xadrez",
    CHAMPIONS: "Campeonato de Futebol - Liga dos Campeões",
    BRASILEIRAO: "Campeonato Brasileiro de Futebol - Série A",
    CUSTOM: "Campeonato Personalizado pelo Autor",
}

function getEsporteName(esporte){
    return ESPORTES_NAME[esporte];
}

function getImgEsporte(esporte){
    return ESPORTES_IMG[esporte];
}


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

const VISIBILIDADE = {
    Publico: "Público 🔓",
    Privado: "Privado 🔒",
}

function getVisibilidadeName(chave){
    return VISIBILIDADE[chave];
}