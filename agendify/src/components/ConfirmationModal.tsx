import { AccessibilityContext } from "@/context/AccessibilityContext";
import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import React from "react";
import { ReactNode, useState } from "react";

export default function ConfirmationModal({
    title,
    subtitle,
    onConfirm,
    onClose,
}: {
    title: string;
    subtitle: string;
    onConfirm: Function;
    onClose?: () => void;
}): ReactNode {
    const theme = useTheme();
    const context = React.useContext(AccessibilityContext);

    const [open, setOpen] = useState<boolean>(true);

    const handleClose = () => {
        onClose && onClose();
        setOpen(false);
    }

    return (
        <Modal open={open}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    gap: "16px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "24px 32px",
                    boxShadow: 24,
                    borderRadius: 4,
                    backgroundColor: theme.palette.primary.contrastText,

                }}
            >
                <Typography
                    sx={{
                        fontSize: context.fontMultiplier * 16,
                        fontWeight: 400,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: context.fontMultiplier * 12,
                        fontWeight: 400,
                    }}
                >
                    {subtitle}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '20px'
                }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onConfirm}
                    >
                        Confirmar
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Voltar
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
