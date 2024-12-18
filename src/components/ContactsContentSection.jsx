import React, { useState } from 'react'
import { companyEmail, companyPhoneNo } from '../utils/constants';

import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'react-toastify';
import { POST_ENQUIRY_FORM } from '../utils/urls';

const ContactsContentSection = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formValues.name) newErrors.name = 'Name is required';
        if (!formValues.phone_number || !/^\d{10,12}$/.test(formValues.phone_number)) {
            newErrors.phone_number = 'A valid phone number with 10 to 12 digits is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        if (errors[name]) {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const countryCode = '91'; // Default country code
                const fullPhoneNumber = `${countryCode}${formValues.phone_number}`;
    
                await toast.promise(
                    axios.post(POST_ENQUIRY_FORM, new URLSearchParams({
                        ...formValues
                    }).toString()),
                    {
                        pending: 'Submitting...',
                        success: 'Form submitted successfully!',
                        error: 'Error submitting form',
                    }
                );
    
                setFormValues({ name: '', email: '', phone_number: '', message: '' }); // Reset form fields
            } catch (error) {
                console.error("Form submission error:", error);
            }
        } else {
            toast.error("Please fill out all required fields.");
        }
    };

    return (
        <>
            <section aria-labelledby="contact-section-title" className="bg-white text-black flex flex-col justify-center md:h-auto py-10">
                <div className='h-auto md:h-full flex justify-center items-center p-4 md:p-0'>
                    <div className='md:w-[80%] flex flex-col justify-center items-center text-center gap-8 md:gap-10'>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h2 id="contact-section-title" className='font-bold text-lg md:text-2xl uppercase'>Get in Touch</h2>
                            <div className="space-y-1 text-sm md:text-base">
                                <p className='hidden md:block'>Reach out to us for any queries regarding our products and services.</p>
                                <p className='hidden md:block'>We are here to help and guide you through our offerings.</p>
                                <p className='block md:hidden'>Reach out to us for any queries regarding our products and services. We are here to help and guide you through our offerings.</p>
                            </div>
                        </div>
                        <div className="grid gap-4 md:gap-6 md:grid-cols-3 w-full px-5 md:px-0">
                            <ContactCard
                                order="order-2 md:order-1"
                                icon={<IoCall />}
                                title="Call Us"
                                text={`+91 ${companyPhoneNo}`}
                                onClick={() => window.location.href = `https://wa.me/91${companyPhoneNo}`}
                            />
                            <ContactCard
                                order="order-1 md:order-2"
                                icon={<MdLocationOn />}
                                title="Address"
                                text={`Premier Steels\nStock Yard, Pullepady Road\nErnakulam, PIN: 628017`}
                                onClick={() => window.open("https://maps.app.goo.gl/NsLitg5Y48vRQHf46", "_blank")}
                            />
                            <ContactCard
                                order="order-3 md:order-3"
                                icon={<MdEmail />}
                                title="Email Us"
                                text={companyEmail}
                                onClick={() => window.location.href = `mailto:${companyEmail}`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section aria-labelledby="contact-form-title" className="bg-selWhite text-black py-8 md:py-10">
                <div className="flex flex-col justify-center items-center px-4 text-center gap-2 md:gap-3">
                    <h2 id="contact-form-title" className="font-bold text-xl md:text-3xl uppercase text-selRed">Send us an email</h2>
                    <p className="text-xs md:text-base">We're here to answer any questions and provide support.</p>
                    <form className="flex flex-col space-y-4 w-full max-w-7xl mt-3 md:mt-5" onSubmit={handleSubmit} aria-label="Contact form">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formValues.name}
                                onChange={handleInputChange}
                                className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                                aria-label="Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-start text-xs md:text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                                aria-label="Your Email"
                            />
                            {errors.email && <p className="text-red-500 text-start text-xs md:text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone_number"
                                placeholder="Your Phone Number"
                                value={formValues.phone_number}
                                onChange={handleInputChange}
                                className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                                aria-label="Your Phone Number"
                            />
                            {errors.phone_number && <p className="text-red-500 text-start text-xs md:text-sm">{errors.phone_number}</p>}
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formValues.message}
                                onChange={handleInputChange}
                                className="p-3 text-black focus:outline-none w-full rounded-md placeholder:text-xs md:placeholder:text-base"
                                rows="4"
                                aria-label="Your Message"
                            />
                            {errors.message && <p className="text-red-500 text-start text-xs md:text-sm">{errors.message}</p>}
                        </div>
                        <button className="bg-selRed px-16 py-2 text-white rounded-md" aria-label="Submit form">Submit</button>
                    </form>
                </div>
            </section>

            <section aria-labelledby="map-title" className='h-96 md:h-96'>
                <h2 id="map-title" className="sr-only">Our Location on Map</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4082834858555!2d76.28874327503091!3d9.983093090121452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d48f57a27df%3A0xbd8601238c88e7ce!2sPremier%20Steels!5e0!3m2!1sen!2sin!4v1729509089342!5m2!1sen!2sin"
                    width="100%"
                    className="h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map Location"
                ></iframe>
            </section>
        </>
    )
}

const ContactCard = ({ icon, title,order, text, onClick }) => (
    <button
        className={`${order} contact-card p-6 bg-selRed text-white shadow-lg rounded-lg flex flex-col gap-3 md:gap-5 items-center text-center transition-all transform md:hover:scale-105 hover:shadow-xl`}
        onClick={onClick}
        aria-label={title}
        title={title}
    >
        <div className="flex items-center justify-center w-7 md:w-12 h-7 md:h-12 rounded-full border-2" aria-hidden="true">
            {icon}
        </div>
        <div>
            <p className="text-xs md:text-base font-bold uppercase whitespace-pre">{text}</p>
        </div>
    </button>
)


export default ContactsContentSection
