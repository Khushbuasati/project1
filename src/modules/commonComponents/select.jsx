import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import colors from '../../constant/colors';

const Dropdown = ({ title, list, img, paddingLeft }) => {
    const [selectItem, setSelectedItem] = useState("");

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: '100%', background: colors.whiteTransperent }}>
            <InputLabel sx={{ color: colors.white, fontSize: 14, paddingLeft: paddingLeft || '0.5rem' }}>{img}{title}</InputLabel>
            <Select
                value={selectItem}
                onChange={handleChange}
                label={title}
                sx={{
                    paddingLeft: paddingLeft || '0.5rem',
                    '&::before': {
                        content: '""',
                        borderBottom: `1px solid ${colors.white}`
                    },
                    '&::after': {
                        content: '""',
                        borderBottom: `1px solid ${colors.white}`
                    }
                }}
            >
                {
                    list?.map((item) => <MenuItem value={item}>{item}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}

export default Dropdown;
