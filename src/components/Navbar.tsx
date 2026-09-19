import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/Button';
import { ButtonLink } from './ButtonLink';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/Tooltip';
import { sections } from '../data/portfolio';
import type { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

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
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
      scrolled ?
      'border-border bg-background/80 backdrop-blur-md' :
      'border-transparent bg-transparent'}`
      }>
      
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight transition-opacity hover:opacity-70">
          
          rayya<span className="text-muted-foreground">.dev</span>
        </a>

        <nav aria-label="Section navigation" className="hidden items-center gap-1 md:flex">
          {sections.map((section) =>
          <ButtonLink key={section.id} href={`#${section.id}`} variant="ghost" size="sm">
              {section.label}
            </ButtonLink>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="#contact" variant="outline" size="sm" className="hidden sm:inline-flex">
            Get in touch
          </ButtonLink>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                
                {theme === 'dark' ?
                <Sun className="h-4 w-4" aria-hidden="true" /> :

                <Moon className="h-4 w-4" aria-hidden="true" />
                }
              </Button>
            </TooltipTrigger>
            <TooltipContent>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </motion.header>);

}