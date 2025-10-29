class Torneio{
    constructor(nome, descricao, visibilidade, esporte, tipo, multV, multE, multD){
        this.nome = nome;
        this.descricao = descricao;
        this.visibilidade = visibilidade;
        this.esporte = esporte;
        this.tipo = tipo;

        this.multD = multD;
        this.multE = multE;
        this.multV = multV;

        this.confrontos = [];
        this.equipes = [];
    }

    getAllEquipes(){
        return this.equipes;
    }

    getMultiplicadorVitoria(){
        return this.multV;
    }
    
    getMultiplicadorEmpate(){
        return this.multE;
    }

    getMultiplicadorDerrota(){
        return this.multD;
    }

    getAllConfrontos(){
        return this.confrontos;
    }

    addConfronto(confronto){
        this.confrontos.push(confronto);
    }
}