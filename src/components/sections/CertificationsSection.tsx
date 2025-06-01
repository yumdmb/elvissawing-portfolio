import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { certifications } from "@/data/portfolio"

export function CertificationsSection() {
  return (
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
  )
}
