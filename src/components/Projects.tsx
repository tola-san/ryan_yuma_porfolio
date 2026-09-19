import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { ButtonLink } from './ButtonLink';
import { SectionHeading } from './SectionHeading';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24 ">
      <SectionHeading
        index="04"
        title="Projects"
        description="Work where I owned the backend — from data modeling to shipped endpoints." />
      

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) =>
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
          whileHover={{ y: -6 }}>
          
            <Card className="flex h-full flex-col shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5">
              <CardHeader>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted">
                  <FolderGit2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </div>
                <CardTitle className="font-heading text-lg tracking-tight">{project.name}</CardTitle>
                <CardDescription className="font-mono text-xs tracking-wide">
                  {project.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) =>
                <li key={tech}>
                      <Badge variant="secondary" className="font-mono text-[11px]">
                        {tech}
                      </Badge>
                    </li>
                )}
                </ul>
                {project.liveUrl && (
                  <ButtonLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="outline"
                    size="sm"
                    className="mt-auto w-fit">
                    Live demo
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </ButtonLink>
                )}
              </CardContent>
            </Card>
          </motion.article>
        )}
      </div>
    </section>);

}
