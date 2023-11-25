"use client";
import { ReactNode, useState } from "react";
import RegisterClient from "../../components/Register/RegisterClient";
import RegisterCompany from "../../components/Register/RegisterCompany";
import RegisterDefault from "../../components/Register/RegisterDefault";
import { CLIENT, COMPANY } from "../../components/Register/RegisterUtils";

export default function Register(): ReactNode {
    const [visualization, setVisualization] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    if (visualization === CLIENT)
        return <RegisterClient email={email} password={password} />;
    if (visualization === COMPANY)
        return <RegisterCompany email={email} password={password} />;

    return (
        <RegisterDefault
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            setVisualization={setVisualization}
        />
    );
}
