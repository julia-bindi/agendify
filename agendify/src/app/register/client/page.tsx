"use client";
import { useState } from "react";
import { 
    Container,
    Typography,
    Box,
    TextField,
    useTheme,
    IconButton,
    Tooltip,
    Button
 } from "@mui/material";
 import FileUploadIcon from '@mui/icons-material/FileUpload';
import { MuiTelInput } from "mui-tel-input";

export default function RegisterClient() {

    const theme = useTheme();
    const [telephone, setTelephone] = useState('')
    const [fullName, setFullName] = useState('')
    const [photo, setPhoto] = useState<File>();

    return(
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Typography
                sx={{
                    width: 600,
                    fontSize: 32,
                    fontWeight: 400,
                    textAlign: "left",
                }}
            >
                Olá, Cliente!
            </Typography>
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
                Complete os dados para criar a sua conta.
            </Typography>
            <Box
                sx={{
                    width: 400,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "40px",
                    marginTop: "40px"
                }}
            >
                <Box>
                    <Typography>Foto</Typography>
                    <IconButton
                        component="label"
                        sx={{
                            width: 150,
                            height: 150
                        }}
                    >
                        <FileUploadIcon/>
                        <input 
                            type="file" 
                            hidden
                            onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : undefined)}
                        />
                    </IconButton>
                </Box>
                <Box>
                    <Typography>Nome Completo *</Typography>
                    <TextField
                        sx={{ width: 400 }}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </Box>
                <Box>
                    <Typography>Telefone *</Typography>
                    <MuiTelInput 
                        value={telephone} 
                        onChange={(value) => setTelephone(value)}
                        sx={{ width: 400 }}
                        placeholder="00 00000 0000"
                    />
                </Box>
                <Box
                    sx={{
                        alignSelf: "flex-end",
                    }}
                >
                    <Tooltip
                        title={!(telephone && fullName) && 'Campo obrigatório vazio ou preenchido incorretamente'}
                        placement={'top'}
                    >
                        <span /* Needed for tooltip on disabled Button*/>
                            <Button
                                variant="contained"
                                href="#"
                                disabled={!(telephone && fullName)}
                                onClick={() => {}}
                            >
                                Continuar
                            </Button>
                        </span>
                    </Tooltip>
                </Box>
            </Box>
        </Container>
    )

}