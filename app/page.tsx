import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesOverview } from "@/components/sections/services-overview"
import { IndustriesSection } from "@/components/sections/industries-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ServicesOverview />
        <IndustriesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
