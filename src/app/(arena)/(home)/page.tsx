import Introduction from "@/components/Home/Introduction";
import BentoGrid from "@/components/Home/BentoGrid";
import CertificateCarousel from "@/components/Home/CertificateCarousel";
import Timeline from "@/components/Home/Timeline";
import ContactForm from "@/components/Home/ContactForm";
import Link from "next/link";
import ProjectTemplate from "@/components/Work/ProjectTemplate";
import { Projects } from "@/data/projects";
import SkillsSection from "@/components/Home/SkillsSection";

const certificates: string[] = [
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339901/Screenshot_2026-03-24_134054_xqstyd.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339900/Screenshot_2026-03-24_134032_d4ymwp.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339896/Screenshot_2026-03-24_134016_g9vyy6.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339803/UC-9e3ea959-a1d3-4466-950b-3b54141ce868_radclj.jpg",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339798/inforses_python_kukodg.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339795/freecodecame_frontend_snc9ap.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339769/corsera_software_testing_klryf0.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339767/CodewithRandomJavascript_jxoxqd.png",
  "https://res.cloudinary.com/du8ekvenq/image/upload/v1774339765/codewise_Hackathone_nns9qj.png",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Introduction name={"Enlight"} />
      <BentoGrid />
      <SkillsSection />
      <div className="w-full max-w-5xl mx-auto px-4 py-4">
        <Link href="/work" className="jap text-3xl mb-4 block hover:opacity-80 transition-opacity">
          Projects
        </Link>
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
      </div>
      <CertificateCarousel urls={certificates} />
      <Timeline />
      <ContactForm />
    </div>
  );
}
