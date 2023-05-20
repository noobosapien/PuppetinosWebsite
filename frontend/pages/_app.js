import '../styles/globals.css';
import * as React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { StoreProvider } from '../utils/store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();

  const handleRouteChange = (url) => {
    window &&
      window.gtag('config', 'UA-223410216-1', {
        page_path: url,
      });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <StoreProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <PayPalScriptProvider
            options={{
              'client-id':
                'AcePzwaHqLntcV6D1wD9ACOlf0v7pqJ_AGZ-K3U0CqD3wEqx_nByDdHTkgwdrodvcHV1BnA2t-WXpbTZ',
            }}
            deferLoading={true}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </PayPalScriptProvider>
        </ThemeProvider>
      </CacheProvider>
    </StoreProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
