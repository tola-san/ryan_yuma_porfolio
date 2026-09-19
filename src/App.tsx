import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TooltipProvider } from './components/ui/Tooltip';
import { PageLoader } from './components/PageLoader';
import { useTheme } from './hooks/useTheme';

interface AppProps {
  defaultTheme?: 'dark' | 'light';
}

export function App({ defaultTheme = 'dark' }: AppProps) {
  const { theme, toggleTheme } = useTheme(defaultTheme);
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <TooltipProvider delayDuration={200}>
      <AnimatePresence initial={false}>
        {isLoading && <PageLoader key="page-loader" onComplete={finishLoading} />}
      </AnimatePresence>
      {!isLoading && (
        <div className="min-h-screen w-full scroll-smooth bg-background font-heading text-foreground antialiased">
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </TooltipProvider>);

}
