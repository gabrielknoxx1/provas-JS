const timeout = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

timeout(2000)
  .then(function () { // executa o bloco após 2 segundos
    console.log('Passou 2 segundos.')
  })