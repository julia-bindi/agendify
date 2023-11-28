"use client";
import CompanyCard from "@/components/CompanyCard";
import ConfirmationModal from "@/components/ConfirmationModal";
import ServiceCard from "@/components/ServiceCard";
import { CompanyContext } from "@/context/CompanyContext";
import useHttp from "@/hooks/useHttp";
import { SERVICES_COMPANY_REQUEST } from "@/utils/requests";
import { CircularProgress, Container, useTheme } from "@mui/material";
import { ReactNode, useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function Login() {
    const theme = useTheme();
    const context = useContext(CompanyContext);

    const {
        email,
        image,
        name,
        category,
        description,
        workDays,
        startTime,
        endTime,
        street,
        homeNumber,
        neighborhood,
        state,
        city,
    } = context;

    const company: CompanyType = {
        email,
        image,
        name,
        category,
        description,
        workDays,
        startTime,
        endTime,
        street,
        homeNumber,
        neighborhood,
        state,
        city,
    };

    const [confirmService, setConfirmService] = useState<Service | null>(null);

    const { loading, data, requestHttp } = useHttp();

    useEffect(() => {
        requestHttp(SERVICES_COMPANY_REQUEST(email), {});
    }, []);

    const handleConfirm = (service: Service) => {
        setConfirmService(service);
    };

    const renderConfirm = (): ReactNode => (
        <ConfirmationModal
            title={confirmService ? confirmService.name : ""}
            subtitle={
                confirmService
                    ? confirmService.date +
                      " - " +
                      confirmService.time +
                      "\nR$ " +
                      confirmService.cost.toFixed(2)
                    : ""
            }
            onConfirm={() => {}}
            onClose={() => setConfirmService(null)}
        />
    );

    return (
        <>
            {confirmService && renderConfirm()}
            <div className={styles.main_container}>
                <CompanyCard company={company} />
                <div
                    className={styles.services_container}
                    style={{ borderColor: `${theme.palette.primary.main}` }}
                >
                    {loading ? (
                        <Container
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CircularProgress />
                        </Container>
                    ) : (
                        <div className={styles.main_scroll}>
                            {data &&
                                data.map((service: any, i: number) => (
                                    <ServiceCard
                                        onConfirm={handleConfirm}
                                        key={service.name + i}
                                        {...service}
                                    />
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
