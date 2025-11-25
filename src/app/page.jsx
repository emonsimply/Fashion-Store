import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Features></Features>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials></Testimonials>
      <PromoBanner></PromoBanner>
    </div>
  );
}
