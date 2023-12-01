const main = document.getElementById("main");
const nav = {
    home: document.getElementById("home"),
    contact: document.getElementById("contact"),
    products: document.getElementById("products"),
};

// Mostrar el contenido correspondiente al recargar la página.
let currentPageName = "home";
getContentHTML(currentPageName);

// Agregar oyente de evento click en cada link.
const links = [nav.home, nav.contact, nav.products];
for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener('click', (e) => {
        getContentHTML(e.target.id);
    });
}

// Obtener el contenido del main de cada página.
function getContentHTML(pageName) {
    const filepath = "./" + pageName + ".html";
    const xhr = new XMLHttpRequest();

    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            setActiveLink(links, nav[pageName]);
            main.innerHTML = xhr.response;
        }
    };

    xhr.send();
}

// Activar el link de la página actual.
function setActiveLink(links, linkActive) {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.className = "";
    }

    linkActive.className = "link-active";
}