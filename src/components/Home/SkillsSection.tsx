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

const Programming = [
  { icon: <C />, name: "C" },
  { icon: <Cpp />, name: "C++" },
  { icon: <Java />, name: "Java" },
  { icon: <Python />, name: "Python" },
];

const Devlopment = [
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
];

const Databases = [
  { icon: <MongoDB />, name: "MongoDB" },
  { icon: <Postgres />, name: "Postgres" },
  { icon: <MySQL />, name: "MySQL" },
  { icon: <Prisma />, name: "Prisma" },
  { icon: <Neon />, name: "Neon" },
];

const Ide = [
  { icon: <VScode />, name: "VScode" },
  { icon: <Cursor />, name: "Cursor" },
];

const Design = [
  { icon: <Figma />, name: "Figma" },
  { icon: <GSAP />, name: "GSAP" },
  { icon: <Motion />, name: "Motion" },
];

const Technologies = [
  { icon: <Trpc />, name: "tRPC" },
  { icon: <Postman />, name: "Postman" },
  { icon: <Redux />, name: "Redux" },
  { icon: <Zustand />, name: "Zustand" },
];

const API = [
  { name: "REST" },
  { icon: <GraphQl />, name: "GraphQL" },
];

const Devops = [
  { icon: <Docker />, name: "Docker" },
  { icon: <Azure />, name: "Azure" },
  { icon: <DigitalOcean />, name: "Digital Ocean" },
  { icon: <Vercel />, name: "Vercel" },
];

const Tech = ({ name }: { name: string }) => (
  <h2 className="smalll text-sm">
    {"<"} {name} {" />"}
  </h2>
);

const categories = [
  { name: "Programming", skills: Programming },
  { name: "Devlopment", skills: Devlopment },
  { name: "Database", skills: Databases },
  { name: "IDE", skills: Ide },
  { name: "Design", skills: Design },
  { name: "Technologies", skills: Technologies },
  { name: " API", skills: API },
  { name: "Devops", skills: Devops },
];

export default function SkillsSection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4">
      <Link
        href="/skills"
        className="jap text-3xl mb-3 block hover:opacity-80 transition-opacity"
      >
        Skills
      </Link>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-1">
            <Tech name={category.name} />
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, index) => (
                <SkillsContainer
                  key={index}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
