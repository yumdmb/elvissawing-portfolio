import { Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
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
                  Pursuing a Bachelor's degree in Computer Science (Software Engineering) at Universiti Malaya,
                  with a strong foundation in programming, cloud computing, and artificial intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
