"use client";
import useHttp from "@/hooks/useHttp";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Link,
    Radio,
    RadioGroup,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { useState } from "react";

export default function Register() {
    const [option, setOption] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { loading, error, data, requestHttp } = useHttp();

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
                Crie a sua conta
            </Typography>
            <Container
                sx={{ 
                    width: 400,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "40px",
                }}
            >
                <FormControl
                    sx={{
                        alignSelf: "flex-start",
                    }}
                >
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(event) => setOption(event.target.value)}
                    >
                        <FormControlLabel
                            value="client"
                            control={<Radio />}
                            label="Cliente"
                        />
                        <FormControlLabel
                            value="company"
                            control={<Radio />}
                            label="Empresa"
                        />
                    </RadioGroup>
                </FormControl>
                <Box>
                    <Typography>E-mail *</Typography>
                    <TextField
                        sx={{ width: 400 }}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Box>
                <Box>
                    <Typography>Senha *</Typography>
                    <TextField
                        sx={{ width: 400 }}
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Box>
                <Tooltip
                    title={'Campo obrigatório vazio ou preenchido incorretamente'}
                    placement={'top'}
                >
                    <span /* Needed for tooltip on disabled Button*/>
                        <Button
                            variant="contained"
                            href="#"
                            disabled={email === "" || password === ""}
                            onClick={() => requestHttp()}
                        >
                            Continuar
                        </Button>
                    </span>
                </Tooltip>
                <Typography>
                    Já tem uma conta?{" "}
                    <Link href="/login" color="secondary" underline="hover">
                        Entrar
                    </Link>
                </Typography>
            </Container>
        </Container>
    );
}
