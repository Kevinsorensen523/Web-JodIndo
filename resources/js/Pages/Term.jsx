import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Term = ({ terms = [] }) => {
    return (
        <>
            <Navbar />
            <Banner title="Ketentuan Penggunaan" />
            <Box p={20} pt={12}>
                <Text color="black" fontSize="lg">
                    Terima kasih telah mendaftar di JobsOnDemand, layanan online
                    yang disediakan dan dikelola oleh PT JOD TEKNOLOGI INDONESIA
                    (Jod ID). JobsOnDemand adalah layanan pencocokan pekerjaan
                    berbasis lokasi secara real-time untuk menghubungkan pekerja
                    lepas individu dengan bisnis. JobsOnDemand dikirimkan kepada
                    anggota individu kami (“Anggota”) melalui aplikasi seluler
                    asli di perangkat seluler Android atau iOS, dan kepada
                    pelanggan korporat kami (“Pelanggan”) melalui portal web
                    online JobsOnDemand (“Situs Web”). Anggota melamar pekerjaan
                    yang diposting oleh Pelanggan kami, dan Anggota yang
                    berhasil melakukan pekerjaan mereka di lokasi di tempat
                    Pelanggan kami, dan akan menerima pembayaran dari Pelanggan
                    setelah menyelesaikan pekerjaan. Kami tidak mempekerjakan
                    atau menyediakan karyawan untuk melakukan layanan yang
                    dibutuhkan oleh Pelanggan kami. Kami juga bukan agen tenaga
                    kerja yang mempekerjakan individu untuk melakukan layanan
                    atas nama kami. Fungsi bisnis Jod ID adalah untuk
                    mengoperasikan JobsOnDemand, mengelola basis data Anggota
                    dan Pelanggan kami dan untuk memfasilitasi kontrak layanan
                    antara Anggota dan Pelanggan kami.
                </Text>
                <Text color="black" fontSize="lg" mt={4}>
                    Ketika mendaftar di JobsOnDemand dan sebelum menggunakan
                    layanan kami, baik sebagai Anggota atau Pelanggan, Anda
                    harus membaca dengan seksama syarat dan ketentuan untuk
                    penggunaan JobsOnDemand (selanjutnya disebut sebagai “Syarat
                    dan Ketentuan”). Ini adalah prasyarat untuk penggunaan
                    JobsOnDemand. Oleh karena itu, dengan mengklik tombol “Saya
                    Setuju”, Anda menyatakan bahwa Anda telah membaca dan setuju
                    untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak
                    atau tidak dapat menyetujui Syarat & Ketentuan ini, Anda
                    tidak akan diizinkan untuk menggunakan JobsOnDemand dan akan
                    diminta untuk menghentikan penggunaan layanan kami dengan
                    segera. Untuk selanjutnya, untuk mendaftar dan menggunakan
                    layanan yang disediakan oleh JobsOnDemand, Anda menyetujui
                    ketentuan-ketentuan berikut dalam Syarat & Ketentuan:
                </Text>

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
                <Text color="martin" fontWeight="bold" fontSize="lg" mt={6}>
                    SAYA DENGAN INI MENGAKUI BAHWA SAYA TELAH MEMBACA DAN
                    MEMAHAMI KETENTUAN PENGGUNAAN & KETENTUAN DAN SETUJU BAHWA
                    PENGGUNAAN LAYANAN JOBSONDEMAND SAYA ADALAH PENGAKUAN ATAS
                    PERSETUJUAN SAYA UNTUK TERIKAT OLEH KETENTUAN PENGGUNAAN &
                    KETENTUAN INI.
                </Text>
            </Box>
            <Footer />
        </>
    );
};

export default Term;
