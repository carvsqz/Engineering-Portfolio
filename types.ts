export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageCaption?: string;
  videoUrl?: string;
  videoThumbnail?: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  keyFeatures?: string[];
  metrics?: { label: string; value: string }[];
  objectPosition?: string;
  galleryImages?: string[];
  galleryCaptions?: string[];
  pdfPages?: string[];
  pdfUrl?: string;
  socialLinks?: { label: string; url: string }[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo: string;
}

export enum Tab {
  Projects = 'projects',
  About = 'about',
  Contact = 'contact',
  ProjectDetail = 'project_detail'
}

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}