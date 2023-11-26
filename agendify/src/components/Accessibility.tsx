"use client";
import { AccessibilityContext } from "@/context/AccessibilityContext";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import { IconButton, useTheme } from "@mui/material";
import { ReactNode, useContext, useState } from "react";

export default function Accessibility(): ReactNode {
    const theme = useTheme();
    const context = useContext(AccessibilityContext);

    const { setMode } = context;

    const [mode, setModeState] = useState<"light" | "dark">("light");

    const handleClick = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        setModeState(newMode);
    };

    return (
        <IconButton
            sx={{
                backgroundColor: theme.palette.primary.main,
                width: 50,
                height: 50,
                borderRadius: "50%",
                position: "absolute",
                top: "95%",
                left: "95%",
                transform: "translate(-95%, -95%)",
            }}
            onClick={handleClick}
        >
            <AccessibilityNewOutlinedIcon
                fontSize="large"
                sx={{ color: theme.palette.primary.contrastText }}
            />
        </IconButton>
    );
}
