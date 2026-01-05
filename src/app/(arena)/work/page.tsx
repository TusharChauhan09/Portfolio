import ProjectTemplate from "@/components/Work/ProjectTemplate";
import WorkInProgress from "@/components/Miscellaneous/WorkInProgress";
import Cd from "@/components/Miscellaneous/Cd";

const Projects = [
  {
    title: "Interprep",
    description: "A platform for language learning and practice.",
    image: "/images/download.jpeg",
    github: "https://github.com/yourusername/interprep",
    link: "https://interprep.com",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];

function WorkPage() {
  // return <WorkInProgress />

  return (
    <div className="flex flex-col min-h-[70vh]">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
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
