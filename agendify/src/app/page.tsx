"use client";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
                rowGap: "20px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Image
                src="/agendify_header.png"
                alt="Agendify Logo"
                width={704}
                height={160}
                priority
                style={{ cursor: "pointer" }}
            />
            <Typography sx={{ fontSize: 40 }}>
                Marcar um serviço agora é fácil!
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "10px",
                }}
            >
                <Typography>Já possui uma conta?</Typography>
                <Button
                    variant="contained"
                    onClick={() => router.push("/login")}
                >
                    Entrar
                </Button>
            </Box>
            <Typography>
                Não possui uma conta?{" "}
                <Link
                    color="primary"
                    underline="hover"
                    onClick={() => router.push("/register")}
                >
                    Cadastre-se
                </Link>
            </Typography>
            <Typography>
                Está apenas olhando?{" "}
                <Link
                    color="primary"
                    underline="hover"
                    onClick={() => router.push("/main")}
                >
                    Consultar serviços
                </Link>
            </Typography>
        </Container>
    );
}
