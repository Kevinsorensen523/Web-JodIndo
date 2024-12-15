import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const terms = [
    {
        title: "KETENTUAN PENGGUNAAN",
        points: [
            "Anda berusia minimal 18 tahun.",
            "Anda setuju dengan Syarat ini dan memiliki wewenang untuk menggunakannya.",
            "Anda memiliki kapasitas hukum untuk memahami dan mematuhi Syarat ini.",
            "Penerimaan dan pelaksanaan Syarat ini tidak melanggar kewajiban hukum atau perjanjian lain yang Anda ikuti.",
            "Anda akan menggunakan layanan ini hanya untuk tujuan yang sah.",
            "Anda akan menjaga kerahasiaan informasi login dan akses lainnya.",
            "Anda akan menyediakan bukti identitas jika diminta.",
            "Anda setuju untuk memberikan informasi yang akurat dan memperbaruinya jika terjadi perubahan.",
            "Anda akan membantu kami dalam hal pelanggaran Syarat ini jika diperlukan.",
            "Anda bertanggung jawab penuh atas segala kerugian atau kerusakan yang terjadi.",
            "Kewajiban Anda berdasarkan Syarat ini sah dan dapat ditegakkan.",
            "Tidak ada proses hukum yang tertunda atau ancaman yang dapat memengaruhi kemampuan Anda untuk memenuhi kewajiban berdasarkan Syarat ini.",
        ],
    },
    {
        title: "PROFIL ANGGOTA",
        points: [
            "Anda berusia minimal 18 tahun.",
            "Anda setuju dengan Syarat ini dan memiliki wewenang untuk menggunakannya.",
            "Anda memiliki kapasitas hukum untuk memahami dan mematuhi Syarat ini.",
        ],
    },
    {
        title: "LAMARAN DAN PENYELESAIAN PEKERJAAN",
        points: [
            "Anda berusia minimal 18 tahun.",
            "Anda setuju dengan Syarat ini dan memiliki wewenang untuk menggunakannya.",
            "Anda memiliki kapasitas hukum untuk memahami dan mematuhi Syarat ini.",
        ],
    },
];

const Term = () => {
    return (
        <>
            <Navbar />
            <Banner title="Ketentuan Penggunaan" />
            <Box p={20} pt={12}>
                <Text color="black" fontSize="lg">
                    Terima kasih telah bergabung dengan JobsOnDemand, layanan
                    yang disediakan oleh PT JOD TEKNOLOGI INDONESIA (Jod ID).
                    JobsOnDemand merupakan platform yang menghubungkan pekerja
                    lepas dengan bisnis secara real-time melalui aplikasi
                    seluler yang dapat diakses di perangkat Android atau iOS.
                </Text>
                <Text color="black" fontSize="lg" mt={4}>
                    Anggota dapat melamar pekerjaan yang diiklankan oleh
                    Pelanggan kami, dan setelah menyelesaikan tugas di lokasi
                    yang ditentukan, Anggota akan menerima pembayaran dari
                    Pelanggan. Kami tidak berfungsi sebagai agen tenaga kerja;
                    kami hanya mengelola JobsOnDemand dan memfasilitasi
                    interaksi antara Anggota dan Pelanggan.
                </Text>
                <Text color="black" fontSize="lg" mt={4}>
                    Sebelum menggunakan layanan kami, baik sebagai Anggota
                    maupun Pelanggan, Anda diharuskan untuk membaca dengan
                    cermat syarat dan ketentuan penggunaan (selanjutnya disebut
                    “Syarat dan Ketentuan”). Dengan mengklik tombol “Saya
                    Setuju”, Anda menegaskan bahwa Anda telah memahami dan
                    menyetujui Syarat dan Ketentuan ini. Jika Anda tidak setuju,
                    Anda tidak diperkenankan untuk menggunakan layanan kami.
                </Text>
                <Text color="black" fontSize="lg" mt={4}>
                    Dengan demikian, untuk mendaftar dan menggunakan layanan
                    JobsOnDemand, Anda setuju dengan ketentuan berikut:
                </Text>

                {terms.map((term, index) => (
                    <Box key={index} mt={8}>
                        <Text color="black" fontWeight="bold" fontSize="lg">
                            {index + 1}. {term.title}
                        </Text>
                        {term.points.map((point, pointIndex) => (
                            <Text
                                color="black"
                                fontSize="lg"
                                mt={2}
                                key={pointIndex}
                            >
                                {index + 1}.{pointIndex + 1} {point}
                            </Text>
                        ))}
                    </Box>
                ))}
            </Box>
            <Footer />
        </>
    );
};

export default Term;
