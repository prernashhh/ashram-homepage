import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import Vision from "@/components/Vision"
import NatureImage from "@/components/NatureImage";
import Practice from "@/components/Practice";
import Programs from "@/components/Programs"
import QuoteSection from "@/components/QuoteSection";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Inspiration />
      <Vision />
      <NatureImage />
      <Practice/>
      <Programs />
      <QuoteSection />
      <Impact />
      <Footer />

    </main>
  );
}