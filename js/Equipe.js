class Equipe{
    constructor(nome, logo, maxAtletas, modalidade){
        this.nome = nome;
        this.logo = logo;
        this.maxAtletas = maxAtletas;
        this.modalidade = modalidade;

        this.qntAtletas = 0;
        this.atletas = [];
    }

    addAtleta(atleta){
        if(this.qntAtletas < this.maxAtletas){
            this.atletas.push(atleta);
            this.qntAtletas ++;
        } else {
            console.log("Erro de tamanho de time");
        }
    }

    getNome(){
        return this.nome;
    }

    getLogo(){
        return this.logo;
    }

    getMaxAtletas(){
        return this.maxAtletas;
    }

    getQntAtletas(){
        return this.qntAtletas;
    }

    getModalidade(){
        return this.modalidade;
    }
}