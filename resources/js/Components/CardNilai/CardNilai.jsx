import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";

const CardNilai = ({ title, description, imageUrl, width, height }) => {
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
            <Image
                src={imageUrl}
                alt={title}
                borderRadius="md"
                objectFit="cover"
                w={width}
                h={height}
                mx="auto"
                mb={6}
            />
            <Text
                fontWeight="bold"
                fontSize="2xl"
                color="#EF9525"
                textAlign="center"
                mb={4}
            >
                {title}
            </Text>
            <Stack spacing={6}>
                <Text color="#151D29" textAlign="center" fontSize="2xl">
                    {description}
                </Text>
            </Stack>
        </Box>
    );
};

export default CardNilai;
