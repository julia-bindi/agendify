import CustomMultipleSelect from "@/components/CustomMultipleSelect";
import StoreCard from "@/storeCard.tsx/StoreCard";
import { category, dummyStores } from "@/utils/constants";
import {
    Box,
    Button,
    Container,
    List,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { useState } from "react";

export default function ClientMain() {
    const theme = useTheme();

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const states = ["Minas Gerais", "São Paulo", "Rio de Janeiro"];
    const cities = [
        "Belo Horizonte",
        "Juiz de Fora",
        "Jundiaí",
        "Visconde do Rio Branco",
    ];

    return (
        <Container
            disableGutters
            sx={{
                height: "100%",
                display: "flex",
                padding: "32px 0px",
                gap: "24px",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    height: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    borderRadius: 8,
                    border: `1px solid ${theme.palette.primary.main}`,
                    maxWidth: 300,
                }}
            >
                <Typography sx={{ fontSize: 24 }}>Filtros</Typography>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Categorias
                    </Typography>
                    <CustomMultipleSelect options={category} />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Horários
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <TextField
                            onChange={(event) =>
                                setStartTime(event.target.value)
                            }
                            placeholder="00:00"
                            type="time"
                        />
                        <Typography>às</Typography>
                        <TextField
                            onChange={(event) => setEndTime(event.target.value)}
                            placeholder="00:00"
                            type="time"
                        />
                    </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Valores
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "3px",
                        }}
                    >
                        <TextField
                            onChange={(event) =>
                                setStartTime(event.target.value)
                            }
                            sx={{ width: 103 }}
                            placeholder="00,00"
                            type="number"
                        />
                        <Typography>à</Typography>
                        <TextField
                            onChange={(event) => setEndTime(event.target.value)}
                            sx={{ width: 103 }}
                            placeholder="00,00"
                            type="number"
                        />
                    </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Estado
                    </Typography>
                    <CustomMultipleSelect options={states} />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Cidade
                    </Typography>
                    <CustomMultipleSelect options={cities} />
                </Box>
                <Button variant="contained">Aplicar</Button>
            </Container>
            <Container
                sx={{
                    height: "90%",
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: 8,
                    padding: "16px",
                }}
            >
                <Container sx={{ height: "100%", overflowY: "scroll" }}>
                    <List>
                        {dummyStores.map((store, i) => (
                            <StoreCard key={store.name + i} {...store} />
                        ))}
                    </List>
                </Container>
            </Container>
        </Container>
    );
}
