import { Flex, Heading, Image, Text, GridItem, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import TurkishLiraIcon from "../Logo/TurkishLiraIcon";

const ProductCategory = ({ ...props }) => {
  const fadeUp = {
    initial: { y: 200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, delay: props.i * 0.3 },
    },
  };

  return (
    <>
      <GridItem
        key={props.attributes.id}
        as={motion.div}
        initial={"initial"}
        animate={"animate"}
        variants={fadeUp}
      >
        <Flex w='full'>
          <Box minW='80px'>
            <Image
              objectFit={"cover"}
              as={motion.img}
              initial={{ opacity: 1 }}
              whileHover={{
                opacity: 0.6,
                transition: { duration: 1 },
              }}
              py={1}
              rounded={10}
              height={{
                base: "100px",
                sm: "120px",
                md: "140px",
                lg: "180px",
              }}
              minH='80px'
              width={{
                base: "100px",
                sm: "120px",
                md: "140px",
                lg: "180px",
              }}
              minW='80px'
              src={props.attributes.image.data.attributes.name}
              alt={props.attributes.image.data.attributes.alternativeText}
            />
          </Box>
          <Flex w='full' py={1}>
            <Flex
              flexDir={"row"}
              width={"full"}
              ml={2}
              justifyContent={"space-between"}
            >
              <Flex flexDir={"column"}>
                <Text variant='title' color='primary.black'>
                  {props.attributes.title}
                </Text>
                <Text variant='subtitle' color='primary.gray'>
                  {props.attributes.subtitle}
                </Text>
              </Flex>
              <Flex>
                <Flex width={"full"} alignItems={"start"}>
                  <Flex alignItems={"center"}>
                    <TurkishLiraIcon width={"8px"} height={"8px"} />
                    <Heading as='h3' variant='h3' color='primary.black'>
                      {props.attributes.price}
                    </Heading>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem colStart={2} colEnd={5} h='10'></GridItem>
    </>
  );
};

export default ProductCategory;
