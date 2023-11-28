import CompanyCard from "@/components/CompanyCard";
import CustomMultipleSelect from "@/components/CustomMultipleSelect";
import useHttp from "@/hooks/useHttp";
import { COMPANIES_REQUEST } from "@/utils/requests";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    List,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { mountFilter } from "./utils";

export default function ClientMain() {
    const theme = useTheme();

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const [companies, setCompanies] = useState<string[]>([]);
    const [catogories, setCategories] = useState<string[]>([]);
    const [states, setStates] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [catogoriesSelected, setCategoriesSelected] = useState<string[]>([]);
    const [statesSelected, setStatesSelected] = useState<string[]>([]);
    const [citiesSelected, setCitiesSelected] = useState<string[]>([]);

    const { loading, data, requestHttp } = useHttp();

    useEffect(() => {
        requestHttp(COMPANIES_REQUEST, {});
    }, []);

    useEffect(() => {
        if (data) {
            setCompanies(data);
            const { catogoriesFilter, statesFilter, citiesFilter } =
                mountFilter(data);
            setCategories(catogoriesFilter);
            setStates(statesFilter);
            setCities(citiesFilter);
        }
    }, [data]);

    const filterCompanies = () => {
        companies.filter((c) => {});
    };

    return (
        <Container
            disableGutters
            sx={{
                height: "100%",
                display: "flex",
                padding: "32px 0px",
                gap: "24px",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    borderRadius: 8,
                    border: `1px solid ${theme.palette.primary.main}`,
                    maxWidth: 300,
                }}
            >
                <Typography sx={{ fontSize: 24 }}>Filtros</Typography>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Categorias
                    </Typography>
                    <CustomMultipleSelect
                        disabled={loading}
                        options={catogories}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Horários
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <TextField
                            onChange={(event) =>
                                setStartTime(event.target.value)
                            }
                            placeholder="00:00"
                            type="time"
                        />
                        <Typography>às</Typography>
                        <TextField
                            onChange={(event) => setEndTime(event.target.value)}
                            placeholder="00:00"
                            type="time"
                        />
                    </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Estado
                    </Typography>
                    <CustomMultipleSelect disabled={loading} options={states} />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ alignSelf: "flex-start" }}>
                        Cidade
                    </Typography>
                    <CustomMultipleSelect disabled={loading} options={cities} />
                </Box>
                <Button variant="contained" disabled={loading}>
                    Aplicar
                </Button>
            </Container>
            <Container
                sx={{
                    height: "100%",
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: 8,
                    padding: "16px",
                }}
            >
                {loading ? (
                    <Container
                        sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CircularProgress />
                    </Container>
                ) : (
                    <Container
                        sx={{
                            height: "100%",
                            overflowY: "auto",
                        }}
                    >
                        <List>
                            {data &&
                                data.map((store: CompanyType) => (
                                    <CompanyCard
                                        key={store.email}
                                        button={true}
                                        company={store}
                                    />
                                ))}
                        </List>
                    </Container>
                )}
            </Container>
        </Container>
    );
}
