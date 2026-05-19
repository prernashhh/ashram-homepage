export default function QuoteSection() {
  return (
    <section className="w-full">

      <div className="relative overflow-hidden">

        <img
          src="/quote-bg.png"
          alt="Quote Background"
          className="w-full h-[260px] md:h-[420px] object-cover"
        />



        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F5EBDD]/70"></div>



        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h2
            className="
              text-[#5B3427]
              text-[34px]
              md:text-[58px]
              leading-tight
              font-medium
              max-w-4xl
              mb-6
            "
            style={{
              fontFamily: "var(--font-stix)",
            }}
          >

            “Peace is your nature.
            <br />
            Let it reflect in every thought,
            <br />
            word, and deed.”

          </h2>



          <p className="uppercase tracking-[2px] text-[#6B3B22] text-sm md:text-xl font-semibold">

            - Pujya Gurudevshri Rakeshji

          </p>

        </div>

      </div>

    </section>
  );
}