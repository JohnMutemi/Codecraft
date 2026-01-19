import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceDetails } from "@/components/sections/service-details"
import { CtaSection } from "@/components/sections/cta-section"
import { servicesData } from "@/lib/services-data"

const service = servicesData["ict-schools"]

export const metadata: Metadata = {
  title: `${service.title} - CodeCraft ICT Solutions`,
  description: service.description,
  keywords: "school ICT, education technology, learning management system, student information system",
}

export default function IctSchoolsPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero title={service.title} subtitle={service.subtitle} description={service.description} />
        <ServiceDetails service={service} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
