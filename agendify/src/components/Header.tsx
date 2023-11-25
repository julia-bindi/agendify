"use client";
import { AuthContext } from "@/context/AuthContext";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useContext } from "react";

export default function Header(): ReactNode {
    const theme = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const context = useContext(AuthContext);

    const { token, name, clear } = context;

    const showLoginButton =
        !token && pathname !== "/login" && pathname !== "/register";
    const inHome = pathname === "/";
    const inSchedules = pathname === "/schedules";

    const handleLogout = () => {
        clear();
        router.push("/");
    };

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                minHeight: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 40px 24px 40px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    marginTop: inHome ? "10px" : "0px",
                }}
            >
                <Image
                    src="/agendify_header.png"
                    alt="Agendify Logo"
                    width={176}
                    height={40}
                    priority
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/")}
                />
                {inHome && (
                    <div
                        style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: theme.palette.primary.main,
                        }}
                    />
                )}
            </Box>
            {token && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                    }}
                >
                    <Typography>{name}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "8px",
                            marginTop: inSchedules ? "10px" : "0px",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => router.push("/schedules")}
                        >
                            Agendamentos
                        </Button>
                        {inSchedules && (
                            <div
                                style={{
                                    width: "100%",
                                    height: 2,
                                    backgroundColor: theme.palette.primary.main,
                                }}
                            />
                        )}
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                    >
                        Sair
                    </Button>
                </Box>
            )}
            {showLoginButton && (
                <Button variant="contained" href="/login">
                    Entrar
                </Button>
            )}
        </Container>
    );
}
