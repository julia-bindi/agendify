"use client";
import React from "react";
import ClientMain from "./ClientMain";
import CompanyMain from "./CompanyMain";
import { AuthContext } from "@/context/AuthContext";

export default function Login() {

    const context = React.useContext(AuthContext);

    return (
        context.token || context.userType === "CLIENT" ?
        <ClientMain/> :
        <CompanyMain/> 
    );
}
