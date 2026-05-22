"use client";

import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Guru Purnima Shibir",
    description:
      "A transformative three-day immersion in silence, meditation, and self-reflection. Disconnect from the noise and reconnect with your inner stillness.",
    image: "/event-main.png",
    date: "July 2026",
    time: "Fri 6 PM - Sun 12 PM",
  },

  {
    title: "Yoga & Mindfulness Workshop",
    description:
      "A comprehensive three-day workshop combining traditional yoga practices with modern mindfulness techniques for holistic wellbeing.",
    image: "/yoga.png",
    date: "April 26 - April 28",
    time: "7AM - 6PM",
  },

  {
    title: "Meditation Retreat",
    description:
      "Reconnect with your inner peace through guided meditations and moments of silence in nature.",
    image: "/meditation.png",
    date: "May 14 - May 16",
    time: "8AM - 5PM",
  },

  {
    title: "Sound Healing Experience",
    description:
      "Immerse yourself in calming sounds and healing vibrations for complete relaxation and renewal.",
    image: "/sound-healing.png",
    date: "June 8 - June 10",
    time: "6PM - 9PM",
  },

  {
    title: "Breathwork Session",
    description:
      "Experience deep breathing techniques that cultivate stillness, balance, and emotional clarity.",
    image: "/event-side.jpg",
    date: "August 4 - August 5",
    time: "9AM - 4PM",
  },

  {
    title: "Workshop Series",
    description:
      "Interactive sessions focused on self-growth, spirituality, and mindful living.",
    image: "/workshop.png",
    date: "September 10",
    time: "10AM - 3PM",
  },
];

export default function Practice() {
  return (
    <section className="w-full bg-[#F0EADE80] px-6 md:px-20 lg:px-32 py-16 md:py-24">

      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

          <div>

            <p className="uppercase tracking-[3px] text-[#555] text-[10px] md:text-[14px] font-medium mb-4">

              The Practice

            </p>



            <h2
              className="
                text-[#5A381C]
                text-[40px]
                xl:text-[58px]
                leading-tight
                font-normal
                mb-4
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Choose Your <i>Path</i>

            </h2>



            <p className="text-[#444] text-base md:text-lg">

              Experiences that nurture every part of your being

            </p>

          </div>



          {/* Desktop Button */}
          <button
            className="
              hidden md:inline-flex
              h-[60px]
              px-[20px]
              py-[10px]
              justify-center
              items-center
              gap-2
              rounded-[40px]
              border
              border-[#5E2A29]
              text-[#5E2A29]
              bg-transparent
              text-[16px]
              font-medium
              transition-all
              duration-300
              hover:bg-[#5E2A29]
              hover:text-white
              group
            "
          >

            Explore All Activities

            <span
              className="
                w-8 h-8
                rounded-full
                bg-[#5E2A29]
                text-white
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-white
                group-hover:text-[#5E2A29]
              "
            >

              <ArrowRight size={14} />

            </span>

          </button>

        </div>



        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[rgba(255,255,255,0.7)]
                overflow-hidden
              "
            >

              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[340px] object-cover"
              />



              {/* Content */}
              <div className="px-5 pt-5 pb-7">

                {/* Tag */}
                <div className="mb-5">

                  <span className="bg-[#B08A5A] text-white text-[10px] tracking-[1px] uppercase px-4 py-2 rounded-full">

                    Featured Event

                  </span>

                </div>



                {/* Title */}
                <h3
                  className="
                    text-[#5A381C]
                    text-[28px]
                    leading-tight
                    font-normal
                    mb-5
                  "
                  style={{
                    fontFamily: "var(--font-stix)",
                  }}
                >

                  {card.title}

                </h3>



                {/* Description */}
                <p className="text-[#444] text-[15px] leading-9 mb-8">

                  {card.description}

                </p>



                {/* Date + Time */}
<div className="space-y-4 mb-10">

  {/* Date */}
  <div className="flex items-center gap-8">

    <p className="
      w-[60px]
      uppercase
      text-[11px]
      tracking-[2px]
      text-[#9B6C63]
    ">

      Date

    </p>

    <p className="text-[15px] text-[#3B312F] font-medium">

      {card.date}

    </p>

  </div>



  {/* Time */}
  <div className="flex items-center gap-8">

    <p className="
      w-[60px]
      uppercase
      text-[11px]
      tracking-[2px]
      text-[#9B6C63]
    ">

      Time

    </p>

    <p className="text-[15px] text-[#3B312F] font-medium">

      {card.time}

    </p>

  </div>

</div>


                {/* Button */}
                <div className="flex justify-center">

                  <button className="border border-[#8A5A44] text-[#8A5A44] px-10 py-3 rounded-[4px] text-sm hover:bg-[#8A5A44] hover:text-white transition">

                    Learn More

                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>



        {/* DESKTOP */}
        <div className="hidden md:flex gap-6 overflow-x-auto pb-6 no-scrollbar">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                min-w-[285px]
                max-w-[285px]
                shrink-0
                bg-[rgba(255,255,255,0.7)]
                rounded-xl
                overflow-hidden
                backdrop-blur-sm
              "
            >

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[210px] object-cover"
              />



              <div className="p-6 flex flex-col min-h-[160px]">

                <h3
                  className="
                    text-[#5A381C]
                    text-[24px]
                    mb-4
                    font-normal
                  "
                  style={{
                    fontFamily: "var(--font-stix)",
                  }}
                >

                  {card.title}

                </h3>



                <p className="text-[#444] text-sm leading-8 mb-8 flex-grow">

                  {card.description}

                </p>



                <button className="mt-auto flex items-center gap-3 text-[#6B3B22] text-sm font-medium hover:opacity-70 transition">

                  Learn More

                  <span>

                    <ArrowRight size={12} />

                  </span>

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}