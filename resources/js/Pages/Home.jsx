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
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import Card from "../Components/Card/Card";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Button from "../Components/Button";
import CardGrid from "../Components/Card/CardGrid";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home1 from "./../../../public/images/home1.png";
import Home2 from "./../../../public/images/home2.png";
import Card1 from "./../../../public/images/card1.png";
import Card2 from "./../../../public/images/card2.png";
import CardPekerja1 from "./../../../public/images/cardPekerja1.png";
import CardPekerja2 from "./../../../public/images/cardPekerja2.png";
import CardPekerja3 from "./../../../public/images/cardPekerja3.png";
import CardPekerja4 from "./../../../public/images/cardPekerja4.png";
import CardPekerja5 from "./../../../public/images/cardPekerja5.png";
import CardPekerja6 from "./../../../public/images/cardPekerja6.png";
import CardGridPekerja from "../Components/CardPekerja/CardGridPekerja";
import CardGridImpian from "../Components/CardImpian/CardGridImpian";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        // Implement search logic here
        console.log("Searching for:", searchTerm);
    };

    const cards = [
        {
            title: "Temukan Pekerja",
            description:
                "Temukan pekerja yang Anda inginkan menggunakan produk Kami hanya dengan memosting pekerjaan!",
            imageUrl: Card1,
            width: "1000px",
            height: "250px",
        },
        {
            title: "Pencari Kerja",
            description:
                "Cari pekerjaan paruh waktu impianmu melalui Aplikasi JobsOnDemand di Google Play Store dan App Store!",
            imageUrl: Card2,
            width: "300px",
            height: "300px",
        },
    ];

    const cardsPekerja = [
        {
            title: "Kerja Fleksibel",
            description:
                "Bekerja dengan cara Kamu kapan saja dan di mana saja tanpa memandang apa pun.",
            imageUrl: CardPekerja1,
            width: "300px",
            height: "300px",
        },
        {
            title: "Banyak Dibutuhkan",
            description:
                "Ratusan perusahaan dari berbagai negara telah mempercayai Kami.",
            imageUrl: CardPekerja2,
            width: "300px",
            height: "300px",
        },
        {
            title: "Dapatkan Hadiah",
            description:
                "Dapatkan hadiah untuk menyelesaikan setiap pekerjaan yang Anda Kerjakan.",
            imageUrl: CardPekerja3,
            width: "300px",
            height: "300px",
        },
    ];

    const cardsPemberiKerja = [
        {
            title: "Kendali Penuh Pekerja",
            description:
                "Jod memungkinkan Kamu untuk mengakses kumpulan talenta dari pekerja terverfikasi. Kami percaya pada kualitas yang diberikan dalam jumlah banyak.",
            imageUrl: CardPekerja4,
            width: "300px",
            height: "300px",
        },
        {
            title: "Kontrol Biaya Pekerja",
            description:
                "Tidak ada pengisian ulang minimum yang diperlukan. Posting sebanyak mungkin pekerjaan dan hanya ditagih per shift yang diselesaikan.",
            imageUrl: CardPekerja5,
            width: "300px",
            height: "300px",
        },
        {
            title: "Kemudahan Administratif",
            description:
                "Lewati proses yang membosankan dan manual. Melalui layanan pekerjaan terkelola Jod, fungsi-fungsi ini dapat dilakukan dalam satu platform.",
            imageUrl: CardPekerja6,
            width: "300px",
            height: "300px",
        },
    ];

    return (
        <>
            <Navbar />
            <Box p={4} pt={32}>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                >
                    Temukan Pekerja & Dapatkan Pekerjaan
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mb={4}
                >
                    hanya dalam{" "}
                    <Text as="span" color="#324562">
                        Satu Pintu!
                    </Text>
                </Text>

                <Text color="#151D29" textAlign="center" fontSize="lg">
                    Memberdayakan bisnis dengan pekerja gigih yang berkualitas
                    tinggi, terpercaya dan dapat diandalkan dengan karir yang
                    fleksibel untuk membuka
                </Text>
                <Text color="#151D29" textAlign="center" fontSize="lg">
                    peluang mereka dan membangun talenta hebat untuk pertumbuhan
                    gig economy
                </Text>
                <Image
                    src={Home1}
                    borderRadius="md"
                    objectFit="cover"
                    w="300px"
                    h="300px"
                    mx="auto"
                    mt={8}
                    mb={16}
                />
                <Flex justifyContent="center">
                    <IconButton
                        icon={<ChevronDownIcon />}
                        aria-label="Arrow Down"
                        color="white"
                        border="2px solid #EF9525"
                        background="#EF9525"
                        _hover={{ background: "#EF9525", color: "white" }}
                        variant="outline"
                        mb={10}
                    />
                </Flex>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                >
                    Memberikan Produk Berkualitas
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#324562"
                    textAlign="center"
                >
                    hanya untukmu!
                </Text>
                <CardGrid cards={cards} />
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={10}
                    mb={4}
                >
                    Kami{" "}
                    <Text as="span" color="#324562">
                        Lebih{" "}
                    </Text>
                    dari yang lain!
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize="xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={4}
                    mb={4}
                >
                    Untuk{" "}
                    <Text as="span" color="#324562">
                        Pekerja
                    </Text>
                </Text>
                <CardGridPekerja cards={cardsPekerja} />
                <Text
                    fontWeight="bold"
                    fontSize="xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={4}
                    mb={4}
                >
                    Untuk{" "}
                    <Text as="span" color="#324562">
                        Pemberi Kerja
                    </Text>
                </Text>
                <CardGridPekerja cards={cardsPemberiKerja} />
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={16}
                >
                    Ada{" "}
                    <Text as="span" color="#324562">
                        Pertanyaan?
                    </Text>
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mb={8}
                >
                    Kami Siap Membantu!
                </Text>
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
                    </Accordion>
                </Box>
                <Box display="flex" justifyContent="center" mt={10}>
                    <Link href="/faq">
                        <Button>Pertanyaan Lainnya</Button>
                    </Link>
                </Box>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={16}
                >
                    Ingin{" "}
                    <Text as="span" color="#324562">
                        Bekerja Sama, Bertanya
                    </Text>
                    , atau
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                >
                    Memberi{" "}
                    <Text as="span" color="#324562">
                        Kritik dan Saran
                    </Text>
                    ?
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
                    <Link href="/contact">
                        <Button>Kontak Kami</Button>
                    </Link>
                </Box>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={16}
                    mb={8}
                >
                    Siap Mendapatkan Apa yang{" "}
                    <Text as="span" color="#324562">
                        Kamu Impikan?
                    </Text>
                </Text>
                <CardGridImpian cards={cardsPekerja} />
            </Box>
            <Footer />
        </>
    );
};

export default Home;
