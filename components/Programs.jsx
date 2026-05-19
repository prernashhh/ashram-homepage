"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const mobilePrograms = [
  {
    date: "April 26 - April 28",
    title: "Yoga & Mindfulness Workshop",
    text: "A comprehensive three-day workshop combining traditional yoga practices with modern mindfulness techniques for holistic wellbeing.",
  },

  {
    date: "April 26 - April 28",
    title: "Yoga & Mindfulness Workshop",
    text: "A comprehensive three-day workshop combining traditional yoga practices with modern mindfulness techniques for holistic wellbeing.",
  },

  {
    date: "April 26 - April 28",
    title: "Yoga & Mindfulness Workshop",
    text: "A comprehensive three-day workshop combining traditional yoga practices with modern mindfulness techniques for holistic wellbeing.",
  },

  {
    date: "April 26 - April 28",
    title: "Yoga & Mindfulness Workshop",
    text: "A comprehensive three-day workshop combining traditional yoga practices with modern mindfulness techniques for holistic wellbeing.",
  },
];

export default function Programs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    handleSelect();
    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const intervalId = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section className="w-full bg-[#F8F6F2] px-5 md:px-8 py-16 md:py-24 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">

        <div className="">

          <p className="uppercase tracking-[3px] text-[#555] text-[10px] md:text-xs mb-4">

            The Programs

          </p>



          <h2
            className="
              text-[#6B3B22]
              text-[34px]
              md:text-[56px]
              leading-tight
              font-medium
              mb-4
            "
            style={{
              fontFamily: "var(--font-stix)",
            }}
          >

            Join an <i>Upcoming Event</i>

          </h2>



          <p className="text-[#444] text-sm md:text-base">

            Register and mark your calendar for an enriching experience

          </p>

        </div>



        {/* Desktop Controls */}
        <div className="hidden md:flex flex-col items-end gap-8">

          <button
            type="button"
            className="group mt-4 border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white/40 backdrop-blur-sm"
          >

            View All Events

            <span className="w-7 h-7 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">

              <ArrowRight size={14} />

            </span>

          </button>



          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border border-[#D5C7B0] flex items-center justify-center text-[#999] hover:bg-white transition"
            >

              <ChevronLeft size={18} />

            </button>



            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border border-[#6B3B22] flex items-center justify-center text-[#6B3B22] hover:bg-[#6B3B22] hover:text-white transition"
            >

              <ChevronRight size={18} />

            </button>

          </div>

        </div>

      </div>



      {/* DESKTOP FEATURED CARD */}
      <div className="hidden md:flex items-center justify-center relative">

        {/* Side Preview Left */}
        <div className="absolute left-0 opacity-20 scale-90">

          <div className="w-[220px] h-[420px] bg-white rounded-2xl"></div>

        </div>



        {/* Main Card */}
        <div className="w-full max-w-5xl bg-[#F5F2EC] rounded-2xl overflow-hidden shadow-sm grid grid-cols-2 z-10">

          {/* Image */}
          <img
            src="/event-main.png"
            alt="Event"
            className="w-full h-full object-cover"
          />



          {/* Content */}
          <div className="p-12 flex flex-col justify-center">

            <div className="flex items-center gap-3 mb-8">

              <span className="bg-[#6B3B22] text-white text-[10px] px-4 py-2 rounded-full uppercase tracking-wide">

                Featured Event

              </span>



              <span className="border border-[#D5C7B0] text-[#6B3B22] text-[10px] px-4 py-2 rounded-full uppercase tracking-wide">

                Pujya Gurudevshri

              </span>

            </div>



            <h3
              className="text-[#3A2A1F] text-[42px] mb-6"
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Guru Purnima Shibir

            </h3>



            <p className="text-[#555] leading-8 mb-10 max-w-md">

              A transformative three-day immersion in silence,
              meditation, and self-reflection. Disconnect from
              the noise and reconnect with your inner stillness.

            </p>



            <div className="flex gap-12 mb-10 text-sm">

              <div>

                <p className="uppercase text-[#999] text-xs mb-2">
                  Date
                </p>

                <div className="hidden md:block relative">
                  April 26 - April 28
                </p>

                  <div className="overflow-hidden rounded-[32px] border border-[#E5D8C6] bg-[#F5F2EC] px-4 py-6 shadow-sm md:px-6 md:py-8">
                    <div ref={emblaRef} className="overflow-hidden">
                      <div className="flex touch-pan-y gap-6">
                        {desktopPrograms.map((program, index) => {
                          const isActive = selectedIndex === index;

                          return (
                            <div
                              key={program.title}
                              className="min-w-0 shrink-0 basis-[88%] md:basis-[84%] lg:basis-[72%]"
                            >
                              <article
                                className={`group relative flex h-[420px] overflow-hidden rounded-2xl bg-[#F5F2EC] shadow-sm transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "scale-100 opacity-100" : "scale-[0.94] opacity-75"}`}
                              >
                                <div className="relative w-[220px] shrink-0 lg:w-[240px]">
                                  <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    sizes="(max-width: 1024px) 220px, 240px"
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#23150d]/45 via-transparent to-transparent" />
                                </div>

                                <div className="flex flex-1 flex-col justify-center p-6 lg:p-12">
                                  <div>
                                    <div className="mb-5 flex flex-wrap gap-3">
                                      <span className="w-fit rounded-full bg-[#6B3B22] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white">
                                        {program.label}
                                      </span>
                                      <span className="w-fit rounded-full border border-[#D5C7B0] bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#6B3B22]">
                                        {program.tag}
                                      </span>
                                    </div>

                                    <h3
                                      className={`mb-6 leading-tight text-[#3A2A1F] transition-all duration-1000 ${isActive ? "text-[42px]" : "text-[30px]"}`}
                                      style={{ fontFamily: "var(--font-stix)" }}
                                    >
                                      {program.title}
                                    </h3>

                                    <p className={`max-w-md leading-8 text-[#555] transition-all duration-1000 ${isActive ? "text-base" : "text-sm"}`}>
                                      {program.text}
                                    </p>
                                  </div>

                                  <div className={`mt-8 flex items-end justify-between gap-6 transition-all duration-1000 ${isActive ? "opacity-100" : "opacity-90"}`}>
                                    <div className="flex gap-8 text-sm lg:gap-12">
                                      <div>
                                        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#999]">
                                          Date
                                        </p>
                                        <p className="text-[#444]">{program.date}</p>
                                      </div>
                                      <div>
                                        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#999]">
                                          Time
                                        </p>
                                        <p className="text-[#444]">{program.time}</p>
                                      </div>
                                    </div>

                                    <button className="rounded-md border border-[#6B3B22] px-6 py-3 text-sm font-medium text-[#6B3B22] transition hover:bg-[#6B3B22] hover:text-white">
                                      Learn More
                                    </button>
                                  </div>
                                </div>
                              </article>
                            </div>
                          );
                        })}
                      </div>
            alt="Event"
            className="w-full h-[320px] object-cover"
          />



          <div className="p-6">

            <span className="bg-[#C8B08A] text-white text-[10px] px-4 py-2 rounded-full uppercase tracking-wide">

              Featured Event

            </span>



            <h3
              className="text-[#3A2A1F] text-[36px] mt-6 mb-5"
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Guru Purnima Shibir

            </h3>



            <p className="text-[#555] leading-8 text-sm mb-8">

              A transformative three-day immersion in silence,
              meditation, and self-reflection. Disconnect from
              the noise and reconnect with your inner stillness.

            </p>



            <div className="flex flex-col items-center mb-10">

              <div className="flex flex-col gap-6 text-sm">

                {/* Date */}
                <div className="flex items-center gap-10">

                  <p className="uppercase text-[#8A4D3B] text-[11px] tracking-[2px] min-w-[50px]">

                    Date

                  </p>

                  <p className="text-[#333] text-[15px]">

                    July 2026

                  </p>

                </div>



                {/* Time */}
                <div className="flex items-center gap-10">

                  <p className="uppercase text-[#8A4D3B] text-[11px] tracking-[2px] min-w-[50px]">

                    Time

                  </p>

                  <p className="text-[#333] text-[15px]">

                    Fri 6 PM - Sun 12 PM

                  </p>

                </div>

              </div>



              {/* Button */}
              <button className="mt-10 border border-[#6B3B22] text-[#6B3B22] px-12 py-3 rounded-md text-sm font-medium hover:bg-[#6B3B22] hover:text-white transition">

                Learn More

              </button>

            </div>
          
          </div>

        </div>



        {/* Mobile List */}
        <div className="space-y-12 p-5">

          {mobilePrograms.map((program, index) => (
            <div key={index}>

              <p className="text-[#444] text-sm mb-6">

                {program.date}

              </p>



              <h4
                className="text-[#333] text-[32px] mb-5 leading-tight"
                style={{
                  fontFamily: "var(--font-stix)",
                }}
              >

                {program.title}

              </h4>



              <p className="text-[#666] leading-8 text-sm mb-6">

                {program.text}

              </p>



              <div className="flex items-center justify-between">

                <div className="flex gap-3">

                  <span className="border border-[#8A4D3B] text-[#8A4D3B] px-5 py-2 rounded-full text-xs">

                    Yoga

                  </span>



                  <span className="border border-[#8A4D3B] text-[#8A4D3B] px-5 py-2 rounded-full text-xs">

                    Meditation

                  </span>

                </div>



                <button className="w-9 h-9 rounded-full border border-[#D5C7B0] flex items-center justify-center text-[#8A4D3B]">

                  <ArrowRight size={14} />

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}