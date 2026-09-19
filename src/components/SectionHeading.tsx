import React from 'react';
import { FadeUp } from './motion/FadeUp';
import { Separator } from './ui/Separator';

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <FadeUp className="mb-10">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">{index}</span>
        <Separator className="w-8" />
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {description ?
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p> :
      null}
    </FadeUp>);

}