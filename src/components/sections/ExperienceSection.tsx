import { experience } from "@/data/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { MapPin, Calendar, Building2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 scroll-mt-14 bg-surface border-y border-surface-border"
      aria-label="Experience"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Background"
          title="Experience"
          description="Where I've built and what I've shipped."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-2 bottom-0 w-px bg-surface-border"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="relative flex gap-6 pl-8">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-white"
                    aria-hidden="true"
                  />

                  <div className="flex-1">
                    {/* Role + company */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-ink tracking-tight">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                        <span className="flex items-center gap-1.5 text-sm font-medium text-accent">
                          <Building2 size={13} />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-ink-secondary">
                          <Calendar size={13} />
                          {job.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-ink-secondary">
                          <MapPin size={13} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Description bullets */}
                    <ul className="space-y-2">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-ink-secondary leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-ink-tertiary shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Education entry */}
            <Reveal delay={0.2}>
              <div className="relative flex gap-6 pl-8">
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-surface-border bg-surface-raised"
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink tracking-tight">
                    B.E. Computer Engineering
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-ink-secondary">
                      <Building2 size={13} />
                      Thapar Institute of Engineering & Technology
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-ink-secondary">
                      <Calendar size={13} />
                      2023 – 2027
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-ink-secondary">
                      <MapPin size={13} />
                      Patiala, India
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink-tertiary shrink-0" />
                      Solved 400+ DSA problems in Java across LeetCode, CodeChef, and Codeforces.
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink-tertiary shrink-0" />
                      Participated in Smart India Hackathon at the national level.
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink-tertiary shrink-0" />
                      14+ deployed personal and team projects across full-stack, DevOps, and AI domains.
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
