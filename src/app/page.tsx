"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Featured work data for scalability
const featuredWork = [
  {
    title: "Newswav Creator",
    description: "Tech Writing & Insights",
    content: "Writing articles on the latest tech trends and innovations, sharing insights with the tech community.",
    link: "https://newswav.com/publisher/elvis-sawing-2291",
    linkText: "View Articles",
  },
  {
    title: "Google Cloud Skills",
    description: "Cloud Learning Journey",
    content: "Actively learning and practicing Google Cloud technologies through hands-on labs and skill challenges.",
    link: "https://www.cloudskillsboost.google/public_profiles/3d395864-7e84-44ef-ae88-e518887c9fcd",
    linkText: "View Profile",
  },
]

// Certification data for scalability
const certifications = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS) • Nov 2023",
    icon: "award",
    iconColor: "text-orange-500",
    badges: ["Cloud Computing", "AWS"],
    link: "https://www.credly.com/badges/538f89a2-d971-4b8a-aa62-bdcaf9a922b9/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft • Sep 2023",
    icon: "award",
    iconColor: "text-blue-500",
    badges: ["Cloud Computing", "Artificial Intelligence", "Azure"],
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ElvisSawing-1129/2A93E18759A98601?sharingId",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS) • Jul 2023",
    icon: "award",
    iconColor: "text-orange-500",
    badges: ["Cloud Computing", "AWS Foundations"],
    link: "https://www.credly.com/badges/159c405f-c7fc-4184-a789-8716a9118cc6/linked_in_profile",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    icon: "award",
    iconColor: "text-blue-600",
    badges: ["Networking", "Cisco"],
    link: "https://www.credly.com/badges/e4cc5d92-1332-47b4-a1e9-2167a4719553/linked_in_profile",
  },
]

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Handle scroll to update active section
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

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false)
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <h1 className="text-xl font-bold text-gray-900">Elvis Sawing</h1>

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
              {[
                { id: "about", label: "About Me" },
                { id: "featured", label: "Featured Work" },
                { id: "experience", label: "Experience" },
                { id: "education", label: "Education" },
                { id: "certifications", label: "Certifications" },
                { id: "contact", label: "Connect" },
              ].map((item) => (
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
                {[
                  { id: "about", label: "About Me" },
                  { id: "featured", label: "Featured Work" },
                  { id: "experience", label: "Experience" },
                  { id: "education", label: "Education" },
                  { id: "certifications", label: "Certifications" },
                  { id: "contact", label: "Connect" },
                ].map((item) => (
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

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-in">
              Elvis Sawing Muran
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4 animate-fade-in animate-delay-100">
              Software Engineering Student | Sarawak Energy Scholar
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 mb-6 md:mb-8 animate-fade-in animate-delay-200">
              <MapPin className="w-4 h-4" />
              <span className="text-sm md:text-base">Federal Territory of Kuala Lumpur, Malaysia</span>
            </div>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed animate-fade-in animate-delay-300">
              Passionate software engineering student with hands-on experience in automation, cloud technologies, and
              system optimization. Currently pursuing my degree at University of Malaya.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-400">
              <Button asChild className="w-full sm:w-auto hover-lift">
                <a href="https://www.linkedin.com/in/elvis-sawing" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto hover-lift">
                <a href="https://github.com/yumdmb" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="hover-lift animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Briefcase className="w-5 h-5" />
                    Current Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">
                    Exploring full stack web development using Next.js, with strong interests in AI, DevOps, and cloud
                    technologies, particularly AWS.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift animate-slide-up animate-delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <GraduationCap className="w-5 h-5" />
                    Academic Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">
                    Pursuing a Bachelor's degree in Computer Science (Software Engineering) at University of Malaya,
                    with a strong foundation in programming, cloud computing, and artificial intelligence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="featured" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
              Featured Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {featuredWork.map((work, index) => (
                <Card
                  key={index}
                  className={`hover-lift animate-scale-in ${index > 0 ? `animate-delay-${index}00` : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{work.title}</CardTitle>
                    <CardDescription>{work.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{work.content}</p>
                    <Button variant="outline" size="sm" asChild className="w-full hover-lift">
                      <a href={work.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {work.linkText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
              Experience
            </h2>
            <div className="space-y-6">
              <Card className="hover-lift animate-slide-up">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg md:text-xl">Software Engineering Intern</CardTitle>
                      <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                        Sarawak Energy
                      </CardDescription>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Jul 2024 - Jan 2025
                      </div>
                      <div>Kuching, Sarawak, Malaysia</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">AARG v4.0 Early Development:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                        <li>
                          Enhanced existing manual AARG system by proposing and designing an initial app using
                          OutSystems
                        </li>
                        <li>Proposed matrix analysis to automate the prioritization of requests</li>
                        <li>
                          Created early-stage process diagrams, swimlanes, and decision trees for workflow optimization
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Global Tax E-Invoicing System (GTES) Automation:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                        <li>
                          Worked with Finance Team to design robust automation workflows in Power Automate Desktop (PAD)
                        </li>
                        <li>Streamlined e-invoicing operations to run 24/7</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">OutSystems</Badge>
                      <Badge variant="secondary">Power Automate</Badge>
                      <Badge variant="secondary">Process Automation</Badge>
                      <Badge variant="secondary">Workflow Design</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-slide-up animate-delay-100">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg md:text-xl">Co-Head of Logistics</CardTitle>
                      <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                        KitaHack 2024 - GDSC Malaysia
                      </CardDescription>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Dec 2023 - Jan 2024
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                    <li>Managed logistics planning and execution of KitaHack 2024</li>
                    <li>Coordinated event venues, equipment and supplies</li>
                    <li>Led logistics team and collaborated with internal departments and external vendors</li>
                    <li>Handled accommodation, transportation and catering arrangements</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Event Management</Badge>
                    <Badge variant="secondary">Team Leadership</Badge>
                    <Badge variant="secondary">Vendor Coordination</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-slide-up animate-delay-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg md:text-xl">EXCO Kebajikan dan Perpaduan</CardTitle>
                      <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                        PMSUM 2022/2023
                      </CardDescription>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Nov 2022 - Jul 2023
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">
                    Served as Executive Committee member focusing on welfare and unity initiatives for Sarawak students
                    at University of Malaya.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Student Leadership</Badge>
                    <Badge variant="secondary">Community Service</Badge>
                    <Badge variant="secondary">Welfare Management</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
              Education
            </h2>
            <div className="space-y-6">
              <Card className="hover-lift animate-slide-up">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg md:text-xl">
                        Bachelor's Degree, Computer Science (Software Engineering)
                      </CardTitle>
                      <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                        University of Malaya
                      </CardDescription>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        2022 - 2026
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">
                    Currently pursuing a comprehensive degree in Software Engineering, focusing on modern software
                    development practices, algorithms, and system design.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-slide-up animate-delay-100">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg md:text-xl">Pre-University/Foundation, Physical Sciences</CardTitle>
                      <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                        University of Malaya
                      </CardDescription>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Aug 2021 - May 2022
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2 text-sm md:text-base">
                    Foundation program in Physical Sciences with strong performance in mathematics and physics.
                  </p>
                  <p className="text-sm text-gray-500">Activities: Committee of PASUM Physics Club</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">C Programming</Badge>
                    <Badge variant="secondary">Physics</Badge>
                    <Badge variant="secondary">Mathematics</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-slide-up animate-delay-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg md:text-xl">High School, Science Stream</CardTitle>
                      <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                        Sekolah Menengah Sains Miri
                      </CardDescription>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        2016 - 2020
                      </div>
                      <div className="font-semibold text-green-600">Grade: 9As</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2 text-sm md:text-base">
                    Graduated with excellent academic performance, achieving 9As in SPM examination.
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Activities: Prefectorial Board, Head of Sports House, Rugby Player
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Leadership</Badge>
                    <Badge variant="secondary">Sports</Badge>
                    <Badge variant="secondary">Academic Excellence</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`hover-lift animate-bounce-in ${index > 0 ? `animate-delay-${index}00` : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Award className={`w-5 h-5 ${cert.iconColor}`} />
                      {cert.title}
                    </CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild className="w-full hover-lift">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 animate-fade-in">Let's Connect</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 animate-fade-in animate-delay-100">
              I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow tech
              enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in animate-delay-200">
              <Button size="lg" asChild className="w-full sm:w-auto hover-lift">
                <a href="https://www.linkedin.com/in/elvis-sawing" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto hover-lift">
                <a href="https://github.com/yumdmb" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p className="text-sm md:text-base">&copy; 2024 Elvis Sawing Muran. All rights reserved.</p>
            <p className="text-xs md:text-sm mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
