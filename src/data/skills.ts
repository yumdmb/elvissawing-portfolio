export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Web Development",
    skills: [
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg"
      },
      {
        name: "React",
        icon: "/icons/react.svg"
      },
      {
        name: "Supabase",
        icon: "/icons/supabase.svg"
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg"
      }
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      {
        name: "AWS",
        icon: "/icons/aws.svg"
      },
      {
        name: "Docker",
        icon: "/icons/docker.svg"
      }
    ]
  },
  {
    name: "Machine Learning",
    skills: [
      {
        name: "TensorFlow",
        icon: "/icons/tensorflow.svg"
      },
      {
        name: "Python",
        icon: "/icons/python.svg"
      }
    ]
  }
];