let primeiroNumero = 30;
let segundoNumero = 100;
let terceiroNumero = 25;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
  console.log(`O maior número é o primeiro número: ${primeiroNumero}`)
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
  console.log(`O maior número é o segundo número: ${segundoNumero}`)
} else {
  console.log(`O maior número é o terceiro número: ${terceiroNumero}`)
}

/* TABELA DE TESTE:
1 2 3: OK
3 2 1: OK
1 3 2: OK
2 3 1: OK
2 1 3: OK
3 1 2: OK */