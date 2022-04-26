function motos(modelo, marca) {
  return {
    modelo,
    marca
  }
}
const Carro1 = motos('hibrido', 2020, 'kawasaki');
const Carro2 = motos('elétrico', 2018, 'bmw');
console.log(Carro1.modelo);
console.log(Carro2.marca);