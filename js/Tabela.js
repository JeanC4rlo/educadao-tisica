class Tabela {
    constructor(torneio) {
        this.torneio = torneio;
    }

    gerarTabela() {
        let dicEquipesXPontos = {};

        let confrontos = this.torneio.getAllConfrontos();
        let equipes = this.torneio.getAllEquipes();

        let multD = this.torneio.getMultiplicadorDerrota();
        let multE = this.torneio.getMultiplicadorEmpate();
        let multV = this.torneio.getMultiplicadorVitoria();

        equipes.forEach(equipe => {
            let chave = equipe.getNome();
            dicEquipesXPontos[chave] = 0;
        });

        confrontos.forEach(confronto => {
            let chaveA = confronto.getNomeA();
            let chaveB = confronto.getNomeB();

            if (confronto.getStatus() === "Jogo encerrado") {
                if (confronto.getVencedor() === 0) {
                    dicEquipesXPontos[chaveA] += multV;
                    dicEquipesXPontos[chaveB] += multD;
                } else if (confronto.getVencedor() === 1) {
                    dicEquipesXPontos[chaveA] += multD;
                    dicEquipesXPontos[chaveB] += multV;
                } else if (confronto.getVencedor() === -1) {
                    dicEquipesXPontos[chaveA] += multE;
                    dicEquipesXPontos[chaveB] += multE;
                }
            }
        });

        let equipesOrdenadas = Object.entries(dicEquipesXPontos).sort((a, b) => b[1] - a[1]);

        let tabelaHTML = 
        `
        <table border="1" style="border-collapse: collapse; text-align: center;">
            <tr>
                <th>Posição</th>
                <th>Equipe</th>
                <th>Pontos</th>
            </tr>
        `;

        equipesOrdenadas.forEach(([nome, pontos], i) => {
            tabelaHTML += 
            `
            <tr>
                <td>${i + 1}</td>
                <td>${nome}</td>
                <td>${pontos}</td>
            </tr>
            `;
        });

        tabelaHTML += `</table>`;

        return tabelaHTML;
    }
}
