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
  },
  secondary: {
    main: "#009A34",
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
  },
});

export default theme;