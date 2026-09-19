export interface Skill {
  name: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  url: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  role: string;
  description: string;
  stack: string[];
  liveUrl?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'phone' | 'github' | 'linkedin';
  external: boolean;
}
