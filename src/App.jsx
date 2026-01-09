import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './App.css'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY
)

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <header className="header" style={{ opacity: Math.max(0.9, 1 - scrollY / 300) }}>
        <div className="container">
          <h1 className="logo">Your Name</h1>
          <nav className="nav">
            <a href="#music">Music</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Professional Musician</h2>
          <p>Creating beautiful music for over a decade</p>
        </div>
      </section>

      <section id="music" className="section">
        <div className="container">
          <h2>Latest Releases</h2>
          <div className="releases-grid">
            <div className="release-card">
              <div className="release-placeholder"></div>
              <h3>Song Title</h3>
              <p className="artist">Album Name</p>
              <a href="#" className="btn-link">Listen</a>
            </div>
            <div className="release-card">
              <div className="release-placeholder"></div>
              <h3>Another Hit</h3>
              <p className="artist">Latest Album</p>
              <a href="#" className="btn-link">Listen</a>
            </div>
            <div className="release-card">
              <div className="release-placeholder"></div>
              <h3>Fan Favorite</h3>
              <p className="artist">Best Of Collection</p>
              <a href="#" className="btn-link">Listen</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About</h2>
              <p>
                A passionate musician dedicated to creating meaningful music that resonates with audiences worldwide.
                With performances across major venues and millions of streams, the journey continues to evolve.
              </p>
              <p>
                Specializing in multiple genres and instruments, bringing a unique perspective to every composition and collaboration.
              </p>
            </div>
            <div className="about-links">
              <h3>Follow</h3>
              <ul>
                <li><a href="#">Spotify</a></li>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault()
            alert('Thank you for your message!')
          }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
