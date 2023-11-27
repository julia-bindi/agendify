"use client";
import { AccessibilityContext } from "@/context/AccessibilityContext";
import { DARK, LIGHT } from "@/utils/constants";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import { SpeedDial, SpeedDialAction, useTheme } from "@mui/material";
import { ReactNode, useContext, useState } from "react";

export default function Accessibility(): ReactNode {
    const theme = useTheme();
    const context = useContext(AccessibilityContext);

    const { setMode } = context;

    const [mode, setModeState] = useState<typeof LIGHT | typeof DARK>(LIGHT);

    const actions = [
        {
            icon:
                mode === DARK ? (
                    <LightModeOutlinedIcon />
                ) : (
                    <DarkModeOutlinedIcon />
                ),
            name: `Alterar para modo ${mode === DARK ? "claro" : "escuro"}`,
            onClick: () => {
                const newMode = mode === LIGHT ? DARK : LIGHT;
                setMode(newMode);
                setModeState(newMode);
            },
        },
        {
            icon: <ZoomOutOutlinedIcon />,
            name: "Diminuir zoom",
            onClick: () => {},
        },
        {
            icon: <ZoomInOutlinedIcon />,
            name: "Aumentar zoom",
            onClick: () => {},
        },
    ];

    return (
        <SpeedDial
            ariaLabel="SpeedDial Accessibility"
            sx={{ position: "absolute", bottom: 40, right: 40 }}
            icon={
                <AccessibilityNewOutlinedIcon
                    fontSize="large"
                    sx={{ color: theme.palette.primary.contrastText }}
                />
            }
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.onClick}
                />
            ))}
        </SpeedDial>
    );
}
