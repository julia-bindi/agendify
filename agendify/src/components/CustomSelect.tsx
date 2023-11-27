import { ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type CustomSelectProps = {
    options: string[];
    onChange?: (a: string) => void;
  };

export default function CustomSelect({
    options,
    onChange,
}: CustomSelectProps) {

    const [selectedOption, setSelectedOption] = useState<string>();
    
    const handleSelect = (event: SelectChangeEvent<typeof selectedOption>) => {
        const {
            target: { value },
        } = event;
        setSelectedOption(
        // On autofill we get a stringified value.
            value,
        );
        onChange && onChange(value ? value : "");
    };

    return (
        <Select 
            title={selectedOption}
            sx={{width: "100%"}} 
            value={selectedOption}
            onChange={handleSelect}
            renderValue={(selected: string) => selected}
            input={<OutlinedInput label="Selecione" />}
            label="Selecione"
        >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    <ListItemText primary={option} />
                </MenuItem>
            ))}
        </Select>
    );
};
  