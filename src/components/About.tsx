import React from 'react';
import { FadeUp } from './motion/FadeUp';
import { SectionHeading } from './SectionHeading';
import { Card, CardContent } from './ui/Card';
import { profile } from '../data/portfolio';

const highlights = [
{ label: 'Focus', value: 'REST API design' },
{ label: 'Core stack', value: 'Java · Spring Boot' },
{ label: 'Looking for', value: 'Junior / intern role' }];


export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <FadeUp className="space-y-5">
          {profile.about.map((paragraph) =>
          <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          )}
        </FadeUp>

        <FadeUp delay={0.1}>
          <Card className="h-full">
            <CardContent className="grid gap-5 py-6">
              {highlights.map((highlight) =>
              <div key={highlight.label}>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {highlight.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{highlight.value}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </FadeUp>
      </div>
    </section>);

}