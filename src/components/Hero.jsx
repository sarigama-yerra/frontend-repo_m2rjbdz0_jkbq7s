import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-gray-900/70">Portfolio</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Clean. Minimal. Modern.
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-700">
            I craft delightful, performant web experiences with a focus on clarity and detail. Explore selected work and say hello.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-rose-500 text-white px-5 py-2.5 text-sm font-medium shadow-[0_0_30px_0_rgba(244,63,94,0.45)] hover:shadow-[0_0_40px_2px_rgba(244,63,94,0.55)] transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-900/10 bg-white/70 backdrop-blur px-5 py-2.5 text-sm font-medium text-gray-900 hover:border-gray-900/20 transition">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}
