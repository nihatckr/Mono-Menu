import { Box, HStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

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

const Header = ({ children }) => {
  return (
    <HStack
      spacing={0}
      direction={"column"}
      w='full'
      display='flex'
      minH='3.25rem'
      alignItems={"center"}
      position={"fixed"}
      background={"white"}
      zIndex={2}
    >
      <Flex
        w={"full"}
        alignItems={"center"}
        as={motion.div}
        variants={titleAnimate}
        initial={"initial"}
        animate={"animate"}
        flexDir={"column"}
      >
        <Flex w='full' alignItems={"center"} maxW='63.75rem'>
          <Box w='full' h='1px' color={"red.500"} bgColor='gray.900' />
          <Flex margin='auto' as={motion.div} variants={logoAnimate} px={2}>
            {children}
          </Flex>
          <Box w='full' h='1px' color={"red.500"} bgColor='gray.800' />
        </Flex>
      </Flex>
    </HStack>
  );
};

export default Header;
