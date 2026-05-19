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
    title: "Meditation Retreat",
    description:
      "Reconnect with inner stillness through guided meditation and mindful awareness practices in nature.",
    date: "May 12 - May 15",
    time: "8AM - 5PM",
  },

  {
    image: "/yoga.png",
    title: "Yoga & Wellness",
    description:
      "Gentle yoga sessions designed to harmonize breath, body, and awareness in a peaceful environment.",
    date: "June 2 - June 4",
    time: "6AM - 4PM",
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
    <section className="w-full bg-[#f8f6f2b9] px-5 md:px-8 py-16 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[3px] text-[#555] text-[10px] md:text-xs mb-4">

              The Programs

            </p>



            <h2
              className="
                text-[#6B3B22]
                text-[36px]
                md:text-[42px]
                xl:text-[58px]
                leading-tight
                font-medium
                mb-5
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Join an <i>Upcoming Event</i>

            </h2>



            <p className="text-[#555] text-sm md:text-base">

              Register and mark your calendar for an enriching experience

            </p>

          </div>



          {/* Right */}
          <div className="flex items-center justify-between md:flex-col md:items-end gap-6">

            <button className="group border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white">

              View All Events

              <span className="w-7 h-7 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">

                <ArrowRight size={14} />

              </span>

            </button>


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
                  className="w-full h-[420px] object-cover"
                />

              </div>

            </div>



            {/* CENTER CARD */}
            <div
              className="
                w-full max-w-5xl
                bg-[#F5F2EC]
                rounded-2xl
                overflow-hidden
                shadow-sm
                grid lg:grid-cols-2
                transition-all duration-700
                hover:shadow-xl
              "
            >

              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />



              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">

                {/* Tags */}
                <div className="flex items-center gap-3 mb-8 flex-wrap">

                  <span className="bg-[#6B3B22] text-white text-[10px] px-4 py-2 rounded-full uppercase tracking-wide">

                    Featured Event

                  </span>



                  <span className="border border-[#D5C7B0] text-[#6B3B22] text-[10px] px-4 py-2 rounded-full uppercase tracking-wide">

                    Pujya Gurudevshri

                  </span>

                </div>

                <h3
                  className="text-[#3A2A1F] text-[34px] xl:text-[42px] mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-stix)",
                  }}
                >

                  {current.title}

                </h3>

                <p className="text-[#555] leading-8 mb-10 max-w-md text-sm lg:text-base">

                  {current.description}

                </p>



                <div className="flex gap-12 mb-10 text-sm">

                  <div>

                    <p className="uppercase text-[#999] text-xs mb-2">
                      Date
                    </p>

                    <p className="text-[#444]">
                      {current.date}
                    </p>

                  </div>


                  <div>

                    <p className="uppercase text-[#999] text-xs mb-2">
                      Time
                    </p>

                    <p className="text-[#444]">
                      {current.time}
                    </p>

                  </div>

                </div>

                <button className="border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#6B3B22] hover:text-white transition w-fit">

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
                  className="w-full h-[420px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>


        {/* MOBILE CARDS */}
        <div className="md:hidden flex flex-col gap-8">

          {events.map((event, index) => (
            <div
              key={index}
              className="
                w-full
                bg-[#F5F2EC]
                rounded-none
                overflow-hidden
              "
            >

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[320px] object-cover"
              />



              {/* Content */}
              <div className="px-7 py-8">

                {/* Tags */}
                <div className="flex items-center gap-2 mb-6 flex-wrap">

                  <span className="bg-[#C9A36B] text-white text-[9px] px-3 py-2 rounded-full uppercase tracking-wide">

                    Featured Event

                  </span>



                  <span className="border border-[#D5C7B0] text-[#6B3B22] text-[9px] px-3 py-2 rounded-full uppercase tracking-wide">

                    Pujya Gurudevshri

                  </span>

                </div>


                <h3
                  className="
                    text-[#3A2A1F]
                    text-[34px]
                    leading-tight
                    mb-6
                  "
                  style={{
                    fontFamily: "var(--font-stix)",
                  }}
                >

                  {event.title}

                </h3>


                <p className="text-[#555] text-sm leading-8 mb-8">

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