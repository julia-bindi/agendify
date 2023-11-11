"use client";
import { useState } from "react";

export default function useHttp() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [data, setData] = useState<string>("");

    const requestHttp = () => {
        setLoading(true);
        setError("");
        setData("");

        fetch(`https://jsonmock.hackerrank.com/api/universities?page=1`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
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
