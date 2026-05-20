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
    title: "ACTIVITIES",
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
    <footer className="w-full bg-[#6B2B26] text-white px-6 md:px-12 lg:px-24 xl:px-32 py-14 md:py-20">

      {/* Heading */}
      <h2
        className="
          text-center
          text-[28px]
          md:text-[52px]
          tracking-[2px]
          leading-tight
          mb-14
          whitespace-nowrap
        "
        style={{
          fontFamily: "var(--font-stix)",
        }}
      >

        A Sanctuary For The Soul

      </h2>



      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-5 gap-10 xl:gap-16 mb-24">

        {footerSections.map((section, index) => (
          <div key={index}>

            <h3 className="uppercase text-[13px] font-semibold mb-7 tracking-wide">

              {section.title}

            </h3>



            <ul className="space-y-5 text-[15px] text-white/90">

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



      {/* MOBILE */}
      <div className="md:hidden border-t border-white/20">

        {footerSections.map((section, index) => {
          const isOpen = openSection === section.title;

          return (
            <div
              key={index}
              className="border-b border-white/20 py-5"
            >

              {/* Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between"
              >

                <span className="text-[16px] font-semibold tracking-wide">

                  {section.title}

                </span>



                <div className="transition-transform duration-300">

                  {isOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}

                </div>

              </button>



              {/* Content */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${isOpen ? "max-h-96 mt-5" : "max-h-0"}
                `}
              >

                <ul className="space-y-4 text-[15px] text-white/90 pl-1">

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
      <div className="mt-16">

        {/* Desktop Bottom */}
        <div className="hidden md:flex items-end justify-between text-[15px] text-white/90">

          {/* Address */}
          <div className="leading-8">

            <p>Shrimad Rajchandra Ashram, USA</p>

            <p>206 Marquis Rd, East Stroudsburg, PA 18302</p>

          </div>



          {/* Policies + Copyright */}
          <div className="flex items-center gap-4 flex-wrap justify-end">

            <p className="hover:opacity-70 cursor-pointer transition">

              Terms Of Use

            </p>

            <span>|</span>

            <p className="hover:opacity-70 cursor-pointer transition">

              Privacy Policy

            </p>

            <span>|</span>

            <p className="hover:opacity-70 cursor-pointer transition">

              Accessibility

            </p>

            <span>|</span>

            <p className="hover:opacity-70 cursor-pointer transition">

              Sitemap

            </p>

            <span>|</span>

            <p className="text-white/90 whitespace-nowrap">

              © 2026 Shrimad Rajchandra Ashram, USA

            </p>

          </div>

        </div>



        {/* Mobile Bottom */}
        <div className="md:hidden pt-4">

          {/* Address */}
          <div className=" text-center text-[14px] leading-7 text-white/90 mb-7">
            <p>Shrimad Rajchandra Ashram, USA</p>

            <p>206 Marquis Rd, East Stroudsburg, PA 18302</p>

          </div>



          {/* Policies */}
          <div className="flex justify-center items-center gap-2 text-[11px] text-white/90 whitespace-nowrap mb-6">            <p>Terms Of Use</p>

            <span>|</span>

            <p>Privacy Policy</p>

            <span>|</span>

            <p>Accessibility</p>

            <span>|</span>

            <p>Sitemap</p>

          </div>



          {/* Copyright */}
          <p className="text-[11px] text-white/80 whitespace-nowrap text-center w-full">

            © Copyright 2026. Shrimad Rajchandra Ashram, USA

          </p>

        </div>

      </div>

    </footer>
  );
}