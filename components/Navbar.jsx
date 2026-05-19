"use client";

import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  Menu,
  Search,
  X,
} from "lucide-react";

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="w-full flex">

        <div className="bg-[#5E2A29] flex-1 md:flex-3">

          <div className="px-4 md:px-8 py-4 md:py-2.5 flex items-center justify-center gap-3">

            <p className="text-white text-[11px] md:text-[14px] font-medium text-center leading-snug">

              Joyous July Registration Now Open! Secure Your Spot First!

            </p>



            <button className="bg-[#F5F2EC] text-[#5E2A29] px-5 md:px-6 py-2 md:py-2 rounded-full text-[11px] md:text-sm font-medium whitespace-nowrap hover:opacity-90 transition">

              Register Now

            </button>

          </div>

        </div>



        <div className="hidden md:flex md:flex-1 bg-[#F5F2EC] items-center justify-center px-8">

          <div className="flex items-center gap-4 text-[#5E2A29] text-[13px]">

            <p className="cursor-pointer hover:opacity-80 transition">

              Contact Us

            </p>



            <span>|</span>



            <p className="cursor-pointer hover:opacity-80 transition">

              Host Your Event

            </p>

          </div>

        </div>

      </div>



      {/* Main Navbar */}
      <nav className="bg-[#FAFAFA] border-b border-gray-200">

        <div className="max-w-[1600px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="shrink-0">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-42 md:w-60 object-contain"
            />

          </div>



          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10 text-[#5E2A29]">

            {/* ABOUT */}
            <li className="relative group">

              <div className="flex items-center gap-1 uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] group-hover:text-[#C56B2D] transition-colors duration-300">

                ABOUT

                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

              </div>



              <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white min-w-[280px] rounded-xl shadow-2xl p-6 z-50">

                <ul className="space-y-5 text-[15px] text-[#222]">

                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Inspiration and Founder

                  </li>



                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Global Movement

                  </li>



                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Our Story

                  </li>

                </ul>

              </div>

            </li>



            {/* VISIT */}
            <li className="relative group">

              <div className="flex items-center gap-1 uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] group-hover:text-[#C56B2D] transition-colors duration-300">

                VISIT

                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

              </div>



              <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white min-w-[280px] rounded-xl shadow-2xl p-6 z-50">

                <ul className="space-y-5 text-[15px] text-[#222]">

                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Explore The Space

                  </li>



                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Directions & Transportation

                  </li>

                </ul>

              </div>

            </li>



            {/* ACTIVITIES */}
            <li className="relative group">

              <div className="flex items-center gap-1 uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] group-hover:text-[#C56B2D] transition-colors duration-300">

                ACTIVITIES

                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

              </div>



              <div className="absolute top-full left-0 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white min-w-[280px] rounded-xl shadow-2xl p-6 z-50">

                <ul className="space-y-5 text-[15px] text-[#222]">

                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Wisdom

                  </li>



                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Meditation

                  </li>



                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Yoga

                  </li>



                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Sound Healing

                  </li>



                  <li className="hover:text-[#C56B2D] transition cursor-pointer">

                    Courses & Workshops

                  </li>

                </ul>

              </div>

            </li>



            {/* Direct Links */}
            <li className="uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] hover:text-[#C56B2D] transition-colors duration-300">

              PROGRAM CALENDAR

            </li>



            <li className="uppercase tracking-[0.9px] text-[14px] font-medium cursor-pointer text-[#5E2A29] hover:text-[#C56B2D] transition-colors duration-300">

              SOCIAL IMPACT

            </li>

          </ul>



          {/* Right Icons */}
          <div className="flex items-center gap-3 text-[#5E2A29]">

            <button className="hover:opacity-80 transition">

              <Search
                size={24}
                strokeWidth={2}
              />

            </button>



            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden hover:opacity-80 transition"
            >

              <Menu
                size={30}
                strokeWidth={2}
              />

            </button>

          </div>

        </div>

      </nav>



      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[100]
          transition-all duration-500
          ${mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"}
        `}
      >

        {/* Overlay */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        ></div>



        {/* Menu Panel */}
        <div
          className={`
            absolute top-0 right-0
            w-full max-w-[420px]
            h-full
            bg-[#F8F6F2]
            transition-transform duration-500 ease-in-out
            overflow-y-auto
            ${mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"}
          `}
        >

          {/* Top */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-[#DDD]">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-40 object-contain"
            />



            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#5E2A29]"
            >

              <X size={32} />

            </button>

          </div>



          {/* Links */}
          <div className="px-6 py-6">

            {/* ABOUT */}
            <div className="border-b border-[#DDD] py-5">

              <button
                onClick={() => toggleSection("about")}
                className="w-full flex items-center justify-between"
              >

                <span className="uppercase text-[#5E2A29] font-semibold tracking-wide">

                  About

                </span>



                {openSection === "about"
                  ? <ChevronUp size={20} />
                  : <ChevronDown size={20} />
                }

              </button>



              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${openSection === "about"
                    ? "max-h-60 mt-5"
                    : "max-h-0"}
                `}
              >

                <ul className="space-y-4 text-[#444]">

                  <li>Inspiration & Founder</li>

                  <li>Global Movement</li>

                  <li>Our Story</li>

                </ul>

              </div>

            </div>



            {/* VISIT */}
            <div className="border-b border-[#DDD] py-5">

              <button
                onClick={() => toggleSection("visit")}
                className="w-full flex items-center justify-between"
              >

                <span className="uppercase text-[#5E2A29] font-semibold tracking-wide">

                  Visit

                </span>



                {openSection === "visit"
                  ? <ChevronUp size={20} />
                  : <ChevronDown size={20} />
                }

              </button>



              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${openSection === "visit"
                    ? "max-h-60 mt-5"
                    : "max-h-0"}
                `}
              >

                <ul className="space-y-4 text-[#444]">

                  <li>Explore The Space</li>

                  <li>Directions & Transportation</li>

                </ul>

              </div>

            </div>



            {/* ACTIVITIES */}
            <div className="border-b border-[#DDD] py-5">

              <button
                onClick={() => toggleSection("activities")}
                className="w-full flex items-center justify-between"
              >

                <span className="uppercase text-[#5E2A29] font-semibold tracking-wide">

                  Activities

                </span>



                {openSection === "activities"
                  ? <ChevronUp size={20} />
                  : <ChevronDown size={20} />
                }

              </button>



              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${openSection === "activities"
                    ? "max-h-96 mt-5"
                    : "max-h-0"}
                `}
              >

                <ul className="space-y-4 text-[#444]">

                  <li>Wisdom</li>

                  <li>Meditation</li>

                  <li>Yoga</li>

                  <li>Sound Healing</li>

                  <li>Courses & Workshops</li>

                </ul>

              </div>

            </div>



            {/* Direct Links */}
            <div className="space-y-8 py-6">

              <p className="uppercase text-[#5E2A29] font-semibold tracking-wide">

                Program Calendar

              </p>



              <p className="uppercase text-[#5E2A29] font-semibold tracking-wide">

                Social Impact

              </p>

            </div>



            {/* Bottom */}
            <div className="pt-10 border-t border-[#DDD] space-y-5 text-[#444]">

              <p>Contact Us</p>

              <p>Host Your Event</p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}