import React from "react";
import Box from '@mui/material/Box';
import Cards from "../../components/Cards/Cards";

const NewConversationPage = () => {
    return (
        <Box>
            <Box height='600px'>
                <Cards />
            </Box>
            <Box height='600px'>
            <Cards />

            </Box>

        </Box>
    );
}

export default NewConversationPage;