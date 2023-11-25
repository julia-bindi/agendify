"use client";
import InformationModal from "@/components/InformationModal";
import { AuthContext } from "@/context/AuthContext";
import useHttp from "@/hooks/useHttp";
import { USER_NOT_FOUND } from "@/utils/constants";
import { LOGIN_REQUEST } from "@/utils/requests";
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
import { redirect } from "next/navigation";
import { ReactNode, useContext, useEffect, useState } from "react";

export default function Login(): ReactNode {
    const theme = useTheme();
    const context = useContext(AuthContext);

    const { setToken, setUserType, setName } = context;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { loading, success, error, data, requestHttp } = useHttp();

    const unfilledInputs = email === "" || password === "";
    const userNotFound = success && data === USER_NOT_FOUND;

    useEffect(() => {
        if (success && !userNotFound) {
            const { token, type, name } = data;
            setToken(token);
            setUserType(type);
            setName(name);
            redirect("/");
        }
    }, [success, data, userNotFound, setToken, setUserType, setName]);

    const renderError = (): ReactNode => (
        <InformationModal
            icon={<CancelOutlined fontSize="medium" />}
            text="Algo deu errado, tente novamente!"
            backgroundColor={theme.palette.error.main}
        />
    );

    const renderUserNotFound = (): ReactNode => (
        <InformationModal
            icon={<ReportProblemOutlined fontSize="medium" />}
            text="Usuário não encontrado!"
            backgroundColor={theme.palette.primary.main}
        />
    );

    return (
        <>
            {error && renderError()}
            {userNotFound && renderUserNotFound()}
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
                        unfilledInputs &&
                        "Necessário preencher os campos de e-mail e senha."
                    }
                    placement="top"
                >
                    <span>
                        <LoadingButton
                            variant="contained"
                            loading={loading}
                            disabled={unfilledInputs}
                            onClick={() =>
                                requestHttp(LOGIN_REQUEST, {
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
                    <Link href="/register" color="primary" underline="hover">
                        Cadastre-se
                    </Link>
                </Typography>
            </Container>
        </>
    );
}
