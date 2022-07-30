import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

import Fonts from "../styles/theming/fonts";
import { theme } from "../styles/theming";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
