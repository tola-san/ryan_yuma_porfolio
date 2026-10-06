import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import ApacheMaven from '@thesvg/react/apache-maven';
import Git from '@thesvg/react/git';
import Java from '@thesvg/react/java';
import Postgresql from '@thesvg/react/postgresql';
import Postman from '@thesvg/react/postman';
import SpringBoot from '@thesvg/react/spring-boot';
import { Code2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Badge } from './ui/Badge';
import { OrbitingCircles } from './ui/orbiting-circles';
import { skills } from '../data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const innerSkills = [
  { name: 'Java', icon: <Java className="size-6" focusable="false" /> },
  { name: 'PostgreSQL', icon: <Postgresql className="size-6" focusable="false" /> },
  { name: 'Maven', icon: <ApacheMaven className="size-6" focusable="false" /> },
];

const outerSkills = [
  { name: 'Spring Boot', icon: <SpringBoot className="size-6" focusable="false" /> },
  { name: 'Git', icon: <Git className="size-6" focusable="false" /> },
  { name: 'Postman', icon: <Postman className="size-6" focusable="false" /> },
];

function SkillOrbitIcon({ name, icon }: { name: string; icon: ReactNode }) {
  return (
    <span
      title={name}
      className="flex size-full items-center justify-center rounded-full border border-border/80 bg-background text-foreground shadow-[0_8px_24px_-12px_var(--foreground)]">
      {icon}
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-5xl rounded-lg border border-dashed px-6 py-20 sm:py-24">
      <SectionHeading
        index="02"
        title="Skills"
        description="The tools I reach for when building and shipping backend services."
      />

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <motion.li key={skill.name} variants={item}>
              <motion.button
                type="button"
                title={skill.description}
                aria-label={`${skill.name}: ${skill.description}`}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                className="cursor-help rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                <Badge
                  variant="outline"
                  className="rounded-lg px-4 py-4 text-sm font-medium shadow-sm transition-[border-color,box-shadow] duration-150 hover:border-foreground/40 hover:shadow-[0_0_0_4px_var(--accent),0_8px_24px_-12px_var(--foreground)]">
                  {skill.name}
                </Badge>
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-[310px] w-full max-w-[340px] items-center justify-center ">
          <div className="relative z-10 flex size-24 flex-col items-center justify-center rounded-full border border-dashed bg-background shadow-[0_16px_40px_-20px_var(--foreground)]">
            <Code2 className="mb-1 size-6" strokeWidth={1.6} />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Backend
            </span>
          </div>

          <OrbitingCircles radius={76} duration={14} iconSize={42}>
            {innerSkills.map((skill) => (
              <SkillOrbitIcon key={skill.name} {...skill} />
            ))}
          </OrbitingCircles>
          <OrbitingCircles radius={150} duration={22} iconSize={46} reverse>
            {outerSkills.map((skill) => (
              <SkillOrbitIcon key={skill.name} {...skill} />
            ))}
          </OrbitingCircles>
        </motion.div>
      </div>
    </section>
  );
}
