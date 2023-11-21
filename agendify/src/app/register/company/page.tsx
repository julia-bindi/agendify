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
    OutlinedInput
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
    const [telephone, setTelephone] = useState('');
    
    console.log(selectedCategories)

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
            <Grid container spacing={4}
                sx={{
                    width: 670,
                    marginTop: "40px"
                }}
            >
                <Grid item xs={4}>
                    <Typography>Imagem</Typography>
                    <IconButton
                        component="label"
                        sx={{
                            width: "100%",
                            height: "100%"
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
                                "&.MuiOutlinedInput": {
                                    height: "100px" // Faz nada, mas precisa fazer, esse input é mais alto
                                }
                            }}
                            size={"small"}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                    <Grid item xs={3}>
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
                    <Grid item xs={3}>
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
                        <Typography>Horário *</Typography>
                        <TextField
                            sx={{ width: "100%" }}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="00:00 às 00:00"
                        />
                    </Grid>
                    <Grid item xs={3}>
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
                </Grid>
            </Grid>
        </Container>
    )

}