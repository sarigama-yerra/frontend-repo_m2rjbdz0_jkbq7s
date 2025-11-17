export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">About me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a front-end engineer who loves clean interfaces, motion, and systems thinking. I blend design and code to build fast, accessible products that feel effortless.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            My toolkit includes React, TypeScript, Tailwind, and a healthy respect for details. I care about content-first layouts, good typography, and calm technology.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-gray-900/10 bg-white/70 backdrop-blur p-6 shadow-sm">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Experience</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">5+ yrs</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Focus</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">UI Engineering</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Core</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">React, Tailwind</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">Location</dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">Remote</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
