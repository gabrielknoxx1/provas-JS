const pessoa = {
  nome: "Pedro",
  idade: 21,
  peso: 75,
  endereco: {
    rua: "Rua dos Bobos",
    numero: 0
  }
};

const { endereco: { rua } } = pessoa;
console.log(rua)