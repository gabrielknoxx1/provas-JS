// a

const grupo = "akatsuki";
console.log(grupo);

// b

console.log(grupo.replace(/\a/g, 4));

// c

console.log(grupo.replace(/\w/g, "_"));

// d

const nome = "akatsuki";
const concatenacao = "A temida " + nome;
const template = `
  A temida
  ${nome}`;
console.log(concatenacao, template);
