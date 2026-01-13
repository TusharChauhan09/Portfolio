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
      "https://drive.google.com/uc?export=view&id=1mMjGpYTzGd-OUIonsgeQCc2vmvmfaiJW",
    github: "https://github.com/yourusername/interprep",
    link: "https://interprep.com",
    stack: [
      SKILLS.NextJS,
      SKILLS.TypeScript,
      SKILLS.TailwindCSS,
      SKILLS.NodeJS,
    ],
  },
];
