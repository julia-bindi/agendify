import {
    Avatar,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    return (
        <ListItemButton
            divider
            sx={{ gap: "16px" }}
            onClick={() => {
                router.push("/main/services");
            }}
        >
            <ListItemAvatar>
                <Avatar
                    src={image}
                    alt={name}
                    variant="rounded"
                    sx={{ width: 144, height: 144 }}
                />
            </ListItemAvatar>
            <ListItemText
                secondary={
                    <>
                        <Typography sx={{ fontSize: 24 }}>{name}</Typography>
                        <Typography sx={{ fontSize: 16 }}>
                            {category.join(", ")}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            {description}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            {workDays.join(", ")}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            {startTime + " às " + endTime}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            {[
                                street,
                                homeNumber,
                                neighborhood,
                                city,
                                state,
                            ].join(", ")}
                        </Typography>
                    </>
                }
            />
        </ListItemButton>
    );
}
