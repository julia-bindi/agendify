import { Checkbox, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type CustomSelectProps = {
    options: string[];
    onChange?: (a: string[]) => void;
  };

export default function CustomSelect({
    options,
    onChange,
}: CustomSelectProps) {

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    
    const handleSelect = (event: SelectChangeEvent<typeof selectedOptions>) => {
        const {
            target: { value },
        } = event;
        setSelectedOptions(
        // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        onChange && onChange(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Select 
            multiple
            title={selectedOptions.join(', ')}
            sx={{width: "100%"}} 
            value={selectedOptions}
            onChange={handleSelect}
            renderValue={(selected: string[]) => selected.join(', ')}
            input={<OutlinedInput label="Selecione" />}
        >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    <Checkbox checked={selectedOptions.indexOf(option) > -1}/>
                    <ListItemText primary={option} />
                </MenuItem>
            ))}
        </Select>
    );
};
  