import { SKILLS } from "@/components/Work/skills";

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  link?: string;
  stack: string[];
}

export const Projects: Project[] = [
  {
    title: "Interprep",
    description: "A platform for language learning and practice.",
    image:
      "https://res.cloudinary.com/du8ekvenq/image/upload/v1774259617/Screenshot_2026-03-23_150928_peop4x.png",
    github: "https://github.com/TusharChauhan09/InterPrep",
    link: "https://inter-prep-rust.vercel.app/",
    stack: [
      SKILLS.NextJS,
      SKILLS.TypeScript,
      SKILLS.TailwindCSS,
      SKILLS.NodeJS,
    ],
  },
  {
    title: "Eclipse",
    description: "An AI-powered CLI tool for generating and managing code.",
    image:
      "https://res.cloudinary.com/du8ekvenq/image/upload/v1774259610/Screenshot_2026-03-23_151037_rsqkyq.png",
    github: "https://github.com/TusharChauhan09/Eclipse0.2-CLI",
    link: "https://eclipse-cyan-three.vercel.app/",
    stack: [
      SKILLS.TypeScript,
      SKILLS.NodeJS,
      SKILLS.NextJS,
      SKILLS.React,
      SKILLS.Gemini,
      SKILLS.TailwindCSS,
      SKILLS.Motion,
    ],
  },
  {
    title: "Porto.build",
    description: "A portfolio builder to create and deploy portfolios effortlessly.",
    image:
      "https://res.cloudinary.com/du8ekvenq/image/upload/v1774259612/Screenshot_2026-03-23_151012_mtnh1f.png",
    github: "https://github.com/TusharChauhan09/Porto.build",
    stack: [
      SKILLS.Vercel,
      SKILLS.GitHub,
      SKILLS.E2B,
      SKILLS.NextJS,
      SKILLS.NodeJS,
      SKILLS.React,
      SKILLS.TailwindCSS,
      SKILLS.Motion,
    ],
  },
];
