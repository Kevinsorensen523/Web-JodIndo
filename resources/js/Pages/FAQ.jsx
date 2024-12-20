import { Box, Input } from "@chakra-ui/react";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Banner from "../Components/Banner";
import FAQAccordion from "../Components/FAQ/FAQAccordion";
import FAQBottom from "../Components/FAQ/FAQBottom";
import FAQNotFound from "../Components/FAQ/FAQNotFound";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const FAQ = () => {
    const { faqs } = usePage().props;
    const [searchTerm, setSearchTerm] = useState("");

    // Filter FAQs based on search term
    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <Banner title="Soal Sering Ditanya" />
            <Box p={20} pt={12}>
                <Input
                    placeholder="Cari pertanyaan..."
                    mb={4}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {filteredFaqs.length === 0 ? (
                    <FAQNotFound searchTerm={searchTerm} />
                ) : (
                    <FAQAccordion faqs={filteredFaqs} />
                )}
                <FAQBottom />
            </Box>
            <Footer />
        </>
    );
};

export default FAQ;
