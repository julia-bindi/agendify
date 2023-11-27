"use client";
import { LIGHT } from "@/utils/constants";
import { useReducer } from "react";
import { AccessibilityContext } from "./AccessibilityContext";

const ID = "ACCESSIBILITY";

const INITIAL_STATE: AccessibilityType = {
    mode: LIGHT,
    zoom: 100,
};

const SET_MODE = `SET_MODE_${ID}`;
const SET_FONT_MULTIPLIER = `SET_FONT_MULTIPLIER_${ID}`;

export default function AccessibilityProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const { mode, zoom } = state;

    const setMode = (value: string) => dispatch({ type: SET_MODE, value });
    const setZoom = (value: string) =>
        dispatch({ type: SET_FONT_MULTIPLIER, value });

    const context: Accessibility = {
        mode,
        zoom,
        setMode,
        setZoom,
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
        case SET_FONT_MULTIPLIER:
            return { ...state, zoom: value };
        default:
            return { ...INITIAL_STATE };
    }
};
