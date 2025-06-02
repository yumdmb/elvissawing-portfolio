import { Code, GamepadIcon, Coffee, Laptop, Wrench } from "lucide-react"
import { skillsData } from "@/data/skills"
import { toolsData } from "@/data/tools"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">
            About Me
          </h2>          <div className="text-center mb-8 animate-slide-up">
            <p className="text-gray-700 mb-4">
              Besides coding, here's what I enjoy:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-sm mx-auto">
              <div className="flex items-center gap-2 bg-gray-50 py-2 px-3 rounded-md">
                <GamepadIcon className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Gaming</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 py-2 px-3 rounded-md">
                <Coffee className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Food</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 py-2 px-3 rounded-md">
                <Laptop className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Tech</span>
              </div>
            </div>          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Skills
              </h3>

              <div className="space-y-4">
                {skillsData.map((category) => (
                  <div key={category.name} className="animate-slide-up">
                    <h4 className="text-md font-medium text-gray-800 mb-2">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-md text-xs text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-4 h-4 relative">
                            <Image
                              src={skill.icon}
                              alt={`${skill.name} icon`}
                              width={16}
                              height={16}
                              className="object-contain"
                            />
                          </div>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Tools
              </h3>

              <div className="animate-slide-up">
                <div className="flex flex-wrap gap-2">
                  {toolsData.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-md text-xs text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-4 h-4 relative">
                        <Image
                          src={tool.icon}
                          alt={`${tool.name} icon`}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
