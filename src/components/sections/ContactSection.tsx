import { Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/config/site"

export function ContactSection() {
  return (
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
              <a href={SITE_CONFIG.author.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto hover-lift">
              <a href={SITE_CONFIG.author.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
