import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import NotFoundImage from "./../../../../public/images/notFound.png";

const FAQNotFound = ({ searchTerm }) => {
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
                        {searchTerm}{" "}
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
