import React from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';
import { FadeUp } from './motion/FadeUp';
import { SectionHeading } from './SectionHeading';
import { education } from '../data/portfolio';

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
      <SectionHeading index="03" title="Education" />

      <ol className="relative ml-3 border-l border-border pl-8">
        {education.map((entry, index) =>
        <FadeUp as="li" key={entry.degree} delay={index * 0.1} className="relative pb-2 last:pb-0">
            <span
            aria-hidden="true"
            className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
            
              <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
            </span>

            <p className="font-mono text-xs tracking-widest text-muted-foreground">{entry.period}</p>
            <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">{entry.degree}</h3>
            <a
            href={entry.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline">
            
              {entry.school}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {entry.description}
            </p>
          </FadeUp>
        )}
      </ol>
    </section>);

}