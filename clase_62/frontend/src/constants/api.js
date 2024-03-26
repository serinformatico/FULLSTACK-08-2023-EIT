const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PRODUCTS_URL = `${BACKEND_URL}/api/products`;
const IMAGES_URL = `${BACKEND_URL}/public/images`;

export {
    BACKEND_URL,
    PRODUCTS_URL,
    IMAGES_URL,
};