const ESPORTES_IMG = {
    FUTEBOL: "/images/futebol.jpeg",
    BASQUETE: "/images/basquete.jpg",
    VOLEI: "/images/volei.webp",
    FUTEBOL_AMERICANO: "/images/americano-futebol.webp",
    XADREZ: "/images/xadrez.jpg",
    CHAMPIONS: "/images/champions.png",
    BRASILEIRAO: "/images/brasileirao.png",
    CUSTOM: "/images/esportes.webp",
}

const ESPORTES_NAME = {
    FUTEBOL: "Campeonato de futebol",
    BASQUETE: "Campeonato de basquete",
    VOLEI: "Campeonato de vôlei",
    FUTEBOL_AMERICANO: "Campeonato de futebol americano",
    XADREZ: "Campeonato de xadrez",
    CHAMPIONS: "Campeonato de futebol - Liga dos Campeões",
    BRASILEIRAO: "Campeonato Brasileiro de Futebol - Série A",
    CUSTOM: "Campeonato personalizado pelo autor",
}

function getEsporteName(esporte) {
    return ESPORTES_NAME[esporte];
}

function getImgEsporte(esporte) {
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

function getAllPaises() {
    return PAISES;
}

function getPaisString(chave) {
    return PAISES[chave];
}

const VISIBILIDADE = {
    Publico: "Público 🔓",
    Privado: "Privado 🔒",
}

function getVisibilidadeName(chave) {
    return VISIBILIDADE[chave];
}
