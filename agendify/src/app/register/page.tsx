"use client";
import useHttp from "@/hooks/useHttp";
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
import { ReactNode, useMemo, useState } from "react";

const validatePassword = (password: string, confirmPassword: string): [boolean, boolean[]] => {
    const params = [
        password.length > 7,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[@$!%*#?&_-]/.test(password),
        password === confirmPassword
    ]
    return [!params.includes(false), params]
}

export default function Register() {

    const theme = useTheme();
    
    const [option, setOption] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const { loading, error, data, requestHttp } = useHttp();

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const validMail: boolean = useMemo(() => emailRegex.test(email), [email])
    const [validPassword, validParams] = useMemo(() => validatePassword(password, confirmPassword), [password, confirmPassword])

    const passwordField = (text: string, valid: boolean):ReactNode => {
        return(
            <Typography 
                sx={{
                    color: valid ? theme.palette.secondary.main : theme.palette.secondary.light
                }}
            >
                {(valid ? ". " : "x ") + text}
            </Typography>
        )
    }

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
                    borderBlockEnd: "1px solid " + theme.palette.primary.main,
                }}
            >
                Crie a sua conta
            </Typography>
            <Grid 
                container 
                spacing={1}
                sx={{
                    alignSelf: 'center',
                    width: 1400
                }}
            >
                {/* Blank column */}
                <Grid item xs={4}/>
                {/* Main forms */}
                <Grid item xs={4}
                    sx={{
                    }}
                >
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
                        <Box>
                            <Typography>Confirmar Senha *</Typography>
                            <TextField
                                sx={{ width: 400 }}
                                type="password"
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </Box>
                        <Box
                            sx={{
                                alignSelf: "flex-end",
                            }}
                        >
                            <Tooltip
                                title={!(validMail && validPassword) && 'Campo obrigatório vazio ou preenchido incorretamente'}
                                placement={'top'}
                            >
                                <span /* Needed for tooltip on disabled Button*/>
                                    <Button
                                        variant="contained"
                                        href="#"
                                        disabled={!(validMail && validPassword)}
                                        onClick={() => requestHttp()}
                                    >
                                        Continuar
                                    </Button>
                                </span>
                            </Tooltip>
                        </Box>
                        <Typography>
                            Já tem uma conta?{" "}
                            <Link href="/login" color="secondary" underline="hover">
                                Entrar
                            </Link>
                        </Typography>
                    </Container>
                </Grid>
                {/* Password feedback */}
                <Grid item xs={4}
                    sx={{
                        display: 'flex',
                    }}
                >   
                    <Box 
                        sx={{
                            alignSelf: 'center'
                        }}
                    >
                        <Typography>Sua senha necessita de:</Typography>
                        {passwordField('ao menos oito caracteres', validParams[0])}
                        {passwordField('ao menos uma letra maiúscula', validParams[1])}
                        {passwordField('ao menos uma letra minúscula', validParams[2])}
                        {passwordField('ao menos um número', validParams[3])}
                        {passwordField('ao menos um caractere especial', validParams[4])}
                        {passwordField('ser a mesma da confirmação', validParams[5])}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
