export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
  image: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  codolio: string;
  codechef: string;
  email: string;
}
