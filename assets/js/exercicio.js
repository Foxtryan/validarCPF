function ValidarCpf(cpf) {
	Object.defineProperty(this, 'cpfLimpo', {
		enumerable: true,
		get: function() {
			return cpf.replace(/\D+/g, '');
		}
	});
}

ValidarCpf.prototype.validar = function() {
	if (typeof this.cpfLimpo === 'undefined') return false;
	if (this.cpfLimpo.length !== 11) return false;
	if (this.isSequencia()) return false;
	
	const cpfParcial = this.cpfLimpo.slice(0, -2);
	const digito1 = this.criaDigito(cpfParcial);
	const digito2 = this.criaDigito(cpfParcial + digito1);
	
	const novoCpf = cpfParcial + digito1 + digito2;
	return novoCpf === this.cpfLimpo;
};

ValidarCpf.prototype.criaDigito = function(cpfParcial) {
	const cpfArray = Array.from(cpfParcial);
	let regressivo = cpfArray.length + 1;
	const total = cpfArray.reduce((ac, val) => {
		ac += (regressivo * Number(val));
		regressivo--;
		return ac;
	}, 0);
	
	const digito = 11 - (total % 11);
	return digito > 9 ? '0': String(digito);
};

ValidarCpf.prototype.isSequencia = function() {
	const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
	return sequencia === this.cpfLimpo;
};


const txtCpf = document.querySelector('.input-cpf')
const lblResultado = document.querySelector('.lbl-resultado')
const btnTeste = document.querySelector('.btn-testar')


btnTeste.onclick = function () {
	
	const cpf = new ValidarCpf(txtCpf.value)
	
	if (cpf.validar()) {
		lblResultado.classList.add("positivo");
		lblResultado.classList.remove("negativo");
		lblResultado.innerText = "CPF Válido";
	} else {
		lblResultado.classList.add("negativo");
		lblResultado.classList.remove("positivo");
		lblResultado.innerText = "CPF Inválido";
	}
	
};
