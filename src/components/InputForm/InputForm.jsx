import { Stack } from "@mui/material";
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const InputForm = () => {
    return (
        <Stack direction={{xs: 'column', 'md': 'row'}} justifyContent='space-between' gap={2}>
            <TextField id="outlined-basic" label="Let's chat" variant="outlined" fullWidth />
            <Button variant="contained">Ask</Button>
            <Button variant="contained">Save</Button>
        </Stack>
    );
}

export default InputForm;