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

        <p className="uppercase tracking-[3px] text-white text-[10px] md:text-sm mb-6">

          Realize One’s True Self and Serve Others Selflessly

        </p>



        <h1
          className="
            text-white
            text-[32px]
            md:text-6xl
            lg:text-[64px]
            leading-tight
            font-medium
            max-w-5xl
          "
          style={{
            fontFamily: "var(--font-stix)",
          }}
        >

          Shrimad Rajchandra Ashram, USA

        </h1>



        {/* Scroll */}
        <div className="absolute bottom-10 flex flex-col items-center text-white">

          <p className="text-xs tracking-[3px] uppercase mb-2">

            Scroll

          </p>

          <div className="w-px h-12 bg-white"></div>

        </div>

      </div>

    </section>
  );
}