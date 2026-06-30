import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Educations from './pages/Educations'
import Specializations from './pages/Specializations'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import ScrollToTop from '../app/components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-black transition-colors duration-300 dark:text-slate-100">
      <ScrollToTop />
      <Navbar />

      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/specializations" element={<Specializations />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
