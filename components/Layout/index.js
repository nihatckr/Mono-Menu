import { VStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Header from "../Header";
import MonoLogo from "../Logo";

const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Layout = ({ children }) => {
  return (
    <Flex
      w='full'
      flexDir={"column"}
      px={4}
      as={motion.div}
      variants={pageTransition}
      initial={"initial"}
      animate={"animate"}
      exit={{ opacity: 0, transition: { duration: 3 } }}
    >
      <Head>
        <title>Mono Hotel Menu</title>
        <meta name='description' content='Mono Hotel Terrace' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <VStack w='full' margin={"auto"}>
        <Header>
          <MonoLogo width={"22px"} height={"22px"} />
        </Header>
      </VStack>
      <VStack w='full' maxW='63.75rem' margin={"auto"}>
        {children}
      </VStack>
    </Flex>
  );
};

export default Layout;
