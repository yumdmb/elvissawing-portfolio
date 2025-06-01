"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "featured", "experience", "education", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
}

export function useNavigation() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return { handleNavClick }
}
