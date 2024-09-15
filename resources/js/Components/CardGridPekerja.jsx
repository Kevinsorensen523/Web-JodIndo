import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import CardPekerja from "./CardPekerja";

const CardGridPekerja = ({ cards }) => {
    return (
        <Box display="flex" justifyContent="center" p={6} spacing={10}>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} w="full">
                {cards.map((card, index) => (
                    <CardPekerja
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

export default CardGridPekerja;
