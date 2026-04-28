"use client";
import Link from "next/link";
import SkillsContainer from "@/components/Skills/SkillsContainer";
import {
  C,
  Cpp,
  Java,
  Python,
  Html,
  Css,
  Tailwind,
  Javascript,
  Typescript,
  React,
  Node,
  Express,
  Hono,
  MongoDB,
  Postgres,
  MySQL,
  NextjS,
  Expo,
  Docker,
  Vercel,
  Prisma,
  Neon,
  Motion,
  Redux,
  Zustand,
  Azure,
  DigitalOcean,
  Cursor,
  GraphQl,
  Trpc,
  GSAP,
  Figma,
  Postman,
  VScode,
} from "@/components/Skills/SkillsLogo";

const allSkills = [
  { icon: <C />, name: "C" },
  { icon: <Cpp />, name: "C++" },
  { icon: <Java />, name: "Java" },
  { icon: <Python />, name: "Python" },
  { icon: <Html />, name: "HTML" },
  { icon: <Css />, name: "CSS" },
  { icon: <Tailwind />, name: "Tailwind" },
  { icon: <Javascript />, name: "Javascript" },
  { icon: <Typescript />, name: "Typescript" },
  { icon: <React />, name: "React" },
  { icon: <NextjS />, name: "Next.js" },
  { icon: <Node />, name: "Node.js" },
  { icon: <Express />, name: "Express" },
  { icon: <Hono />, name: "Hono" },
  { icon: <Expo />, name: "Expo" },
  { icon: <MongoDB />, name: "MongoDB" },
  { icon: <Postgres />, name: "Postgres" },
  { icon: <MySQL />, name: "MySQL" },
  { icon: <Prisma />, name: "Prisma" },
  { icon: <Neon />, name: "Neon" },
  { icon: <VScode />, name: "VScode" },
  { icon: <Cursor />, name: "Cursor" },
  { icon: <Figma />, name: "Figma" },
  { icon: <GSAP />, name: "GSAP" },
  { icon: <Motion />, name: "Motion" },
  { icon: <Trpc />, name: "tRPC" },
  { icon: <Postman />, name: "Postman" },
  { icon: <Redux />, name: "Redux" },
  { icon: <Zustand />, name: "Zustand" },
  { name: "REST" },
  { icon: <GraphQl />, name: "GraphQL" },
  { icon: <Docker />, name: "Docker" },
  { icon: <Azure />, name: "Azure" },
  { icon: <DigitalOcean />, name: "Digital Ocean" },
  { icon: <Vercel />, name: "Vercel" },
];

export default function HomeSkills() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4">
      <Link
        href="/skills"
        className="jap text-3xl mb-4 block hover:opacity-80 transition-opacity"
      >
        Skills
      </Link>
      <div className="flex flex-wrap gap-1.5">
        {allSkills.map((skill, i) => (
          <SkillsContainer key={i} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
}
