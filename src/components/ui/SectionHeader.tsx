import Reveal from "./Reveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <Reveal>
        <p className="font-mono text-xs text-accent font-medium tracking-widest uppercase mb-3">
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-semibold text-ink tracking-tight">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-3 text-ink-secondary text-base max-w-xl">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
