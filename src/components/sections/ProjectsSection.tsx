import { projects } from "@/data/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 scroll-mt-14 overflow-hidden"
      aria-label="Projects"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Work"
          title="Projects"
          description="A selection of things I've built — production apps, systems, and tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}