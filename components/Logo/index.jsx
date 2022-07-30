import { createIcon } from "@chakra-ui/icons";
import { Flex, Icon } from "@chakra-ui/react";

const Logo = createIcon({
  displayName: "Mono",
  viewBox: "0 0 32 32",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill='currentColor'
      d='M7.5 9.375L0 0V15H3V8.55234L7.5 14.1773L12 8.55234V15H15V0L7.5 9.375ZM12 26L0 17V32H3V23L15 32V17H12V26ZM24.5 3C22.0147 3 20 5.01472 20 7.5C20 9.98528 22.0147 12 24.5 12C26.9853 12 29 9.98528 29 7.5C29 5.01472 26.9853 3 24.5 3ZM17 7.5C17 3.35786 20.3579 0 24.5 0C28.6421 0 32 3.35786 32 7.5C32 11.6421 28.6421 15 24.5 15C20.3579 15 17 11.6421 17 7.5ZM20 24.5C20 22.0147 22.0147 20 24.5 20C26.9853 20 29 22.0147 29 24.5C29 26.9853 26.9853 29 24.5 29C22.0147 29 20 26.9853 20 24.5ZM24.5 17C20.3579 17 17 20.3579 17 24.5C17 28.6421 20.3579 32 24.5 32C28.6421 32 32 28.6421 32 24.5C32 20.3579 28.6421 17 24.5 17Z'
    />
  ),
});
const LogoMono = () => {
  return (
    <Flex px={4}>
      <Icon as={Logo} boxSize={5} />
    </Flex>
  );
};
export default LogoMono;