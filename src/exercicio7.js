"A)"
let nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function (e) {
  return e * 3
})
console.log(resultado)

"B)"
let objetos = [
  { nome: "caderno", quantidade: 2, preco: 15.50 },
  { nome: "lápis", quantidade: 1, preco: 2.00 },
  { nome: "caneta", quantidade: 4, preco: 3.00 }
]
console.log(objetos.filter(function (p) {
  return false
}))
const custo = objetos => objetos.preco >= 2
const itens = objetos => objetos.quantidade <= 3
console.log(objetos.filter(custo).filter(itens))