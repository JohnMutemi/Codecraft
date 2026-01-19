import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceDetails } from "@/components/sections/service-details"
import { CtaSection } from "@/components/sections/cta-section"
import { servicesData } from "@/lib/services-data"

const service = servicesData["ict-hospitals"]

export const metadata: Metadata = {
  title: `${service.title} - CodeCraft ICT Solutions`,
  description: service.description,
  keywords: "hospital ICT, healthcare IT, electronic health records, HIPAA compliance, medical systems",
}

export default function IctHospitalsPage() {
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
