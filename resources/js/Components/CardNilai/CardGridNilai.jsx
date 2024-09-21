import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import CardNilai from "./CardNilai";

const CardGridNilai = ({ cards }) => {
    return (
        <Box display="flex" justifyContent="center" p={6} spacing={10}>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} w="full">
                {cards.map((card, index) => (
                    <CardNilai
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default CardGridNilai;
