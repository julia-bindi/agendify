"use client";
import { 
    Container, 
    useTheme,
    Typography,
    Grid,
    IconButton,
    TextField,
    Select,
    SelectChangeEvent,
    MenuItem,
    Checkbox,
    ListItemText,
    OutlinedInput,
    Tooltip,
    Button,
    Box
 } from "@mui/material";
 import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import { 
    categories,
    weekDays
 } from "@/utils/constants";

export default function RegisterCompany() {

    const theme = useTheme();

    const [picture, setPicture] = useState<File>();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [telephone, setTelephone] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [district, setDistrict] = useState("");
    const [UF, setUF] = useState("");
    
    const validInput = (selectedCategories && selectedDays && name && description && telephone && startTime && endTime && street && number && district && UF)

    const handleCategory = (event: SelectChangeEvent<typeof selectedCategories>) => {
        const {
            target: { value },
        } = event;
        setSelectedCategories(
        // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleDays = (event: SelectChangeEvent<typeof selectedCategories>) => {
        const {
            target: { value },
        } = event;
        setSelectedDays(
        // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

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
                Olá, Empresa!
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
            <Grid container spacing={2}
                sx={{
                    width: 670,
                    marginTop: "20px"
                }}
            >
                <Grid item xs={4}>
                    <Typography>Imagem</Typography>
                    <IconButton
                        component="label"
                        sx={{
                            width: "100%",
                            height: "82%"
                        }}
                    >
                        <FileUploadIcon/>
                        <input 
                            type="file" 
                            hidden
                            onChange={(e) => setPicture(e.target.files ? e.target.files[0] : undefined)}
                        />
                    </IconButton>
                </Grid>
                <Grid item container xs={8} spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Nome *</Typography>
                        <TextField
                            sx={{ width: "100%" }}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Descrição *</Typography>
                        <TextField
                            sx={{ 
                                width: "100%", 
                            }}
                            size={"small"}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                    <Grid item xs={6}>
                        <Typography>Telefone *</Typography>
                        <MuiTelInput 
                            value={telephone} 
                            onChange={(value) => setTelephone(value)}
                            sx={{ 
                                width: "100%", 
                                "&.MuiOutlinedInput": {
                                    paddingLeft:"0" // Faz nada, mas precisa fazer, tirar a barra branca da esquerda da bandeira
                                }
                            }}
                            placeholder="00 00000 0000"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Categorias *</Typography>
                        <Select 
                            multiple
                            title={selectedCategories.join(', ')}
                            sx={{width: "100%"}} 
                            value={selectedCategories}
                            onChange={handleCategory}
                            renderValue={(selected: string[]) => selected.join(', ')}
                            input={<OutlinedInput label="Selecione" />}
                        >
                            {categories.map((category) => (
                                <MenuItem key={category} value={category}>
                                    <Checkbox checked={selectedCategories.indexOf(category) > -1}/>
                                    <ListItemText primary={category} />
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Dias *</Typography>
                        <Select 
                            multiple
                            title={selectedDays.join(', ')}
                            sx={{width: "100%"}} 
                            value={selectedDays}
                            onChange={handleDays}
                            renderValue={(selected: string[]) => selected.join(', ')}
                            input={<OutlinedInput label="Selecione" />}
                        >
                            {weekDays.map((day) => (
                                <MenuItem key={day} value={day}>
                                    <Checkbox checked={selectedDays.indexOf(day) > -1}/>
                                    <ListItemText primary={day} />
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Abertura *</Typography>
                        <TextField
                            sx={{ width: "100%" }}
                            onChange={(event) => setStartTime(event.target.value)}
                            placeholder="00:00"
                            type="time"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Fechamento *</Typography>
                        <TextField
                            sx={{ width: "100%" }}
                            onChange={(event) => setEndTime(event.target.value)}
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
                                onChange={(event) => setStreet(event.target.value)}
                                placeholder="Rua"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                sx={{ width: "100%" }}
                                onChange={(event) => setNumber(event.target.value)}
                                placeholder="Nº"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                sx={{ width: "100%" }}
                                onChange={(event) => setDistrict(event.target.value)}
                                placeholder="Bairro"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                sx={{ width: "100%" }}
                                onChange={(event) => setUF(event.target.value)}
                                placeholder="UF"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{display: 'flex', width: '100%', height: '100%'}}>
                        <Tooltip
                            title={!(validInput) && 'Campo obrigatório vazio ou preenchido incorretamente'}
                            placement={'top'}
                        >
                            <span /* Needed for tooltip on disabled Button */
                                style={{
                                    alignSelf: "flex-end",
                                    marginLeft: "auto",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    href="#"
                                    disabled={!(validInput)}
                                    onClick={() => {}}
                                >
                                    Continuar
                                </Button>
                            </span>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )

}