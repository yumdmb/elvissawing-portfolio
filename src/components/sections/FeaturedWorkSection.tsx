import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { featuredWork } from "@/data/portfolio"

export function FeaturedWorkSection() {
  return (
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
  )
}
