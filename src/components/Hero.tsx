import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { ButtonLink } from './ButtonLink';
import { Badge } from './ui/Badge';
import { profile } from '../data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-dashed border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.50] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        
        <motion.div variants={item}>
          <Badge variant="secondary" className="font-mono text-[11px] tracking-wide">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
            {profile.location}
          </Badge>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
          
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 font-mono text-sm text-muted-foreground sm:text-base">
          
          {profile.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#contact" size="lg">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact me
          </ButtonLink>
          <ButtonLink href="#projects" size="lg" variant="outline">
            View projects
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            className = "border border-dashed"
            href={`${import.meta.env.BASE_URL}rayya-yuma-cv.pdf`}
            download="Rayya-Yuma-CV.pdf"
            size="lg"
            variant="outline">
            <Download className="h-4 w-4 " aria-hidden="true" />
            Download CV
          </ButtonLink>
          <div className="ml-1 flex items-center gap-1">
            <ButtonLink
              className ="border border-gray-100/10"
              href="https://github.com/Yuma-backend-dev"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              variant="ghost"
              size="icon">
              
              <Github className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
             className ="border border-gray-100/10"
              href="https://linkedin.com/in/jack-yuma"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              variant="ghost"
              size="icon">
              
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </motion.div>
      </motion.div>
    </section>);

}
