import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Container, Grid, Stack, Box, Typography } from "@mui/material";
import InputForm from "./components/InputForm/InputForm";

function App() {

  return (
    <Grid container>

      <Grid item xs={3}>
            <Navbar />
      </Grid>

      <Grid item xs={12} md={9}>
        <Container maxWidth="xl" position="relative">
          <Stack direction="column" justifyContent="space-between">
            <Box position="fixed" ml={10}>
              <Typography fontSize="28px" fontWeight="700" color="primary.main">Bot AI</Typography>
            </Box>
            <Box mt={5}>
              <Outlet />
            </Box>
            <Box style={{
              position: 'fixed',
              bottom: '0',
              margin: '1rem auto',
              backgroundColor: '#FFFFFF'
            }} 
            width={{ xs: '93%', md: '70%'}}>
              <InputForm />
            </Box>
          </Stack>
        </Container>

      </Grid>
    </Grid>
  );
}

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          background: {
            default: '#FFFFFF'
          },
          text: {
            primary: '#AF9FCD',
          },
        }
      : {
          // palette values for dark mode
          background: {
            default: '#3C3C3C',
          },
          text: {
            primary: 'linear-gradient(180deg, #FFFFFF 0%, #9785BA 100%)',
          },
        }),
  },
});

export default App;