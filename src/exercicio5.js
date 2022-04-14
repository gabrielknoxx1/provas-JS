let texto = "Palmeiras não tem mundial";

console.log(texto.replace(/\a/g, 4));

console.log(texto.replace(/\ /g, "_"));

console.log(`Por não ter sido valido pela FIFA, o ${texto}`);