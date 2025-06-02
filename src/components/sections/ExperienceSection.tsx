"use client"

import { Calendar, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/portfolio"
import Image from "next/image"
import { useState, useEffect } from "react"

export function ExperienceSection() {
  const [failedLogos, setFailedLogos] = useState<Set<number>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleImageError = (index: number) => {
    setFailedLogos(prev => new Set(prev).add(index))
  }

  // Render a fallback during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <section id="experience" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className={`hover-lift animate-slide-up ${index > 0 ? `animate-delay-${index}00` : ""}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg md:text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-left md:text-right text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        {exp.location && <div>{exp.location}</div>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {exp.description && (
                        <p className="text-gray-600 text-sm md:text-base">{exp.description}</p>
                      )}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div>
                          {exp.company === "Sarawak Energy" && (
                            <>
                              <h4 className="font-semibold text-gray-900 mb-2">AARG v4.0 Early Development:</h4>
                              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base mb-3">
                                {exp.responsibilities.slice(0, 3).map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Global Tax E-Invoicing System (GTES) Automation:
                              </h4>
                              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                                {exp.responsibilities.slice(3).map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </>
                          )}
                          {exp.company !== "Sarawak Energy" && (
                            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                              {exp.responsibilities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className={`hover-lift animate-slide-up ${index > 0 ? `animate-delay-${index}00` : ""}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex items-start gap-3">
                      {exp.logo && !failedLogos.has(index) ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0 bg-white p-1">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                            onError={() => handleImageError(index)}
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-lg md:text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base md:text-lg font-medium text-blue-600">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-left md:text-right text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      {exp.location && <div>{exp.location}</div>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {exp.description && (
                      <p className="text-gray-600 text-sm md:text-base">{exp.description}</p>
                    )}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div>
                        {exp.company === "Sarawak Energy" && (
                          <>
                            <h4 className="font-semibold text-gray-900 mb-2">AARG v4.0 Early Development:</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base mb-3">
                              {exp.responsibilities.slice(0, 3).map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Global Tax E-Invoicing System (GTES) Automation:
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                              {exp.responsibilities.slice(3).map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {exp.company !== "Sarawak Energy" && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                            {exp.responsibilities.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
