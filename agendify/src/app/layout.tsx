import Accessibility from "@/components/Accessibility";
import Header from "@/components/Header";
import ZoomComponent from "@/components/ZoomComponent";
import AccessibilityProvider from "@/context/AccessibilityProvider";
import AuthProvider from "@/context/AuthProvider";
import RegisterProvider from "@/context/RegisterProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Agendify",
    description: "Plataforma para agendamento de serviços.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AccessibilityProvider>
                    <AuthProvider>
                        <RegisterProvider>
                            <ThemeRegistry>
                                <>
                                    <Header />
                                    <ZoomComponent>{children}</ZoomComponent>
                                    <Accessibility />
                                </>
                            </ThemeRegistry>
                        </RegisterProvider>
                    </AuthProvider>
                </AccessibilityProvider>
            </body>
        </html>
    );
}
