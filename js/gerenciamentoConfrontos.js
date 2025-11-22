function addConfronto(event) {
	event.preventDefault();
	const LADO_A = document.querySelector('input[name="competidorA"]:checked');
	const LADO_A_EQUIPE = LADO_A ? LADO_A.value : "";

	const LADO_B = document.querySelector('input[name="competidorB"]:checked');
	const LADO_B_EQUIPE = LADO_B ? LADO_B.value : "";

	const DATA = document.getElementById("data-competicao").value;
	const HORA = document.getElementById("hora-competicao").value;
	const LUGAR = document.getElementById("lugar-competicao").value;

	if (!LADO_A_EQUIPE || !LADO_B_EQUIPE || !DATA || !HORA || !LUGAR) {
		abrirPopUp("Preencha corretamente todos os campos!");
		return;
	}

	if (LADO_A_EQUIPE == LADO_B_EQUIPE) {
		abrirPopUp("Escolha duas equipes diferentes!");
		return;
	}

	let confronto = {
		status: "Não iniciado",
		ladoA: LADO_A_EQUIPE,
		ladoB: LADO_B_EQUIPE,
		data: formatarData(DATA),
		hora: HORA,
		lugar: LUGAR,
		resultadoA: "-",
		resultadoB: "-",
	}

	const TORNEIO = getTorneioTarget();
	const id = TORNEIO.id;
	const TORNEIOS = obterTorneiosAtivos();

	TORNEIOS.forEach(torneio => {
		if (torneio.id == id) {
			torneio.confrontos.push(confronto);
		}
	});

	salvarTorneiosAtivos(TORNEIOS);
	endOfEvent();
}

function addConfrontoBASIC(ID_TORNEIO, confronto) {
	const TORNEIOS = obterTorneiosAtivos();

	TORNEIOS.forEach(torneio => {
		if (torneio.id == ID_TORNEIO) {
			torneio.confrontos.push(confronto);
		}
	});

	salvarTorneiosAtivos(TORNEIOS);
}

function parseDateSafe(value) {
	if (!value && value !== 0) return null;

	if (value instanceof Date && !isNaN(value)) return value;

	if (typeof value === 'number' && isFinite(value)) {
		const d = new Date(value);
		return isNaN(d) ? null : d;
	}

	if (typeof value === 'string') {
		const isoDateMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
		if (isoDateMatch) {
			const y = parseInt(isoDateMatch[1], 10);
			const m = parseInt(isoDateMatch[2], 10) - 1;
			const d = parseInt(isoDateMatch[3], 10);
			return new Date(y, m, d);
		}


		const maybe = new Date(value);
		if (!isNaN(maybe)) return maybe;
	}

	return null;
}

function formatarData(valor) {
	const d = parseDateSafe(valor);
	if (!d) return '';

	const dia = String(d.getDate()).padStart(2, '0');
	const mes = String(d.getMonth() + 1).padStart(2, '0');
	const ano = String(d.getFullYear());

	return `${dia}/${mes}/${ano}`;
}

function endOfEvent() {
	abrirPopUp("Adicionado com sucesso!");
	setTimeout(() => { window.location.reload(); }, 1000);
}