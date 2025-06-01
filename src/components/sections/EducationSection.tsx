import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education } from "@/data/portfolio"

export function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className={`hover-lift animate-slide-up ${index > 0 ? `animate-delay-${index}00` : ""}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg md:text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      {edu.grade && (
                        <div className="font-semibold text-green-600">Grade: {edu.grade}</div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.description && (
                    <p className="text-gray-600 mb-2 text-sm md:text-base">{edu.description}</p>
                  )}
                  {edu.activities && (
                    <p className="text-sm text-gray-500 mb-4">Activities: {edu.activities}</p>
                  )}
                  {edu.badges && edu.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
