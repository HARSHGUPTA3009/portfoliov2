/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import {
Github,
Linkedin,
Mail,
Phone,
FileText,
Copy,
Check,
ArrowUpRight,
} from "lucide-react";

import { personalInfo, socialLinks } from "@/data/portfolio-data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
const [copied, setCopied] = useState(false);

const copyEmail = async () => {
await navigator.clipboard.writeText(personalInfo.email);
setCopied(true);


setTimeout(() => {
  setCopied(false);
}, 2000);


};

const contacts = [
{
title: "GitHub",
value: "View Projects",
href: socialLinks.github,
icon: Github,
},
{
title: "LinkedIn",
value: "Professional Profile",
href: socialLinks.linkedin,
icon: Linkedin,
},
{
title: "Email",
value: personalInfo.email,
href: `mailto:${personalInfo.email}`,
icon: Mail,
},
{
title: "Phone",
value: personalInfo.phone,
href: `tel:${personalInfo.phone}`,
icon: Phone,
},
];

return ( 
<section
   id="contact"
   className="relative py-32 overflow-hidden"
 >
{/* Background Grid */}
<div
className="absolute inset-0 -z-20 opacity-50"
style={{
backgroundImage:
"radial-gradient(circle, #d1d5db 1px, transparent 1px)",
backgroundSize: "30px 30px",
maskImage:
"radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
WebkitMaskImage:
"radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
}}
/>

  <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl -z-10" />

  <div className="mx-auto max-w-7xl px-6">
    <SectionHeader
      label="Contact"
      title="Let's Build Something Together"
      description="Currently looking for Software Engineering, Backend Engineering and DevOps opportunities."
    />

    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 mt-16 items-center">
      {/* Left */}
      <Reveal>
        <div>
          <h3 className="text-5xl md:text-6xl font-bold text-ink leading-[1.05] mb-8">
            Let&apos;s build
            <br />
            something great.
          </h3>

          <p className="text-lg text-ink-secondary max-w-lg leading-relaxed mb-8">
            Whether it&apos;s a full-time role, internship,
            startup opportunity, or collaboration,
            I&apos;d love to hear about it.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink text-white hover:opacity-90 transition"
            >
              <Mail size={16} />
              Email Me
            </a>

            <a
              href={personalInfo.resumeLink}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-surface-border bg-white hover:bg-surface-raised transition"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>
      </Reveal>

{/* Right */}
<div className="flex flex-col gap-4 w-full">
  {contacts.map((contact, index) => {
    const Icon = contact.icon;

    return (
      <Reveal
        key={contact.title}
        delay={index * 0.08}
      >
        <a
          href={contact.href}
          target={
            contact.href.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            contact.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="
            group
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-surface-border
            bg-white/80
            backdrop-blur-sm
            p-5
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light">
              <Icon
                size={22}
                className="text-accent"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink-tertiary mb-1">
                {contact.title}
              </p>

              <p className="font-medium text-ink break-all">
                {contact.value}
              </p>
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-ink-secondary"
          />
        </a>
      </Reveal>
    );
  })}

  {/* Copy Email */}
  <Reveal delay={0.4}>
    <button
      onClick={copyEmail}
      className="
        flex
        items-center
        w-full
        justify-between
        rounded-2xl
        border
        border-surface-border
        bg-white/80
        backdrop-blur-sm
        p-5
        text-left
        hover:shadow-lg
        min-h-[96px]
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light">
          <Copy
            size={22}
            className="text-accent"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink-tertiary mb-1">
            Quick Copy
          </p>

          <p className="font-medium text-ink">
            Copy Email Address
          </p>
        </div>
      </div>

      {copied && (
        <Check
          size={18}
          className="text-green-500"
        />
      )}
    </button>
  </Reveal>
</div>
    </div>
  </div>
</section>


);
}
