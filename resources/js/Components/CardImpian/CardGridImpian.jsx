import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import CardImpian1 from "./CardImpian1";
import CardImpian2 from "./CardImpian2";

const CardGridImpian = ({ cards }) => {
    return (
        <Box display="flex" justifyContent="center" p={6} spacing={10}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} w="full">
                <CardImpian1 />
                <CardImpian2 />
            </SimpleGrid>
        </Box>
    );
};

export default CardGridImpian;
