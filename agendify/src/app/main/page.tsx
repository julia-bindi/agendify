"use client";
import {
    Container,
    useTheme
} from "@mui/material";
import { useState } from "react";

export default function Login() {

    const theme = useTheme();

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
                rowGap: "40px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            Main page
        </Container>
    );
}
