"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiMysql, SiRedis, SiDocker,
  SiGithubactions, SiGit, SiLinux, SiPython,
  SiGooglecloud, SiCloudflare, SiLangchain,
  SiHtml5, SiVercel, SiSocketdotio,
} from "react-icons/si";
import { FaJava, FaAws, FaGithub } from "react-icons/fa";

// ─── Icon map ────────────────────────────────────────────────────────────────
const skillIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  MySQL: SiMysql,
  Docker: SiDocker,
  AWS: FaAws,
  GCP: SiGooglecloud,
  "GitHub Actions": SiGithubactions,
  Git: SiGit,
  Linux: SiLinux,
  Java: FaJava,
  Python: SiPython,
  Cloudflare: SiCloudflare,
  Vercel: SiVercel,
  "Socket.io": SiSocketdotio,
  LangChain: SiLangchain,
  GitHub: FaGithub,
};

// ─── Per-category accent color (tailwind-compatible inline vars) ──────────────
const categoryConfig: Record<string, {
  accent: string;       // hex for icon tint + chip hover border
  glow: string;         // very low-opacity rgba for chip hover bg
  dot: string;          // solid dot on header
  label: string;        // emoji-free label
}> = {
  Languages:    { accent: "#6366f1", glow: "rgba(99,102,241,0.08)",   dot: "#6366f1", label: "Languages"    },
  Frontend:     { accent: "#0ea5e9", glow: "rgba(14,165,233,0.08)",   dot: "#0ea5e9", label: "Frontend"     },
  Backend:      { accent: "#10b981", glow: "rgba(16,185,129,0.08)",   dot: "#10b981", label: "Backend"      },
  Databases:    { accent: "#f59e0b", glow: "rgba(245,158,11,0.08)",   dot: "#f59e0b", label: "Databases"    },
  DevOps:       { accent: "#ef4444", glow: "rgba(239,68,68,0.08)",    dot: "#ef4444", label: "DevOps"       },
  Architecture: { accent: "#8b5cf6", glow: "rgba(139,92,246,0.08)",   dot: "#8b5cf6", label: "Architecture" },
  AI:           { accent: "#ec4899", glow: "rgba(236,72,153,0.08)",   dot: "#ec4899", label: "AI / ML"      },
  Fundamentals: { accent: "#64748b", glow: "rgba(100,116,139,0.08)",  dot: "#64748b", label: "Fundamentals" },
  Cloud:        { accent: "#06b6d4", glow: "rgba(6,182,212,0.08)",    dot: "#06b6d4", label: "Cloud"        },
  Tools:        { accent: "#84cc16", glow: "rgba(132,204,22,0.08)",   dot: "#84cc16", label: "Tools"        },
};

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "600+", label: "Problems solved",       sub: "LC · GFG · CodeChef" },
  { value: "10+",  label: "Projects shipped",      sub: "prod to prototype"   },
  { value: "3",    label: "Internships",            sub: "Hosmas · Glyptika"   },
  { value: "SIH",  label: "National runner-up",    sub: "DRDO — 2025"         },
];

// ─── Animated count-up ───────────────────────────────────────────────────────
function AnimatedStat({ value, label, sub, delay }: { value: string; label: string; sub: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative rounded-2xl border border-surface-border bg-white/80 backdrop-blur-sm p-5 overflow-hidden group"
    >
      {/* Subtle corner accent line */}
      <div
        className="absolute top-0 left-0 w-8 h-[2px] rounded-full opacity-60 transition-all duration-500 group-hover:w-16 group-hover:opacity-100"
        style={{ background: "var(--accent, #6366f1)" }}
      />
      <p className="text-[2.25rem] font-bold tracking-tighter text-ink leading-none">
        {value}
      </p>
      <p className="text-sm font-medium text-ink mt-1">{label}</p>
      <p className="text-xs font-mono text-ink-tertiary mt-0.5">{sub}</p>
    </motion.div>
  );
}

// ─── Skill chip ───────────────────────────────────────────────────────────────
function SkillChip({
  skill,
  accent,
  glow,
}: {
  skill: string;
  accent: string;
  glow: string;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = skillIcons[skill];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium cursor-default select-none transition-all duration-200"
      style={{
        borderColor: hovered ? accent : "var(--surface-border, #e5e7eb)",
        backgroundColor: hovered ? glow : "white",
        color: hovered ? accent : "var(--ink-secondary, #6b7280)",
      }}
    >
      {Icon && (
        <span
          className="flex-shrink-0 transition-colors duration-200"
          style={{ color: hovered ? accent : "#9ca3af" }}
        >
          <Icon size={14} className="block" />
        </span>
      )}
      <span className="leading-none">{skill}</span>
    </div>
  );
}

// ─── Scan-line decoration (signature element) ─────────────────────────────────
function ScanLine() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Ambient orbs */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.045]"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #10b981, transparent 70%)", filter: "blur(60px)" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
        }} />

      {/* Moving horizontal scan beam — the signature */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] opacity-30"
        style={{ background: "linear-gradient(90deg, transparent 0%, #6366f1 30%, #10b981 70%, transparent 100%)" }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 9, ease: "linear", repeat: Infinity }}
      />

      {/* Vertical hairlines — grid feel */}
      {[15, 50, 85].map((pct) => (
        <div
          key={pct}
          className="absolute top-0 bottom-0 w-px opacity-[0.06]"
          style={{ left: `${pct}%`, background: "#6366f1" }}
        />
      ))}
    </div>
  );
}

// ─── Category card ────────────────────────────────────────────────────────────
function CategoryCard({
  category,
  items,
  index,
}: {
  category: string;
  items: string[];
  index: number;
}) {
  const cfg = categoryConfig[category] ?? {
    accent: "#6366f1", glow: "rgba(99,102,241,0.08)", dot: "#6366f1", label: category,
  };

  return (
    <Reveal delay={index * 0.07}>
      <div className="group h-full rounded-2xl border border-surface-border bg-white/80 backdrop-blur-sm p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-4">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: cfg.dot }}
          />
          <h3 className="text-sm font-semibold text-ink tracking-tight">{cfg.label}</h3>
          <span className="ml-auto text-[11px] font-mono text-ink-tertiary tabular-nums">
            {items.length}
          </span>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <SkillChip
              key={skill}
              skill={skill}
              accent={cfg.accent}
              glow={cfg.glow}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SkillsSection() {
  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="relative py-28 scroll-mt-14 overflow-hidden"
      aria-label="Skills"
    >
      <ScanLine />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Stack"
          title="Skills & Technologies"
          description="Tools, frameworks, platforms, and CS fundamentals I use to build scalable systems."
        />

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>

        {/* ── Skill categories ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(([category, items], index) => (
            <CategoryCard
              key={category}
              category={category}
              items={items as string[]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}