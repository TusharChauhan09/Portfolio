import ProjectTemplate from "@/components/Work/ProjectTemplate";
import WorkInProgress from "@/components/Miscellaneous/WorkInProgress";
import Cd from "@/components/Miscellaneous/Cd";
import { SKILLS } from "@/components/Work/skills";

const Projects = [
  {
    title: "Interprep",
    description: "A platform for language learning and practice.",
    image: "/images/download.jpeg",
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

function WorkPage() {
  // return <WorkInProgress />

  return (
    <div className="flex flex-col min-h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {Projects.map((project, index) => (
          <ProjectTemplate
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            link={project.link}
            stack={project.stack}
          />
        ))}
      </div>
      <Cd />
    </div>
  );
}

export default WorkPage;
