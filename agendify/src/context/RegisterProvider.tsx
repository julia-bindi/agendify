"use client";
import { useReducer } from "react";
import { RegisterContext } from "./RegisterContext";

const ID = "REGISTER";

const INITIAL_STATE: RegisterType = {
    email: "",
    password: "",
};

const SET_EMAIL = `SET_EMAIL_${ID}`;
const SET_PASSWORD = `SET_PASSWORD_${ID}`;

export default function RegisterProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const { email, password } = state;

    const setEmail = (value: string) => dispatch({ type: SET_EMAIL, value });
    const setPassword = (value: string) =>
        dispatch({ type: SET_PASSWORD, value });

    const context: Register = {
        email,
        password,
        setEmail,
        setPassword,
    };

    return (
        <RegisterContext.Provider value={context}>
            {children}
        </RegisterContext.Provider>
    );
}

const reducer = (state: RegisterType, action: Action) => {
    const { type, value } = action;
    switch (type) {
        case SET_EMAIL:
            return { ...state, email: value };
        case SET_PASSWORD:
            return { ...state, password: value };
        default:
            return { ...INITIAL_STATE };
    }
};
