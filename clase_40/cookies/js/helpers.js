// Identifica y rectifica el tipo de dato de un valor
const setDataType = (value) => {
    if (value === "true" || value === true) {
        return true;
    }

    if (value === "false" || value === false) {
        return false;
    }

    let numberValue = Number(value);
    if (!Number.isNaN(numberValue)) {
        if (Number.isInteger(numberValue)) {
            return Number.parseInt(numberValue);
        }

        return Number.parseFloat(numberValue).toFixed(2);
    }

    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

// Busca el valor por medio del nombre de una cookie
function getCookie(cookieName) {
    let cookies = document.cookie.split('; ');
    let cookieValue = null;

    cookies.forEach((cookie) => {
        const key = cookie.split('=')[0];
        const value = cookie.split('=')[1];
        console.log(cookie);

        if (key === cookieName) {
            cookieValue = setDataType(value);
        }
    });

    return cookieValue;
}

function removeCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=${new Date('1970-01-01')}; path=/;`;
}

export { setDataType, getCookie, removeCookie };