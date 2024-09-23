import React, { useState } from "react";
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

// Import images
import IDFlag from "./../../../public/images/IDFlag.png";
import ENFlag from "./../../../public/images/ENFlag.png";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const display = useBreakpointValue({ base: "none", xl: "flex" });

    const isActive = (route) => window.location.pathname === route;

    const [selectedLanguage, setSelectedLanguage] = useState("ID");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const menuLinks = [
        { name: "Beranda", href: "/" },
        { name: "Tentang JOD", href: "/about" },
        { name: "FAQ", href: "/faq" },
        { name: "Kontak JOD", href: "/contact" },
    ];

    const buttons = [
        {
            label: "Unduh Aplikasi Pekerja",
            variant: "secondButton",
            id: "button1",
        },
        { label: "Portal Pemberi Kerja", variant: "solid", id: "button2" },
    ];

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
                        width="120px"
                        objectFit="contain"
                    />

                    {/* Language Dropdown */}
                    <Box
                        ml={10}
                        borderWidth="1px"
                        borderRadius="md"
                        px={2}
                        display="flex"
                        alignItems="center"
                        borderColor="black"
                    >
                        <Flex align="center">
                            <Image
                                src={
                                    selectedLanguage === "ID" ? IDFlag : ENFlag
                                }
                                alt={
                                    selectedLanguage === "ID"
                                        ? "Indonesian Flag"
                                        : "USA Flag"
                                }
                                boxSize="16px"
                                mr={2}
                            />
                            <Text fontWeight="bold">{selectedLanguage}</Text>
                        </Flex>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<ChevronDownIcon />}
                                ml={2}
                                aria-label="Select Language"
                                bg="transparent"
                                _hover={{ bg: "transparent" }}
                                _active={{ bg: "transparent" }}
                            />
                            <MenuList>
                                <MenuItem
                                    onClick={() => handleLanguageChange("ID")}
                                >
                                    <Image
                                        src={IDFlag}
                                        alt="Indonesian Flag"
                                        boxSize="20px"
                                        mr={2}
                                    />
                                    <Text>Bahasa Indonesia (ID)</Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleLanguageChange("EN")}
                                >
                                    <Image
                                        src={ENFlag}
                                        alt="USA Flag"
                                        boxSize="20px"
                                        mr={2}
                                    />
                                    <Text>English (EN)</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>

                {/* Hamburger Icon for Mobile */}
                <IconButton
                    display={{ base: "flex", xl: "none" }}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={onToggle}
                    aria-label="Toggle Navigation"
                />

                {/* Desktop Menu */}
                <Flex align="center" ml={10} spacing={8} display={display}>
                    {menuLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <MotionText
                                mx={4}
                                cursor="pointer"
                                fontWeight={
                                    isActive(link.href) ? "bold" : "normal"
                                }
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {link.name}
                            </MotionText>
                        </Link>
                    ))}
                </Flex>

                {/* Button Section */}
                <Flex display={display}>
                    <ChakraButton
                        key={buttons[0].id}
                        variant={buttons[0].variant}
                        mr={4}
                        borderRadius="xl"
                    >
                        {buttons[0].label}
                    </ChakraButton>
                    <Button borderRadius="xl">{buttons[1].label}</Button>
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
                        {menuLinks.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <Text my={2} cursor="pointer">
                                    {link.name}
                                </Text>
                            </Link>
                        ))}
                        <Flex direction="column" mt={4}>
                            <ChakraButton
                                key={buttons[0].id}
                                variant={buttons[0].variant}
                                mb={2}
                                borderRadius="xl"
                            >
                                {buttons[0].label}
                            </ChakraButton>
                            <Button borderRadius="xl">
                                {buttons[1].label}
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Collapse>
        </MotionBox>
    );
};

export default Navbar;
