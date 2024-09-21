import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Banner = ({ title }) => {
    return (
        <>
            <Box
                bg="#EF9525"
                color="white"
                mt={20}
                borderColor="gray.700"
                borderRadius="xl"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                pl={10}
            >
                <Text fontWeight="bold" fontSize="5xl" color="#FFFFFF">
                    {title}
                </Text>
            </Box>
        </>
    );
};

export default Banner;
