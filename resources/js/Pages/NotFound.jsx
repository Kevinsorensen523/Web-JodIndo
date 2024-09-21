import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NotFoundImage from "./../../../public/images/notFound.png";

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Box p={4} pt={24}>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    color="#EF9525"
                    textAlign="center"
                    mt={20}
                    mb={10}
                >
                    Halaman Tidak Ditemukan
                </Text>
                <Image
                    src={NotFoundImage}
                    borderRadius="md"
                    objectFit="cover"
                    w="250px"
                    h="265px"
                    mx="auto"
                    mt={10}
                    mb={12}
                />
                <Text color="#151D29" textAlign="center" fontSize="xl" mb={16}>
                    Silahkan Kembali ke{" "}
                    <Link href="/" style={{ fontWeight: "bold" }}>
                        Halaman Utama
                    </Link>
                    .
                </Text>
            </Box>
            <Footer />
        </>
    );
};

export default NotFound;
