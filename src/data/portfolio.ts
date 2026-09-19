import type { ContactLink, EducationItem, Project, Skill } from '../types/portfolio';

export const profile = {
  name: 'Rayya Yuma',
  title: 'Backend Developer — Java / Spring Boot',
  tagline:
  'Junior backend developer focused on building clean, reliable REST APIs with Java and Spring Boot.',
  location: 'Open to junior & intern backend roles',
  about: [
  "I'm a junior backend developer working mainly with Java and Spring Boot. I enjoy designing REST APIs and thinking through how data should be structured and accessed.",
  "On Fluxibiz, I built the product and inventory endpoints that power the platform's core catalog. I'm looking for a junior or intern backend role where I can keep building on that foundation."]

};

export const skills: Skill[] = [
{ name: 'Java', description: 'Core language — OOP, collections, streams' },
{ name: 'Spring Boot', description: 'REST controllers, JPA, dependency injection' },
{ name: 'PostgreSQL', description: 'Schema design, joins, indexing basics' },
{ name: 'Git', description: 'Branching, pull requests, code review' },
{ name: 'Postman', description: 'Endpoint testing and API collections' },
{ name: 'Maven', description: 'Builds, dependencies, project structure' }];


export const education: EducationItem[] = [


{
  degree: 'Full-Stack Development Scholarship',
  school: 'ISTAD',
  url: 'https://www.istad.co',
  period: '2026',
  description:
  'Scholarship program covering full-stack web development — building, connecting, and deploying frontend and backend applications end to end.'
},
{
  degree: 'Management Information Systems (MIS)',
  school: 'SET Education Center',
  url: 'https://www.setecu.com',
  period: '2024 — 2026',
  description:
  'Graduated with a focus on information systems, databases, and software development fundamentals.'
},
];


export const projects: Project[] = [
{
  name: 'Fluxibiz',
  role: 'Backend Developer',
  description:
  "Built the product and inventory REST APIs that power the platform's core catalog using Java & Spring Boot.",
  stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Maven'],
  liveUrl: 'https://fluxibiz.store/store'
},
{
  name: 'Scholarship Web',
  role: 'Full-stack Developer',
  description:
  'Full-stack web application for managing scholarships. Handled both frontend and backend, and deployed the complete application.',
  stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Deployment']
}];


export const contactLinks: ContactLink[] = [
{
  label: 'Email',
  value: 'yumarayya25@gmail.com',
  href: 'mailto:yumarayya25@gmail.com',
  icon: 'mail',
  external: false
},
{
  label: 'Phone',
  value: '086 44 68 57',
  href: 'tel:086446857',
  icon: 'phone',
  external: false
},
{
  label: 'GitHub',
  value: 'github.com/Yuma-backend-dev',
  href: 'https://github.com/Yuma-backend-dev',
  icon: 'github',
  external: true
},
{
  label: 'LinkedIn',
  value: 'linkedin.com/in/jack-yuma',
  href: 'https://linkedin.com/in/jack-yuma',
  icon: 'linkedin',
  external: true
}];


export const sections = [
{ id: 'about', label: 'About' },
{ id: 'skills', label: 'Skills' },
{ id: 'education', label: 'Education' },
{ id: 'projects', label: 'Projects' },
{ id: 'contact', label: 'Contact' }];
