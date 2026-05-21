"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const events = [
  {
    image: "/event-main.png",
    title: "Guru Purnima Shibir",
    description:
      "A transformative three-day immersion in silence, meditation, and self-reflection. Disconnect from the noise and reconnect with your inner stillness.",
    date: "April 26 - April 28",
    time: "7AM - 6PM",
  },

  {
    image: "/event-side.jpg",
    title: "Breathwork Retreat",
    description:
      "Experience conscious breathing practices that calm the nervous system and restore mental clarity and balance.",
    date: "May 12 - May 15",
    time: "8AM - 5PM",
  },

  {
    image: "/workshop.png",
    title: "Mindfulness Workshop",
    description:
      "Interactive sessions focused on self-awareness, emotional grounding, and practical tools for mindful living.",
    date: "June 2 - June 4",
    time: "9AM - 4PM",
  },

  {
    image: "/sound-healing.png",
    title: "Sacred Sound Healing",
    description:
      "Experience calming vibrations and restorative sound journeys that settle the mind and uplift the spirit.",
    date: "July 10 - July 12",
    time: "5PM - 9PM",
  },
];

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + events.length) % events.length
    );
  };

  const current = events[activeIndex];

  const prev =
    events[
      (activeIndex - 1 + events.length) % events.length
    ];

  const next =
    events[
      (activeIndex + 1) % events.length
    ];

  return (
    <section className="w-full bg-[#F8F6F2] px-5 md:px-8 py-16 md:py-24 overflow-hidden">

      <div className="max-w-[1320px] mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

          {/* Left */}
          <div className="max-w-[986px]">

            <p className="uppercase tracking-[1.2px] text-[rgba(40,40,40,0.80)] text-[14px] md:text-[20px] font-medium mb-5">

              The Programs

            </p>



            <h2
              className="
                text-[#5E2A29]
                text-[38px]
                md:text-[52px]
                leading-[46px]
                md:leading-[58px]
                font-normal
                antialiased
                mb-5
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Join an <i>Upcoming Event</i>

            </h2>



            <p className="text-[#282828] text-[16px] md:text-[20px] leading-[32px] md:leading-[38px] font-normal">

              Register and mark your calendar for an enriching experience

            </p>

          </div>



          {/* Right */}
          <div className="flex items-center justify-between md:flex-col md:items-end gap-6">

            <button className="group border border-[#6B3B22] text-[#6B3B22] px-5 py-2.5 rounded-full text-[16px] font-medium flex items-center gap-5 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white">

              View All Events

              <span className="w-8 h-8 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">

                <ArrowRight size={16} />

              </span>

            </button>



            {/* Desktop Arrows */}
            <div className="hidden md:flex items-center gap-4">

              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#C9B8A2] flex items-center justify-center hover:bg-[#6B3B22] hover:text-white transition"
              >

                <ChevronLeft size={20} />

              </button>



              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#6B3B22] flex items-center justify-center hover:bg-[#6B3B22] hover:text-white transition"
              >

                <ChevronRight size={20} />

              </button>

            </div>

          </div>

        </div>



        {/* DESKTOP CAROUSEL */}
        <div className="hidden md:flex items-center justify-center relative overflow-hidden">

          <div
            key={activeIndex}
            className="
              flex items-center gap-6 lg:gap-8
              animate-carouselSlide
            "
          >

            {/* LEFT PREVIEW */}
            <div className="
              w-[180px] lg:w-[240px]
              opacity-20
              scale-[0.9]
              blur-[1px]
              transition-all duration-700
            ">

              <div className="rounded-2xl overflow-hidden bg-[#F5F2EC]">

                <img
                  src={prev.image}
                  alt={prev.title}
                  className="w-full h-[548px] object-cover"
                />

              </div>

            </div>



            {/* CENTER CARD */}
            <div
              className="
                w-full max-w-5xl
                h-[548px]
                bg-[#F5F2EC]
                rounded-2xl
                overflow-hidden
                grid lg:grid-cols-2
                transition-all duration-700
              "
            >

              {/* Image */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />



              {/* Content */}
              <div className="px-12 py-14 flex flex-col justify-center">

                {/* Tags */}
                <div className="flex items-center gap-3 mb-10 flex-wrap">

                  <span className="bg-[#6B2B26] text-white text-[10px] px-5 py-2 rounded-full uppercase tracking-wide">

                    Featured Event

                  </span>



                  <span className="border border-[#D5C7B0] text-[#6B3B22] text-[10px] px-5 py-2 rounded-full uppercase tracking-wide">

                    Pujya Gurudevshri

                  </span>

                </div>



                {/* Title */}
                <h3
                  className="
                    text-[#2D2118]
                    text-[34px]
                    xl:text-[42px]
                    leading-tight
                    font-normal
                    mb-8
                  "
                  style={{
                    fontFamily: "var(--font-stix)",
                  }}
                >

                  {current.title}

                </h3>



                {/* Description */}
                <p className="text-[#555] leading-[54px] mb-12 max-w-md text-[18px]">

                  {current.description}

                </p>



                {/* Date + Time */}
                <div className="flex flex-col gap-6 mb-12">

                  <div className="flex items-center gap-10">

                    <p className="uppercase text-[#999] text-[14px] tracking-[1px] min-w-[52px]">

                      Date

                    </p>

                    <p className="text-[#444] text-[18px]">

                      {current.date}

                    </p>

                  </div>



                  <div className="flex items-center gap-10">

                    <p className="uppercase text-[#999] text-[14px] tracking-[1px] min-w-[52px]">

                      Time

                    </p>

                    <p className="text-[#444] text-[18px]">

                      {current.time}

                    </p>

                  </div>

                </div>



                {/* Learn More */}
                <button className="border border-[#6B3B22] text-[#6B3B22] px-10 py-3 rounded-md text-sm font-medium hover:bg-[#6B3B22] hover:text-white transition w-fit">

                  Learn More

                </button>

              </div>

            </div>



            {/* RIGHT PREVIEW */}
            <div className="
              w-[180px] lg:w-[240px]
              opacity-20
              scale-[0.9]
              blur-[1px]
              transition-all duration-700
            ">

              <div className="rounded-2xl overflow-hidden bg-[#F5F2EC]">

                <img
                  src={next.image}
                  alt={next.title}
                  className="w-full h-[548px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>



        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-8">

          {events.map((event, index) => (
            <div
              key={index}
              className="w-full bg-[#F5F2EC] overflow-hidden"
            >

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[360px] object-cover"
              />



              <div className="px-7 py-8">

                {/* Tags */}
                <div className="flex items-center gap-2 mb-6 flex-wrap">

                  <span className="bg-[#6B2B26] text-white text-[9px] px-3 py-2 rounded-full uppercase tracking-wide">

                    Featured Event

                  </span>



                  <span className="border border-[#D5C7B0] text-[#6B3B22] text-[9px] px-3 py-2 rounded-full uppercase tracking-wide">

                    Pujya Gurudevshri

                  </span>

                </div>



                {/* Mobile Title */}
                <h3
                  className="
                    text-[#5E2A29]
                    text-[28px]
                    leading-normal
                    font-normal
                    mb-5
                    antialiased
                  "
                  style={{
                    fontFamily: "var(--font-stix)",
                  }}
                >

                  <>
                    {event.title.split(" ")[0]}{" "}

                    <i>
                      {event.title.split(" ").slice(1).join(" ")}
                    </i>
                  </>

                </h3>



                {/* Description */}
                <p className="text-[#444] text-[16px] leading-[38px] mb-8">

                  {event.description}

                </p>



                {/* Date + Time */}
                <div className="flex flex-col gap-5 mb-8">

                  <div className="flex items-center gap-6">

                    <p className="uppercase text-[#8B5A3C] text-[11px] tracking-[2px] min-w-[52px]">

                      Date

                    </p>

                    <p className="text-[#444] text-sm">

                      {event.date}

                    </p>

                  </div>



                  <div className="flex items-center gap-6">

                    <p className="uppercase text-[#8B5A3C] text-[11px] tracking-[2px] min-w-[52px]">

                      Time

                    </p>

                    <p className="text-[#444] text-sm">

                      {event.time}

                    </p>

                  </div>

                </div>



                {/* Learn More */}
                <div className="flex justify-center">

                  <button className="border border-[#6B3B22] text-[#6B3B22] px-10 py-3 rounded-md text-sm font-medium hover:bg-[#6B3B22] hover:text-white transition">

                    Learn More

                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}