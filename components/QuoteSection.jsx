export default function QuoteSection() {
  return (
    <section className="w-full bg-[#F5EBDD]">

      <div className="relative overflow-hidden">

        <img
          src="/quote-bg.png"
          alt="Quote Background"
          className="
            w-full
            h-[220px]
            md:h-[340px]
            object-cover
            object-center
            scale-[1.02]
          "
        />



        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F5EBDD]/72"></div>



        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h2
            className="
              text-[#5B3427]
              text-[22px]
              md:text-[42px]
              leading-[1.35]
              font-medium
              max-w-[360px]
              md:max-w-4xl
              mb-4
            "
            style={{
              fontFamily: "var(--font-stix)",
            }}
          >

            {/* Mobile */}
            <span className="md:hidden">

              “Peace is your nature.
              <br />
              Let it reflect in
              <br />
              every thought, word, and deed.”

            </span>



            {/* Desktop */}
            <span className="hidden md:block">

              “Peace is your nature. Let it reflect in
              <br />
              every thought, word, and deed.”

            </span>

          </h2>



          <p className="uppercase tracking-[1.5px] text-[#6B3B22] text-[11px] md:text-lg font-semibold">

            - Pujya Gurudevshri Rakeshji

          </p>

        </div>

      </div>

    </section>
  );
}