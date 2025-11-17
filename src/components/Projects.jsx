import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Interface Kit',
    desc: 'A minimalist component library built with accessibility at its core.',
    link: '#',
    tags: ['React', 'Tailwind', 'A11y'],
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming metrics with buttery-smooth motion and clean typography.',
    link: '#',
    tags: ['Next.js', 'Websockets', 'Framer Motion'],
  },
  {
    title: 'E-commerce Microfrontends',
    desc: 'Composable storefront powered by microfrontends and design tokens.',
    link: '#',
    tags: ['Module Federation', 'Design Systems'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(50%_50%_at_50%_20%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.10),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Selected work</h2>
          <p className="text-gray-600 mt-2">A few projects that reflect my approach: simple surfaces, deep craft.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-900/10 bg-white/70 backdrop-blur p-6 hover:border-gray-900/20 transition shadow-sm">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-gray-900">{p.title}</h3>
                <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-gray-900 transition" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] tracking-wide rounded-full bg-gray-900/5 px-2.5 py-1 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
