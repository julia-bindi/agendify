import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#00AEEF",
      //light: primary.light,
      //dark: primary.dark,
      contrastText: "#FFFFFF",
    },
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
            lineHeight: 0,
            borderRadius: 8,
            padding: '0px 16px'
          },
        },
      ],
    },
  },
});

export default theme;