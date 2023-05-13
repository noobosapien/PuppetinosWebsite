import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const slateGray = '#2A4747';
const emeraldGreen = '#439775';
const lightGreen = '#00FEC1';
const black = '#474747';
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: slateGray,
    },
    secondary: {
      main: emeraldGreen,
    },
    error: {
      main: red.A400,
    },
    common: {
      white: '#ffffff',
      black,
      slateGray,
      emeraldGreen,
      lightGreen,
    },
  },

  typography: {
    h1: {
      fontSize: '6.5rem',
      fontFamily: 'Montserrat',
      color: black,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '5.5rem',
      color: black,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '4.5rem',
      color: black,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: '4rem',
      color: black,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '3rem',
      color: black,
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: '1.0rem',
      color: black,
    },
    body2: {
      fontFamily: 'Montserrat',
      fontSize: '1.0rem',
      color: black,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: '#eee',
      },
      label: {
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        color: '#fff',
      },
    },
    '.MuiTextField-root': {
      fontFamily: 'Montserrat',
    },
  },
});

export default theme;
