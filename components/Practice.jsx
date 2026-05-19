import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Wisdom",
    text: "Transformative teachings and insights that bring clarity to daily life and guide the journey within.",
    image: "/wisdom.png",
  },

  {
    title: "Meditation",
    text: "Dedicated time in silence and guided meditation to reconnect with your inner peace center.",
    image: "/meditation.png",
  },

  {
    title: "Yoga",
    text: "Gentle yoga practices that unite breath, body, and being.",
    image: "/yoga.png",
  },

  {
    title: "Sound Healing",
    text: "Calming sounds and soothing vibrations to help you settle into a quieter state within.",
    image: "/sound-healing.png",
  },
];

export default function Practice() {
  return (
    <section className="w-full bg-[#F0EADE80] px-5 md:px-8 py-16 md:py-24 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

        <div>

          <p className="uppercase tracking-[3px] text-[#555] text-[10px] md:text-xs mb-4">

            The Practice

          </p>



          <h2
            className="
              text-[#6B3B22]
              text-[40px]
              xl:text-[58px]
              leading-tight
              font-medium
              mb-4
            "
            style={{
              fontFamily: "var(--font-stix)",
            }}
          >

            Choose Your <i>Path</i>

          </h2>



          <p className="text-[#444] text-base md:text-lg">

            Experiences that nurture every part of your being.

          </p>

        </div>



        {/* Desktop Button */}
        <button className="hidden md:flex group mt-4 border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium items-center gap-4 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white/40 backdrop-blur-sm">

          Explore All Activities

          <span className="w-7 h-7 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">

            <ArrowRight size={14} />

          </span>

        </button>

      </div>



      {/* MOBILE + TABLET CARDS */}
      <div className="xl:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              w-[82%]
              sm:w-[48%]
              shrink-0
              snap-start
              bg-[#F7F5F2]
              rounded-xl
              overflow-hidden
            "
          >

            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[280px] object-cover"
            />



            <div className="p-5 flex flex-col min-h-[240px]">

              <h3
                className="text-[#6B3B22] text-[34px] mb-4"
                style={{
                  fontFamily: "var(--font-stix)",
                }}
              >

                {card.title}

              </h3>



              <p className="text-[#444] text-sm leading-8 mb-8 flex-grow">

                {card.text}

              </p>



              <button className="mt-auto flex items-center gap-3 text-[#6B3B22] text-sm font-medium hover:opacity-70 transition">

                Learn More

                <span >

                  <ArrowRight size={12} />

                </span>

              </button>

            </div>

          </div>
        ))}

      </div>



      {/* DESKTOP GRID */}
      <div className="hidden xl:grid grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              bg-[#F7F5F2]
              rounded-xl
              overflow-hidden
            "
          >

            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[320px] object-cover"
            />



            <div className="p-5 flex flex-col min-h-[250px]">

              <h3
                className="text-[#6B3B22] text-[34px] mb-4"
                style={{
                  fontFamily: "var(--font-stix)",
                }}
              >

                {card.title}

              </h3>



              <p className="text-[#444] text-sm leading-7 mb-8 flex-grow">

                {card.text}

              </p>



              <button className="mt-auto flex items-center gap-3 text-[#6B3B22] text-sm font-medium hover:opacity-70 transition">

                Learn More

                <span >

                  <ArrowRight size={12} />

                </span>

              </button>

            </div>

          </div>
        ))}

      </div>



      {/* Bottom Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">

        {/* Mobile Button */}
        <button className="md:hidden group border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white/40 backdrop-blur-sm">

          Explore All Activities

          <span className="w-7 h-7 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">

            <ArrowRight size={12} />

          </span>

        </button>



        {/* Desktop Arrows */}
        <div className="hidden md:flex items-center gap-4 ml-auto">

          <button className="w-12 h-12 rounded-full border border-[#D5C7B0] flex items-center justify-center text-[#999] hover:bg-white transition">

            <ChevronLeft size={18} />

          </button>



          <button className="w-12 h-12 rounded-full border border-[#6B3B22] flex items-center justify-center text-[#6B3B22] hover:bg-[#6B3B22] hover:text-white transition">

            <ChevronRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}