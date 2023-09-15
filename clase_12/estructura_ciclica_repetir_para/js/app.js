//Estructura cíclica repetir-para (incremental)
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }

    document.write("<p>iteración A: " + i + "</p>");
}

//Estructura cíclica repetir-para (decremental)
for (let i = 10; i > 0; i--) {
    document.write("<p>iteración B: " + i + "</p>");

    if (i === 5) {
        break;
    }
}