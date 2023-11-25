"use client";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    Link,
    Radio,
    RadioGroup,
    TextField,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { emailRegex, validatePassword } from "./RegisterUtils";

export default function RegisterDefault({
    email,
    setEmail,
    password,
    setPassword,
    setVisualization,
}: {
    email: string;
    setEmail: Function;
    password: string;
    setPassword: Function;
    setVisualization: Function;
}) {
    const theme = useTheme();

    const [option, setOption] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [invalidPassword, validParams] = validatePassword(
        password,
        confirmPassword
    );

    const unfilledInputs =
        option === "" || !emailRegex.test(email) || invalidPassword;

    const renderPasswordRequirements = (
        text: string,
        valid: boolean
    ): ReactNode => (
        <Typography
            sx={{
                color: valid
                    ? theme.palette.success.light
                    : theme.palette.error.light,
            }}
        >
            {(valid ? "✓ " : "✗ ") + text}
        </Typography>
    );

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
                    height: 72,
                    fontSize: 32,
                    fontWeight: 400,
                    textAlign: "center",
                    borderBlockEnd: "1px solid " + theme.palette.primary.main,
                }}
            >
                Crie a sua conta
            </Typography>
            <Grid
                container
                spacing={1}
                sx={{
                    alignSelf: "center",
                    width: 1400,
                }}
            >
                <Grid item xs={4} />
                <Grid item xs={4} sx={{}}>
                    <Container
                        disableGutters
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
                                onChange={(event) =>
                                    setOption(event.target.value)
                                }
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
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </Box>
                        <Box>
                            <Typography>Senha *</Typography>
                            <TextField
                                sx={{ width: 400 }}
                                type="password"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </Box>
                        <Box>
                            <Typography>Confirmar Senha *</Typography>
                            <TextField
                                sx={{ width: 400 }}
                                type="password"
                                onChange={(event) =>
                                    setConfirmPassword(event.target.value)
                                }
                            />
                        </Box>
                        <Box sx={{ alignSelf: "flex-end" }}>
                            <Tooltip
                                title={
                                    unfilledInputs &&
                                    "Campo obrigatório vazio ou preenchido incorretamente"
                                }
                                placement={"top"}
                            >
                                <span>
                                    <Button
                                        variant="contained"
                                        disabled={unfilledInputs}
                                        onClick={() => setVisualization(option)}
                                    >
                                        Continuar
                                    </Button>
                                </span>
                            </Tooltip>
                        </Box>
                        <Typography>
                            Já tem uma conta?{" "}
                            <Link
                                href="/login"
                                color="primary"
                                underline="hover"
                            >
                                Entrar
                            </Link>
                        </Typography>
                    </Container>
                </Grid>
                <Grid item xs={4} sx={{ display: "flex" }}>
                    <Box sx={{ alignSelf: "center" }}>
                        <Typography>Sua senha necessita de:</Typography>
                        {renderPasswordRequirements(
                            "Pelo menos oito caracteres",
                            validParams[0]
                        )}
                        {renderPasswordRequirements(
                            "Pelo menos uma letra maiúscula",
                            validParams[1]
                        )}
                        {renderPasswordRequirements(
                            "Pelo menos uma letra minúscula",
                            validParams[2]
                        )}
                        {renderPasswordRequirements(
                            "Pelo menos um número",
                            validParams[3]
                        )}
                        {renderPasswordRequirements(
                            "Pelo menos um caractere especial",
                            validParams[4]
                        )}
                        {renderPasswordRequirements(
                            "Ser a mesma da confirmação",
                            validParams[5]
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
