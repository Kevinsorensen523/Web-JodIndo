import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Term = ({ terms, termsDesc }) => {
    // Filter termsDesc berdasarkan posisi
    const topDescriptions = termsDesc.filter((desc) => desc.position === "top");
    const bottomDescriptions = termsDesc.filter(
        (desc) => desc.position === "bottom"
    );

    return (
        <>
            <Navbar />
            <Banner title="Ketentuan Penggunaan" />
            <Box p={20} pt={12}>
                {/* Render posisi 'top' */}
                {topDescriptions.map((desc, index) => (
                    <Text
                        key={index}
                        color="black"
                        fontSize="lg"
                        fontWeight={desc.bold ? "bold" : "normal"}
                        mt={index > 0 ? 4 : 0}
                    >
                        {desc.description}
                    </Text>
                ))}

                {/* Render daftar terms */}
                {terms.length > 0 ? (
                    terms.map((term, index) => (
                        <Box key={index} mt={4}>
                            <Text color="black" fontWeight="bold" fontSize="lg">
                                {index + 1}. {term.title}
                            </Text>
                            <Text color="black">{term.description}</Text>
                            {term.points.map((point, pointIndex) => (
                                <Text
                                    color="black"
                                    fontSize="lg"
                                    mt={2}
                                    key={pointIndex}
                                >
                                    {index + 1}.{pointIndex + 1} {point.content}
                                </Text>
                            ))}
                        </Box>
                    ))
                ) : (
                    <Text color="black" fontSize="lg">
                        Tidak ada data yang tersedia.
                    </Text>
                )}

                {/* Render posisi 'bottom' */}
                {bottomDescriptions.map((desc, index) => (
                    <Text
                        key={index}
                        color="martin" // Warna untuk bottom, sesuai permintaan
                        fontSize="lg"
                        fontWeight={desc.bold ? "bold" : "normal"}
                        mt={6}
                    >
                        {desc.description}
                    </Text>
                ))}
            </Box>
            <Footer />
        </>
    );
};

export default Term;
