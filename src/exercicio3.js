const pessoa = {
  nome: 'Pedro',
  idade: 21,
  peso: 75.5,
  endereco: {
    logradouro: 'Rua dos Bobos',
    numero: 0
  }
}
console.log(pessoa)

pessoa.nome = "João"
console.log(pessoa)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)