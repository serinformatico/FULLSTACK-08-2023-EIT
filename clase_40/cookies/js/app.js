import { person } from "./data.js";
import { getCookie, removeCookie } from "./helpers.js";


/*
    Una cookie HTTP, cookie web o cookie de navegador es una pequeña pieza de datos
    que un servidor envía al navegador web del usuario. El navegador guarda estos
    datos y los envía de regreso junto con la nueva petición al mismo servidor.

    El atributo expires=
    Si no se especifica expires, la cookie se eliminará al terminar la sesión actual.
    Es decir, al cerrar la ventana del navegador.

    El atributo path=
    Si no se especifica, por defecto corresponde a la ruta del documento actual. La
    ruta debe ser absoluta. Generalmente, se coloca path=/;.
*/


// Agregar y modificar una cookie (se debe poner una fecha superior a la actual.
// Por cuentiones de seguridad, el plazo máximo está definido por los navegadores.
//document.cookie = "marca=ford; path=/;";
//document.cookie = `marca=Fiat; expires=${new Date('2030-01-01')}; path=/;`;

// Agregar una segunda cookie que se eliminará el 31-05-2023 a las 00:00hs
document.cookie = `modelo=Uno; expires=${new Date('2024-06-01')}; path=/;`;

// Agregar un objeto en una tercera cookie que se eliminará el 31-08-2023 a las 00:00hs
document.cookie = `persona=${JSON.stringify(person)}; expires=${new Date('2024-09-01')}; path=/;`;

// Obtener todas las cookies
let myCookies = document.cookie;
console.log(myCookies);

// Obtener una cookie
let persona = getCookie('persona');
console.log(persona);

// Eliminar una cookie (se hace colocando una fecha anterior a la actual)
removeCookie('modelo');