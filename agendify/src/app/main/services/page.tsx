"use client";
import ConfirmationModal from "@/components/ConfirmationModal";
import { dummyServices, dummyDates, dummyTimes, dummyStores } from "@/utils/constants";
import { useTheme } from "@mui/material";
import styles from "./index.module.scss"
import { ReactNode, useState } from "react";
import StoreCard from "@/storeCard.tsx/StoreCard";
import ServiceCard from "@/components/ServiceCard";

export default function Login() {
    const theme = useTheme();
    const [confirmService, setConfirmService] = useState<Service | null>(null);

    const handleConfirm = (service:Service) => {
        setConfirmService(service);
    }
    
    const renderConfirm = (): ReactNode => (
        <ConfirmationModal
            title={confirmService ? confirmService.name : ""}
            subtitle={confirmService ? confirmService.date + " - " + confirmService.time + "\nR$ " + confirmService.cost.toFixed(2) : ""}
            onConfirm={() => {}}
            onClose={() => setConfirmService(null)}
        />
    );

    return (
        <>
            {confirmService && renderConfirm()}
            <div className={styles.main_container}>
                <StoreCard {...dummyStores[0]}/>
                <div className={styles.services_container} style={{borderColor: `${theme.palette.primary.main}`}}>
                    <div className={styles.main_scroll}>
                        {dummyServices.map((service, i) => (
                            <ServiceCard 
                                dates={dummyDates}
                                times={dummyTimes} 
                                onConfirm={handleConfirm} 
                                key={service.name + i} 
                                {...service}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
