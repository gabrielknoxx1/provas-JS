const carrosAntigos = {
  nome: "Opala",
  modelo: "SS",
  cor: "Preto",
  ano: 1974,
};

console.log(Object.values(carrosAntigos));

const meusDados = {
  nome: "Gabriel",
  idade: 19,
  peso: 76,
};

console.log(meusDados);
meusDados["altura"] = 1.77;

const { nome } = meusDados; //destructuring não funcionou.

console.log(meusDados);
