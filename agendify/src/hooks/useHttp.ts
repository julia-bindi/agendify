"use client";
import { useState } from "react";

export default function useHttp() {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);

    const requestHttp = (
        request: { url: string; method: string },
        body: object,
        token?: string
    ) => {
        const { url, method } = request;
        setLoading(true);
        setSuccess(false);
        setError(false);
        setData(null);

        let headers = new Headers();
        headers.append("Content-Type", "application/json; charset=UTF-8")
        token && headers.append("Authorization", "Basic " + token)

        fetch(`https://agendify.onrender.com/api/v1/${url}`, {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
                setSuccess(true);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    };

    return {
        loading,
        success,
        error,
        data,
        requestHttp,
    };
}
