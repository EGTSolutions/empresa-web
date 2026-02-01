import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Glow from "@/components/Glow";
import BackToTop from "@/components/BackToTop";
import HashScroller from "@/components/HashScroller";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Glow />
      <HashScroller />
      <Navbar />

      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />

      <Footer />
      <BackToTop />
    </main>
  );
}
