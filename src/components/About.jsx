import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-7xl px-6 py-24 text-zinc-200">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid items-center gap-10 md:grid-cols-2"
      >
        <motion.div variants={item} className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(34,211,238,0.12),transparent_60%)]" />
          <img
            src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
            className="relative z-10 h-full w-full object-cover opacity-80 mix-blend-overlay"
          />
        </motion.div>
        <motion.div variants={item}>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">About</h2>
          <p className="mt-4 text-pretty text-zinc-300">
            I craft immersive, performant web experiences blending <span className="text-cyan-400">React</span>, <span className="text-violet-400">Next.js</span>, and
            <span className="text-cyan-400"> Node.js</span> with cutting-edge animations and <span className="text-violet-400">AI/ML</span> integrations. I love turning complex
            ideas into elegant, cinematic interfaces.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Framer Motion', 'GSAP', 'AI/ML'].map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
