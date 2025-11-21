class Placar{
    constructor(qntSets){
        this.qntSets = qntSets;
        this.definido = false;
        this.ladoA = [];
        this.ladoB = [];
    }

    setValues(vetorResultadosA, vetorResultadosB){
        for(let i = 0; i < this.qntSets; i++){
            this.ladoA[i] = vetorResultadosA[i];
            this.ladoB[i] = vetorResultadosB[i];
        }
        this.definido = true;
    }

    //por enquanto <ul>
    toString(){
        if(this.definido){
            let string = `<ul>`;
            for(let i = 0; i < this.qntSets; i++){
                string += `<li>${this.ladoA[i]} X ${this.ladoB[i]}</li>`;
            }
            string += `</ul>`;

            return string;
        }
    }

    vencedorSet(){
        let setsA = 0;
        let setsB = 0;

        if(this.definido){
            for(let i = 0; i < this.qntSets; i++){
                if(this.ladoA[i] > this.ladoB[i]){
                    setsA += 1;
                }
                else if(this.ladoB[i] > this.ladoA[i]) {
                    setsB += 1;
                }
            }

            if(setsA > setsB){
                return 0;
            } else if(setsA < setsB) {
                return 1; 
            } else {
                return -1;
            }
        }
    }
}
