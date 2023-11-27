"use client";
import { AccessibilityContext } from "@/context/AccessibilityContext";
import { Container } from "@mui/material";
import { ReactNode, useContext } from "react";

export default function ZoomComponent({ children }: { children: ReactNode }) {
    const accessibilityContext = useContext(AccessibilityContext);

    const { zoom } = accessibilityContext;

    return (
        <Container disableGutters sx={{ zoom: `${zoom}%`, height: "100%" }}>
            {children}
        </Container>
    );
}
