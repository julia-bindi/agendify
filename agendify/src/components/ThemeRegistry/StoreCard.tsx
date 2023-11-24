import { Box } from "@mui/material"
import Image from "next/image";

type StoreInfo = {
    image: string,
    name: string,
    categories: string[],
    description: string,
    days: string[],
    openTime: string,
    closeTime: string,
    address: string,
}

type StoreCardProps = {
    storeInfo: StoreInfo
}

export default function StoreCard({
    storeInfo
}: StoreCardProps) {
    return (
        <Box>
            <Image
              src={storeInfo.image}
              alt={storeInfo.name}
              width={200}
              height={46}
              priority
            />
        </Box>
    );
};
  