import { Flex, Grid, Heading, HStack, Spinner } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { useEffect } from "react";
import Layout from "../components/Layout";

import { motion } from "framer-motion";

import ProductCategory from "../components/ProductGallery";
import ProductHeader from "../components/ProductGallery/ProductHeader";
import MenuTitle from "../components/MenuTitle";

const GET_PRODUCTS = gql`
  query Products($filters: ProductFiltersInput) {
    products(filters: $filters) {
      data {
        id
        attributes {
          title
          subtitle
          image {
            data {
              id
              attributes {
                name
                alternativeText
                width
                height
              }
            }
          }
          price
          description
          category {
            data {
              id
              attributes {
                title
                subtitle
              }
            }
          }
        }
      }
    }
  }
`;

const Product = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);

  const router = useRouter();
  const routerSlug = router.query.slug;

  useEffect(() => {
    refetch({
      filters: {
        category: {
          slug: {
            eq: routerSlug,
          },
        },
      },
    });
  });
  const products = data?.products.data;
  const productTitle = data?.products.data[0];

  if (loading) return <Spinner />;
  if (error) return <Heading>Error :(</Heading>;

  return (
    <Layout>
      <Flex
        width='full'
        as={motion.div}
        exit={{ opacity: 0 }}
        animate={"animate"}
        initial={"initial"}
        position={"relative"}
      >
        <Flex
          position={"fixed"}
          marginTop='3.25rem'
          bgColor={"white"}
          flexDir={"column"}
        >
          <ProductHeader productTitle={productTitle} />
          <MenuTitle />
        </Flex>
        <Flex marginTop={"13rem"} width={"full"}>
          <Grid templateColumns='repeat(1, 1fr)' gap={0} width={"full"}>
            {products.map((product, i) => {
              const { id, attributes } = product;
              return <ProductCategory key={id} i={i} attributes={attributes} />;
            })}
          </Grid>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Product;
