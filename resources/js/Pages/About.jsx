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
import About2 from "./../../../public/images/about2.png";
import Home1 from "./../../../public/images/home1.png";
import Home2 from "./../../../public/images/home2.png";
import Clarity from "./../../../public/images/clarity.png";
import Rapidity from "./../../../public/images/rapidity.png";
import Equality from "./../../../public/images/equality.png";
import CardGridNilai from "../Components/CardNilai/CardGridNilai";

const About = () => {
    const cardsNilai = [
        {
            title: "Clarity",
            description:
                "Jod memberikan informasi lengkap tentang pekerjaan (termasuk waktu, upah, dan alamat), tentang perusahaan, dan tentang karyawan. Hal ini membantu menghindari semua risiko dalam proses kerja sama antara karyawan dan perusahaan di platform Jod.",
            imageUrl: Clarity,
        },
        {
            title: "Rapidity",
            description:
                "Hanya dengan beberapa tahap, Perusahaan dapat memposting pekerjaan dan memilih kandidat paling sesuai yang memenuhi persyaratan pekerjaan mereka berdasarkan fitur Jod: peringkat dan ulasan kandidat",
            imageUrl: Rapidity,
        },
        {
            title: "Equality",
            description:
                "Setiap pekerja, terlepas dari latar belakang, kualifikasi, atau keterampilannya, memiliki kesempatan yang sama untuk melamar pekerjaan yang diposting di Platform Jod.",
            imageUrl: Equality,
        },
    ];

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
                    mb={16}
                    px={{ md: 28, base: 0 }}
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
                        px={{ md: 28, base: 0 }}
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
                        src={Home1}
                        borderRadius="md"
                        objectFit="cover"
                        w="300px"
                        h="300px"
                        mx="auto"
                        mb={16}
                    />
                </SimpleGrid>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={2}
                    w="full"
                    mt={10}
                >
                    <Image
                        src={About2}
                        borderRadius="md"
                        objectFit="cover"
                        w="750px"
                        h="300px"
                        mx="auto"
                        mb={16}
                    />
                    <Text color="#151D29" textAlign="left" fontSize="2xl">
                        JOD menyediakan dua aplikasi unggulan yang memudahkan
                        pencari kerja dan penyedia kerja. Bagi pencari kerja,
                        aplikasi JOD memberikan akses mudah untuk menemukan
                        peluang kerja fleksibel sesuai kebutuhan. Bagi penyedia
                        kerja, JOD membantu menemukan tenaga kerja yang tepat
                        secara cepat dan efisien, sehingga proses perekrutan
                        menjadi lebih sederhana dan efektif.
                    </Text>
                </SimpleGrid>
                <Text
                    color="#151D29"
                    textAlign="center"
                    fontSize="2xl"
                    mt={4}
                    mb={4}
                >
                    Jod memiliki nilai-nilai yang selalu dijunjung tinggi dalam
                    melaksanakan bisnis kami.
                </Text>
                <CardGridNilai cards={cardsNilai} />
                <Box mt={20} mb={8}>
                    <Text
                        fontWeight="bold"
                        fontSize="3xl"
                        color="#EF9525"
                        textAlign="center"
                    >
                        Ingin Bekerja Sama dengan Kami?
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
            </Box>
            <Footer />
        </>
    );
};

export default About;
