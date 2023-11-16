let fechaDeHoy = new Date();
document.write("<p>" + fechaDeHoy + "</p>");

document.write("<p>Día: " + fechaDeHoy.getDate() + "</p>");
document.write("<p>Mes: " + (fechaDeHoy.getMonth() + 1) + "</p>");
document.write("<p>Año: " + fechaDeHoy.getFullYear() + "</p>");

document.write("<p>Hora: " + fechaDeHoy.getHours() + "</p>");
document.write("<p>Minutos: " + fechaDeHoy.getMinutes() + "</p>");


let fechaEspecifica = new Date("2023/06/01 17:30");
document.write("<p>Solo Fecha y hora: " + fechaEspecifica.toLocaleString() + "</p>");
document.write("<p>Solo Fecha: " + fechaEspecifica.toLocaleDateString() + "</p>");
document.write("<p>Solo Hora: " + fechaEspecifica.toLocaleTimeString() + "</p>");