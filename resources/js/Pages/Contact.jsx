import React, { useState } from "react";
import { Box, Input, Textarea, Heading } from "@chakra-ui/react";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log({ fullName, phoneNumber, email, subject, message });
    };

    return (
        <>
            <Navbar />
            <Banner title="Kontak JOD" />
            <Box p={20} pt={12}>
                <Heading as="h2" size="lg" mb={6}>
                    Kirimkan Pesan
                </Heading>
                <Input
                    placeholder="Nama Lengkap"
                    mb={4}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                    placeholder="Nomor Telepon"
                    mb={4}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Input
                    placeholder="Alamat Surel"
                    mb={4}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Judul Surat"
                    mb={4}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <Textarea
                    placeholder="Isi Surat"
                    mb={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={handleSubmit}>Kirim Surat</Button>
            </Box>
            <Footer />
        </>
    );
};

export default Contact;
