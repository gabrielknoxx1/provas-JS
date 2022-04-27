function gerarNums(min, max) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const acao = max - min + 1
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(aleatorio)
  })
}

gerarNums(1, 100)
  .then(num => num * 5)
  .then(numx10 => `O valor gerado é : ${numx10}`)
  .then(console.log)