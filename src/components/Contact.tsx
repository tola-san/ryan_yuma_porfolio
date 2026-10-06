import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

const actionLabels = {
  mail: 'Send email',
  phone: 'Call now',
  github: 'View GitHub',
  linkedin: 'View LinkedIn'
};

function ContactRow({ link, index }: {link: ContactLink;index: number;}) {
  const Icon = icons[link.icon];
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : {
        y: -4,
        scale: 1.01,
        transition: { type: 'spring', duration: 0.3, bounce: 0 }
      }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}>
      
      <Card className="group relative h-full overflow-hidden p-0 shadow-sm transition-[border-color,box-shadow] duration-150 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-px origin-center scale-y-0 bg-foreground transition-transform duration-150 group-hover:scale-y-100" />
        <a
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noreferrer noopener' : undefined}
          className="flex min-h-24 items-center gap-4 rounded-xl p-5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:p-6">
          
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted transition-[transform,background-color,border-color] duration-150 group-hover:rotate-3 group-hover:scale-105 group-hover:border-foreground/20 group-hover:bg-accent">
            <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {link.label}
            </span>
            <span className="mt-1 block truncate text-sm font-medium">{link.value}</span>
          </span>
          <span className="ml-auto hidden shrink-0 items-center gap-1.5 font-mono text-[11px] text-muted-foreground transition-colors duration-150 group-hover:text-foreground sm:flex">
            {actionLabels[link.icon]}
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true" />
          </span>
          <ArrowUpRight
            className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-[color,transform] duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:hidden"
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
