import { useQuery, gql } from "@apollo/client";

import { IoSync } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import CategoryGallery from "../components/CategoryGallery";

import Layout from "../components/Layout";

export const GET_CATEGORİES = gql`
  query data {
    categories {
      data {
        id
        attributes {
          title
          subtitle
          slug
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
        }
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_CATEGORİES);

  if (loading)
    return (
      <Rotate>
        <IoSync />
      </Rotate>
    );
  if (error) return <Text>Error:(</Text>;
  return (
    <Layout>
      <GridWrap>
        {data.categories.data.map((item, i) => {
          const { attributes, id } = item;
          return (
            <CategoryGallery key={id} attributes={attributes} id={id} i={i} />
          );
        })}
      </GridWrap>
    </Layout>
  );
}
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

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
  height: 100%;
`;
const Text = styled.div`
  color: ${(props) => props.theme.color.link};
`;
