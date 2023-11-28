const POST = "POST";
const GET = "GET";

export const LOGIN_REQUEST = {
    url: "user/login",
    method: POST,
};

export const REGISTER_REQUEST = {
    url: "user/signup",
    method: POST,
};

export const USER_RESERVATIONS_REQUEST = {
    url: "user/reservations",
    method: GET,
};

export const COMPANIES_REQUEST = {
    url: "service/search",
    method: POST,
};

export const SERVICES_COMPANY_REQUEST = {
    url: "user/company/services",
    method: GET,
};
