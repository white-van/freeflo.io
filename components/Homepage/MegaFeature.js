import React from "react";
import {
  Button,
  Avatar,
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function MegaFeature({ avatar, desc, img, name, subtitle, title }) {
  return (
    <HStack justify="center">
      <Image htmlWidth="400px" objectFit="cover" src={img} />
      <div>
        <Flex>
          <HStack w="400px" spacing="20px">
            <Avatar name={name} src={avatar} />
            <div>
              <Link href="/read">
                <Text fontWeight="extrabold"> {subtitle} </Text>
              </Link>
              <Text> {title} </Text>
            </div>
            <Spacer />
            <Button
              colorScheme="facebook"
              aria-label="facebook"
              variant="ghost"
            >
              <FaFacebook />
            </Button>
            <Button colorScheme="twitter" aria-label="twitter" variant="ghost">
              <FaTwitter />
            </Button>
            />
          </HStack>
        </Flex>
        <Box w="400px">
          <br />
          {desc}
        </Box>
      </div>
    </HStack>
  );
}

export default MegaFeature;
