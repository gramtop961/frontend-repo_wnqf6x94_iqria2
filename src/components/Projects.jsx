import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cinematic Portfolio',
    desc: 'A dark, animated portfolio with parallax storytelling.',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    url: '#',
  },
  {
    title: 'AI Content Studio',
    desc: 'End-to-end AI-assisted content generation and editing.',
    stack: ['React', 'Node.js', 'OpenAI'],
    url: '#',
  },
  {
    title: 'Realtime Dashboards',
    desc: 'High-performance data viz with live updates.',
    stack: ['Vite', 'WebSockets', 'D3'],
    url: '#',
  },
  {
    title: 'E‑commerce Motion',
    desc: 'Shopfront with buttery motion and micro-interactions.',
    stack: ['Next.js', 'GSAP', 'Stripe'],
    url: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Recent Work</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">Selected projects with a focus on performance and motion design.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -inset-24 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(167,139,250,0.18),transparent_60%)] blur-2xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-white">{p.title}</h3>
              <p className="mt-1 text-zinc-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href={p.url}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/20"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
