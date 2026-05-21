export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src="/Ashram_Banner2.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />



      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>



      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-[200px] md:pt-[200px] text-center px-6">

        {/* Top Label */}
        <p className="uppercase tracking-[3px] text-[#FAFAFA] text-[10px] md:text-sm mb-6">

          Realize One’s True Self and Serve Others Selflessly

        </p>



        {/* Heading */}
        <h1
          className="
            text-[#FAFAFA]
            text-[32px]
            md:text-[54px]
            lg:text-[64px]
            leading-[1.05]
            font-normal
            max-w-5xl
            antialiased
          "
          style={{
            fontFamily: "var(--font-stix)",
          }}
        >

          Shrimad Rajchandra Ashram, USA

        </h1>



        {/* Scroll */}
        <div className="absolute bottom-10 flex flex-col items-center text-[#FAFAFA]">

          <p className="text-xs tracking-[3px] uppercase mb-2">

            Scroll

          </p>



          <div className="relative h-14 w-px overflow-hidden">

            <div className="absolute inset-0 bg-white/30"></div>

            <div className="absolute bottom-0 w-px h-6 bg-white animate-scrollLine"></div>

          </div>

        </div>

      </div>

    </section>
  );
}