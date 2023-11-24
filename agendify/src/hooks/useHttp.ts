"use client";
import { useState } from "react";

export default function useHttp() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [data, setData] = useState<string>("");

    const requestHttp = (url: string, method: string, body: object) => {
        setLoading(true);
        setError("");
        setData("");

        fetch(`https://agendify.onrender.com/api/v1/${url}`, {
            method: method,
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message || "Something went wrong!");
                setLoading(false);
            });
    };

    return {
        loading,
        error,
        data,
        requestHttp,
    };
}
