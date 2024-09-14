import React, { useState } from "react";
import {
    Box,
    Text,
    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import Card from "../Components/Card";
import Button from "../Components/Button";
import CardGrid from "../Components/CardGrid";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        // Implement search logic here
        console.log("Searching for:", searchTerm);
    };

    const cards = [
        {
            title: "Card 1",
            description:
                "Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 Description for Card 1 Card 1 Description for Card 1 Card 1 Description for Card 1 ",
            imageUrl: "https://via.placeholder.com/200",
        },
        {
            title: "Card 2",
            description: "Description for Card 2",
            imageUrl: "https://via.placeholder.com/200",
        },
        // Tambahkan lebih banyak card sesuai kebutuhan
    ];

    return (
        <>
            <Navbar />
            <Box p={4} pt={32}>
                <Text>Temukan Pekerja & Dapatkan Pekerjaan</Text>
                <Text>hanya dalam Satu Pintu!</Text>
                <Text>
                    Memberdayakan bisnis dengan pekerja gigih yang berkualitas
                    tinggi, terpercaya dan dapat diandalkan dengan karir yang
                    fleksibel untuk membuka
                </Text>
                <Text>
                    peluang mereka dan membangun talenta hebat untuk pertumbuhan
                    gig economy
                </Text>
                <CardGrid cards={cards} />
                <Box mb={6} textAlign="center">
                    <Input
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        maxW="md"
                        mb={2}
                    />
                    <Button onClick={handleSearch} colorScheme="teal">
                        Search
                    </Button>
                </Box>
                {/* FAQ Section */}
                <Box mt={8}>
                    <Text fontSize="2xl" mb={4}>
                        Frequently Asked Questions
                    </Text>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        What is this website about?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                This website provides information and features
                                related to our product and services.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        How can I contact support?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                You can contact support by emailing us at
                                support@example.com.
                            </AccordionPanel>
                        </AccordionItem>
                        {/* Tambahkan lebih banyak item FAQ sesuai kebutuhan */}
                    </Accordion>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Home;
