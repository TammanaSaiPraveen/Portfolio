import Navigation from "./components/Navigation"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Certifications from "./components/Certifications"
import Footer from "./components/Footer"
import DarkModeToggle from "./components/DarkModeToggle"
import { ThemeProvider } from "./context/ThemeContext"
import "./styles/globals.css"

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen transition-colors duration-300"
        style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
      >
        <Navigation />
        <main className="w-full" style={{ marginBottom: '120px' }}>
          <Homepage />
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <DarkModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
