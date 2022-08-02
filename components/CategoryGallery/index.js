import NextLink from "next/link";

import { motion } from "framer-motion";
import styled from "styled-components";

const Stack = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Card = styled(motion.div)`
  height: 100%;
  width: 100%;
`;
const Link = styled(NextLink)``;

const CardImage = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-position: center;
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
`;
const Heading = styled.h1`
  color: ${(props) => props.theme.dark.colors.title};
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.theme.fontWeight.xxl};
  line-height: ${(props) => props.theme.lineHeight.xxl};

  margin: 0;
  padding-left: 10px;

  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.md};
    line-height: ${(props) => props.theme.lineHeight.md};
  }
`;
const Text = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.dark.colors.subtitle};
  font-weight: ${(props) => props.theme.fontWeight.xl};
  line-height: ${(props) => props.theme.lineHeight.xl};
  margin: 0;
  padding-left: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: ${(props) => props.theme.fontWeight.xs};
    line-height: ${(props) => props.theme.lineHeight.xs};
  }
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(3, 3, 3, 0.4));
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 1;
`;

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
    <Stack>
      <Card
        whileHover={{ y: -10, transition: { duration: 0.5 } }}
        initial={"initial"}
        animate={"animate"}
        variants={fadeUp}
      >
        <CardImage
          src={props.attributes.image.data.attributes.name}
          alt={props.attributes.image.data.attributes.alternativeText}
        />
        <TextContainer>
          <Heading>{props.attributes.title}</Heading>
          <Text>{props.attributes.subtitle}</Text>
        </TextContainer>
        <Link href={`/menu/${props.attributes.slug}`}>
          <Overlay />
        </Link>
      </Card>
    </Stack>
  );
};

export default CategoryGallery;
