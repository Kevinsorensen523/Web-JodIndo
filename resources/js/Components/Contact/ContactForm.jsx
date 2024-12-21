import { Box, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import Button from "../Button";

const ContactForm = ({ data, setData, handleSubmit, processing, errors }) => {
    return (
        <Box p={20} pt={8}>
            <Heading
                as="h2"
                size="lg"
                mb={6}
                color="#EF9525"
                textAlign="center"
            >
                Kotak Surat
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
                Nama Lengkap{" "}
                <Text as="span" color="#EF9525">
                    *
                </Text>
            </Text>
            <Input
                mb={4}
                value={data.fullName}
                onChange={(e) => setData("fullName", e.target.value)}
                borderColor="black"
            />
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                Nomor Telepon{" "}
                <Text as="span" color="#EF9525">
                    *
                </Text>
            </Text>
            <Input
                mb={4}
                value={data.phoneNumber}
                onChange={(e) => setData("phoneNumber", e.target.value)}
                borderColor="black"
            />
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                Alamat Surel{" "}
                <Text as="span" color="#EF9525">
                    *
                </Text>
            </Text>
            <Input
                mb={4}
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                borderColor="black"
            />
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                Judul Surat{" "}
                <Text as="span" color="#EF9525">
                    *
                </Text>
            </Text>
            <Input
                mb={4}
                value={data.subject}
                onChange={(e) => setData("subject", e.target.value)}
                borderColor="black"
            />
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                Isi Surat{" "}
                <Text as="span" color="#EF9525">
                    *
                </Text>
            </Text>
            <Textarea
                mb={4}
                value={data.message}
                onChange={(e) => setData("message", e.target.value)}
                borderColor="black"
            />
            <Flex justify="center" mt={4} mb={6}>
                <Button onClick={handleSubmit} size="lg" isLoading={processing}>
                    Kirim Surat
                </Button>
            </Flex>
        </Box>
    );
};

export default ContactForm;
