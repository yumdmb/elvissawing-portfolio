import {
  PortfolioLayout,
  HeroSection,
  AboutSection,
  FeaturedWorkSection,
  ExperienceSection,
  EducationSection,
  CertificationsSection,
  ContactSection,
} from "@/components"

export default function Portfolio() {

    return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </PortfolioLayout>
  )
}
