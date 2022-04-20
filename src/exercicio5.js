function factory(nome, sobrenome, idade, nacionalidade) {
  return {
    nome,
    sobrenome,
    idade,
    nacionalidade
  }
}

console.log(factory("Pedro", "Lopes", 21, "Brasileiro"))