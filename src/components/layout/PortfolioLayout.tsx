"use client"

import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/layout/Footer"
import { useActiveSection, useNavigation } from "@/hooks/use-navigation"

interface PortfolioLayoutProps {
  children: React.ReactNode
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const activeSection = useActiveSection()
  const { handleNavClick } = useNavigation()

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavClick={handleNavClick} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
