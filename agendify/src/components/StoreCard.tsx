import { Button, Box, Typography } from '@mui/material';
import Image from "next/image";

type StoreCardProps = {
    image: string,
    name: string,
    categories: string[],
    description: string,
    days: string[],
    openingTime: string,
    closingTime: string,
    address: string
};

export default function StoreCard({
    image,
    name,
    categories,
    description,
    days,
    openingTime,
    closingTime,
    address
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
                <Typography>{categories.join(', ')}</Typography>
                <Typography>{description}</Typography>
                <Typography>{days.join(', ') + " " + openingTime + " às " + closingTime}</Typography>
                <Typography>{address}</Typography>
            </Box>
        </Box>
    );
};
  