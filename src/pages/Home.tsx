import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { Story } from "@/components/home/Story";
import { Stats } from "@/components/home/Stats";
import { DoctorsRow } from "@/components/home/DoctorsRow";
import { Stories } from "@/components/home/Stories";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <ServiceGrid />
      <Stats />
      <DoctorsRow />
      <Stories />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
