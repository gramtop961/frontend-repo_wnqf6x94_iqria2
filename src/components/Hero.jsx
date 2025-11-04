import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  useEffect(() => {
    // Nothing needed yet; Spline handles its own render loop
  }, []);

  return (
    <section ref={ref} id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette overlay for cinematic feel */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ opacity: glowOpacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(88,0,255,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_80%,rgba(0,255,255,0.18),transparent_60%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="font-[700] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Alex Carter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.0, ease: 'easeOut' }}
          className="mt-3 text-balance text-lg/7 text-zinc-300 md:text-xl/7"
        >
          Web Developer & Creative Technologist
        </motion.p>

        <motion.div style={{ y }} className="mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_4px_rgba(34,211,238,0.45)]" />
          <span className="text-sm text-zinc-200">Building cinematic web experiences</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="group inline-flex flex-col items-center gap-2 text-zinc-300">
            <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
            <span className="relative inline-flex h-9 w-5 items-start justify-center rounded-full border border-zinc-500/40 p-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 shadow-[0_0_14px_2px_rgba(167,139,250,0.55)]" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
