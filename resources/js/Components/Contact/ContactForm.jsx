import {
    Alert,
    AlertIcon,
    Box,
    Button as ChakraButton,
    Flex,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "../Button";

const ContactForm = ({ data, setData, handleSubmit, processing }) => {
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [readyToSubmit, setReadyToSubmit] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!data.fullName.trim())
            newErrors.fullName = "Nama lengkap wajib diisi.";
        if (!data.phoneNumber.trim())
            newErrors.phoneNumber = "Nomor telepon wajib diisi.";
        if (!data.email.trim()) {
            newErrors.email = "Alamat email wajib diisi.";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
            newErrors.email = "Format email tidak valid.";
        }
        if (!data.subject.trim())
            newErrors.subject = "Judul surat wajib diisi.";
        if (!data.message.trim()) newErrors.message = "Isi surat wajib diisi.";
        return newErrors;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onOpen();
        }
    };

    const confirmSubmission = () => {
        onClose();
        handleSubmit();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setData({
            fullName: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
        });
        setErrors({});
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
            {submitted && (
                <Alert status="success" mb={4}>
                    <AlertIcon />
                    Pesan berhasil dikirim!
                </Alert>
            )}
            <form onSubmit={handleFormSubmit}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Nama Lengkap{" "}
                    <Text as="span" color="#EF9525">
                        *
                    </Text>
                </Text>
                <Input
                    mb={errors.fullName ? 2 : 4}
                    value={data.fullName}
                    onChange={(e) => setData("fullName", e.target.value)}
                    borderColor={errors.fullName ? "red" : "black"}
                />
                {errors.fullName && (
                    <Text color="red" fontSize="sm">
                        {errors.fullName}
                    </Text>
                )}
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Nomor Telepon{" "}
                    <Text as="span" color="#EF9525">
                        *
                    </Text>
                </Text>
                <Input
                    mb={errors.phoneNumber ? 2 : 4}
                    value={data.phoneNumber}
                    onChange={(e) => setData("phoneNumber", e.target.value)}
                    borderColor={errors.phoneNumber ? "red" : "black"}
                />
                {errors.phoneNumber && (
                    <Text color="red" fontSize="sm">
                        {errors.phoneNumber}
                    </Text>
                )}
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Alamat Surel{" "}
                    <Text as="span" color="#EF9525">
                        *
                    </Text>
                </Text>
                <Input
                    mb={errors.email ? 2 : 4}
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    borderColor={errors.email ? "red" : "black"}
                />
                {errors.email && (
                    <Text color="red" fontSize="sm">
                        {errors.email}
                    </Text>
                )}
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Judul Surat{" "}
                    <Text as="span" color="#EF9525">
                        *
                    </Text>
                </Text>
                <Input
                    mb={errors.subject ? 2 : 4}
                    value={data.subject}
                    onChange={(e) => setData("subject", e.target.value)}
                    borderColor={errors.subject ? "red" : "black"}
                />
                {errors.subject && (
                    <Text color="red" fontSize="sm">
                        {errors.subject}
                    </Text>
                )}
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Isi Surat{" "}
                    <Text as="span" color="#EF9525">
                        *
                    </Text>
                </Text>
                <Textarea
                    mb={errors.message ? 2 : 4}
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                    borderColor={errors.message ? "red" : "black"}
                />
                {errors.message && (
                    <Text color="red" fontSize="sm">
                        {errors.message}
                    </Text>
                )}
                <Flex justify="center" mt={4} mb={6}>
                    <Button type="submit" size="lg" isLoading={processing}>
                        Kirim Surat
                    </Button>
                </Flex>
            </form>

            {/* Modal Konfirmasi */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Konfirmasi Pengiriman</ModalHeader>
                    <ModalBody>
                        Apakah Anda yakin ingin mengirim pesan ini?
                    </ModalBody>
                    <ModalFooter>
                        <ChakraButton
                            colorScheme="gray"
                            mr={3}
                            onClick={onClose}
                        >
                            Batal
                        </ChakraButton>
                        <ChakraButton
                            colorScheme="orange"
                            onClick={confirmSubmission}
                        >
                            Kirim
                        </ChakraButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ContactForm;
