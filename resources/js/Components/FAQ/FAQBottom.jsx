import React from "react";
import Button from "../Button";
import { Box, Input, Text, Image } from "@chakra-ui/react";
import Home2 from "./../../../../public/images/home2.png";

const FAQBottom = () => {
    return (
        <>
            <Text
                fontWeight="bold"
                fontSize="3xl"
                color="#EF9525"
                textAlign="center"
                mt={20}
            >
                Pertanyaan Kamu Belum Terjawab?
            </Text>
            <Image
                src={Home2}
                borderRadius="md"
                objectFit="cover"
                w="180px"
                h="150px"
                mx="auto"
                mt={8}
                mb={8}
            />
            <Text fontSize="md" color="#324562" textAlign="center">
                Hubungi Kami di halaman Kontak JOD!
            </Text>
            <Box display="flex" justifyContent="center" mt={4}>
                <Button>Kontak Kami</Button>
            </Box>
        </>
    );
};

export default FAQBottom;
