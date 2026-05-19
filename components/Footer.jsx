"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const footerSections = [
  {
    title: "ABOUT",
    links: [
      "Inspiration & Founder",
      "Global Movement",
      "Our Story",
    ],
  },

  {
    title: "VISIT",
    links: [
      "Explore The Space",
      "Directions & Transportation",
    ],
  },

  {
    title: "OFFERINGS",
    links: [
      "Wisdom",
      "Meditation",
      "Yoga",
      "Sound Healing",
    ],
  },

  {
    title: "PROGRAMS",
    links: [
      "Programs Calendar",
    ],
  },

  {
    title: "GET INVOLVED",
    links: [
      "Contact Us",
      "Host Your Event",
    ],
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState("ABOUT");

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="w-full bg-[#6B2B26] text-white px-6 md:px-20 py-16 md:py-24">

      {/* Heading */}
      <h2
        className="
          text-center
          text-[42px]
          md:text-[56px]
          mb-14
        "
        style={{
          fontFamily: "var(--font-stix)",
        }}
      >

        A Sanctuary For The Soul

      </h2>



      {/* Desktop Footer */}
      <div className="hidden md:grid grid-cols-5 gap-12 mb-24">

        {footerSections.map((section, index) => (
          <div key={index}>

            <h3 className="uppercase text-sm font-semibold mb-6 tracking-wide">

              {section.title}

            </h3>



            <ul className="space-y-4 text-sm text-white/90">

              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:opacity-70 cursor-pointer transition"
                >

                  {link}

                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>



      {/* Mobile Accordion */}
      <div className="md:hidden border-t border-white/20">

        {footerSections.map((section, index) => {
          const isOpen = openSection === section.title;

          return (
            <div
              key={index}
              className="border-b border-white/20 py-5"
            >

              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between"
              >

                <span className="text-xl font-semibold">

                  {section.title}

                </span>



                <div className="transition-transform duration-300">

                  {isOpen ? (
                    <ChevronUp size={22} />
                  ) : (
                    <ChevronDown size={22} />
                  )}

                </div>

              </button>



              {/* Accordion Content */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${isOpen ? "max-h-96 mt-5" : "max-h-0"}
                `}
              >

                <ul className="space-y-4 text-lg text-white/90">

                  {section.links.map((link, i) => (
                    <li key={i}>

                      {link}

                    </li>
                  ))}

                </ul>

              </div>

            </div>
          );
        })}

      </div>



      {/* Bottom */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 text-sm text-white/90 mt-16">

        {/* Address */}
        <div className="leading-8">

          <p>Shrimad Rajchandra Ashram, USA</p>

          <p>206 Marquis Rd, East Stroudsburg, PA 18302</p>

        </div>



        {/* Policies */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">

          <p>Terms Of Use</p>

          <p>Privacy Policy</p>

          <p>Accessibility</p>

          <p>Sitemap</p>

        </div>

      </div>



      {/* Copyright */}
      <p className="text-center text-xs text-white/70 mt-10">

        © Copyright 2026. Shrimad Rajchandra Ashram, USA

      </p>

    </footer>
  );
}