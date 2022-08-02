import NextLink from "next/link";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { GET_CATEGORİES } from "../../pages/index";

import { useQuery } from "@apollo/client";
import styled, { keyframes } from "styled-components";
import { IoSync } from "react-icons/io5";

const Wrap = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;

  margin-bottom: 20px;
`;
const Link = styled(NextLink)``;
const WrapItem = styled(motion.div)`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) => props.color || "black"};
  border-radius: 25px;
  margin-top: 4px;
  padding: 2px;
  margin-left: 4px;
`;

const Image = styled(motion.img)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  object-fit: cover;
  background-position: center;
`;

const BoxText = styled(motion.h2)`
  color: black;
  color: ${(props) => props.theme.light.colors.subtitle};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.md};
  line-height: ${(props) => props.theme.lineHeight.md};
  margin: auto;
`;
const Text = styled.div`
  color: ${(props) => props.theme.color.link};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate} 0.8s linear infinite;
`;

const MenuTitle = () => {
  const { loading, error, data } = useQuery(GET_CATEGORİES);

  const router = useRouter();
  const slug = router.query.slug;

  if (loading)
    return (
      <Rotate>
        <IoSync />
      </Rotate>
    );
  if (error) return <Text>Error</Text>;

  return (
    <Wrap initial={"initial"} animate={"animate"}>
      {data.categories.data.map((item, index) => {
        const { attributes, id } = item;
        const fadeUp = {
          initial: { translateY: -200, opacity: 0 },
          animate: {
            translateY: 0,
            opacity: 1,
            transition: { duration: 1.2, delay: index * 0.3 },
          },
        };

        return (
          <Link key={id} href={attributes.slug}>
            <WrapItem
              initial={"initial"}
              animate={"animate"}
              variants={fadeUp}
              color={slug === attributes.slug ? "red" : " "}
            >
              <Image src={attributes.image.data.attributes.name} />
              <BoxText>{attributes.title} </BoxText>
            </WrapItem>
          </Link>
        );
      })}
    </Wrap>
  );
};

export default MenuTitle;
