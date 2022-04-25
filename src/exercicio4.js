const dados = [2, 32, 54, 12, 09, 19, 80];
dados.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(dados);

const nums = [2, 32, 54, 12, 09, 19, 80];
nums.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

console.log(nums);

const arr = [2, 32, 54, 12, 09, 19, 80];
const soma = arr.reduce(function (soma, i) {
  return soma + i;
});
console.log(soma);
