"use client";
import CustomSelect from "@/components/CustomSelect";
import StoreCard from "@/components/StoreCard";
import { category, dummyStores } from "@/utils/constants";
import { Box, Grid, TextField, Typography, useTheme } from "@mui/material";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useState } from "react";

export default function Login() {
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
        <Box
            sx={{
                width: "100%",
                position: "fixed",
                height: "calc(100% - 46px)",
            }}
        >
            <Grid
                container
                justifyContent={"center"}
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <Grid
                    item
                    xs={3}
                    sx={{
                        border: 1,
                        borderRadius: 10,
                        borderColor: theme.palette.primary.main,
                        margin: "20px",
                        padding: "30px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        alignItems: "center",
                        width: "fit-content",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Filtros
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ alignSelf: "flex-start" }}>
                            Categorias
                        </Typography>
                        <CustomSelect options={category} />
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
                                onChange={(event) =>
                                    setEndTime(event.target.value)
                                }
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
                                placeholder="00,00"
                                type="number"
                            />
                            <Typography>à</Typography>
                            <TextField
                                onChange={(event) =>
                                    setEndTime(event.target.value)
                                }
                                placeholder="00,00"
                                type="number"
                            />
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ alignSelf: "flex-start" }}>
                            Estado
                        </Typography>
                        <CustomSelect options={states} />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ alignSelf: "flex-start" }}>
                            Cidade
                        </Typography>
                        <CustomSelect options={cities} />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        border: 1,
                        borderRadius: 10,
                        borderColor: theme.palette.primary.main,
                        margin: "20px",
                        overflow: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "fit-content",
                    }}
                >
                    <OverlayScrollbarsComponent>
                        {dummyStores.map((store, i) => (
                            <StoreCard key={store.name + i} {...store} />
                        ))}
                    </OverlayScrollbarsComponent>
                </Grid>
            </Grid>
        </Box>
    );
}
