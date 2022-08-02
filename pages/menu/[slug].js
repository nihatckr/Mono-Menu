import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { useEffect } from "react";
import Layout from "../../components/Layout";

import { motion } from "framer-motion";

import ProductCategory from "../../components/ProductGallery";
import ProductHeader from "../../components/ProductGallery/ProductHeader";
import MenuTitle from "../../components/MenuTitle";
import styled, { keyframes } from "styled-components";
import { IoSync } from "react-icons/io5";

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

  if (loading)
    return (
      <Rotate>
        <IoSync />
      </Rotate>
    );
  if (error) return <Text>Error</Text>;

  return (
    <Layout>
      <FlexWrap
        exit={{ opacity: 0 }}
        animate={"animate"}
        initial={"initial"}
        position={"relative"}
      >
        <ProductHeaderContainer>
          <ProductHeader productTitle={productTitle} />
          <MenuTitle />
        </ProductHeaderContainer>
        <GridWrap>
          {products.map((product, i) => {
            const { id, attributes } = product;
            return <ProductCategory key={id} i={i} attributes={attributes} />;
          })}
        </GridWrap>
      </FlexWrap>
    </Layout>
  );
};

export default Product;

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

const FlexWrap = styled(motion.div)`
  width: 100%;
`;
const ProductHeaderContainer = styled.div`
  width: 100%;
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0;
  width: 100%;
`;
const Text = styled.div`
  color: ${(props) => props.theme.color.link};
`;
