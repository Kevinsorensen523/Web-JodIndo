import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import NotFoundImage from "./../../../../public/images/notFound.png";
import { Link } from "@inertiajs/react";

const FAQNotFound = () => {
    return (
        <>
            <Box p={4}>
                <Image
                    src={NotFoundImage}
                    borderRadius="md"
                    objectFit="cover"
                    w="250px"
                    h="265px"
                    mx="auto"
                    mt={10}
                    mb={12}
                />
                <Text color="#151D29" textAlign="center" fontSize="xl">
                    Pertanyaan dengan kata kunci{" "}
                    <Text as="span" fontWeight="bold">
                        Hehehe{" "}
                    </Text>
                    Tidak Ditemukan.
                </Text>
                <Text color="#151D29" textAlign="center" fontSize="xl">
                    Cari dengan kata kunci lainnya.
                </Text>
            </Box>
        </>
    );
};

export default FAQNotFound;
