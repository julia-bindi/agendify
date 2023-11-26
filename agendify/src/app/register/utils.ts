export const CLIENT = "CLIENT";
export const COMPANY = "COMPANY";

export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const validatePassword = (
    password: string,
    confirmPassword: string
): [boolean, boolean[]] => {
    const params = [
        password.length > 7,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[@$!%*#?&_-]/.test(password),
        password === confirmPassword,
    ];
    return [params.includes(false), params];
};
