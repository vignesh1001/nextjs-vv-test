/** @format */
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { Provider } from '../context';
import theme from '../theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <title>Maaco</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
