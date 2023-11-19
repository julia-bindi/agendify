import { outlinedInputClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const cores = {
  primary: {
    main: "#00AEEF",
    light: "#64CFF7",
    dark: "#0599D1",
    contrastText: "#FFFFFF",
    background: '#00AEEF0F',
    text: '#000000',
    warning: '#F00'
  },
  secondary: {
    main: "#009A34",
    light: "#F00",
  },
}

const theme = createTheme({
  palette: {
    mode: 'light',
    ...cores,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            height: 32,
            lineHeight: 0,
            borderRadius: 4,
            padding: '0px 24px'
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': cores.primary.main,
          '--TextField-brandBorderHoverColor': cores.primary.main,
          '--TextField-brandBorderFocusedColor': cores.primary.main,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        root: {
          height: 32,
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            backgroundColor: cores.primary.background,
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderBlock: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: '8px',
          border: '1px solid ' + cores.primary.main,
          backgroundColor: cores.primary.contrastText,
          color: cores.primary.text,
          maxWidth: 200,
          textAlign: 'center'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: cores.primary.main
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        colorPrimary: {
          color: cores.primary.main
        }
      }
    }
  },
});

export default theme;