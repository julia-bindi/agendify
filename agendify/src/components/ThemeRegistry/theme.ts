import { outlinedInputClasses } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const coresDarkMode = {
    background: {
        default: "#0d1117",
        paper: "#0d1117",
    },
    primary: {
        main: "#68D6FF",
        light: "#7d8a9e",
        header: "#010409",
        dark: "#7d8a9e",
        contrastText: "#FFFFFF",
        background: "#7d8a9e",
        box_header: "0px 4px 4px 0px rgba(255, 255, 255, 0.05)"
    },
};

const coresLightMode = {
    primary: {
        main: "#00AEEF",
        light: "#64CFF7",
        header: "#fff",
        dark: "#0599D1",
        contrastText: "#FFFFFF",
        background: "#00AEEF0F",
        box_header: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    },
};

export const theme = (mode: "light" | "dark") => {
    const cores = mode === "dark" ? coresDarkMode : coresLightMode;

    return createTheme({
        palette: {
            mode: mode,
            ...cores,
            secondary: {
                main: "#A6A6A6",
                light: "#C4C4C4",
                dark: "#7C7C7C",
                contrastText: "#FFFFFF",
            },
        },
        typography: {
            fontFamily: roboto.style.fontFamily,
        },
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { variant: "contained" },
                        style: {
                            height: 32,
                            lineHeight: 0,
                            borderRadius: 4,
                            padding: "0px 24px",
                        },
                    },
                ],
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        height: 32,
                        lineHeight: 0,
                        borderRadius: 4,
                        padding: "0px 24px",
                        backgroundColor: cores.primary.light,
                        "&:hover ": {
                            backgroundColor: cores.primary.light,
                            opacity: 0.8,
                        },
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "--TextField-brandBorderColor": cores.primary.main,
                        "--TextField-brandBorderHoverColor": cores.primary.main,
                        "--TextField-brandBorderFocusedColor":
                            cores.primary.main,
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    multiline: {
                        height: 80,
                    },
                    root: {
                        "--TextField-brandBorderColor": cores.primary.main,
                        "--TextField-brandBorderHoverColor": cores.primary.main,
                        "--TextField-brandBorderFocusedColor":
                            cores.primary.main,
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: "var(--TextField-brandBorderColor)",
                    },
                    multiline: {
                        height: "100%",
                    },
                    root: {
                        height: 32,
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            backgroundColor: cores.primary.background,
                            borderColor:
                                "var(--TextField-brandBorderHoverColor)",
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
                            {
                                borderBlock:
                                    "2px solid var(--TextField-brandBorderFocusedColor)",
                            },
                    },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    root: {
                        height: 32,
                        borderColor: "var(--TextField-brandBorderColor)",
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            backgroundColor: cores.primary.background,
                            borderColor:
                                "var(--TextField-brandBorderHoverColor)",
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
                            {
                                borderBlock:
                                    "2px solid var(--TextField-brandBorderFocusedColor)",
                            },
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        color: cores.primary.contrastText,
                        backgroundColor: cores.primary.main,
                        fontSize: 12,
                        textWrap: "balance",
                        maxWidth: 200,
                        borderRadius: 8,
                        textAlign: "center",
                    },
                },
            },
            MuiCheckbox: {
                styleOverrides: {
                    colorPrimary: {
                        color: cores.primary.main,
                    },
                },
            },
            MuiRadio: {
                styleOverrides: {
                    colorPrimary: {
                        color: cores.primary.main,
                    },
                },
            },
        },
    });
};
