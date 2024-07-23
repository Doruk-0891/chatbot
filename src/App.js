import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
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