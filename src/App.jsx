import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="min-h-svh scroll-smooth bg-black font-sans text-white selection:bg-cyan-500/30 selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* Services Section */}
      <section id="services" className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">From concept to production with performance and polish.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[{
            title: 'Web Development',
            body: 'Full‑stack product engineering with modern frameworks and robust tooling.',
            accent: 'from-cyan-500/20 to-transparent',
          }, {
            title: 'UI/UX Design',
            body: 'High‑fidelity interfaces with crisp motion and accessible design systems.',
            accent: 'from-violet-500/20 to-transparent',
          }, {
            title: 'AI‑Powered Solutions',
            body: 'Integrations with LLMs and ML workflows to elevate user experiences.',
            accent: 'from-blue-500/20 to-transparent',
          }].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${card.accent}`} />
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white">{card.title}</h3>
                <p className="mt-2 text-zinc-300">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-zinc-400 md:flex-row">
          <p>© {new Date().getFullYear()} Alex Carter</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#services" className="transition hover:text-white">Services</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
