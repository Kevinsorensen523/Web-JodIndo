import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";

const Card = ({ title, description, imageUrl }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0px 10px 18px rgba(240, 149, 37, 0.3)"
            p={8}
            maxW="7xl"
            w="full"
        >
            <Text
                fontWeight="bold"
                fontSize="3xl"
                color="#EF9525"
                textAlign="center"
                mb={4}
            >
                {title}
            </Text>
            <Image
                src={imageUrl}
                alt={title}
                borderRadius="md"
                objectFit="cover"
                w="500px"
                h="300px"
                mx="auto"
                mb={6}
            />
            <Stack spacing={6}>
                <Text color="#151D29" textAlign="center" fontSize="lg">
                    {description}
                </Text>
            </Stack>
        </Box>
    );
};

export default Card;
