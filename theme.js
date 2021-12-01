/** @format */

import { createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: '#004E83',
      dark: '#2c5878',
      light: '#006bb7',
    },
    secondary: {
      main: '#AF0E11',
    },
    textPrimary: {
      main: '#595959',
    },
    gray: {
      main: '#333',
      light: '#595959',
      dark: '#333',
      contrastText: '#EBEBEB',
    },
    error: {
      main: red.A400,
    },
    info: {
      main: '#fffde7',
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        body1: 'p',
      },
    },
  },
  typography: {
    fontFamily: [
      '"Gotham"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 16,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      lineHeight: '2em',
      margin: '8px 0px',
    },

    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2em',
      margin: '8px 0px',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 700,
      lineHeight: '2em',
      margin: '8px 0px',
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 600,
      lineHeight: '2em',
      margin: '8px 0px',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
      margin: '8px 0px',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      margin: '8px 0px',
    },
    body1: {
      fontSize: '1rem',
      // lineHeight: "1em",
      margin: '2px 0px',
    },
    body2: {
      fontSize: '0.8rem',
      // lineHeight: 1.1,
      margin: '2px 0px',
    },
    navigationLabel: {
      fontSize: '1rem',
      lineHeight: 1.1,
      textTransform: 'uppercase',
      margin: '2px 10px',
      fontWeight: 500,
      color: '#595959',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: 100,
          height: 40,
          borderRadius: 0,
          margin: '5px 12px 5px 0px',
          padding: '12px 16px 0 16px',
        },
      },
    },
    // MuiTextField: {
    //     styleOverrides: {
    //         root: {
    //             border: "1px solid #979797",
    //             borderRadius: 0,
    //             padding: "8px 0px 0px 12px",
    //             margin: "10px 0px",
    //             lineHeight: "2em",
    //         },
    //     },
    // },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          marginTop: '12px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // border: "5px solid #004E83",
          borderRadius: 0,
          lineHeight: '2em',
          height: '45px',
          margin: '10px 0px',
        },
      },
    },
  },
});

export default theme;
