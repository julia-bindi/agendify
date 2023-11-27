"use client";
import { useReducer } from "react";
import { AccessibilityContext } from "./AccessibilityContext";

const ID = "ACCESSIBILITY";

const INITIAL_STATE: AccessibilityType = {
    mode: "light",
    fontMultiplier: 1
};

const SET_MODE = `SET_MODE_${ID}`;

export default function AccessibilityProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const { mode, fontMultiplier } = state;

    const setMode = (value: string) => dispatch({ type: SET_MODE, value });

    const context: Accessibility = {
        mode,
        setMode,
        fontMultiplier
    };

    return (
        <AccessibilityContext.Provider value={context}>
            {children}
        </AccessibilityContext.Provider>
    );
}

const reducer = (state: AccessibilityType, action: Action) => {
    const { type, value } = action;
    switch (type) {
        case SET_MODE:
            return { ...state, mode: value };
        default:
            return { ...INITIAL_STATE };
    }
};
