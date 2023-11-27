"use client";
import { AuthContext } from "@/context/AuthContext";
import React from "react";
import { COMPANY } from "../register/utils";
import ClientMain from "./ClientMain";
import CompanyMain from "./CompanyMain";

export default function Login() {
    const context = React.useContext(AuthContext);

    const { token, userType } = context;

    if (token && userType === COMPANY) return <CompanyMain />;

    return <ClientMain />;
}
