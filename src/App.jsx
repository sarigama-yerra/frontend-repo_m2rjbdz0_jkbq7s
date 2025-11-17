import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(50%_50%_at_50%_0%,rgba(244,63,94,0.06),transparent_60%)]">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name — Crafted with calm technology</footer>
      </main>
    </div>
  )
}

export default App
