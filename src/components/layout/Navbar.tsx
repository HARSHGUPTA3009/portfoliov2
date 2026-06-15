"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, ExternalLink, ArrowDown } from "lucide-react";
import { navLinks, personalInfo, socialLinks } from "@/data/portfolio-data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Once user scrolls past ~80vh, collapse the hero strip
      setHeroVisible(y < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ─── Sticky top bar (always visible after scroll) ─── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-surface-border"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between gap-6">
          {/* ── Left: brand ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-sm font-semibold text-ink tracking-tight hover:text-accent transition-colors shrink-0"
            aria-label="Scroll to top"
          >
            harshgupta.dev
          </button>

          {/* ── Centre: desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      "relative px-3 py-1.5 text-sm rounded-md transition-colors",
                      isActive
                        ? "text-ink font-medium"
                        : "text-ink-secondary hover:text-ink"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-surface-raised rounded-md"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ── Right: social icons + Resume CTA ── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-tertiary hover:text-ink transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-tertiary hover:text-ink transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={personalInfo.resumeLink}
              download
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md bg-ink text-white hover:bg-ink/90 transition-colors"
            >
              Resume
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-ink-secondary hover:text-ink hover:bg-surface-raised transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

     

      {/* ─── Mobile menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-14 left-0 right-0 z-30 bg-white border-b border-surface-border md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-3 py-2.5 text-sm rounded-md text-ink-secondary hover:text-ink hover:bg-surface-raised transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-surface-border">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-4">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-tertiary hover:text-ink transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-tertiary hover:text-ink transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <a
                    href={personalInfo.resumeLink}
                    download
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md bg-ink text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Resume
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}