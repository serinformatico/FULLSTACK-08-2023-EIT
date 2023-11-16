let numA = 10;
let numB = 3;
let resultadoDeLaComparacion;

// numA es mayor que numB y numA es menor que 100
resultadoDeLaComparacion = (numA > numB) && (numA < 100);
console.log("numA es mayor que numB y numA es menor que 100: ", resultadoDeLaComparacion);

// numA es mayor que numB y numA es mayor que 20
resultadoDeLaComparacion = (numA > numB) && (numA > 20);
console.log("numA es mayor que numB y numA es mayor que 20: ", resultadoDeLaComparacion);

// numA es mayor que numB ó numA es mayor que 20
resultadoDeLaComparacion = (numA > numB) || (numA > 20);
console.log("numA es mayor que numB ó numA es mayor que 20: ", resultadoDeLaComparacion);

// numA es menor que numB ó numA es mayor que 20
resultadoDeLaComparacion = (numA < numB) || (numA > 20);
console.log("numA es menor que numB ó numA es mayor que 20: ", resultadoDeLaComparacion);

// numA es menor que numB && numA es menor que 20 (negado)
resultadoDeLaComparacion = (numA < numB) || !(numA > 20);
console.log("numA es menor que numB && numA es menor que 20 (negado): ", resultadoDeLaComparacion);