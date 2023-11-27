import { AccessibilityContext } from '@/context/AccessibilityContext';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

type ScheduleCardProps = {
    name: string,
    cost: number,
    duration: number,
    description: string,
    date: string,
    time: string,
    onDelete: (a:Service) => void
};

export default function ScheduleCard({
    name,
    cost,
    duration,
    description,
    date,
    time,
    onDelete
}: ScheduleCardProps) {
    const context = React.useContext(AccessibilityContext);
    const theme = useTheme();

    const handleDelete = () => {
        onDelete({
            name: name,
            cost: cost,
            duration: duration,
            description: description,
            date: date ? date : '',
            time: time ? time : '',
        })
    }

    return (
        <Box
            sx={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'start',
                padding: '15px',
                borderRadius: '10px',
                '&:hover':{
                    backgroundColor: theme.palette.primary.light + '20',
                }
            }}
        >  
            <IconButton
                component="label"
                sx={{
                    width: 130,
                    height: 130,
                    border: '1px solid',
                    borderColor: `${theme.palette.primary.main}`,
                    backgroundColor: "#FFCFCF",
                    '&:hover':{
                        backgroundColor: "#FFCFCF99"
                    }
                }}
                onClick={handleDelete}
            >
                <DeleteIcon
                    fontSize="large"
                />
            </IconButton>
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'column',
                }}
            >
                <Typography sx={{fontSize: context.fontMultiplier*24}}>{name}</Typography>
                <Typography sx={{fontSize: context.fontMultiplier*16}}>{"Duração de " + duration + " minutos"}</Typography>
                <Typography sx={{fontSize: context.fontMultiplier*14}}>{description}</Typography>
                <Typography sx={{fontSize: context.fontMultiplier*14}}>{date + ' - ' + time}</Typography>
                <Typography>{"R$ " + cost.toFixed(2)}</Typography>
            </Box>
        </Box>
    );
};
  