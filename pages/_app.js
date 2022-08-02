import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AnimatePresence exitBeforeEnter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </ApolloProvider>
  );
}

export default MyApp;
