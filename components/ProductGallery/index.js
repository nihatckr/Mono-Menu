import { motion } from "framer-motion";
import React from "react";
import TurkishLiraIcon from "../Logo/TurkishLiraIcon";
import styled from "styled-components";

const Card = styled(motion.div)`
  display: flex;
  width: 100%;
  margin-bottom: 4px;
`;

const CardImage = styled(motion.img)`
  display: flex;
  width: 120px;
  height: 120px;
  min-width: 100px;
  cursor: pointer;
  border-radius: 10px;
  object-fit: cover;
`;

const Flex = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const CardItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-left: 0.25rem;
`;
const Box = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.25rem;
`;
const Price = styled.h2`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.light.colors.price};
  font-weight: ${(props) => props.theme.fontWeight.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeight.lg};
    line-height: ${(props) => props.theme.lineHeight.lg};
  }
`;

const TextTitle = styled.p`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.light.colors.title};
  font-size: ${(props) => props.theme.fontSize.ml};
  font-weight: ${(props) => props.theme.fontWeight.lg};
  line-height: ${(props) => props.theme.lineHeight.xl};
  margin-bottom: 6px;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.ml};
    font-weight: ${(props) => props.theme.fontWeight.md};
    line-height: ${(props) => props.theme.lineHeight.md};
  }
`;
const TextSubtitle = styled.p`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.light.colors.subtitle};
  font-size: ${(props) => props.theme.fontSize.ml};
  font-weight: ${(props) => props.theme.fontWeight.md};
  line-height: ${(props) => props.theme.lineHeight.xxl};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.ml};
    font-weight: ${(props) => props.theme.fontWeight.md};
    line-height: ${(props) => props.theme.lineHeight.md};
  }
`;
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
    <Card
      key={props.attributes.id}
      initial={"initial"}
      animate={"animate"}
      variants={fadeUp}
    >
      <CardImage
        initial={{ opacity: 1 }}
        whileHover={{
          opacity: 0.6,
          transition: { duration: 1 },
        }}
        src={props.attributes.image.data.attributes.name}
        alt={props.attributes.image.data.attributes.alternativeText}
      />
      <Flex>
        <CardItem>
          <TextTitle>{props.attributes.title}</TextTitle>
          <TextSubtitle>{props.attributes.subtitle}</TextSubtitle>
        </CardItem>
        <CardItem>
          <Box>
            <TurkishLiraIcon width={"12px"} height={"12px"} />
            <Price>{props.attributes.price}</Price>
          </Box>
        </CardItem>
      </Flex>
    </Card>
  );
};

export default ProductCategory;
