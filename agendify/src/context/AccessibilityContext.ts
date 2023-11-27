import { createContext } from "react";

const DEFAULT_CONTEXT: Accessibility = {
    mode: "light",
    setMode: () => {},
    fontMultiplier: 1
};

export const AccessibilityContext = createContext(DEFAULT_CONTEXT);
