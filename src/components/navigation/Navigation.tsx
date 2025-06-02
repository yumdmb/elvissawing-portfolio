"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems } from "@/data/portfolio"
import { SITE_CONFIG } from "@/config/site"
import Image from "next/image"

interface NavigationProps {
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export function Navigation({ activeSection, onNavClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false)
    onNavClick(sectionId)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">          <div className="flex items-center gap-3">
            <Image src="/es-logo.png" alt="Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-xl font-bold text-gray-900">{SITE_CONFIG.name.split(' ')[0]} {SITE_CONFIG.name.split(' ')[1]}</h1>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => handleNavClick(item.id)}
                className="font-medium"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => handleNavClick(item.id)}
                  className="w-full justify-start font-medium"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
