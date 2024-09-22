import React, { useState } from "react";
import { Box, Input, Text, Image } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

import FAQNotFound from "../Components/FAQ/FAQNotFound";
import FAQAccordion from "../Components/FAQ/FAQAccordion";
import FAQBottom from "../Components/FAQ/FAQBottom";

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Example list of FAQs (can also be moved to a separate component or API call)
    const faqs = [
        {
            question: "Apa itu JobsOnDemand?",
            answer: "JobsOnDemand adalah layanan pencocokan pekerjaan berbasis lokasi yang menghubungkan pekerja lepas dengan bisnis secara real-time.",
        },
        {
            question: "Bagaimana cara mendaftar sebagai Anggota?",
            answer: "Anda dapat mendaftar melalui aplikasi JobsOnDemand dengan mengikuti petunjuk pendaftaran yang tersedia.",
        },
        {
            question: "Bagaimana cara mendaftar sebagai Anggota?",
            answer: "Anda dapat mendaftar melalui aplikasi JobsOnDemand dengan mengikuti petunjuk pendaftaran yang tersedia.",
        },
        {
            question: "Bagaimana cara mendaftar sebagai Anggota?",
            answer: "Anda dapat mendaftar melalui aplikasi JobsOnDemand dengan mengikuti petunjuk pendaftaran yang tersedia.",
        },
    ];

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
