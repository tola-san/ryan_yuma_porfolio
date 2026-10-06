import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/Button';
import { ButtonLink } from './ButtonLink';
import { sections } from '../data/portfolio';
import type { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full border-b border-dashed transition-[background-color,border-color] duration-300 ${
      scrolled ?
      'border-border bg-background/80 backdrop-blur-md' :
      'border-transparent bg-transparent'}`
      }>
      
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight hover:underline duration-300 transition-opacity hover:opacity-90">
           
          RyanYuma<span className="text-muted-foreground ">.dev</span>
        </a>

        <nav aria-label="Section navigation" className="hidden items-center gap-1 md:flex border border-dashed rounded-lg">
          {sections.map((section) =>
          <ButtonLink key={section.id} href={`#${section.id}`} variant="ghost" size="lg">
              {section.label}
            </ButtonLink>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="#contact" variant="outline" size="sm" className="hidden sm:inline-flex">
            Get in touch
          </ButtonLink>
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0 }}>
                {theme === 'dark' ?
                <Sun className="h-4 w-4" aria-hidden="true" /> :
                <Moon className="h-4 w-4" aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-foreground/60"
        style={{ scaleX: smoothScrollProgress }} />
    </motion.header>);

}
