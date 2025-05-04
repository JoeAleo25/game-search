import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/May 4, 2025, 10_09_05 AM.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
