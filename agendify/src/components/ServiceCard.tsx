import { AccessibilityContext } from "@/context/AccessibilityContext";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomSelect from "./CustomSelect";

type ServiceCardProps = {
    id: number;
    name: string;
    cost: number;
    duration: number;
    description: string;
    dates: string[];
    times: string[];
    onConfirm: (a: Service) => void;
};

export default function ServiceCard({
    id,
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

    const handleConfirm = () => {
        onConfirm({
            id: id,
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
                        gap: "10px",
                    }}
                >
                    <CustomSelect
                        options={dates}
                        onChange={(date) => setDate(date)}
                    />
                    <CustomSelect
                        options={times}
                        onChange={(time) => setTime(time)}
                    />
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
