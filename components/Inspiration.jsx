import { ArrowRight } from "lucide-react";

export default function Inspiration() {
  return (
    <section className="w-full bg-[#f0eade84] md:p-5">
      <div className="relative md:rounded-md">

        {/* Desktop */}
        <div className="hidden md:block relative overflow-hidden rounded-[4px]">
          <img
            src="/visionary7.png"
            alt="Visionary"
            className="
            w-full
            aspect-[16/10]
            lg:aspect-[16/8]
            min-[1570px]:aspect-[16/7.2]
            object-cover
            object-top
            "
          />

          <div className="absolute inset-0 z-10">
            <div className="px-8 lg:px-20 pt-10 lg:pt-16 pb-16 lg:pb-0 max-w-3xl">
              <p className="uppercase tracking-[3px] text-[#2A2A2A] text-xs mb-4">
                The Inspiration
              </p>

              <h2
                className="text-[#6B3B22] text-[42px] lg:text-[50px] leading-tight font-medium mb-8"
                style={{
                  fontFamily: "var(--font-stix)",
                }}
              >
                Guided By <i>Wisdom</i>,
                <br />
                Rooted In <i>Compassion</i>
              </h2>

              <div className="space-y-3 max-w-[490px]">
                <div className="bg-white/40 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-md">
                  <p className="text-[18px] leading-6 text-[#333]">
                    <span className="font-semibold">Shrimad Rajchandraji</span>{" "}
                    was a self-realized saint whose teachings and lived example
                    offer a roadmap to inner purification and truth.
                  </p>
                </div>

                <div className="bg-white/40 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-md">
                  <p className="text-[18px] leading-6 text-[#333]">
                    <span className="font-semibold">
                      Pujya Gurudevshri Rakeshji
                    </span>{" "}
                    is an enlightened visionary and global ambassador of peace.
                    Deeply inspired by the message of Shrimad Rajchandraji, He
                    empowers individuals to embark on a joyful journey of
                    self-discovery and purposeful living.
                  </p>
                </div>
              </div>

              <button className="group mt-6 border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm">
                About Our Guides

                <span className="w-7 h-7 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden bg-[#E7ECEE]">
          <div className="px-5 pt-8 pb-8">
            <p className="uppercase tracking-[3px] text-[#2A2A2A] text-[10px] mb-4">
              The Inspiration
            </p>

            <h2
              className="text-[#6B3B22] text-[34px] leading-tight font-medium"
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >
              Guided By <i>Wisdom</i>,
              <br />
              Rooted In <i>Compassion</i>
            </h2>
          </div>

          <img
            src="/visionary7.png"
            alt="Visionary"
            className="w-full h-[320px] object-cover object-right"
          />

          <div className="px-5 py-6 space-y-4">
            <div className="bg-white/40 backdrop-blur-md p-5 rounded-xl">
              <p className="text-[15px] leading-9 text-[#444]">
                <span className="font-semibold">Shrimad Rajchandraji</span>{" "}
                was a self-realized saint whose teachings and lived example
                offer a roadmap to inner purification and truth.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-md p-5 rounded-xl">
              <p className="text-[15px] leading-9 text-[#444]">
                <span className="font-semibold">
                  Pujya Gurudevshri Rakeshji
                </span>{" "}
                is an enlightened visionary and global ambassador of peace.
                Deeply inspired by the message of Shrimad Rajchandraji, He
                empowers individuals to embark on a joyful journey of
                self-discovery and purposeful living.
              </p>
            </div>

              <button className="group mt-6 border-[#6B3B22] text-[#6B3B22] px-5 py-2.5 rounded-full text-[14px] font-medium flex items-center gap-3 w-fit hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white/40 backdrop-blur-sm">              
                About Our Guides
              <span className="w-7 h-7 shrink-0 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}