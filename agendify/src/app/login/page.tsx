"use client";
import {
    Box,
    Button,
    Container,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

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
            <Typography
                sx={{
                    width: 640,
                    height: 73,
                    fontSize: 32,
                    fontWeight: 400,
                    textAlign: "center",
                    borderBlockEnd: "1px solid #00AEEF",
                }}
            >
                Acesse a sua conta
            </Typography>
            <Box>
                <Typography>E-mail</Typography>
                <TextField
                    sx={{ width: 400 }}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Box>
            <Box>
                <Typography>Senha</Typography>
                <TextField
                    sx={{ width: 400 }}
                    type="password"
                    onChange={(event) => setSenha(event.target.value)}
                />
            </Box>
            <Button
                variant="contained"
                href="#"
                disabled={email === "" || senha === ""}
            >
                Entrar
            </Button>
            <Typography>
                Não tem uma conta?{" "}
                <Link href="#" color="secondary" underline="hover">
                    Cadastre-se
                </Link>
            </Typography>
        </Container>
    );
}
