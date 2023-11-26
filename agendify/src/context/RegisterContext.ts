import { createContext } from "react";

const DEFAULT_CONTEXT: Register = {
    email: "",
    password: "",
    setEmail: () => {},
    setPassword: () => {},
};

export const RegisterContext = createContext(DEFAULT_CONTEXT);
