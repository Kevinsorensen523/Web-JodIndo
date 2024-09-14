import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const CardGrid = ({ cards }) => {
    return (
        <Box display="flex" justifyContent="center" p={6} spacing={10}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} w="full">
                {cards.map((card, index) => (
                    <Card
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

export default CardGrid;
