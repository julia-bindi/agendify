"use client";
import InformationModal from "@/components/InformationModal";
import useHttp from "@/hooks/useHttp";
import { CancelOutlined, ReportProblemOutlined } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    Box,
    Container,
    Link,
    TextField,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";
import { useState } from "react";

const USER_NOT_FOUND = "user-not-found";

export default function Login() {
    const theme = useTheme();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { loading, error, data, requestHttp } = useHttp();

    console.log({ loading, error, data });

    const validInput = !(email === "" || password === "");

    if (error)
        return (
            <InformationModal
                icon={<CancelOutlined fontSize="large" />}
                text="Algo deu errado, tente novamente!"
                backgroundColor={theme.palette.error.main}
            />
        );

    if (data === USER_NOT_FOUND)
        return (
            <InformationModal
                icon={<ReportProblemOutlined fontSize="large" />}
                text="Usuário não encontrado!"
                backgroundColor={theme.palette.primary.main}
            />
        );

    return (
        <>
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
                        borderBlockEnd:
                            "1px solid " + theme.palette.primary.main,
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
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Box>
                <Tooltip
                    title={
                        validInput
                            ? ""
                            : "Para entrar, são necessários e-mail e senha válidos."
                    }
                    placement="top"
                >
                    <span /* Needed for tooltip on disabled Button*/>
                        <LoadingButton
                            variant="contained"
                            loading={loading}
                            disabled={!validInput}
                            onClick={() =>
                                requestHttp("user/login", "POST", {
                                    email,
                                    password,
                                })
                            }
                        >
                            Entrar
                        </LoadingButton>
                    </span>
                </Tooltip>
                <Typography>
                    Não tem uma conta?{" "}
                    <Link href="/register" color="secondary" underline="hover">
                        Cadastre-se
                    </Link>
                </Typography>
            </Container>
        </>
    );
}
