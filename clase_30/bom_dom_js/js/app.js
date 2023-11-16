probarA = () => {
    window.alert("Hola Mundo");
    let edad = window.prompt('Coloca tu edad');
    console.log(edad);
};

probarB = () => {
    let navegador = window.navigator.userAgent;
    console.log(navegador);

    let serverName = window.location.hostname;
    console.log(serverName);

    let serverPort = window.location.port;
    console.log(serverPort);

    let url = window.location.href;
    console.log(url);
};

probarC = () => {
    let altoInternaDeLaVentana = window.innerHeight;
    console.log(altoInternaDeLaVentana);

    let anchoInternaDeLaVentana = window.innerWidth;
    console.log(anchoInternaDeLaVentana);
};

probarD = () => {
    let tituloPrincipal = window.document.querySelector('h1');
    console.log(tituloPrincipal.innerText);

    let subTituloPrincipal = window.document.querySelector('h2');
    console.log(subTituloPrincipal.innerText);
};