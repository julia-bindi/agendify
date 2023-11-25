import Header from "@/components/Header";
import AuthProvider from "@/context/AuthProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
                <AuthProvider>
                    <ThemeRegistry>
                        <>
                            <Header />
                            {children}
                        </>
                    </ThemeRegistry>
                </AuthProvider>
            </body>
        </html>
    );
}
