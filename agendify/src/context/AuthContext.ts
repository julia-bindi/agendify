import { createContext } from "react";

const DEFAULT_CONTEXT: Auth = {
    token: "",
    userType: "",
    name: "",
    setToken: () => {},
    setUserType: () => {},
    setName: () => {},
    clear: () => {},
};

export const AuthContext = createContext(DEFAULT_CONTEXT);
