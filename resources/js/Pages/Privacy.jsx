import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

const Privacy = () => {
    return (
        <>
            <Navbar />
            <Banner title="Kebijakan Privasi" />
            <Box p={20} pt={12}>
                <Text color="black" fontSize="lg">
                    PT Jod Teknologi Indonesia berkomitmen untuk melindungi
                    privasi dan kerahasiaan anggota kami. Kami hanya akan
                    menggunakan nama dan rincian Anda sesuai dengan ketentuan
                    dalam klause Kebijakan Privasi ini.
                </Text>
                <Text color="black" fontSize="lg">
                    Anda setuju bahwa Jod Teknologi Indonesia dapat mengumpulkan
                    data pribadi dan informasi dari Anda, termasuk informasi
                    berikut: nama Anda, usia, tanggal lahir, informasi tentang
                    kualifikasi pendidikan dan institusi pendidikan, pengalaman
                    kerja sebelumnya, lokasi Anda saat ini, perkiraan waktu
                    kedatangan di lokasi kerja, dan ulasan dan komentar
                    penilaian Anda tentang pekerjaan yang dilakukan melalui
                    JobsOnDemand (secara kolektif, selanjutnya disebut
                    “Informasi“).
                </Text>
                <Text color="black" fontSize="lg">
                    Anda setuju bahwa Jod Teknologi Indonesia dapat
                    mengumpulkan, menggunakan, dan/atau mengungkapkan Informasi
                    untuk tujuan berikut:
                </Text>
                <Text color="black" fontSize="lg">
                    1. Untuk memberi tahu Anda ketika ada posting pekerjaan yang
                    dibuat oleh pelanggan kami.
                </Text>
                <Text color="black" fontSize="lg">
                    2. Untuk memungkinkan pelanggan kami menilai Anda saat
                    mereka memilih anggota kami untuk aplikasi pekerjaan.
                </Text>
                <Text color="black" fontSize="lg">
                    3. Untuk memfasilitasi layanan JobsOnDemand yang diberikan
                    kepada semua anggota dan semua pelanggan.
                </Text>
                <Text color="black" fontSize="lg">
                    4. Untuk melakukan kampanye pemasaran dan kontes.
                </Text>
                <Text color="black" fontSize="lg">
                    Jod Teknologi Indonesia juga akan mengumpulkan dan
                    mengungkapkan Informasi untuk memberikan informasi yang
                    diperlukan kepada pelanggan kami saat mereka memilih anggota
                    yang sesuai untuk aplikasi pekerjaan. Pelanggan akan
                    mempertimbangkan Informasi, lokasi Anda saat ini, dan
                    perkiraan waktu kedatangan ke lokasi kerja sebagai bagian
                    dari kriteria seleksi mereka untuk aplikasi pekerjaan.
                </Text>
                <Text color="black" fontSize="lg">
                    Jod Teknologi Indonesia akan menggunakan Informasi untuk
                    mengirimkan promosi, materi pemasaran, dan informasi lain
                    tentang JobsOnDemand kepada Anda. Jika Anda tidak ingin
                    menerima promosi, materi pemasaran, dan informasi tersebut,
                    Anda dapat memilih untuk keluar dengan mengirim email ke
                    halo@jodapp.com.
                </Text>
                <Text color="black" fontSize="lg">
                    Jod Teknologi Indonesia mungkin diwajibkan untuk
                    mengungkapkan Informasi kepada otoritas regulasi, penegak
                    hukum, atau pemerintah, untuk tujuan bekerja sama dengan
                    perintah, putusan, investigasi, atau permintaan apa pun dari
                    pihak-pihak tersebut. Anda setuju bahwa Jod Teknologi
                    Indonesia tidak akan bertanggung jawab atas pengungkapan
                    Informasi, dan Anda juga setuju untuk tidak mengambil
                    tindakan apa pun terhadap Jod Teknologi Indonesia atas
                    pengungkapan Informasi dalam keadaan-keadaan tersebut.
                </Text>
                <Text color="black" fontSize="lg">
                    Jod Teknologi Indonesia dapat kapan saja mengungkapkan
                    Informasi kepada agennya, penasihat, dan konsultan untuk
                    tujuan operasional bisnis Jod Teknologi Indonesia dan
                    layanan JobsOnDemand yang diberikan kepada anggota dan
                    pelanggan.
                </Text>
                <Text color="black" fontSize="lg">
                    Dari waktu ke waktu, Jod Teknologi Indonesia mungkin perlu
                    menghubungi Anda melalui nomor ponsel atau melalui email,
                    baik dalam kejadian di mana posting pekerjaan oleh pelanggan
                    telah dibatalkan, atau jika Anda tidak datang ke lokasi
                    kerja dalam waktu kedatangan yang ditentukan yang telah Anda
                    berikan. Anda setuju bahwa Jod Teknologi Indonesia dan/atau
                    pelanggan dapat menghubungi Anda menggunakan segala bentuk
                    komunikasi yang Anda berikan selama proses registrasi
                    anggota dalam hubungannya dengan layanan JobsOnDemand.
                </Text>
                <Text color="black" fontSize="lg">
                    Selama menggunakan aplikasi mobile JobsOnDemand atau situs
                    webnya, Anda setuju bahwa Jod Teknologi Indonesia dapat
                    menggunakan cookies untuk mengumpulkan, menggunakan, atau
                    mengungkapkan Informasi untuk profil pengguna, analisis
                    pasar, dan tujuan pemasaran.
                </Text>
                <Text color="black" fontSize="lg">
                    Anda mengakui bahwa Anda telah meninjau dan menyetujui
                    klause Kebijakan Privasi dalam Syarat Penggunaan &
                    Ketentuan.
                </Text>
            </Box>
            <Footer />
        </>
    );
};

export default Privacy;
