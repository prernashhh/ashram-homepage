export default function QuoteSection() {
  return (
    <section className="w-full bg-[#F5EBDD]">

      <div className="relative overflow-hidden">

        {/* Background */}
        <img
          src="/quote-bg.png"
          alt="Quote Background"
          className="
            w-full
            h-[240px]
            md:h-[340px]
            object-cover
            object-center
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F5EBDD]/72"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          {/* Quote */}
          <h2
            className="
              text-[#4A3B2E]
              md:text-[#5A381C]
              text-[22px]
              md:text-[48px]
              leading-[143%]
              md:leading-[60px]
              font-normal
              max-w-[340px]
              md:max-w-[760px]
              mb-5
              antialiased
            "
            style={{
              fontFamily: "var(--font-stix)",
            }}
          >

            {/* Mobile */}
            <span className="md:hidden">

              “Peace is your nature.
              <br />
              Let it reflect in every thought,
              <br />
              word, and deed.”

            </span>



            {/* Desktop */}
            <span className="hidden md:block italic">

              “Peace is your nature. Let it reflect in
              <br />
              every thought, word, and deed.”

            </span>

          </h2>



          {/* Author */}
          <p className="uppercase tracking-[1.5px] text-[#6B3B22] text-[11px] md:text-[20px] font-semibold">

            - Pujya Gurudevshri Rakeshji

          </p>

        </div>

      </div>

    </section>
  );
}