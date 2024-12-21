import { router, useForm, usePage } from "@inertiajs/react";
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
    const { contacts, flash } = usePage().props;
    const contactName = contacts?.name;

    const { data, setData, post, processing, errors } = useForm({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = () => {
        router.post("/contact/message", data, {
            onFinish: () => {
                console.log("Message submitted successfully");
            },
        });
    };

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
            {flash?.success && <div>{flash.success}</div>}
            <Navbar />
            <Banner title="Kontak JOD" />
            <ContactForm
                data={data}
                setData={setData}
                handleSubmit={handleSubmit}
                processing={processing}
                errors={errors}
            />
            <ContactDetails details={contactDetails} name={contactName} />
            <Footer />
        </>
    );
};

export default Contact;
