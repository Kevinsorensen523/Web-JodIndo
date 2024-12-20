import { usePage } from "@inertiajs/react";
import React from "react";
import Banner from "../Components/Banner";
import ContactDetails from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Contact/ContactForm";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EmailImage from "./../../../public/images/email.png";
import LocationImage from "./../../../public/images/location.png";
import PhoneImage from "./../../../public/images/phone.png";

const Contact = () => {
    const { contacts } = usePage().props;
    const contactName = contacts?.name;

    // console.log(contacts);

    const contactDetails = [
        {
            image: LocationImage,
            text: contacts?.address,
        },
        {
            image: PhoneImage,
            text: contacts?.phone,
        },
        {
            image: EmailImage,
            text: contacts?.email,
        },
    ];

    return (
        <>
            <Navbar />
            <Banner title="Kontak JOD" />
            <ContactForm />
            <ContactDetails details={contactDetails} name={contactName} />
            <Footer />
        </>
    );
};

export default Contact;
