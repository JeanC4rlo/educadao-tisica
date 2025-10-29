class Confronto{
    constructor(ladoA, ladoB, data, placar){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.data = data;
        this.placar = placar;
        this.status = "A ocorrer";
        this.vencedor = null;
    }

    getNomeA(){
        return this.ladoA.getNome();
    }
    getNomeB(){
        return this.ladoB.getNome();
    }

    getVencedor(){
        return this.vencedor;
    }

    getPlacar(){
        return this.placar;
    }

    getStatus(){
        return this.status;
    }

    setPlacar(vetorResultadosA, vetorResultadosB){
        this.placar.setValues(vetorResultadosA, vetorResultadosB);
        this.vencedor = this.placar.vencedorSet();
        this.status = "Jogo Encerrado";
    }
}