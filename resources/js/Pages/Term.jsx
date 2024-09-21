import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

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
                <Text color="black" fontSize="lg">
                    Anggota dapat melamar pekerjaan yang diiklankan oleh
                    Pelanggan kami, dan setelah menyelesaikan tugas di lokasi
                    yang ditentukan, Anggota akan menerima pembayaran dari
                    Pelanggan. Kami tidak berfungsi sebagai agen tenaga kerja;
                    kami hanya mengelola JobsOnDemand dan memfasilitasi
                    interaksi antara Anggota dan Pelanggan.
                </Text>
                <Text color="black" fontSize="lg">
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
                <Text color="black" fontSize="lg" mt={4}>
                    **KETENTUAN PENGGUNAAN**
                </Text>
                <Text color="black" fontSize="lg" mt={2}>
                    Dengan mengakses dan menggunakan layanan kami, Anda
                    menyatakan dan menjamin bahwa:
                </Text>
                <Text color="black" fontSize="lg" mt={2}>
                    1.1 Anda berusia minimal 18 tahun.
                </Text>
                <Text color="black" fontSize="lg">
                    1.2 Anda setuju dengan Syarat ini dan memiliki wewenang
                    untuk menggunakannya.
                </Text>
                <Text color="black" fontSize="lg">
                    1.3 Anda memiliki kapasitas hukum untuk memahami dan
                    mematuhi Syarat ini.
                </Text>
                <Text color="black" fontSize="lg">
                    1.4 Penerimaan dan pelaksanaan Syarat ini tidak melanggar
                    kewajiban hukum atau perjanjian lain yang Anda ikuti.
                </Text>
                <Text color="black" fontSize="lg">
                    1.5 Anda akan menggunakan layanan ini hanya untuk tujuan
                    yang sah.
                </Text>
                <Text color="black" fontSize="lg">
                    1.6 Anda akan menjaga kerahasiaan informasi login dan akses
                    lainnya.
                </Text>
                <Text color="black" fontSize="lg">
                    1.7 Anda akan menyediakan bukti identitas jika diminta.
                </Text>
                <Text color="black" fontSize="lg">
                    1.8 Anda setuju untuk memberikan informasi yang akurat dan
                    memperbaruinya jika terjadi perubahan.
                </Text>
                <Text color="black" fontSize="lg">
                    1.9 Anda akan membantu kami dalam hal pelanggaran Syarat ini
                    jika diperlukan.
                </Text>
                <Text color="black" fontSize="lg">
                    1.10 Anda bertanggung jawab penuh atas segala kerugian atau
                    kerusakan yang terjadi.
                </Text>
                <Text color="black" fontSize="lg">
                    1.11 Kewajiban Anda berdasarkan Syarat ini sah dan dapat
                    ditegakkan.
                </Text>
                <Text color="black" fontSize="lg">
                    1.12 Tidak ada proses hukum yang tertunda atau ancaman yang
                    dapat memengaruhi kemampuan Anda untuk memenuhi kewajiban
                    berdasarkan Syarat ini.
                </Text>
            </Box>
            <Footer />
        </>
    );
};

export default Term;
