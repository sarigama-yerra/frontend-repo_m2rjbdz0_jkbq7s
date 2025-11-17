export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-900/10 bg-white/70 backdrop-blur p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Let’s build something clean.</h3>
              <p className="mt-2 text-gray-600">Open to freelance and full-time opportunities.</p>
            </div>
            <div className="flex gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center rounded-full bg-rose-500 text-white px-5 py-2.5 text-sm font-medium shadow-[0_0_30px_0_rgba(244,63,94,0.45)] hover:shadow-[0_0_40px_2px_rgba(244,63,94,0.55)] transition">Email me</a>
              <a href="/resume.pdf" className="inline-flex items-center rounded-full border border-gray-900/10 bg-white/70 backdrop-blur px-5 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-900/20 transition">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
