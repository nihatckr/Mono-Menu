import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Header from "../Header";
import MonoLogo from "../Logo";
import styled from "styled-components";

const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
const Wrapper = styled(motion.section)`
  padding-left: 20px;
  padding-right: 20px;
`;

const HeaderFlex = styled(motion.div)`
  margin: auto;
`;
const MainFlex = styled(motion.div)`
  margin: auto;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper
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
      <HeaderFlex>
        <Header>
          <MonoLogo width={"22px"} height={"22px"} />
        </Header>
      </HeaderFlex>
      <MainFlex>{children}</MainFlex>
    </Wrapper>
  );
};

export default Layout;
