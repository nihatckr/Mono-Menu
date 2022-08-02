import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const titleAnimate = {
  initial: { y: -250, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0 } },
};
const logoAnimate = {
  initial: { rotate: 0, scale: 0 },
  animate: {
    rotate: [0, 0, 360],
    scale: 1.2,
    transition: { duration: 1, delay: 0 },
  },
};

const FlexContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Flex = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const LogoWrap = styled(motion.div)`
  padding-left: 10px;
  padding-right: 10px;
`;

const Span = styled.span`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Header = ({ children }) => {
  return (
    <FlexContainer>
      <Flex
        w={"full"}
        as={motion.div}
        variants={titleAnimate}
        initial={"initial"}
        animate={"animate"}
        flexDir={"column"}
      >
        <Span />
        <LogoWrap variants={logoAnimate}>{children}</LogoWrap>
        <Span />
      </Flex>
    </FlexContainer>
  );
};

export default Header;
