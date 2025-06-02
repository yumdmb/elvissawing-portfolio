import { MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/config/site"

export function HeroSection() {
    return (
        <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-in">
                        {SITE_CONFIG.name}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4 animate-fade-in animate-delay-100">
                        Software Engineering Student | Sarawak Energy Scholar
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gray-500 mb-6 md:mb-8 animate-fade-in animate-delay-200">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm md:text-base">{SITE_CONFIG.author.location}</span>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed animate-fade-in animate-delay-300">
                        Exploring full stack web development with strong interests in AI, DevOps, and cloud technologies, particularly AWS. Currently working on a Sign Language Recognition System using deep learning techniques as my final year project.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-400">
                        <Button asChild className="w-full sm:w-auto hover-lift">
                            <a href={SITE_CONFIG.author.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button variant="outline" asChild className="w-full sm:w-auto hover-lift">
                            <a href={SITE_CONFIG.author.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
