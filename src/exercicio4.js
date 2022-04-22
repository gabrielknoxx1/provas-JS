function porcNumero(numero) {
  const porcentagem = numero / 1000;
  const perante = porcentagem * 100;
  console.log(`O numero ${numero} retorna ${porcentagem}%`);
}

porcNumero(5);
