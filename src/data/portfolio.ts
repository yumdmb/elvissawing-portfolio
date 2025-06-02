import { FeaturedWork, Certification, Experience, Education, NavItem } from "@/types/portfolio"

export const featuredWork: FeaturedWork[] = [
  {
    title: "Stitch-Mart",
    description: "Full-Stack e-Commerce Website",
    content: "A collaborative e-commerce platform for embroidery services built as part of a web development course. Features product listings, user authentication, cart management, and order processing.",
    link: "https://github.com/yumdmb/stitch-mart",
    linkText: "View on GitHub",
    badges: ["React", "MongoDB", "Express.js", "Node.js"],
  },
  {
    title: "Newswav Creator",
    description: "Tech Writing & Insights",
    content: "Writing articles on the latest tech trends and innovations, sharing insights with the tech community.",
    link: "https://newswav.com/publisher/elvis-sawing-2291",
    linkText: "View Articles",
    badges: ["Tech Writing", "Insights"],
  },
  {
    title: "Google Cloud Skills",
    description: "Cloud Learning Journey",
    content: "Actively learning and practicing Google Cloud technologies through hands-on labs and skill challenges.",
    link: "https://www.cloudskillsboost.google/public_profiles/3d395864-7e84-44ef-ae88-e518887c9fcd",
    linkText: "View Profile",
    badges: ["Cloud Computing", "Google Cloud Platform"],
  },
]

export const certifications: Certification[] = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS) • Nov 2023",
    icon: "award",
    iconColor: "text-orange-500",
    badges: ["Cloud Computing", "AWS"],
    link: "https://www.credly.com/badges/538f89a2-d971-4b8a-aa62-bdcaf9a922b9/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft • Sep 2023",
    icon: "award",
    iconColor: "text-blue-500",
    badges: ["Cloud Computing", "Artificial Intelligence", "Azure"],
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ElvisSawing-1129/2A93E18759A98601?sharingId",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS) • Jul 2023",
    icon: "award",
    iconColor: "text-orange-500",
    badges: ["Cloud Computing", "AWS Foundations"],
    link: "https://www.credly.com/badges/159c405f-c7fc-4184-a789-8716a9118cc6/linked_in_profile",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    icon: "award",
    iconColor: "text-blue-600",
    badges: ["Networking", "Cisco"],
    link: "https://www.credly.com/badges/e4cc5d92-1332-47b4-a1e9-2167a4719553/linked_in_profile",
  },
]

export const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Sarawak Energy",
    period: "Jul 2024 - Jan 2025",
    location: "Kuching, Sarawak, Malaysia",
    logo: "/sarawak-energy-logo.svg",
    responsibilities: [
      "Enhanced existing manual AARG system by proposing and designing an initial app using OutSystems",
      "Proposed matrix analysis to automate the prioritization of requests",
      "Created early-stage process diagrams, swimlanes, and decision trees for workflow optimization",
      "Worked with Finance Team to design robust automation workflows in Power Automate Desktop (PAD)",
      "Streamlined e-invoicing operations to run 24/7"
    ],
    badges: ["OutSystems", "Power Automate", "Process Automation", "Workflow Design"]
  },
  {
    title: "Co-Head of Logistics",
    company: "KitaHack 2024 - GDSC Malaysia",
    period: "Dec 2023 - Jan 2024",
    location: "",
    logo: "/gdsc-logo.svg",
    responsibilities: [
      "Managed logistics planning and execution of KitaHack 2024",
      "Coordinated event venues, equipment and supplies",
      "Led logistics team and collaborated with internal departments and external vendors",
      "Handled accommodation, transportation and catering arrangements"
    ],
    badges: ["Event Management", "Team Leadership", "Vendor Coordination"]
  },
  {
    title: "EXCO Kebajikan dan Perpaduan",
    company: "PMSUM 2022/2023",
    period: "Nov 2022 - Jul 2023",
    location: "",
    logo: "/pmsum-logo.png",
    description: "Served as Executive Committee member focusing on welfare and unity initiatives for Sarawak students at Universiti Malaya.",
    badges: ["Student Leadership", "Community Service", "Welfare Management"]
  }
]

export const education: Education[] = [
  {
    degree: "Bachelor's Degree, Computer Science (Software Engineering)",
    institution: "Universiti Malaya",
    grade: "current 3.77 CGPA",
    period: "2022 - 2026",
    description: "Currently pursuing a comprehensive degree in Software Engineering, focusing on architecture, modelling, requirements, and testing."
  },
  {
    degree: "Pre-University/Foundation, Physical Sciences",
    institution: "Universiti Malaya",
    grade: "3.81 CGPA",
    period: "Aug 2021 - May 2022",
    description: "Foundation program in Physical Sciences with strong performance in mathematics and physics.",
    activities: "Committee of PASUM Physics Club",
    badges: ["C Programming", "Physics", "Mathematics"]
  },
  {
    degree: "High School, Science Stream",
    institution: "Sekolah Menengah Sains Miri",
    period: "2016 - 2020",
    grade: "9As",
    description: "Graduated with excellent academic performance, achieving 9As in SPM examination.",
    activities: "Prefectorial Board, Head of Sports House, Rugby Player",
    badges: ["Leadership", "Sports", "Academic Excellence"]
  }
]

export const navItems: NavItem[] = [
  { id: "about", label: "About Me" },
  { id: "featured", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Connect" },
]
