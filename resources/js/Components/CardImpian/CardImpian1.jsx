import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import Image1 from "./../../../../public/images/card3.png";
import Button from "./../Button";

const CardImpian1 = () => {
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
                Temukan Pekerja
            </Text>
            <Image
                src={Image1}
                alt="Temukan Pekerja"
                borderRadius="md"
                objectFit="cover"
                w="350px"
                h="200px"
                mx="auto"
                mb={6}
            />

            <Stack spacing={6} justify="center">
                <Box display="flex" justifyContent="center">
                    <Button>Hubungi Kami</Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default CardImpian1;
