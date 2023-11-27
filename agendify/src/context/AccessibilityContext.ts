import { LIGHT } from "@/utils/constants";
import { createContext } from "react";

const DEFAULT_CONTEXT: Accessibility = {
    mode: LIGHT,
    setMode: () => {},
    fontMultiplier: 1,
};

export const AccessibilityContext = createContext(DEFAULT_CONTEXT);
