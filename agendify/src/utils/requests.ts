const POST = "POST";
const GET = "GET";
const DELETE = "DELETE";

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

export const USER_RESERVATION_CREATE = {
    url: "reservation/create",
    method: POST,
};

export const USER_RESERVATIONS_REQUEST_DELETE = {
    url: "reservation/cancel",
    method: DELETE,
};

export const USER_SERVICES_REQUEST = {
    url: "user/services",
    method: GET,
};

export const SERVICE_CREATE_REQUEST = {
    url: "service/create",
    method: POST,
};

export const SERVICE_DELETE_REQUEST = {
    url: "service/delete",
    method: DELETE,
};

export const COMPANIES_REQUEST = {
    url: "service/search",
    method: POST,
};

export const SERVICES_COMPANY_REQUEST = (email: string) => ({
    url: `user/company/${email}`,
    method: GET,
});

export const SERVICES_COMPANY_CHECK = (id: number, date:string) => ({
    url: `reservation/check/?id=${id}&date=${date}`,
    method: GET,
});
