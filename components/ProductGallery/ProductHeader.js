import { Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { IoReturnUpBackSharp } from "react-icons/io5";

const ProductHeader = ({ ...props }) => {
  const titleAnimate = {
    initial: { y: -250, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: props.index * 0.3 },
    },
  };
  const subtitleAnimate = {
    initial: { x: -250, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: props.index * 0.3 },
    },
  };
  const linkAnimate = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: props.index * 0.3,
        repeat: Infinity,
        repeatDelay: 0,
      },
    },
  };
  console.log(props.productTitle.attributes.category.data.attributes);
  return (
    <Flex
      display={"flex"}
      as={motion.div}
      initial={"initial"}
      animate={"animate"}
      flexDir='row'
      mb={"0.5rem"}
      width={"full"}
      pr={"16px"}
      justifyContent='space-between'
    >
      <Flex flexDir='column' width={"full"}>
        <Heading
          as={motion.h1}
          color='primary.black'
          variant={"h3"}
          initial={"initial"}
          animate={"animate"}
          variants={titleAnimate}
        >
          {props.productTitle.attributes.category.data.attributes.title}
        </Heading>
        <Heading
          as={motion.h1}
          variants={subtitleAnimate}
          color='primary.gray'
          variant={"h3"}
        >
          {props.productTitle.attributes.category.data.attributes.subtitle}
        </Heading>
      </Flex>
      <Link as={NextLink} href={"/"}>
        <Flex as={motion.div} variants={linkAnimate}>
          <Icon
            as={IoReturnUpBackSharp}
            boxSize={{ base: 6, sm: 10, md: 12, lg: 14 }}
            color={"red"}
          />
        </Flex>
      </Link>
    </Flex>
  );
};

export default ProductHeader;
