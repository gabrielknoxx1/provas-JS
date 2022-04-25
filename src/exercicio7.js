const numeros = [10, 20, 30, 40, 50]

const dobro = numeros.map(function (e) {
  return e * 2
})
console.log(dobro)


const menorQue50 = numeros => numeros < 30
console.log(numeros.filter(menorQue50))

