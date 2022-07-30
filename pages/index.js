import { useQuery, gql } from "@apollo/client";
import { SimpleGrid, Spinner, Text, Flex } from "@chakra-ui/react";
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
      <Flex width={"full"}>
        <Spinner />
      </Flex>
    );
  if (error)
    return (
      <Flex width={"full"}>
        <Text>Error:(</Text>
      </Flex>
    );

  return (
    <Layout>
      <SimpleGrid
        columns={2}
        spacing={4}
        width={"full"}
        height={"full"}
        marginTop={"3.25rem"}
      >
        {data.categories.data.map((item, i) => {
          const { attributes, id } = item;
          return (
            <CategoryGallery key={id} attributes={attributes} id={id} i={i} />
          );
        })}
      </SimpleGrid>
    </Layout>
  );
}
