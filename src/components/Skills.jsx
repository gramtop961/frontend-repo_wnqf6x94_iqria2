import { motion } from 'framer-motion';
import { Sparkles, Code2, Rocket } from 'lucide-react';

const skills = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Rocket },
  { name: 'Node.js', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Framer Motion', icon: Sparkles },
  { name: 'GSAP', icon: Sparkles },
  { name: 'AI/ML', icon: Rocket },
  { name: 'Tailwind', icon: Code2 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Skills</h2>
        <p className="mt-2 max-w-2xl text-zinc-300">A toolkit designed for velocity, precision, and expressive UI.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 shadow-2xl"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -inset-20 bg-[conic-gradient(from_90deg,rgba(34,211,238,0.15),rgba(167,139,250,0.15),transparent_30%)] blur-2xl" />
            </div>
            <div className="relative z-10 flex items-center gap-3">
              <div className="rounded-lg bg-white/5 p-2 text-cyan-300 shadow-[0_0_30px_2px_rgba(34,211,238,0.2)]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-white">{name}</p>
                <p className="text-sm text-zinc-400">Hover for glow</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
