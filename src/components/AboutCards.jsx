import React, { useEffect } from "react";
import { gsap } from "gsap";
import { IoMdBusiness, IoMdPeople, IoMdTime } from "react-icons/io";
import { cardData } from "../utils/helperFunctions";


const AboutCards = () => {
    useEffect(() => {
        gsap.fromTo(
            ".about-card",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-card",
                    start: "top 90%",
                },
            }
        );
    }, []);

    return (
        <section className="flex flex-col items-center py-10 px-4 md:px-0 bg-selWhite" aria-labelledby="about-section-heading">
            {/* Accessible heading for screen readers */}
            <h2 id="about-section-heading" className="sr-only">About Premier Steels</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-7xl">
                {cardData.map((card, index) => (
                    <article
                        key={index}
                        className="about-card p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 flex flex-col items-center text-center border border-selRed"
                        aria-labelledby={`card-title-${index}`}
                    >
                        <div className="mb-4" aria-hidden="true">{card.icon}</div>
                        <h3 id={`card-title-${index}`} className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-sm md:text-base text-black">{card.content}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default AboutCards;
