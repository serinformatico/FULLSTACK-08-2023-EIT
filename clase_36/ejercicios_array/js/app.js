// Triplicar estos valores[50, 25, 75, 10, 100] e imprimir en la consola.
const valoresA = [50, 25, 75, 10, 100];
const valoresTriplicados = valoresA.map((valor) => valor * 3);
console.log('valoresTriplicados: ', valoresTriplicados);

// Filtrar los valores impares[13, 14, 8, 11, 99] e imprimir en la consola.
const valoresB = [13, 14, 8, 11, 99];
const valoresFiltrados = valoresB.filter((valor) => valor % 2 != 0);
console.log('valoresFiltrados: ', valoresFiltrados);

// Sumar todo los valores[100, 15, 25, 50, 10] e imprimir en la consola.
const valoresC = [100, 15, 25, 50, 10];
const valoresRecorridos = valoresC.filter((valor) => console.log(`valor: ${valor}`));
console.log('valoresRecorridos: ', valoresRecorridos);

// Imprimir cada valor del siguiente array junto a la leyenda “valor: ”[10, 25, 50, 30, 15]
const valoresD = [10, 25, 50, 30, 15];
const valoresReducidos = valoresD.reduce((acumulador, valor) => acumulador + valor);
console.log('valoresReducidos: ', valoresReducidos);