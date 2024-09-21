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
    Image,
    IconButton,
    Flex,
    SimpleGrid,
} from "@chakra-ui/react";
import Card from "../Components/Card/Card";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Button from "../Components/Button";
import CardGrid from "../Components/Card/CardGrid";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import About1 from "./../../../public/images/about1.png";

const About = () => {
    return (
        <>
            <Navbar />
            <Banner title="Tentang JOD" />
            <Box p={4} pt={16}>
                <Image
                    src={About1}
                    borderRadius="md"
                    objectFit="cover"
                    w="600px"
                    h="300px"
                    mx="auto"
                    mb={16}
                />
                <Text
                    color="#151D29"
                    textAlign="left"
                    fontSize="2xl"
                    px={32}
                    mb={16}
                >
                    JOD memulai perjalanan bisnisnya di Singapura pada tahun
                    2015, melanjutkan ekspansinya ke Vietnam pada tahun 2022,
                    dan kini hadir di Indonesia pada tahun 2023. Dengan
                    pengalaman di berbagai pasar, JOD terus berkembang untuk
                    menyediakan solusi perekrutan fleksibel yang inovatif di
                    Asia Tenggara.
                </Text>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={2} w="full">
                    <Text
                        color="#151D29"
                        textAlign="left"
                        fontSize="2xl"
                        px={32}
                    >
                        JOD hadir untuk menciptakan peluang baru dengan
                        meluncurkan platform perekrutan fleksibel yang dapat
                        memenuhi kebutuhan berbagai industri. Kami berkomitmen
                        untuk memberikan akses yang lebih luas kepada mereka
                        yang jarang mendapatkan kesempatan, dengan cara yang
                        nyata dan berdaya guna. Proses kami dirancang agar mudah
                        dan cepat, sehingga layanan kami bisa menjadi pilihan
                        terbaik bagi semua pihak yang membutuhkan. Dengan JOD,
                        peluang kerja lebih dekat dan lebih mudah dijangkau.
                    </Text>
                    <Image
                        src={About1}
                        borderRadius="md"
                        objectFit="cover"
                        w="600px"
                        h="300px"
                        mx="auto"
                        mb={16}
                    />
                </SimpleGrid>
            </Box>
            <Footer />
        </>
    );
};

export default About;
