const input = "A";

switch (input) {
  case "a":
  case "A":
    console.log("Vogal.");
    break;
  case "e":
  case "E":
    console.log("Vogal.");
    break;
  case "i":
  case "I":
    console.log("Vogal.");
    break;
  case "o":
  case "O":
    console.log("Vogal.");
    break;
  case "u":
  case "U":
    console.log("Vogal.");
    break;
  default:
    console.log("Consoante.");
}

// case a letra seja maisculo ou minusculo vai ser vogal.
// após a comparação ele para a função.
// se nenhuma letra for A, E, I, O, U, vai ser consoante
