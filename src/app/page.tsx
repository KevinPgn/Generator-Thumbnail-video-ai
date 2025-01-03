import { Hero } from "@/components/accueil/Hero";
import { Product } from "@/components/accueil/Product";
import { Pricing } from "@/components/accueil/Pricing";
import { WhyChooseUs } from "@/components/accueil/WhyChooseUs";
import { FAQ } from "@/components/accueil/FAQ";
import { Footer } from "@/components/accueil/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
