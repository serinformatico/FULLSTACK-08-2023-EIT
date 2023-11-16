let nivel = Number(window.prompt("Indica tu nivel actual:"));
let categoria = null;

switch (nivel) {
    case 1:
        categoria = "Tu categoría es inicial";
        break;
    case 2:
        categoria = "Tu categoría es intermedia";
        break;
    case 3:
        categoria = "Tu categoría es avanzada";
        break;
    default:
        categoria = "Tu categoría es pro";
}

window.document.write(categoria);