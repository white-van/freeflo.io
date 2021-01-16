import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  TabList,
  Tab,
  Tabs,
  Icon,
  Avatar
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  FaMoon,
  FaSun,
  FaBurn,
  FaSearch,
  FaRegHeart,
  FaRegBell,
} from "react-icons/fa";


const LoggedInActions = [FaSearch, FaRegHeart, FaRegBell];
const LoggedInView = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Tabs size="md" mt="1" mr="4" variant="soft-rounded">
        <TabList>
          {LoggedInActions.map((icon, index) => (
            <Tab key={index}>
              <Icon as={icon} />
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Link href="/write"> 
        <Button
          mt="1"
          mr="1"
          size="sm"
          variant={useColorModeValue("primary", "primaryDark")}
        >
          {pathname === "/write" ? "Publish" : "Write"}
        </Button>
      </Link>
    </>
  );
};

const LoggedOutActions = ["Sign up", "Login"];
const LoggedOutView = () => {
  return (
    <>
      {LoggedOutActions.map((text, index) => (
        <Button
          m="1"
          key={index}
          size="sm"
          variant={useColorModeValue("primary", "primaryDark")}
        >
          {text}
        </Button>
      ))}
    </>
  );
};
export const Navbar = ({ isLoggedIn = true }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");
  const boxBg = useColorModeValue("blue.200", "blue.500");

  return (
    <Flex w="101%" mb="4" as="nav" bg={boxBg} boxShadow="lg">
      <Box mt="4" ml="4">
        <Link href="/">
          <Icon as={FaBurn} style={{ cursor: "pointer" }} />
        </Link>
      </Box>
      <Box mt="4" ml="4">
        <Link href="/">
          <Heading size="small" style={{ cursor: "pointer" }}>
            freeflo.io
          </Heading>
        </Link>
      </Box>
      <Spacer />

      <Box m="2">
        <Flex>
          {isLoggedIn ? <LoggedInView /> : <LoggedOutView />}

          <Menu>
          <MenuButton as={Button} variant="ghost" aria-label="Search database" >
            <Avatar h="30px" w="30px" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
          <Link href="/">
            <MenuItem>
              Dashboard
            </MenuItem>
            </Link>
            <Link href="/profile">
            <MenuItem>
              Profile
            </MenuItem>
            </Link>
            <Link href="/read">
            <MenuItem>
              Browse articles
            </MenuItem>
            </Link>
            <MenuItem>
              <Link href="/write">
              Pending reviews
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/write">
              Your reviews
              </Link>
            </MenuItem>
            <MenuDivider />
            <Link href="/welcome">
            <MenuItem>
              Settings
            </MenuItem>
            </Link>
            <Link href="/welcome">
            <MenuItem>
              Log out
            </MenuItem>
            </Link>
          </MenuList>
        </Menu>

          <IconButton
            size="sm"
            fontSize="lg"
            aria-label={`Switch to ${nextMode} mode`}
            variant="ghost"
            color="current"
            margin="1"
            mr="4"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Box>
    </Flex>
  );
};
export default Navbar;
