import { useEffect, useState } from 'react';
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react';
import { motion, useReducedMotion } from 'framer-motion';

const animationUrl =
  'https://lottie.host/ff55cf3b-cb03-4099-9fa7-97c5b26155fa/btrkAUCxyI.lottie';
const minimumDisplayTime = 2000;
const maximumDisplayTime = 4000;

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  const reduceMotion = useReducedMotion();
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [animationReady, setAnimationReady] = useState(false);
  const [animationHasPlayed, setAnimationHasPlayed] = useState(false);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const [pageReady, setPageReady] = useState(document.readyState === 'complete');

  useEffect(() => {
    if (!dotLottie) return;

    const handleLoad = () => setAnimationReady(true);
    const handleLoadError = () => setAnimationReady(true);

    if (dotLottie.isLoaded) handleLoad();
    dotLottie.addEventListener('load', handleLoad);
    dotLottie.addEventListener('loadError', handleLoadError);

    return () => {
      dotLottie.removeEventListener('load', handleLoad);
      dotLottie.removeEventListener('loadError', handleLoadError);
    };
  }, [dotLottie]);

  useEffect(() => {
    if (reduceMotion) {
      setAnimationHasPlayed(true);
      return;
    }
    if (!animationReady) return;

    const animationTimer = window.setTimeout(() => setAnimationHasPlayed(true), 700);
    return () => window.clearTimeout(animationTimer);
  }, [animationReady, reduceMotion]);

  useEffect(() => {
    const handlePageLoad = () => setPageReady(true);
    const minimumTimer = window.setTimeout(
      () => setMinimumTimeElapsed(true),
      minimumDisplayTime
    );
    const fallbackTimer = window.setTimeout(onComplete, maximumDisplayTime);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (document.readyState !== 'complete') {
      window.addEventListener('load', handlePageLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(fallbackTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  useEffect(() => {
    if (pageReady && minimumTimeElapsed && animationHasPlayed) onComplete();
  }, [animationHasPlayed, minimumTimeElapsed, onComplete, pageReady]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-background px-6 text-foreground"
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}>
      <div className="flex flex-col items-center gap-3 text-center">
        {reduceMotion ? (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card font-mono text-xl font-semibold shadow-sm">
            RY
          </div>
        ) : (
          <DotLottieReact
            src={animationUrl}
            autoplay
            loop
            className="h-[400px] w-[400px]"
            dotLottieRefCallback={setDotLottie}
            renderConfig={{ autoResize: true }}
          />
        )}

      </div>
    </motion.div>
  );
}
