import { personalInfo } from "@/data/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const pillars = [
{
label: "Backend & Distributed Systems",
desc: "Building scalable APIs, asynchronous workflows, caching layers, queues, and microservice architectures that handle real-world traffic.",
},
{
label: "Cloud & DevOps",
desc: "Hands-on experience with Docker, AWS, GCP, CI/CD pipelines, monitoring, deployment automation, and production infrastructure.",
},
{
label: "AI Engineering",
desc: "Worked on multimodal AI systems using Whisper, LLaMA, CLAP, RAG pipelines, and developer-focused AI tooling.",
},
{
label: "Problem Solving",
desc: "600+ DSA problems solved across LeetCode, Codeforces, CodeChef, and GeeksforGeeks with strong CS fundamentals.",
},
];


export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 scroll-mt-14 bg-surface border-y border-surface-border"
      aria-label="About"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <SectionHeader
              label="About"
              title="Engineer, builder, problem solver."
            />
            <Reveal delay={0.1}>
              <p className="text-ink-secondary leading-relaxed text-base mb-4">
                {personalInfo.bio}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-ink-secondary leading-relaxed text-base">
                I&apos;m currently in my final year at <span className="text-ink font-medium">Thapar Institute of Engineering & Technology</span>, where I&apos;ve been building production-grade software alongside my coursework. I thrive at the intersection of backend systems, developer tooling, and AI.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 0.08}>
                <div className="p-4 rounded-xl border border-surface-border hover:border-ink/20 transition-colors duration-200">
                  <p className="font-medium text-ink text-sm mb-1">{pillar.label}</p>
                  <p className="text-xs text-ink-secondary leading-relaxed">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
