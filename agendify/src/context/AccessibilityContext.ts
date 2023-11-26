import { createContext } from "react";

const DEFAULT_CONTEXT: Accessibility = {
    mode: "light",
    setMode: () => {},
};

export const AccessibilityContext = createContext(DEFAULT_CONTEXT);
