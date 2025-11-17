import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-gray-900">
          <span className="mr-2 inline-block h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_20px_4px_rgba(244,63,94,0.6)]" />
          My Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white hover:shadow transition">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white hover:shadow transition">
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition">
            <Mail size={16} /> Hire Me
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-white" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
