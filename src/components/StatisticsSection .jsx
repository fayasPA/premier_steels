import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { statsData } from '../utils/helperFunctions';

gsap.registerPlugin(ScrollTrigger);

const StatisticsSection = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  

  return (
    <section className="timeline bg-selWhite" aria-labelledby="statistics-heading">
      <div className="text-selRed py-5 px-5 md:px-20">
        <div className="content-text max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 text-center uppercase">
          <h2 id="statistics-heading" className="sr-only">Company Statistics</h2>
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="flex flex-col items-center"
              role="region"
              aria-labelledby={`stat-${index}-label`}
            >
              <div className="flex flex-col justify-center border rounded-full md:rounded-xl px-5 py-5 md:px-10 md:py-10 items-center space-y-2">
                <div className="text-4xl" aria-hidden="true">{stat.icon}</div>
                <h3 id={`stat-${index}-label`} className="text-xs md:text-sm lg:text-base font-extralight">
                  {stat.label}
                </h3>
                <p className="text-2xl font-medium font-josefin">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
