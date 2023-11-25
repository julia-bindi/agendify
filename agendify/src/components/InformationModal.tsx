import { Box, Modal, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export default function InformationModal({
    icon,
    text,
    backgroundColor,
}: {
    icon: React.ReactNode;
    text: string;
    backgroundColor: string;
}) {
    const theme = useTheme();

    const [open, setOpen] = useState<boolean>(true);

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "24px 32px",
                    boxShadow: 24,
                    borderRadius: 4,
                    color: theme.palette.primary.contrastText,
                    backgroundColor: backgroundColor,
                }}
            >
                {icon}
                <Typography
                    sx={{
                        fontSize: 16,
                        fontWeight: 400,
                    }}
                >
                    {text}
                </Typography>
            </Box>
        </Modal>
    );
}
