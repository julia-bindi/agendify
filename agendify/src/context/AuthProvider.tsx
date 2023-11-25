"use client";
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";

const ID = "AUTH";

const INITIAL_STATE: AuthValues = {
    token: "",
    userType: "",
    name: "",
};

const SET_TOKEN = `SET_TOKEN_${ID}`;
const SET_USER_TYPE = `SET_USER_TYPE_${ID}`;
const SET_NAME = `SET_NAME_${ID}`;
const CLEAR = `CLEAR_${ID}`;

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const { token, userType, name } = state;

    const setToken = (value: string) => dispatch({ type: SET_TOKEN, value });
    const setUserType = (value: string) =>
        dispatch({ type: SET_USER_TYPE, value });
    const setName = (value: string) => dispatch({ type: SET_NAME, value });
    const clear = () => dispatch({ type: CLEAR });

    const context: Auth = {
        token,
        userType,
        name,
        setToken,
        setUserType,
        setName,
        clear,
    };

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
}

const reducer = (state: AuthValues, action: Action) => {
    const { type, value } = action;
    switch (type) {
        case SET_TOKEN:
            return { ...state, token: value };
        case SET_USER_TYPE:
            return { ...state, userType: value };
        case SET_NAME:
            return { ...state, name: value };
        case CLEAR:
        default:
            return { ...INITIAL_STATE };
    }
};
