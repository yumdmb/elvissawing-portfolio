import { SITE_CONFIG } from "@/config/site"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p className="text-sm md:text-base">&copy; {currentYear} {SITE_CONFIG.author.name}. All rights reserved.</p>
          <p className="text-xs md:text-sm mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
