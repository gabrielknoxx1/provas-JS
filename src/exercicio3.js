const primeiro = 100;
const segundo = 50;
const terceiro = 30;

if (primeiro > segundo && primeiro > terceiro) {
  console.log("O maior número é o primeiro: " + primeiro);
} else if (segundo > primeiro && segundo > terceiro) {
  console.log("O maior número é o segundo: " + segundo);
} else {
  console.log("O maior número é o terceiro: " + terceiro);
}
