import React, { useState } from "react";
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
} from "@chakra-ui/react";

const FAQAccordion = ({ faqs }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <>
            <Accordion
                index={expandedIndex}
                onChange={setExpandedIndex}
                allowToggle
            >
                {faqs.map((faq, index) => (
                    <AccordionItem key={index}>
                        <AccordionButton
                            onClick={() => {
                                setExpandedIndex(
                                    expandedIndex === index ? null : index
                                );
                            }}
                            _expanded={{
                                bg: "#EF9525", // Background setelah expand
                                color: "white", // Warna text setelah expand
                                borderBottom: "1px solid orange",
                                boxShadow:
                                    "0px 10px 18px rgba(240, 149, 37, 0.3)", // Shadow setelah expand
                            }}
                            bg={expandedIndex === index ? "#EF9525" : "white"} // Background sebelum expand
                            color={
                                expandedIndex === index ? "white" : "#EF9525" // Warna text sebelum expand
                            }
                            _hover={{
                                bg:
                                    expandedIndex === index
                                        ? "#EF9525"
                                        : "white",
                            }}
                            borderRadius="xl"
                        >
                            <Box flex="1" textAlign="left">
                                <Text fontWeight="bold" fontSize="xl">
                                    {faq.question}
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                            pb={4}
                            fontSize="lg"
                            borderBottomRadius="xl"
                            boxShadow={
                                expandedIndex === index
                                    ? "0px 10px 18px rgba(240, 149, 37, 0.3)"
                                    : "none"
                            }
                        >
                            {faq.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default FAQAccordion;
