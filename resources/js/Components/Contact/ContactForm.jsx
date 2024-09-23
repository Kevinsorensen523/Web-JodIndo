import React, { useState } from "react";
import { Box, Input, Textarea, Heading, Text, Flex } from "@chakra-ui/react";
import Button from "../Button";

const ContactForm = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        console.log({ fullName, phoneNumber, email, subject, message });
    };

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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                borderColor="black"
            />
            <Flex justify="center" mt={4} mb={6}>
                <Button onClick={handleSubmit} size="lg">
                    Kirim Surat
                </Button>
            </Flex>
        </Box>
    );
};

export default ContactForm;
