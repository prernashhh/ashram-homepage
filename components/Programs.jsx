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
  return (
    <section className="w-full bg-[#f8f6f26f] px-5 md:px-8 py-16 md:py-24 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">

        <div>

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

          <button className="border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#6B3B22] hover:text-white transition">

            View All Events

            <ArrowRight size={16} />

          </button>



          <div className="flex items-center gap-4">

            <button className="w-12 h-12 rounded-full border border-[#D5C7B0] flex items-center justify-center text-[#999] hover:bg-white transition">

              <ChevronLeft size={18} />

            </button>



            <button className="w-12 h-12 rounded-full border border-[#6B3B22] flex items-center justify-center text-[#6B3B22] hover:bg-[#6B3B22] hover:text-white transition">

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

                <p className="text-[#444]">
                  April 26 - April 28
                </p>

              </div>



              <div>

                <p className="uppercase text-[#999] text-xs mb-2">
                  Time
                </p>

                <p className="text-[#444]">
                  7AM - 6PM
                </p>

              </div>

            </div>



            <button className="border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#6B3B22] hover:text-white transition w-fit">

              Learn More

            </button>

          </div>

        </div>



        {/* Side Preview Right */}
        <div className="absolute right-0 opacity-20 scale-90">

          <img
            src="/event-side.jpg"
            alt="Preview"
            className="w-[220px] h-[420px] object-cover rounded-2xl"
          />

        </div>

      </div>



      {/* MOBILE VIEW */}
      <div className="md:hidden">

        {/* Featured Card */}
        <div className="bg-[#F5F2EC] rounded-xl overflow-hidden mb-10">

          <img
            src="/event-main.png"
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



            <div className="flex gap-8 mb-8 text-sm">

              <div>

                <p className="uppercase text-[#999] text-[10px] mb-2">
                  Date
                </p>

                <p className="text-[#444] text-xs">
                  July 2026
                </p>

              </div>



              <div>

                <p className="uppercase text-[#999] text-[10px] mb-2">
                  Time
                </p>

                <p className="text-[#444] text-xs">
                  Fri 6PM - Sun 12 PM
                </p>

              </div>

            </div>



            <button className="border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#6B3B22] hover:text-white transition">

              Learn More

            </button>

          </div>

        </div>



        {/* Mobile List */}
        <div className="space-y-12">

          {mobilePrograms.map((program, index) => (
            <div key={index}>

              <p className="text-[#444] text-sm mb-6">

                {program.date}

              </p>



              <h4 className="text-[#333] text-[32px] mb-5">

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



        {/* Mobile Button */}
        <button className="mt-12 border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#6B3B22] hover:text-white transition">

          View All Events

          <ArrowRight size={16} />

        </button>

      </div>

    </section>
  );
}