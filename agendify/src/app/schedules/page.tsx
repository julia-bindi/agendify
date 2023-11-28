"use client";
import { useTheme } from "@mui/material";
import styles from "./index.module.scss"
import ScheduleCard from "@/components/ScheduleCard";
import ConfirmationModal from "@/components/ConfirmationModal";
import { ReactNode, useContext, useEffect, useState } from "react";
import useHttp from "@/hooks/useHttp";
import { USER_RESERVATIONS_REQUEST } from "@/utils/requests";
import { AuthContext } from "@/context/AuthContext";

export default function Schedules() {
    
    const theme = useTheme();
    const context = useContext(AuthContext);
    const { loading, success, error, data, requestHttp } = useHttp();
    const [cancelService, setCancelService] = useState<Service | null>(null);
    const [reservations, setReservations] = useState<Service[]>();

    useEffect(() => {
        requestHttp(USER_RESERVATIONS_REQUEST, {}, context.token);
    }, [])

    useEffect(() => {
        if(success){
            setReservations(data.map((reservation: any):Service => ({
                id: reservation.id,
                name: reservation.service.name,
                cost: reservation.service.cost,
                duration: reservation.service.duration,
                description: reservation.service.description,
                date: reservation.date,
                time: reservation.start
            })));
        }
    }, [loading, data])

    useEffect(() => {
        console.log(loading, success, error)
    }, [loading, success, error])

    const handleConfirm = (service:Service) => {
        setCancelService(service);
    }
    
    const renderConfirm = (): ReactNode => (
        <ConfirmationModal
            title={cancelService ? "Cancelar: " + cancelService.name : ""}
            subtitle={cancelService ? cancelService.date + " - " + cancelService.time + "\nR$ " + cancelService.cost.toFixed(2) : ""}
            onConfirm={() => {}}
            onClose={() => setCancelService(null)}
        />
    );

    return (
        <>
            {cancelService && renderConfirm()}
            <div className={styles.main_container} style={{borderColor: `${theme.palette.primary.main}`}}>
                <div className={styles.main_scroll}>
                    {reservations && 
                     reservations.map((schedule, i) => (
                        <ScheduleCard
                            key={schedule.name + i}
                            onDelete={handleConfirm}
                            {...schedule}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
