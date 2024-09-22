import React from "react";
import {
    Box,
    Flex,
    Text,
    Link,
    useBreakpointValue,
    VStack,
    Image,
} from "@chakra-ui/react";
import TelegramImage from "./../../../public/images/telegram.png";
import XImage from "./../../../public/images/x.png";
import InstagramImage from "./../../../public/images/instagram.png";
import LinkedinImage from "./../../../public/images/linkedin.png";
import WhatsappImage from "./../../../public/images/whatsapp.png";
import TiktokImage from "./../../../public/images/tiktok.png";
import JodFooter from "./../../../public/images/jodFooter.png";

const Footer = () => {
    const display = useBreakpointValue({ base: "column", md: "row" });

    return (
        <Box
            bg="#EF9525"
            color="white"
            py={4}
            px={4}
            borderColor="gray.700"
            borderRadius="xl"
        >
            <Flex
                direction={display}
                align="start"
                justify="space-between"
                maxW="1200px"
                mx="auto"
            >
                <VStack spacing={1} align={{ base: "start" }} lineHeight={6}>
                    <Image
                        src={JodFooter}
                        alt="JOD Footer"
                        width="96px"
                        height="64px"
                        mr={2}
                        mb={4}
                    />
                    <Box mb={4}>
                        <Text>Jl. Setia Budi Tengah No.89, RT.1/RW.1</Text>
                        <Text>Kuningan, Setia Budi, Setiabudi District,</Text>
                        <Text>South Jakarta City, Special Capital</Text>
                        <Text>Region of Jakarta 12910</Text>
                    </Box>
                    <Flex>
                        <Link href="#" isExternal>
                            <Image
                                src={TelegramImage}
                                alt="Telegram"
                                boxSize="24px"
                                mr={2}
                            />
                        </Link>
                        <Link href="#" isExternal>
                            <Image
                                src={TiktokImage}
                                alt="TikTok"
                                boxSize="24px"
                                mr={2}
                            />
                        </Link>
                        <Link href="#" isExternal>
                            <Image src={XImage} alt="X" boxSize="24px" mr={2} />
                        </Link>
                        <Link href="#" isExternal>
                            <Image
                                src={WhatsappImage}
                                alt="WhatsApp"
                                boxSize="24px"
                                mr={2}
                            />
                        </Link>
                        <Link href="#" isExternal>
                            <Image
                                src={InstagramImage}
                                alt="Instagram"
                                boxSize="24px"
                                mr={2}
                            />
                        </Link>
                        <Link href="#" isExternal>
                            <Image
                                src={LinkedinImage}
                                alt="LinkedIn"
                                boxSize="24px"
                                mr={2}
                            />
                        </Link>
                    </Flex>
                </VStack>
                {/* Links Section */}
                <VStack
                    spacing={2}
                    align="end"
                    pl={0}
                    pr={0}
                    ml={{ md: "0" }}
                    mt={4}
                >
                    <Link
                        href="/about"
                        _hover={{ textDecoration: "underline" }}
                    >
                        Tentang JOD
                    </Link>
                    <Link href="/faq" _hover={{ textDecoration: "underline" }}>
                        Soal Sering Ditanya
                    </Link>
                    <Link
                        href="/contact"
                        _hover={{ textDecoration: "underline" }}
                    >
                        Kontak JOD
                    </Link>
                    <Link
                        href="/privacy"
                        _hover={{ textDecoration: "underline" }}
                    >
                        Kebijakan Privasi
                    </Link>
                    <Link href="/term" _hover={{ textDecoration: "underline" }}>
                        Ketentuan Penggunaan
                    </Link>
                </VStack>
            </Flex>
            <Text textAlign="center" mt={{ base: "16", md: "2" }}>
                © 2024 PT. Jod Teknologi Indonesia
            </Text>
        </Box>
    );
};

export default Footer;
