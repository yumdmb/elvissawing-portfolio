import { Briefcase, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillsData } from "@/data/skills"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
            About Me
          </h2>
          
          {/* Current Focus Card */}
          <Card className="hover-lift animate-slide-up mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <Briefcase className="w-5 h-5" />
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm md:text-base">
                Exploring full stack web development, with strong interests in AI, DevOps, and cloud
                technologies, particularly AWS.
              </p>
            </CardContent>
          </Card>
          
          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Skills
            </h3>
            
            <div className="space-y-6">
              {skillsData.map((category) => (
                <div key={category.name} className="animate-slide-up">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">{category.name}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      >
                        <div className="w-10 h-10 relative mb-2">
                          <Image 
                            src={skill.icon} 
                            alt={`${skill.name} icon`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
