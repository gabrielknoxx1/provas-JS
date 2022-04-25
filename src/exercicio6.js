function carro(modelo, anoLancamento, marca) {
  return {
    modelo,
    anoLancamento,
    marca
  }
}

const primeiroCarro = carro('hibrido', 2020, 'Volvo')
const segundoCarro = carro('eletrico', 2018, 'Tesla')
console.log(primeiroCarro.modelo)
console.log(segundoCarro.marca)

