import React, { useState } from "react";
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Input,
    Heading,
    Image,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Button from "../Components/Button";
import Home2 from "./../../../public/images/home2.png";

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedIndex, setExpandedIndex] = useState(-1);

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
            question: "Apakah ada biaya untuk menggunakan layanan ini?",
            answer: "Penggunaan layanan JobsOnDemand tidak dikenakan biaya pendaftaran. Namun, mungkin ada biaya terkait pekerjaan yang Anda ambil.",
        },
        {
            question: "Bagaimana saya mendapatkan pembayaran?",
            answer: "Setelah menyelesaikan pekerjaan, Anda akan menerima pembayaran langsung dari Pelanggan melalui aplikasi.",
        },
        {
            question: "Apa yang harus dilakukan jika saya mengalami masalah?",
            answer: "Anda dapat menghubungi tim dukungan pelanggan kami melalui aplikasi atau email untuk bantuan lebih lanjut.",
        },
    ];

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
                <Heading as="h3" size="lg" mb={4}>
                    Pertanyaan Umum
                </Heading>
                <Accordion allowMultiple>
                    {filteredFaqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            isExpanded={expandedIndex === index}
                        >
                            <AccordionButton
                                onClick={() => {
                                    setExpandedIndex(
                                        expandedIndex === index ? -1 : index
                                    );
                                }}
                            >
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight="bold">
                                        {faq.question}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={20}
                >
                    Pertanyaan Kamu Belum Terjawab?
                </Text>
                <Image
                    src={Home2}
                    borderRadius="md"
                    objectFit="cover"
                    w="180px"
                    h="150px"
                    mx="auto"
                    mt={8}
                    mb={8}
                />
                <Text fontSize="md" color="#324562" textAlign="center">
                    Hubungi Kami di halaman Kontak JOD!
                </Text>
                <Box display="flex" justifyContent="center" mt={4}>
                    <Button>Kontak Kami</Button>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default FAQ;
