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
            }}
        >
            <Image
              src={image}
              alt={name}
              width={200}
              height={46}
              priority
            />
            <Box
                sx={{

                }}
            >
                <Typography>{name}</Typography>
                <Typography>{category.join(', ')}</Typography>
                <Typography>{description}</Typography>
                <Typography>{workDays.join(', ') + " " + startTime + " às " + endTime}</Typography>
                <Typography>{[street, homeNumber, neighborhood, city, state].join(', ')}</Typography>
            </Box>
        </Box>
    );
};
  