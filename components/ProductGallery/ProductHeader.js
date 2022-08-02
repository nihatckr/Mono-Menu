import NextLink from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
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
    <FlexContainer initial={"initial"} animate={"animate"}>
      <FlexWrap>
        <HeadingTitle
          initial={"initial"}
          animate={"animate"}
          variants={titleAnimate}
        >
          {props.productTitle.attributes.category.data.attributes.title}
        </HeadingTitle>
        <HeadingSubtitle variants={subtitleAnimate}>
          {props.productTitle.attributes.category.data.attributes.subtitle}
        </HeadingSubtitle>
      </FlexWrap>
      <Link href={"/"}>
        <FlexWrap variants={linkAnimate}>
          <IoReturnUpBackSharp size={"34px"} color={"red"} />
        </FlexWrap>
      </Link>
    </FlexContainer>
  );
};

export default ProductHeader;
const FlexContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const FlexWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const Link = styled(NextLink)``;
const HeadingTitle = styled(motion.h1)`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.light.colors.title};
  font-weight: ${(props) => props.theme.fontWeight.md};
  line-height: ${(props) => props.theme.lineHeight.xxl};
  text-transform: uppercase;
  margin-bottom: 6px;
`;
const HeadingSubtitle = styled(motion.h2)`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.light.colors.subtitle};
  font-weight: ${(props) => props.theme.fontWeight.md};
  line-height: ${(props) => props.theme.lineHeight.xxl};
  text-transform: uppercase;
`;
