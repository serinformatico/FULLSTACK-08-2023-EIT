
const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

const PRODUCTS_URL = `${BACKEND_HOST}/api/products`;
const SHOPPING_CARTS_URL = `${BACKEND_HOST}/api/shopping-carts`;
const CONSULTS_URL = `${BACKEND_HOST}/api/consults`;
const PAYMENTS_URL = `${BACKEND_HOST}/api/payments`;

const MERCADOPAGO_CREATE_PREFERENCE_URL = `${PAYMENTS_URL}/mercado-pago/create-preference`;
const MERCADOPAGO_FEEDBACK_URL = `${PAYMENTS_URL}/mercado-pago/feedback`;

const IMAGES_URL = `${BACKEND_HOST}/public/images`;
const DEFAULT_IMAGE_NAME = "default.jpg";

export {
    PRODUCTS_URL,
    SHOPPING_CARTS_URL,
    CONSULTS_URL,
    PAYMENTS_URL,
    MERCADOPAGO_CREATE_PREFERENCE_URL,
    MERCADOPAGO_FEEDBACK_URL,
    IMAGES_URL,
    DEFAULT_IMAGE_NAME,
};