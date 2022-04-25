const numeros = [2, 32, 54, 12, 09, 19, 80]

numeros.sort(function (a, b) {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }

})
console.log(numeros)

numeros.sort(function (c, d) {
  if (d < c) {
    return -1
  } else if (d > c) {
    return 1
  } else {
    return 0
  }
})
console.log(numeros)

const soma = (total, valor) => total + valor
const nums = [2, 32, 54, 12, 09, 19, 80]
console.log(nums.reduce(soma))