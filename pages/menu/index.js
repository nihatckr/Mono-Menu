import styled from "styled-components";
import Layout from "../../components/Layout";
import NextLink from "next/link";

const Link = styled(NextLink)`
  font-size: 1.5em;
  text-align: center;
  color: black;
  position: relative;
`;

const Menu = () => {
  return (
    <Layout>
      <Link href={"/"}>Geri Dön</Link>
    </Layout>
  );
};

export default Menu;
