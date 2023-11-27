import ConfirmationModal from "@/components/ConfirmationModal";
import ScheduleCard from "@/components/ScheduleCard";
import { AccessibilityContext } from "@/context/AccessibilityContext";
import { dummySchedules } from "@/utils/constants";
import {
    Box,
    Button,
    TextField,
    Tooltip,
    Typography,
    useTheme,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import styles from "./index.module.scss";

export default function CompanyMain() {
    const theme = useTheme();
    const context = React.useContext(AccessibilityContext);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [value, setValue] = useState("");
    const [cancelService, setCancelService] = useState<Service | null>(null);

    const handleConfirm = (service: Service) => {
        setCancelService(service);
    };

    const renderConfirm = (): ReactNode => (
        <ConfirmationModal
            title={cancelService ? "Cancelar: " + cancelService.name : ""}
            subtitle={
                cancelService
                    ? cancelService.date +
                      " - " +
                      cancelService.time +
                      "\nR$ " +
                      cancelService.cost.toFixed(2)
                    : ""
            }
            onConfirm={() => {}}
            onClose={() => setCancelService(null)}
        />
    );

    const enableConfirm = name && duration && value;

    return (
        <>
            {cancelService && renderConfirm()}
            <div className={styles.main_container}>
                <div
                    style={{ borderColor: `${theme.palette.primary.main}` }}
                    className={`${styles.main_item} ${styles.main_form}`}
                >
                    <Typography
                        sx={{
                            alignSelf: "flex-start",
                            fontSize: context.fontMultiplier * 20,
                        }}
                    >
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
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
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
                            onChange={(event) => setValue(event.target.value)}
                            sx={{ width: "100%" }}
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
                        <span>
                            <Button
                                sx={{ width: "100%" }}
                                variant="contained"
                                disabled={!enableConfirm}
                            >
                                Cadastrar
                            </Button>
                        </span>
                    </Tooltip>
                </div>
                <div
                    style={{ borderColor: `${theme.palette.primary.main}` }}
                    className={`${styles.main_item} ${styles.main_list}`}
                >
                    <div className={styles.main_scroll}>
                        {dummySchedules.map((service, i) => (
                            <ScheduleCard
                                onDelete={handleConfirm}
                                key={service.name + i}
                                {...service}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
