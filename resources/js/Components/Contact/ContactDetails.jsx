import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const ContactDetails = ({ details, name }) => {
    return (
        <>
            <Box textAlign="center" mb={16}>
                <Text color="#EF9525" fontSize="3xl" fontWeight="bold">
                    Ingin Berbicara Lebih Personal?
                </Text>
                <Text fontSize="3xl" fontWeight="bold">
                    Hubungi dan Temukan Kami
                </Text>
                <Text fontSize="2xl" fontWeight="bold" mt={10} mb={10}>
                    {name}
                </Text>
                {details.map((detail, index) => (
                    <Box key={index} textAlign="center" mt={10}>
                        <Image
                            src={detail.image}
                            borderRadius="md"
                            objectFit="cover"
                            w="40px"
                            h="40px"
                            mx="auto"
                        />
                        <Text fontSize="lg">{detail.text}</Text>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default ContactDetails;
