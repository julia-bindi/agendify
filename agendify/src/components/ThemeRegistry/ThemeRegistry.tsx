"use client";
import { AccessibilityContext } from "@/context/AccessibilityContext";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { theme } from "./theme";

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    const context = React.useContext(AccessibilityContext);

    const { mode } = context;

    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme(mode)}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
