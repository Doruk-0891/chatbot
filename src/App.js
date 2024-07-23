import React, {useState} from "react";

function App() {

  return (
    <div className="App">
      app
    </div>
  );
}

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: "Ubuntu , OpenSans, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          textTransform: "none",
          backgroundColor: "#D7C7F4",
        },
        contained: {
          color: "#000000",
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        width: "90%",
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: "36.77px"
      },
      h2: {
        fontWeight: "400",
        fontSize: "28px",
        lineHeight: "32.17px",
      },
      h3: {
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "27.58px"
      }
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        background: "#FAFBFE",
        borderRadius: "8px",
        color: "#D7C7F4",
        "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#D7C7F4",
          },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        background: "#FFFFFF",
        borderRadius: "5px",
        color: "#D7C7F4",
        "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#00000073",
          },
      },
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#9785BA',
            light: '#F9FAFA',
            dark: '#AF9FCD'
          },
          secondary: {
            main: '#D7C7F4',
            light: '#FFFFFF'
          },
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