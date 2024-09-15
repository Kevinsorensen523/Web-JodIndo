import React from "react";
import {
    Box,
    Flex,
    Text,
    Link,
    IconButton,
    useBreakpointValue,
    VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const display = useBreakpointValue({ base: "column", md: "row" });

    return (
        <Box
            bg="#EF9525"
            color="white"
            py={8}
            px={4}
            borderColor="gray.700"
            borderRadius="xl"
        >
            <Flex
                direction={display}
                align="center"
                justify="space-between"
                maxW="1200px"
                mx="auto"
            >
                {/* Links Section */}
                <VStack spacing={4} align="start">
                    <Text fontSize="lg" fontWeight="bold">
                        Links
                    </Text>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        Home
                    </Link>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        About Us
                    </Link>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        Services
                    </Link>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        Contact
                    </Link>
                </VStack>

                {/* Contact Information Section */}
                <VStack spacing={4} align="start">
                    <Text fontSize="lg" fontWeight="bold">
                        Contact Us
                    </Text>
                    <Text>Email: support@example.com</Text>
                    <Text>Phone: +1 (234) 567-890</Text>
                </VStack>

                {/* Social Media Icons Section */}
                <VStack spacing={4} align="start">
                    <Text fontSize="lg" fontWeight="bold">
                        Follow Us
                    </Text>
                    <Flex>
                        <IconButton
                            aria-label="Facebook"
                            icon={<FaFacebook />}
                            variant="outline"
                            colorScheme="whiteAlpha"
                            mr={2}
                        />
                        <IconButton
                            aria-label="Twitter"
                            icon={<FaTwitter />}
                            variant="outline"
                            colorScheme="whiteAlpha"
                            mr={2}
                        />
                        <IconButton
                            aria-label="Instagram"
                            icon={<FaInstagram />}
                            variant="outline"
                            colorScheme="whiteAlpha"
                            mr={2}
                        />
                        <IconButton
                            aria-label="LinkedIn"
                            icon={<FaLinkedin />}
                            variant="outline"
                            colorScheme="whiteAlpha"
                        />
                    </Flex>
                </VStack>
            </Flex>
        </Box>
    );
};

export default Footer;
