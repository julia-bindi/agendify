"use client";
import CustomSelect from "@/components/CustomSelect";
import StoreCard from "@/storeCard.tsx/StoreCard";
import styles from "./index.module.scss"
import { category, dummyStores } from "@/utils/constants";
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import 'overlayscrollbars/overlayscrollbars.css';

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
        <div className={styles.main_container}>
                <div style={{borderColor: `${theme.palette.primary.main}`}} className={`${styles.main_item} ${styles.main_form}`}>
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
                </div>
                <div  style={{borderColor: `${theme.palette.primary.main}`}} className={`${styles.main_item} ${styles.main_list}`}>
                    <div className={styles.main_scroll}>
                        {dummyStores.map((store, i) => (
                            <StoreCard key={store.name + i} {...store} />
                        ))} 

                    </div>
                </div>
            </div>
    );
}
