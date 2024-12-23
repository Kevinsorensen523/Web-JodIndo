import { Box, Text } from "@chakra-ui/react";
import { usePage } from "@inertiajs/react";
import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Privacy = () => {
    const { privacies } = usePage().props;
    return (
        <>
            <Navbar />
            <Banner title="Kebijakan Privasi" />
            <Box p={20} pt={12}>
                {privacies.map((privacy, index) => (
                    <Text key={index} color="black" fontSize="lg">
                        {privacy.content}
                    </Text>
                ))}
            </Box>
            <Footer />
        </>
    );
};

export default Privacy;
