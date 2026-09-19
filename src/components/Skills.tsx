import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Badge } from './ui/Badge';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/Tooltip';
import { skills } from '../data/portfolio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24 border border-dashed rounded-lg">
      <SectionHeading
        index="02"
        title="Skills"
        description="The tools I reach for when building and shipping backend services." />
      

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-wrap gap-3">
        
        {skills.map((skill) =>
        <motion.li key={skill.name} variants={item}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="cursor-default">
                
                  <Badge
                  variant="outline"
                  className="px-4 py-4 text-sm font-medium rounded-lg shadow-sm transition-shadow duration-300 hover:border-foreground/40 hover:shadow-[0_0_0_4px_var(--accent),0_8px_24px_-12px_var(--foreground)]">
                  
                    {skill.name}
                  </Badge>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{skill.description}</TooltipContent>
            </Tooltip>
          </motion.li>
        )}
      </motion.ul>
    </section>);

}