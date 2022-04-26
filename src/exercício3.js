"A)"
let pessoa = {
    nome: 'Pierre',
    sobrenome: 'Souza',
    idade: 22,
    hobby: 'Escutar música',
    endereco: {
        Rua: 'Avenida Tralala',
        numero: 860
    }
}
console.log(pessoa);
"B)"

pessoa.hobby = "Correr"
console.log(pessoa);
"C)"
const { endereco: { Rua, numero } } = pessoa
console.log(Rua, numero)

