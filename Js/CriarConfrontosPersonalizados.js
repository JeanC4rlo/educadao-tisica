const VIEW = document.querySelector(".surface-geracao-automatica");

function loadForm(){
    VIEW.innerHTML = `
        <div class="formulario addCompetidor">
                <h2>Gerar Confrontos:</h2>
                <p>* Os confrontos são gerados como base no nosso modelo ruinzao</p>
                
                <form onsubmit="oi(event)">
                    <div>
                        <h3>Rodadas:</h3>
                        <label class="radio">
                            <input type="radio" name="turnos" value="com-rodadas">
                            <span class="checkmark"></span>
                            Sim
                        </label>
                        <label class="radio">
                            <input type="radio" name="turnos" value="sem-rodadas">
                            <span class="checkmark"></span>
                            Não
                        </label>
                    </div>
                    <div>
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
                    <div>
                        <h3>Data de Inicio:</h3>
                        <input type="date" id="data-inicio">
                    </div>
                    <div>
                        <h3>Máximo de Jogos Por Dia:</h3>
                        <input type="number" id="mjpd">
                        <p>O máximo de jogos por dia é o máximo de jogos por dia</p>
                    </div>
                    <div>
                        <h3>Intervalo:</h3>
                        <input type="number" id="intervalo"> dias
                        <p>O intervalo é o intervalo</p>
                    </div>
                    <button>Gerar</button>
                </form>
    `;
}

loadForm();