"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative bg-surface border border-surface-border rounded-xl overflow-hidden",
        "hover:border-ink/20 hover:shadow-sm transition-all duration-300"
      )}
    >
      {/* Card header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            {/* Number label */}
            <span className="font-mono text-[10px] text-ink-tertiary tracking-widest uppercase">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-ink mt-1 tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-ink-tertiary hover:text-ink hover:bg-surface-raised transition-colors"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={15} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-ink-tertiary hover:text-ink hover:bg-surface-raised transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-ink-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-surface-raised text-ink-secondary text-xs font-mono border border-surface-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable highlights */}
      <div className="border-t border-surface-border">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-6 py-3 text-xs text-ink-tertiary hover:text-ink hover:bg-surface-raised transition-colors"
          aria-expanded={expanded}
        >
          <span className="font-mono">Key highlights</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="px-6 pb-5 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.article>
  );
}
