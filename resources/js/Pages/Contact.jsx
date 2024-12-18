import React from "react";
import Banner from "../Components/Banner";
import ContactDetails from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Contact/ContactForm";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EmailImage from "./../../../public/images/email.png";
import LocationImage from "./../../../public/images/location.png";
import PhoneImage from "./../../../public/images/phone.png";

const Contact = ({ contacts = [] }) => {
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
