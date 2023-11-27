"use client";
import { useTheme } from "@mui/material";
import { dummySchedules } from "@/utils/constants";
import styles from "./index.module.scss"
import ScheduleCard from "@/components/ScheduleCard";
import ConfirmationModal from "@/components/ConfirmationModal";
import { ReactNode, useState } from "react";

export default function Schedules() {
    
    const theme = useTheme();
    const [cancelService, setCancelService] = useState<Service | null>(null);

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
                    {dummySchedules.map((schedule, i) => (
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
