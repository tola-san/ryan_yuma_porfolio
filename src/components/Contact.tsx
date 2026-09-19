import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Card } from './ui/Card';
import { contactLinks } from '../data/portfolio';
import type { ContactLink } from '../types/portfolio';

const icons = {
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin
};

function ContactRow({ link, index }: {link: ContactLink;index: number;}) {
  const Icon = icons[link.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -4 }}>
      
      <Card className="group h-full p-0 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-foreground/5">
        <a
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noreferrer noopener' : undefined}
          className="flex items-center gap-4 rounded-xl p-5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
          
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted transition-colors group-hover:bg-accent">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {link.label}
            </span>
            <span className="block truncate text-sm font-medium">{link.value}</span>
          </span>
          <ArrowUpRight
            className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden="true" />
          
        </a>
      </Card>
    </motion.div>);

}

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
      <SectionHeading
        index="05"
        title="Contact"
        description="Open to junior and intern backend roles. The fastest way to reach me is email." />
      

      <div className="grid gap-4 sm:grid-cols-2">
        {contactLinks.map((link, index) =>
        <ContactRow key={link.label} link={link} index={index} />
        )}
      </div>
    </section>);

}