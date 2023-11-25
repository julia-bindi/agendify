import { Button, Box, Typography } from '@mui/material';
import Image from "next/image";

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
}: StoreCardProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '10px',
            }}
        >
            <Image
              src={image}
              alt={name}
              width={144}
              height={144}
              style={{
                borderRadius: '8px'
              }}
              priority
            />
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    gap: '6px'
                }}
            >
                <Typography sx={{fontSize: 1*24}}>{name}</Typography>
                <Typography sx={{fontSize: 1*16}}>{category.join(', ')}</Typography>
                <Typography sx={{fontSize: 1*14}}>{description}</Typography>
                <Typography sx={{fontSize: 1*14}}>{workDays.join(', ') + " - " + startTime + " às " + endTime}</Typography>
                <Typography sx={{fontSize: 1*14}}>{[street, homeNumber, neighborhood, city, state].join(', ')}</Typography>
            </Box>
        </Box>
    );
};
  