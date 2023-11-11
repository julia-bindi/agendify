"use client";
import useHttp from "@/hooks/useHttp";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Link,
    Radio,
    RadioGroup,
    TextField,
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
            {/* <FormControl
                required
                error={!client && !company}
                component="fieldset"
                variant="standard"
            >
                <FormLabel component="legend">Selecione uma opção</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        label="Cliente"
                        control={
                            <Checkbox
                                checked={client}
                                onChange={(event) => {
                                    setClient(event.target.checked);
                                }}
                            />
                        }
                    />
                    <FormControlLabel
                        label="Empresa"
                        control={
                            <Checkbox
                                checked={company}
                                onChange={(event) => {
                                    setCompany(event.target.checked);
                                }}
                            />
                        }
                    />
                </FormGroup>
            </FormControl> */}
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                </FormLabel>
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
            <Button
                variant="contained"
                href="#"
                disabled={email === "" || password === ""}
                onClick={() => requestHttp()}
            >
                Continuar
            </Button>
            <Typography>
                Já tem uma conta?{" "}
                <Link href="/login" color="secondary" underline="hover">
                    Entrar
                </Link>
            </Typography>
        </Container>
    );
}
