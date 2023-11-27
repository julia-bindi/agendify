import { LIGHT } from "@/utils/constants";
import { createContext } from "react";

const DEFAULT_CONTEXT: Accessibility = {
    mode: LIGHT,
    zoom: 100,
    setMode: () => {},
    setZoom: () => {},
};

export const AccessibilityContext = createContext(DEFAULT_CONTEXT);
