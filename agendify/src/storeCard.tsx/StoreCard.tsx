import { Box, Typography } from '@mui/material';
import styles from "./index.module.scss"
import { AccessibilityContext } from '@/context/AccessibilityContext';
import React from 'react';

type StoreCardProps = {
    image: string,
    name: string,
    category: string[],
    description: string,
    workDays: string[],
    startTime: string,
    endTime: string,
    street: string,
    homeNumber: string,
    neighborhood: string,
    state: string,
    city: string,
    onClick?: () => {}
};

export default function StoreCard({
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
    onClick,
}: StoreCardProps) {
    const context = React.useContext(AccessibilityContext);
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '10px',
            }}
            onClick={onClick}
        >
            <img
              src={image}
              alt={name}
              className={styles.store_card_img}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    gap: '6px'
                }}
            >
                <Typography sx={{fontSize: context.fontMultiplier*24}}>{name}</Typography>
                <Typography sx={{fontSize: context.fontMultiplier*16}}>{category.join(', ')}</Typography>
                <Typography sx={{fontSize: context.fontMultiplier*14}}>{description}</Typography>
                <Typography sx={{fontSize: context.fontMultiplier*14}}>{workDays.join(', ') + " - " + startTime + " às " + endTime}</Typography>
                <Typography sx={{fontSize: context.fontMultiplier*14}}>{[street, homeNumber, neighborhood, city, state].join(', ')}</Typography>
            </Box>
        </Box>
    );
};
  