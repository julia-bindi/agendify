import CustomMultipleSelect from "@/components/CustomMultipleSelect";
import StoreCard from "@/storeCard.tsx/StoreCard";
import styles from "./index.module.scss"
import { category, dummyStores } from "@/utils/constants";
import { Box, Button, TextField, Tooltip, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { AccessibilityContext } from "@/context/AccessibilityContext";
import React from "react";

export default function CompanyMain() {

    const theme = useTheme();
    const context = React.useContext(AccessibilityContext);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [value, setValue] = useState("");

    const enableConfirm = name && duration && value

    return(
        <div className={styles.main_container}>
            <div style={{borderColor: `${theme.palette.primary.main}`}} className={`${styles.main_item} ${styles.main_form}`}>
                <Typography sx={{ alignSelf: "flex-start", fontSize: context.fontMultiplier*20 }}>
                    Cadastros
                </Typography>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Serviço *
                    </Typography>
                    <TextField
                        sx={{ width: "100%" }}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Descrição
                    </Typography>
                    <TextField
                        sx={{ width: "100%" }}
                        multiline
                        rows={4}
                        size={"small"}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Duração *
                    </Typography>
                    <TextField
                        onChange={(event) =>
                            setDuration(event.target.value)
                        }
                        placeholder="00:00"
                        type="time"
                        sx={{ width: "100%" }}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Valor *
                    </Typography>
                    <TextField
                        onChange={(event) =>
                            setValue(event.target.value)
                        }
                        sx={{width: '100%'}}
                        placeholder="00,00"
                        type="number"
                    />
                </Box>
                <Tooltip
                    title={
                        !enableConfirm &&
                        "Necessário preencher os campos de serviço, duração e valor."
                    }
                    placement="top"
                >
                    <span >
                        <Button
                            sx={{width: '100%'}}
                            variant="contained"
                            disabled={!enableConfirm}
                        >
                            Confirmar
                        </Button>
                    </span>
                </Tooltip>
            </div>
            <div  style={{borderColor: `${theme.palette.primary.main}`}} className={`${styles.main_item} ${styles.main_list}`}>
                <div className={styles.main_scroll}>
                    {dummyStores.map((store, i) => (
                        <StoreCard key={store.name + i} {...store} />
                    ))} 
                </div>
            </div>
        </div>
    )

}