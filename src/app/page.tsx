import { Hero } from "@/components/accueil/Hero";
import { Product } from "@/components/accueil/Product";
import { Pricing } from "@/components/accueil/Pricing";
import { WhyChooseUs } from "@/components/accueil/WhyChooseUs";
import { FAQ } from "@/components/accueil/FAQ";
import { Footer } from "@/components/accueil/Footer";
import { Navbar } from "@/components/accueil/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
