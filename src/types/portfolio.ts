export interface FeaturedWork {
  title: string
  description: string
  content: string
  link: string
  linkText: string
  badges?: string[]
}

export interface Certification {
  title: string
  issuer: string
  icon: string
  iconColor: string
  badges: string[]
  link: string
}

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  description?: string
  responsibilities?: string[]
  achievements?: string[]
  badges: string[]
  logo?: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  description?: string
  activities?: string
  grade?: string
  badges?: string[]
}

export interface NavItem {
  id: string
  label: string
}
