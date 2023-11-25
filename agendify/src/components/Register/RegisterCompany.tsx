"use client";
import CustomSelect from "@/components/CustomSelect";
import InformationModal from "@/components/InformationModal";
import useHttp from "@/hooks/useHttp";
import {
    USER_ALREADY_REGISTERED,
    categories,
    weekDays,
} from "@/utils/constants";
import { REGISTER_REQUEST } from "@/utils/requests";
import { CancelOutlined, ReportProblemOutlined } from "@mui/icons-material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Container,
    Grid,
    IconButton,
    TextField,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { ReactNode, useEffect, useState } from "react";
import { COMPANY } from "./RegisterUtils";

export default function RegisterCompany({
    email,
    password,
}: {
    email: string;
    password: string;
}) {
    const theme = useTheme();

    const [picture, setPicture] = useState<File>();
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [neighborhood, setNeighborhood] = useState<string>("");
    const [state, setState] = useState<string>("");

    const { loading, success, error, data, requestHttp } = useHttp();

    const unfilledInputs =
        name === "" ||
        selectedCategories.length === 0 ||
        selectedDays.length === 0 ||
        description === "" ||
        phone === "" ||
        startTime === "" ||
        endTime === "" ||
        street === "" ||
        number === "" ||
        neighborhood === "" ||
        state === "";

    const userAlreadyRegistered = success && data === USER_ALREADY_REGISTERED;

    useEffect(() => {
        if (success && !userAlreadyRegistered) location.replace("/");
    }, [success, userAlreadyRegistered]);

    const renderError = (): ReactNode => (
        <InformationModal
            icon={<CancelOutlined fontSize="medium" />}
            text="Algo deu errado, tente novamente!"
            backgroundColor={theme.palette.error.main}
        />
    );

    const renderUserAlreadyRegistered = (): ReactNode => (
        <InformationModal
            icon={<ReportProblemOutlined fontSize="medium" />}
            text="Usuário já cadastrado!"
            backgroundColor={theme.palette.primary.main}
        />
    );

    return (
        <>
            {error && renderError()}
            {userAlreadyRegistered && renderUserAlreadyRegistered()}
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
                    Olá, Empresa!
                </Typography>
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
                    Complete os dados para criar a sua conta.
                </Typography>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        width: 640,
                        marginTop: "20px",
                    }}
                >
                    <Grid item xs={4}>
                        <Typography>Imagem *</Typography>
                        <IconButton
                            component="label"
                            sx={{
                                width: 176,
                                height: 136,
                            }}
                        >
                            <FileUploadIcon height={300} />
                            <input
                                type="file"
                                hidden
                                onChange={(e) =>
                                    setPicture(
                                        e.target.files
                                            ? e.target.files[0]
                                            : undefined
                                    )
                                }
                            />
                        </IconButton>
                    </Grid>
                    <Grid item container xs={8} spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Nome *</Typography>
                            <TextField
                                sx={{ width: "100%" }}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Descrição *</Typography>
                            <TextField
                                sx={{ width: "100%" }}
                                multiline
                                rows={2}
                                size={"small"}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Telefone *</Typography>
                            <MuiTelInput
                                value={phone}
                                onChange={(value) => setPhone(value)}
                                sx={{ width: "100%" }}
                                placeholder="00 00000 0000"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Categorias *</Typography>
                            <CustomSelect
                                options={categories}
                                onChange={(categories: string[]) =>
                                    setSelectedCategories(categories)
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Dias *</Typography>
                            <CustomSelect
                                options={weekDays}
                                onChange={(days: string[]) =>
                                    setSelectedDays(days)
                                }
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>Abertura *</Typography>
                            <TextField
                                sx={{ width: "100%" }}
                                onChange={(event) =>
                                    setStartTime(event.target.value)
                                }
                                placeholder="00:00"
                                type="time"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>Fechamento *</Typography>
                            <TextField
                                sx={{ width: "100%" }}
                                onChange={(event) =>
                                    setEndTime(event.target.value)
                                }
                                placeholder="00:00"
                                type="time"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>Localização *</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <TextField
                                    sx={{ width: "100%" }}
                                    onChange={(event) =>
                                        setStreet(event.target.value)
                                    }
                                    placeholder="Rua"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    sx={{ width: "100%" }}
                                    onChange={(event) =>
                                        setNumber(event.target.value)
                                    }
                                    placeholder="Nº"
                                />
                            </Grid>
                            <Grid item xs={7}>
                                <TextField
                                    sx={{ width: "100%" }}
                                    onChange={(event) =>
                                        setNeighborhood(event.target.value)
                                    }
                                    placeholder="Bairro"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    sx={{ width: "100%" }}
                                    onChange={(event) =>
                                        setState(event.target.value)
                                    }
                                    placeholder="UF"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Tooltip
                                title={
                                    unfilledInputs &&
                                    "Campo obrigatório vazio ou preenchido incorretamente."
                                }
                                placement={"top"}
                            >
                                <span
                                    style={{
                                        alignSelf: "flex-end",
                                        marginLeft: "auto",
                                    }}
                                >
                                    <LoadingButton
                                        variant="contained"
                                        loading={loading}
                                        disabled={unfilledInputs}
                                        onClick={() =>
                                            requestHttp(REGISTER_REQUEST, {
                                                type: COMPANY,
                                                email,
                                                password,
                                                name,
                                                description,
                                                phone,
                                                categority:
                                                    selectedCategories[0],
                                                workDays: selectedDays,
                                                startTime,
                                                endTime,
                                                street,
                                                homeNumber: number,
                                                neighborhood,
                                                state,
                                            })
                                        }
                                    >
                                        Cadastrar
                                    </LoadingButton>
                                </span>
                            </Tooltip>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}