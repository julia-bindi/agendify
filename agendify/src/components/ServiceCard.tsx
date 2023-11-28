import { AccessibilityContext } from "@/context/AccessibilityContext";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React from "react";
import CustomSelect from "./CustomSelect";

type ServiceCardProps = {
    name: string;
    cost: number;
    duration: number;
    description: string;
    dates: string[];
    times: string[];
    onConfirm: (a: Service) => void;
};

export default function ServiceCard({
    name,
    cost,
    duration,
    description,
    dates,
    times,
    onConfirm,
}: ServiceCardProps) {
    const context = React.useContext(AccessibilityContext);
    const theme = useTheme();
    const [date, setDate] = React.useState<string>();
    const [time, setTime] = React.useState<string>();

    const minDate = new Date();
    const maxDate = new Date(new Date().setDate(minDate.getDate() + 30));

    const handleConfirm = () => {
        onConfirm({
            name: name,
            cost: cost,
            duration: duration,
            description: description,
            date: date ? date : "",
            time: time ? time : "",
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                paddingLeft: "20px",
                paddingRight: "25px",
                borderRadius: "10px",
                "&:hover": {
                    backgroundColor: theme.palette.primary.light + "20",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column",
                }}
            >
                <Typography sx={{ fontSize: 24 }}>{name}</Typography>
                <Typography sx={{ fontSize: 16 }}>
                    {"Duração de " + duration + " minutos"}
                </Typography>
                <Typography sx={{ fontSize: 14 }}>{description}</Typography>
                <Typography>&nbsp;</Typography>
                <Typography>{"R$ " + cost.toFixed(2)}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    width: "300px",
                    gap: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "10px",
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem label="Data">
                            <DatePicker
                                format="DD/MM/YYYY"
                                minDate={dayjs(minDate)}
                                maxDate={dayjs(maxDate)}
                                sx={{ width: 200 }}
                            />
                        </DemoItem>
                    </LocalizationProvider>
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ alignSelf: "flex-start" }}>
                            Horários
                        </Typography>
                        <CustomSelect
                            options={times}
                            onChange={(time) => setTime(time)}
                        />
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConfirm}
                    disabled={!(date && time)}
                >
                    Agendar
                </Button>
            </Box>
        </Box>
    );
}
