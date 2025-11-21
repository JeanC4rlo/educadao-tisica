const VIEW = document.querySelector(".surface-geracao-automatica");

function loadForm(){
    
    VIEW.innerHTML = `
        <div class="formulario">
                <h2>Gerar Confrontos:</h2>

                <div class="aviso">
                    <p>
                        Aviso: Os confrontos serão gerados automaticamente sem considerar fatores externos.
                        Todas As equipes se enfrentaram pelo menos uma vez, sem repetições, caso alguma mudança seja necessária considere editar posteriormente
                        Considere Preencher todas as informações corretamente.
                    </p>
                </div>
                
                <form onsubmit="preGerarConfrontos(event)">
                    <div class="form-layer">
                        <h3>Rodadas:</h3>
                        <label class="radio">
                            <input type="radio" name="rodadas" value="com-rodadas">
                            <span class="checkmark"></span>
                            Sim
                        </label>
                        <label class="radio">
                            <input type="radio" name="rodadas" value="sem-rodadas">
                            <span class="checkmark"></span>
                            Não
                        </label>
                    </div>
                    <div class="form-layer">
                        <h3>Returno:</h3>
                        <label class="radio">
                            <input type="radio" name="turnos" value="returno">
                            <span class="checkmark"></span>
                            Sim
                        </label>
                        <label class="radio">
                            <input type="radio" name="turnos" value="turno">
                            <span class="checkmark"></span>
                            Não
                        </label>
                    </div>
                    <div class="form-layer">
                        <h3>Data de Inicio:</h3>
                        <input type="date" id="data-inicio">
                    </div>
                    <div class="form-layer">
                        <h3>Máximo de Jogos Por Dia:</h3>
                        <input type="number" id="mjpd" min=1>
                        <p>Ao atingir a quantidade máxima de jogos de um dia, os jogos serão remanejados para o dia posterior</p>
                    </div>
                    <div class="form-layer">
                        <h3>Intervalo:</h3>
                        <input type="number" id="intervalo" min=0> dias
                        <p>O intervalo entre as rodadas diz respeito a quantidade de dias que separam as rodadas.</p>
                    </div>
                    <div class="form-layer">
                        <h3>Lugar Padrão:</h3>
                        <input type="text" id="lugar-padrao"> 
                        <p>O endereço onde comumente aconteceram os jogos (Edite posteriormente)</p>
                    </div>
                    <button>Gerar</button>
                </form>
    `;
}

loadForm();

function preGerarConfrontos(event){
    event.preventDefault();

    const rodadasSelect = document.querySelector("input[name='rodadas']:checked");
    const turnosSelect = document.querySelector("input[name='turnos']:checked");
    const dataInicio = document.getElementById("data-inicio").value;
    const maxJogosPorDia = document.getElementById("mjpd").value;
    const intervalo = document.getElementById("intervalo").value;
    const endereco = document.getElementById("lugar-padrao").value;

    if(!rodadasSelect || !turnosSelect || dataInicio.trim() === "" || maxJogosPorDia.trim() === "" 
    || intervalo.trim() === "" || endereco.trim() === ""){
        abrirPopUp("Preencha corretamente todos os campos");
        return;
    }

    if(Number(maxJogosPorDia) < 1){
        abrirPopUp("É necessário ter pelo menos 1 (Um) Jogo por dia");
        return;
    }

    const TORNEIO = getTorneioTarget();
    let PG_Torneio_Id = TORNEIO.id;
    let PG_rodadas = rodadasSelect.value;              
    let PG_turnos = turnosSelect.value;                
    let PG_dataInicio = dataInicio;                    
    let PG_maxJogosPorDia = Number(maxJogosPorDia);    
    let PG_intervalo = Number(intervalo);  
    let PG_endereco =  endereco;  
    
    gerarConfrontos(PG_Torneio_Id, PG_rodadas, PG_turnos, PG_dataInicio, PG_maxJogosPorDia, PG_intervalo, PG_endereco);
    window.location.replace('main.html');
}