import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyLogo, teamMembers } from '../utils/constants';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AboutFounderSection = () => {
  const sectionRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    const textElements = gsap.utils.toArray('.animate-text');
    const imageElements = gsap.utils.toArray('.animate-image');
    
    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
        markers: false,
      }
    });

    timeline.current.to(textElements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });

    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="founder-section bg-selWhite py-16 px-4 md:px-16 lg:px-32" 
      aria-labelledby="founder-section-heading"
    >
      <div className="max-w-7xl mx-auto ">
        <h2 id="founder-section-heading" className="sr-only">
          Meet the Team Behind Premier Steels
        </h2>
        {teamMembers.map((member, index) => (
          <article 
            key={member.name}
            className={`flex flex-col items-center justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12`}
          >
            <div 
              className="animate-text w-full md:w-1/2 opacity-0 " 
              aria-labelledby={`member-${index}-name member-${index}-role`}
            >
              <h3 id={`member-${index}-name`} className="uppercase text-3xl md:text-5xl font-semibold text-selRed text-center md:text-left">
                {member.name}
              </h3>
              <p id={`member-${index}-role`} className="font-bold text-lg text-red-950 uppercase mb-4 text-center md:text-left">
                {member.role}
              </p>
              {member.description.map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base text-center md:text-left">
                  {paragraph}
                </p>
              ))}
            </div>
          
            <div className="flex flex-col items-center gap-1 justify-center md:w-1/2 text-center">
              <NavLink to="/" className="flex items-center" aria-label="Home">
                <div className="overflow-hidden p-1 lg:p-2 rounded-full">
                  <img
                    src={companyLogo}
                    alt="Premier Steels Company Logo"
                    className="w-16 h-12 lg:w-40 lg:h-20 transition-all duration-700 ease-in-out"
                  />
                </div>
              </NavLink>
              <NavLink to="/" className="flex items-center justify-center text-center mt-1">
                <div className="text-center px-4">
                  <h1 className="company-font-only text-3xl md:text-5xl font-bold" aria-label="Premier Steels Brand Name">
                    Premier Steels
                  </h1>
                  <p className="text-xs md:text-base">
                    Quality • Strength • Durability
                  </p>
                </div>
              </NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutFounderSection;
