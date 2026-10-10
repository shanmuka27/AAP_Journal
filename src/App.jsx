import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnnouncementBanner from './components/AnnouncementBanner'
import Home from './pages/Home'
import Publications from './pages/Publications'
import Authors from './pages/Authors'
import Board from './pages/Board'
import Podcast from './pages/Podcast'
import Contact from './pages/Contact'
import Events from './pages/Events'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        {/* <AnnouncementBanner /> */}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/board" element={<Board />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
