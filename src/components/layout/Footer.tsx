import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-tertiary">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="font-mono text-xs text-ink-tertiary">
          Built with Next.js 15 · TypeScript · Tailwind
        </p>
      </div>
    </footer>
  );
}
