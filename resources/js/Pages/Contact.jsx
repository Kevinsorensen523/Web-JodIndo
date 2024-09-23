import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import ContactForm from "../Components/Contact/ContactForm";
import ContactDetails from "../Components/Contact/ContactDetails";
import LocationImage from "./../../../public/images/location.png";
import EmailImage from "./../../../public/images/email.png";
import PhoneImage from "./../../../public/images/phone.png";

const Contact = () => {
    const contactDetails = [
        {
            image: LocationImage,
            text: "Jl. Setia Budi Tengah No.89, RT.1/RW.1, Kuningan, Setia Budi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12910",
        },
        {
            image: PhoneImage,
            text: "+62 851 7998 4245",
        },
        {
            image: EmailImage,
            text: "halo@jodapp.com",
        },
    ];

    return (
        <>
            <Navbar />
            <Banner title="Kontak JOD" />
            <ContactForm />
            <ContactDetails details={contactDetails} />
            <Footer />
        </>
    );
};

export default Contact;
