import NextLink from "next/link";

import {
  Avatar,
  Tag,
  TagLabel,
  Link,
  Wrap,
  WrapItem,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { GET_CATEGORİES } from "../../pages/index";

import { useQuery } from "@apollo/client";

const MenuTitle = () => {
  const { loading, error, data } = useQuery(GET_CATEGORİES);

  const router = useRouter();
  const slug = router.query.slug;

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  return (
    <Wrap
      as={motion.div}
      width={"full"}
      initial={"initial"}
      animate={"animate"}
      my={"1rem"}
      pr={"16px"}
    >
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
          <Link key={id} as={NextLink} href={attributes.slug}>
            <WrapItem
              as={motion.div}
              initial={"initial"}
              animate={"animate"}
              variants={fadeUp}
            >
              <Tag
                size={{ base: "sm", md: "md", lg: "lg" }}
                variant='outline'
                cursor={"pointer"}
                mr={2}
                colorScheme={slug === attributes.slug ? "red" : " "}
              >
                <Avatar
                  size='xs'
                  name='Segun Adebayo'
                  mr={2}
                  src={attributes.image.data.attributes.name}
                />
                <TagLabel>{attributes.title} </TagLabel>
              </Tag>
            </WrapItem>
          </Link>
        );
      })}
    </Wrap>
  );
};

export default MenuTitle;
