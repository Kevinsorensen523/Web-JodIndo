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
                {/* Contact Information Section */}
                <VStack spacing={1} align="start" lineHeight={6}>
                    <Text fontSize="lg" fontWeight="bold">
                        JOD
                    </Text>
                    <Text>Jl. Setia Budi Tengah No.89, RT.1/RW.1</Text>
                    <Text>Kuningan, Setia Budi, Setiabudi District,</Text>
                    <Text>South Jakarta City, Special Capital</Text>
                    <Text>Region of Jakarta 12910</Text>
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
                {/* Links Section */}
                <VStack spacing={4} align="start">
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        About JOD
                    </Link>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        FAQ
                    </Link>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        JOD Contact
                    </Link>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        Privacy Policy
                    </Link>
                    <Link href="#" _hover={{ textDecoration: "underline" }}>
                        Terms of Use
                    </Link>
                </VStack>
            </Flex>
            <Text textAlign="center">© 2024 PT. Jod Teknologi Indonesia</Text>
        </Box>
    );
};

export default Footer;
