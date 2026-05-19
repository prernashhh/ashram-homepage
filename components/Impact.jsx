import { ArrowRight } from "lucide-react";

const impactItems = [
  "Healthcare",
  "Education",
  "Sustainability",
  "Community Development",
];

export default function Impact() {
  return (
    <section className="w-full bg-[#F8F6F2] px-5 md:px-8 py-16 md:py-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* LEFT CONTENT */}
        <div className="flex flex-col">

          {/* Heading */}
          <div>

            <p className="uppercase tracking-[3px] text-[#555] text-[10px] md:text-xs mb-4">

              The Impact

            </p>



            <h2
              className="
                text-[#6B3B22]
                text-[34px]
                md:text-[58px]
                leading-tight
                font-medium
                mb-8
              "
              style={{
                fontFamily: "var(--font-stix)",
              }}
            >

              A Movement Fueled
              <br />
              by <i>Selfless Service</i>

            </h2>

          </div>



          {/* IMAGE FOR MOBILE + TABLET */}
          <div className="lg:hidden mb-8">

            <img
              src="/impact-image.jpg"
              alt="Impact"
              className="w-full h-[320px] sm:h-[420px] object-cover"
            />

          </div>



          {/* Description */}
          <p className="text-[#444] text-sm md:text-base leading-8 max-w-md mb-10">

            The Ashram serves as a dynamic hub for service initiatives at
            the local, national, and global levels. Powered by the movement
            of Shrimad Rajchandra Love and Care USA, compassion turns into
            meaningful action.

          </p>



          {/* Impact Items */}
          <div className="space-y-8 mb-10">

            {impactItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >

                <div className="w-[2px] h-8 bg-[#D8CBB7]"></div>

                <p
                  className="text-[#3A2A1F] text-xl"
                  style={{
                    fontFamily: "var(--font-stix)",
                  }}
                >

                  {item}

                </p>

              </div>
            ))}

          </div>



          {/* Button */}
          <button className="group w-fit border border-[#6B3B22] text-[#6B3B22] px-6 py-3 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-[#6B3B22] hover:text-white transition-all duration-300 bg-white/40 backdrop-blur-sm">

            See Our Impact

            <span className="w-7 h-7 rounded-full bg-[#6B3B22] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6B3B22] transition-all duration-300">

              <ArrowRight size={14} />

            </span>

          </button>

        </div>



        {/* DESKTOP IMAGE */}
        <div className="hidden lg:block overflow-hidden rounded-sm">

          <img
            src="/impact-image.jpg"
            alt="Impact"
            className="w-full h-[760px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}