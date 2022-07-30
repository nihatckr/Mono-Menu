import NextLink from "next/link";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextImage from "next/image";
const CategoryGallery = ({ ...props }) => {
  const fadeUp = {
    initial: { translateY: 200, opacity: 0 },
    animate: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 1.2, delay: props.i * 0.3 },
    },
  };
  return (
    <Flex key={props.attributes.createdAt} position={"relative"}>
      <Box
        as={motion.div}
        whileHover={{ y: -10, transition: { duration: 0.5 } }}
        initial={"initial"}
        animate={"animate"}
        variants={fadeUp}
        position={"relative"}
      >
        <Image
          objectFit={"cover"}
          rounded={4}
          width={"full"}
          height={"full"}
          src={props.attributes.image.data.attributes.name}
          alt={props.attributes.image.data.attributes.alternativeText}
        />

        <Flex
          flexDir={"column"}
          position={"absolute"}
          bottom={2}
          left={2}
          zIndex={1}
          cursor={"pointer"}
        >
          <Heading color={"gray.100"} variant={"h3"}>
            {props.attributes.title}
          </Heading>
          <Text variant={"subtitle"} color={"gray.100"}>
            {props.attributes.subtitle}
          </Text>
        </Flex>
        <Link href={`/${props.attributes.slug}`} as={NextLink}>
          <Box
            cursor={"pointer"}
            width={"full"}
            height={"full"}
            position={"absolute"}
            top={0}
            left={0}
            style={{
              backgroundImage:
                "linear-gradient( rgba(255, 255, 255, 0.00),rgb(3, 3, 3, 0.4)",
            }}
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default CategoryGallery;
