import React from "react";
import {
    Box,
    Flex,
    Image,
    Text,
    Button as ChakraButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Collapse,
    useDisclosure,
    useBreakpointValue,
} from "@chakra-ui/react";
import Button from "./Button";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import JodLogo from "./../../../public/images/JodLogo.png";

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const display = useBreakpointValue({ base: "none", lg: "flex" }); // Show menu items on larger screens

    return (
        <Box
            p={2}
            bg="white"
            shadow="md"
            borderBottom="1px"
            borderColor="gray.200"
            boxShadow="0px 5px 10px rgba(240, 149, 37, 0.5)"
            position="fixed"
            top={0}
            left={0}
            right={0}
            width="100%"
            zIndex="docked"
            borderRadius="xl"
        >
            <Flex
                align="center"
                justify="space-between"
                maxW="1200px"
                mx="auto"
            >
                {/* Logo Section */}
                <Flex align="center" justify="flex-start">
                    <Image
                        src={JodLogo}
                        alt="Logo"
                        boxSize="80px"
                        objectFit="contain"
                    />

                    {/* Language Dropdown */}
                    <Menu display={{ base: "none", md: "flex" }}>
                        <MenuButton
                            as={IconButton}
                            icon={<ChevronDownIcon />}
                            ml={4}
                            aria-label="Select Language"
                        />
                        <MenuList>
                            <MenuItem>English</MenuItem>
                            <MenuItem>Bahasa Indonesia</MenuItem>
                            <MenuItem>Español</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>

                {/* Hamburger Icon for Mobile */}
                <IconButton
                    display={{ base: "flex", lg: "none" }}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={onToggle}
                    aria-label="Toggle Navigation"
                />

                {/* Menu Section */}
                <Flex align="center" ml={10} spacing={8} display={display}>
                    <Text mx={4} cursor="pointer">
                        Beranda
                    </Text>
                    <Text mx={4} cursor="pointer">
                        Tentang JOD
                    </Text>
                    <Text mx={4} cursor="pointer">
                        Soal Sering Ditanya
                    </Text>
                    <Text mx={4} cursor="pointer">
                        Kontak JOD
                    </Text>
                </Flex>

                {/* Button Section */}
                <Flex display={display}>
                    <ChakraButton variant="secondButton" mr={4}>
                        Button 1
                    </ChakraButton>
                    <Button>Button 2</Button>
                </Flex>
            </Flex>

            {/* Mobile Menu */}
            <Collapse in={isOpen}>
                <Box
                    display={{ base: "block", lg: "none" }}
                    p={4}
                    bg="white"
                    borderBottom="1px"
                    borderColor="gray.200"
                >
                    <Flex direction="column" align="center">
                        <Text my={2} cursor="pointer">
                            Beranda
                        </Text>
                        <Text my={2} cursor="pointer">
                            Tentang JOD
                        </Text>
                        <Text my={2} cursor="pointer">
                            Soal Sering Ditanya
                        </Text>
                        <Text my={2} cursor="pointer">
                            Kontak JOD
                        </Text>
                        <Flex direction="column" mt={4}>
                            <ChakraButton variant="outline" mb={2}>
                                Button 1
                            </ChakraButton>
                            <Button>Button 2</Button>
                        </Flex>
                    </Flex>
                </Box>
            </Collapse>
        </Box>
    );
};

export default Navbar;
