function verificaValor(chute){
	const numero = +chute

	if(chuteInvalido(numero)) {
		elementoChute.innerHTML += '<div>Valor inválido</div>'
	}
	if(numeroForMaiorOuMenorQueOValorPermitirdo(numero)){
		elementoChute.innerHTML += `<div>Valor inválido : O número secreto está entre ${menorValor} e ${maiorValor}</div>`
	}

	if(numero === numeroSecreto){
		document.body.innerHTML = `
		 <h2>Você Acertou</h2>
		 <h3>O número secreto era ${numeroSecreto}</h3>
		 <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>

		`
	} else if (numero > numeroSecreto){
		elementoChute.innerHTML += `
		<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
		`
	}else{
		elementoChute.innerHTML += `
		<div>O número secreto é menor <i class="fa-solid fa-up-long"></i></div>
		`
	}

}

function chuteInvalido(numero){
	return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitirdo(numero){
	return numero > maiorValor || numero < menorValo
}

