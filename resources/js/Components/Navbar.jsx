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
import { Link } from "@inertiajs/react";
import Button from "./Button";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import JodLogo from "./../../../public/images/JodLogo.png";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const display = useBreakpointValue({ base: "none", lg: "flex" });

    const isActive = (route) => window.location.pathname === route;

    return (
        <MotionBox
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
                    <Link href="/">
                        <MotionText
                            mx={4}
                            cursor="pointer"
                            fontWeight={isActive("/") ? "bold" : "normal"}
                            whileHover={{ scale: 1.1 }} // Animation on hover
                            transition={{ duration: 0.3 }}
                        >
                            Beranda
                        </MotionText>
                    </Link>
                    <Link href="/about">
                        <MotionText
                            mx={4}
                            cursor="pointer"
                            fontWeight={isActive("/about") ? "bold" : "normal"}
                            whileHover={{ scale: 1.1 }} // Animation on hover
                            transition={{ duration: 0.3 }}
                        >
                            Tentang JOD
                        </MotionText>
                    </Link>
                    <Link href="/faq">
                        <MotionText
                            mx={4}
                            cursor="pointer"
                            fontWeight={isActive("/faq") ? "bold" : "normal"}
                            whileHover={{ scale: 1.1 }} // Animation on hover
                            transition={{ duration: 0.3 }}
                        >
                            FAQ
                        </MotionText>
                    </Link>
                    <Link href="/contact">
                        <MotionText
                            mx={4}
                            cursor="pointer"
                            fontWeight={
                                isActive("/contact") ? "bold" : "normal"
                            }
                            whileHover={{ scale: 1.1 }} // Animation on hover
                            transition={{ duration: 0.3 }}
                        >
                            Kontak JOD
                        </MotionText>
                    </Link>
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
                        <Link href="/">
                            <Text my={2} cursor="pointer">
                                Beranda
                            </Text>
                        </Link>
                        <Link href="/about">
                            <Text my={2} cursor="pointer">
                                Tentang JOD
                            </Text>
                        </Link>
                        <Link href="/faq">
                            <Text my={2} cursor="pointer">
                                FAQ
                            </Text>
                        </Link>
                        <Link href="/contact">
                            <Text my={2} cursor="pointer">
                                Kontak JOD
                            </Text>
                        </Link>
                        <Flex direction="column" mt={4}>
                            <ChakraButton variant="outline" mb={2}>
                                Button 1
                            </ChakraButton>
                            <ChakraButton variant="solid">
                                Button 2
                            </ChakraButton>
                        </Flex>
                    </Flex>
                </Box>
            </Collapse>
        </MotionBox>
    );
};

export default Navbar;
