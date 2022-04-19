let primiraNota = parseFloat(prompt("Digite sua primeira nota: "));
let segundaNota = parseFloat(prompt("Digite sua segunda nota: "));

let media = (primiraNota + segundaNota) / 2;

if (media == 10) {
  alert("Aprovado com Distinção!")
} else if (media >= 7) {
  alert("Aprovado!")
} else {
  alert("Reprovado!")
}