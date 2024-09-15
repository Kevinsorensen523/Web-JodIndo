import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import Image2 from "./../../../../public/images/card2.png";
import ButtonPlaystore from "./../../../../public/images/buttonPlaystore.png";
import ButtonAppstore from "./../../../../public/images/buttonAppstore.png";

const CardImpian2 = () => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0px 10px 18px rgba(240, 149, 37, 0.3)"
            p={8}
            maxW="7xl"
            w="full"
            mx="auto"
        >
            <Text
                fontWeight="bold"
                fontSize="2xl"
                color="#EF9525"
                textAlign="center"
                mb={4}
            >
                Pencari Kerja
            </Text>

            <Image
                src={Image2}
                alt="Temukan Pekerja"
                borderRadius="md"
                objectFit="cover"
                w="150px"
                h="200px"
                mx="auto"
                mb={6}
            />

            <Stack spacing={6} justify="center">
                <Box display="flex" justifyContent="center" gap={4}>
                    <Image
                        src={ButtonPlaystore}
                        alt="Playstore Button"
                        width="120px"
                        height="40px"
                        objectFit="cover"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.1)",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                    <Image
                        src={ButtonAppstore}
                        alt="Appstore Button"
                        width="120px"
                        height="40px"
                        objectFit="cover"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{
                            transform: "scale(1.1)",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default CardImpian2;
