import React from "react";
import {
  Button,
  Flex,
  Spacer,
  HStack,
  Avatar,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

function ChooseIcon({ iconindex }) {
  if (iconindex == 0) {
    return (
      <Button variant="ghost">
        <CheckIcon />
      </Button>
    );
  }
  if (iconindex == 1) {
    return (
      <Button variant="ghost">
        <CloseIcon />
      </Button>
    );
  }
  if (iconindex == 2) {
    return (
      <Button variant="ghost">
        <Icon as={BiDotsHorizontalRounded} />
      </Button>
    );
  }
  if (iconindex == 3) {
    return (
      <IconButton
        aria-label="Follow"
        variant="ghost"
        icon={<AiOutlineUserAdd />}
      />
    );
  }
}

function SingleEdit({ avatar, iconindex, name, subtitle, title }) {
  return (
    <div>
      <Flex>
        <HStack w="300px" spacing="20px">
          <Avatar name={name} src={avatar} />
          <div>
            <Text fontWeight="extrabold"> {title} </Text>
            <Text> {subtitle} </Text>
          </div>
          <Spacer />
          <ChooseIcon iconindex={iconindex} />
        </HStack>
      </Flex>
    </div>
  );
}

export default SingleEdit;
