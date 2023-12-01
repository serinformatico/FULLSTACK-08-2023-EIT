const main = document.getElementById("main");
const nav = {
    home: document.getElementById("home"),
    contact: document.getElementById("contact"),
    products: document.getElementById("products"),
};

window.onload = () => {
    refreshHTML();
};

// Mostrar el contenido inicial al cargar la página.
function refreshHTML() {
    let initialPageName = "home";
    history.pushState({ page: initialPageName }, initialPageName, "./index.html");
    getContentHTML(initialPageName);
}

// Agregar oyente de evento click en cada link.
const links = [nav.home, nav.contact, nav.products];
for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener('click', (e) => {
        e.preventDefault();
        let pageName = e.target.id;

        history.pushState({ page: pageName }, pageName, pageName);
        getContentHTML(pageName);
    });
}

// Obtener el contenido del main de cada página.
function getContentHTML(pageName) {
    if (!pageName) {
        pageName = "home";
    }

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


/* ****************** HISTORY  ****************** */
const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");
const btnGo = document.getElementById("go");
const inputNumberPage = document.getElementById("number-page");
const btnObject = document.getElementById("object");

// Conduce a la página anterior del historial de navegación
btnBack.addEventListener('click', () => {
    history.back();
});

// Conduce a la página siguiente del historial de navegación
btnForward.addEventListener('click', () => {
    history.forward();
});

// Conduce a una página del historial de navegación
btnGo.addEventListener('click', () => {
    history.go(inputNumberPage.value);
});

// Muestra el objeto history en la consola del navegador
btnObject.addEventListener('click', () => {
    console.log('objeto: ', history);
});

// Evento que detecta cuando se ha hace click en lo botones (atras/adelante)
// del navegador o cuando se hace history.back() y/o history.forward().
window.onpopstate = (e) => {
    if (e.state) {
        getContentHTML(e.state.page);
    } else {
        getContentHTML("home");
    }
};