/**
 * @author Pedro Soares
 * @class Signos
 * @method qualSigno
 */

class Signos {

	constructor() {

		this.seuSigno = null // signo selecionado no metodo qualSigno()

		// lista de signos
		this._signos = [
			{
				mes: "04", // numero do mes
				range: [20, 31], // [minimo dia, maximo dia]
				signo: "Aries" // signo
			},
			{
				mes: "05",
				range: [1, 5],
				signo: "Aries"
			},
			{
				mes: "05",
				range: [6, 20],
				signo: "Touro"
			}
		];

	}

	// MM/DD/YYYY
	// 04/18/1998
	qualSigno(data) {

		let dataFormatada = data.split('/')

		// pego as informações da pessoa
		let diaPessoa = dataFormatada[1]
		let mesPessoa = dataFormatada[0]

		this._signos.forEach((infoSigno, index) => {

			// pergunta se o mes da pessoa é o mes que esta passando no loop
			if (mesPessoa == infoSigno.mes) {

				// valida se a pessoa esta valida para o signo que esta passando
				if (diaPessoa >= infoSigno.range[0] && diaPessoa <= infoSigno.range[1]) {

					this.seuSigno = infoSigno.signo
					console.log(this.seuSigno)

				} else {

					// vai para o próximo mês
					let proximoMes = this._signos[index + 1]

					// valida se a pessoa ainda é deste mes
					if (proximoMes == mesPessoa) {

						// valida se a pessoa esta valida para o signo que esta passando
						if (diaPessoa >= proximoMes.range[0] && diaPessoa <= proximoMes.range[1]) {
							this.seuSigno = proximoMes.signo
							console.log(this.seuSigno)
						}

					}

				}
			}

		})

	}

}

let signos = new Signos()
signos.qualSigno("05/13/1998")
