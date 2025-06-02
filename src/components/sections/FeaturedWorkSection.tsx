"use client"

import * as React from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { featuredWork } from "@/data/portfolio"

export function FeaturedWorkSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    // Check if we can scroll left
    setCanScrollLeft(scrollLeft > 0);
    // Check if we can scroll right
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    
    // Calculate which card is most visible
    const cardWidth = scrollRef.current.children[0]?.getBoundingClientRect().width || 0;
    const approxIndex = Math.round(scrollLeft / cardWidth);
    setActiveCardIndex(Math.min(approxIndex, featuredWork.length - 1));
  };
  
  React.useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (<section id="featured" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center animate-fade-in">
            Featured Work
          </h2>          <div className="relative">
            {/* Left scroll button */}
            <button 
              onClick={() => {
                scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
              }}
              className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full shadow-md p-2 hover:bg-white hover:shadow-lg transition-all duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
              {/* Right scroll button */}
            <button 
              onClick={() => {
                scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
              }}
              className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full shadow-md p-2 hover:bg-white hover:shadow-lg transition-all duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Scroll indicators */}
            <div className="flex justify-center mt-2 mb-4">
              <div className="flex gap-1.5 items-center">
                {[...Array(featuredWork.length)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (scrollRef.current) {
                        const cards = scrollRef.current.children;
                        if (cards[i]) {
                          cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                        }
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 hover:bg-gray-600 cursor-pointer ${i === activeCardIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-400'}`}
                    aria-label={`Go to card ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto pb-4 gap-4 snap-x px-4 -mx-4 relative" 
              style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {featuredWork.map((work, index) => (
                <Card
                  key={index}
                  className={`hover-lift animate-scale-in flex-shrink-0 w-[85vw] min-w-[250px] max-w-[400px] snap-center ${index > 0 ? `animate-delay-${index}00` : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{work.title}</CardTitle>
                    <CardDescription>{work.description}</CardDescription>
                  </CardHeader>                <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{work.content}</p>
                    {work.badges && work.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}
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
      </div>
    </section>
  )
}
