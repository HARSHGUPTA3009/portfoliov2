// "use client";

// import { motion } from "framer-motion";
// import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
// import { personalInfo, socialLinks } from "@/data/portfolio-data";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 16 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
// };

// export default function HeroSection() {
//   const scrollToProjects = () => {
//     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center pt-14"
//       aria-label="Introduction"
//     >
//       <div className="mx-auto max-w-5xl px-6 py-24 w-full">
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="max-w-2xl"
//         >
//           {/* Status pill */}
//           <motion.div variants={item} className="mb-8">
//             <span className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary border border-surface-border rounded-full px-3 py-1.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
//               Open to opportunities
//             </span>
//           </motion.div>

//           {/* Name */}
//           <motion.h1
//             variants={item}
//             className="text-5xl sm:text-6xl md:text-7xl font-semibold text-ink tracking-tighter leading-none mb-4"
//           >
//             {personalInfo.name}
//           </motion.h1>

//           {/* Role */}
//           <motion.p
//             variants={item}
//             className="text-xl sm:text-2xl font-mono text-accent mb-6 tracking-tight"
//           >
//             {personalInfo.role}
//           </motion.p>

//           {/* Tagline */}
//           <motion.p
//             variants={item}
//             className="text-lg text-ink-secondary leading-relaxed max-w-lg mb-10 text-balance"
//           >
//             {personalInfo.tagline}
//           </motion.p>

//           {/* CTAs */}
//           <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-12">
//             <button
//               onClick={scrollToProjects}
//               className="flex items-center gap-2 px-5 py-2.5 bg-ink text-white text-sm font-medium rounded-lg hover:bg-ink/90 transition-colors"
//             >
//               View Projects
//               <ArrowDown size={14} />
//             </button>
//             <a
//               href={personalInfo.resumeLink}
//               download
//               className="flex items-center gap-2 px-5 py-2.5 border border-surface-border text-ink text-sm font-medium rounded-lg hover:bg-surface-raised transition-colors"
//             >
//               Resume
//               <ExternalLink size={14} />
//             </a>
//           </motion.div>

//           {/* Social links */}
//           <motion.div variants={item} className="flex items-center gap-4">
//             <a
//               href={socialLinks.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-ink-tertiary hover:text-ink transition-colors"
//               aria-label="GitHub"
//             >
//               <Github size={18} />
//             </a>
//             <a
//               href={socialLinks.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-ink-tertiary hover:text-ink transition-colors"
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={18} />
//             </a>
//             <span className="text-xs font-mono text-ink-tertiary">
//               {personalInfo.university}
//             </span>
//           </motion.div>
//         </motion.div>
        
//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//           className="absolute bottom-10 left-6 hidden md:flex items-center gap-2 text-ink-tertiary"
//         >
//           <motion.div
//             animate={{ y: [0, 6, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//           >
//             <ArrowDown size={14} />
//           </motion.div>
//           <span className="font-mono text-xs">scroll</span>
//         </motion.div>

//         {/* Grid decoration */}
//         <div
//           className="absolute inset-0 -z-10 pointer-events-none"
//           aria-hidden="true"
//           style={{
//             backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
//             backgroundSize: "32px 32px",
//             maskImage: "radial-gradient(ellipse 60% 50% at 80% 50%, black, transparent)",
//             WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 80% 50%, black, transparent)",
//           }}
//         />
//       </div>
//     </section>
//   );
// }
