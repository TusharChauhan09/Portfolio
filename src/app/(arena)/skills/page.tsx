"use client";
import SkillsContainer from "@/components/Skills/SkillsContainer";
import { useThemeMode } from "@/hooks/useThemeMode";
import Cd from "@/components/Miscellaneous/Cd";
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
  {
    icon: <C />,
    name: "C",
  },
  {
    icon: <Cpp />,
    name: "C++",
  },
  {
    icon: <Java />,
    name: "Java",
  },
  {
    icon: <Python />,
    name: "Python",
  },
];

const Databases = [
  {
    icon: <MongoDB />,
    name: "MongoDB",
  },
  {
    icon: <Postgres />,
    name: "Postgres",
  },
  {
    icon: <MySQL />,
    name: "MySQL",
  },
  {
    icon: <Prisma />,
    name: "Prisma",
  },
  {
    icon: <Neon />,
    name: "Neon",
  },
];

const Devops = [
  {
    icon: <Docker />,
    name: "Docker",
  },
  {
    icon: <Azure />,
    name: "Azure",
  },
  {
    icon: <DigitalOcean />,
    name: "Digital Ocean",
  },
  {
    icon: <Vercel />,
    name: "Vercel",
  },
];

const Ide = [
  {
    icon: <VScode />,
    name: "VScode",
  },
  {
    icon: <Cursor />,
    name: "Cursor",
  },
];

const Design = [
  {
    icon: <Figma />,
    name: "Figma",
  },
  {
    icon: <GSAP />,
    name: "GSAP",
  },
  {
    icon: <Motion />,
    name: "Motion",
  },
];

const Devlopment = [
  {
    icon: <Html />,
    name: "HTML",
  },
  {
    icon: <Css />,
    name: "CSS",
  },
  {
    icon: <Tailwind />,
    name: "Tailwind",
  },
  {
    icon: <Javascript />,
    name: "Javascript",
  },
  {
    icon: <Typescript />,
    name: "Typescript",
  },
  {
    icon: <React />,
    name: "React",
  },
  {
    icon: <NextjS />,
    name: "Next.js",
  },
  {
    icon: <Node />,
    name: "Node.js",
  },
  {
    icon: <Express />,
    name: "Express",
  },
  {
    icon: <Hono />,
    name: "Hono",
  },
  {
    icon: <Expo />,
    name: "Expo",
  },
];

const Technologies = [
  {
    icon: <Trpc />,
    name: "tRPC",
  },
  {
    icon: <Postman />,
    name: "Postman",
  },
  {
    icon: <Redux />,
    name: "Redux",
  },
  {
    icon: <Zustand />,
    name: "Zustand",
  },
];

const API = [
  {
    name: "REST",
  },
  {
    icon: <GraphQl />,
    name: "GraphQL",
  },
];

const Tech = ({ name }: { name: string }) => {
  return (
    <h2 className="smalll text-md">
      {"<"} {name} {" />"}
    </h2>
  );
};

export default function SkillsPage() {
  const theme = useThemeMode();
  return (
    <div className=" flex flex-col gap-5 min-h-[70vh]">
      <div>
        <h1 className={`jap text-4xl ${theme === "dark" ? "demon-red" : ""}`}>
          Skills
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={"Programming"} />
        <div className="flex flex-wrap gap-2">
          {Programming.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={"Devlopment"} />
        <div className="flex flex-wrap gap-2">
          {Devlopment.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={"Database"} />
        <div className="flex flex-wrap gap-2">
          {Databases.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={"IDE"} />
        <div className="flex flex-wrap gap-2">
          {Ide.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={"Design"} />
        <div className="flex flex-wrap gap-2">
          {Design.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={"Technologies"} />
        <div className="flex flex-wrap gap-2">
          {Technologies.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={" API"} />
        <div className="flex flex-wrap gap-1">
          {API.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Tech name={"Devops"} />
        <div className="flex flex-wrap gap-2">
          {Devops.map((skill, index) => (
            <SkillsContainer key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      <Cd />
    </div>
  );
}
