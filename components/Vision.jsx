import { ArrowRight } from "lucide-react";

export default function Vision() {
  return (
    <section className="w-full bg-[#F8F6F2] px-6 md:px-20 lg:px-32 py-20 md:py-28">

      <div className="max-w-[1280px] mx-auto">

        {/* Top Content */}
        <div className="max-w-[980px]">

          {/* Label */}
          <p className="uppercase tracking-[3px] text-[#555] text-[10px] md:text-[14px] font-medium mb-5">

            The Vision

          </p>



          {/* Heading */}
          <h2
            className="
              text-[#5A381C]
              text-[28px]
              md:text-[52px]
              leading-[1.15]
              md:leading-[58px]
              font-normal
              tracking-[-0.5px]
              mb-5
              md:mb-10
              antialiased
              max-w-[760px]
            "
            style={{
              fontFamily: "var(--font-stix)",
            }}
          >

            A Home for the <i>Soul</i>
            <br />
            In The Heart Of <i>Nature</i>

          </h2>



          {/* Description */}
          <p className="
            text-[#444]
            text-[16px]
            md:text-[20px]
            leading-[38px]
            font-normal
            max-w-[980px]
          ">

            Nestled in the heart of the Pocono Mountains,{" "}
            <span className="font-semibold">
              Shrimad Rajchandra Ashram, USA
            </span>{" "}
            is a 400-acre haven where timeless wisdom and modern wellness
            converge. Here, you’ll find a quiet sanctuary in nature to turn
            inward, reconnect with your true self, and uplift the world around
            you.

          </p>



          {/* Button */}
          <button className="group mt-8 border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white/40 backdrop-blur-sm">

            Explore the Ashram

            <span className="w-7 h-7 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">

              <ArrowRight size={14} />

            </span>

          </button>

        </div>



        {/* Bottom Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-16 mt-20 md:mt-24">

          {/* Item */}
          <div>

            <div className="w-12 h-[2px] bg-[#D5C7B0] mb-6"></div>

            <h3
              className="
                text-[#3A2A1F]
                text-[18px]
                md:text-[28px]
                mb-2
                font-normal
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Mind

            </h3>

            <p className="text-sm text-[#666]">
              Be Here Now
            </p>

          </div>



          {/* Item */}
          <div>

            <div className="w-12 h-[2px] bg-[#D5C7B0] mb-6"></div>

            <h3
              className="
                text-[#3A2A1F]
                text-[18px]
                md:text-[28px]
                mb-2
                font-normal
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Body

            </h3>

            <p className="text-sm text-[#666]">
              Move with Intention
            </p>

          </div>



          {/* Item */}
          <div>

            <div className="w-12 h-[2px] bg-[#D5C7B0] mb-6"></div>

            <h3
              className="
                text-[#3A2A1F]
                text-[18px]
                md:text-[28px]
                mb-2
                font-normal
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Soul

            </h3>

            <p className="text-sm text-[#666]">
              Awaken Within
            </p>

          </div>



          {/* Item */}
          <div>

            <div className="w-12 h-[2px] bg-[#D5C7B0] mb-6"></div>

            <h3
              className="
                text-[#3A2A1F]
                text-[18px]
                md:text-[28px]
                mb-2
                font-normal
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              Service

            </h3>

            <p className="text-sm text-[#666]">
              Spread Love
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}