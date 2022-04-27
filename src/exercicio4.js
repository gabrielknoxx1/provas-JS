function timer(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}

async function execute() {
  await timer(3000)
  console.log(`Retorno do await depois de 3s`)

}

execute()