import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import theme from "../../test/styles/Theming";
import Fonts from "../../test/styles/Theming/fonts";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

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
