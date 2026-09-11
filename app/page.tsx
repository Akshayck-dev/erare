'use client'

import { useEffect, useState } from 'react'
import { Search, User, ShoppingCart, Menu, X, ArrowRight } from 'lucide-react'
import { GradualSpacing } from '@/components/ui/gradual-spacing'

const InstagramIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const FacebookIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const wideBackground = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2010%2C%202026%2C%2009_48_21%20PM%20%282%29-xVEKY9Z39fS3nFQdGpqJynky64nhID.png'
const tallBackground = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2010%2C%202026%2C%2009_52_05%20PM%20%281%29-suNTE2LEyqKj4AH9ysfA151VrfZx4P.png'
const logoUrl = '/logo.webp'

const categories = [
  { name: 'Fashion', image: '/category_fashion_1789097636790.webp' },
  { name: 'Beauty', image: '/category_beauty_1789097655065.webp' },
  { name: 'Electronics', image: '/category_electronics_1789097794523.webp' },
  { name: 'Appliances', image: '/category_appliances_1789097809334.webp' },
  { name: 'Books', image: '/category_books_1789097825856.webp' },
  { name: 'Travel', image: '/category_travel_1789097850598.webp' },
  { name: 'Sports', image: '/category_sports_1789097865594.webp' },
  { name: 'Education', image: '/category_education_1789097878894.webp' },
  { name: 'Art & Craft', image: '/category_art_craft_1789098018543.webp' },
  { name: 'Health', image: '/category_health_1789098033786.webp' },
  { name: 'Toys', image: '/category_toys_1789098046989.webp' },
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="premium-layout">
      {/* SPLASH SCREEN */}
      <div className="splash-screen">
        <div className="splash-logo-container">
          <img src={logoUrl} className="splash-logo-white" alt="" />
          <img src={logoUrl} className="splash-logo-red" alt="" />
        </div>
      </div>

      {/* 1. PREMIUM NAVBAR */}
      <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="brand-logo" aria-label="ERARE home">
          <img src={logoUrl} alt="ERARE" />
        </a>
        
        <div className="nav-links">
          <a href="#top">Home</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search"><Search size={20} strokeWidth={1.5} /></button>
          <button className="icon-btn" aria-label="Account"><User size={20} strokeWidth={1.5} /></button>
          <button className="icon-btn" aria-label="Cart"><ShoppingCart size={20} strokeWidth={1.5} /></button>
          <button className="notify-btn">Notify Me</button>
        </div>

        <button 
          className="mobile-menu-btn" 
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE SIDE DRAWER */}
      <div className={`mobile-drawer-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <a href="#top" className="brand-logo" onClick={() => setMenuOpen(false)}>
            <img src={logoUrl} alt="ERARE" />
          </a>
          <button className="drawer-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="drawer-links">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="drawer-footer">
          <button className="notify-btn" onClick={() => setMenuOpen(false)}>Notify Me</button>
          <span className="drawer-tagline">A RARE ERA OF CHOICE</span>
        </div>
      </aside>

      {/* 2. HERO SECTION */}
      <section className="hero-section" id="top">
        <picture className="hero-bg" aria-hidden="true">
          <source media="(max-width: 700px)" srcSet={tallBackground} />
          <img src={wideBackground} alt="" />
        </picture>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="intro-section" id="about">
        <div className="container intro-content reveal">
          <span className="section-eyebrow">The Erare Experience</span>
          <h2 className="intro-heading">ONE PLACE. ENDLESS CHOICE.</h2>
          <p className="intro-desc">
            ERARE brings together distinctive products, emerging brands and everyday essentials across a world of categories — curated for the curious.
          </p>
        </div>
      </section>

      {/* 4. WHY ERARE SECTION */}
      <section className="features-section">
        <div className="container">
          <div className="features-header reveal">
            <span className="section-eyebrow">Why E Rare</span>
          </div>
          <div className="features-grid">
            <div className="feature-block reveal reveal-delay-1">
              <span className="feature-number">01 — CURATED CHOICE</span>
              <h3 className="feature-title">Beyond Ordinary</h3>
              <p className="feature-desc">Discover products selected beyond the ordinary. We believe in quality over quantity, bringing you the finest selection.</p>
            </div>
            <div className="feature-block reveal reveal-delay-2">
              <span className="feature-number">02 — EVERY CATEGORY</span>
              <h3 className="feature-title">Endless Variety</h3>
              <p className="feature-desc">From fashion and beauty to technology, books, travel and more. Everything you need, unified in one marketplace.</p>
            </div>
            <div className="feature-block reveal reveal-delay-3">
              <span className="feature-number">03 — PREMIUM EXPERIENCE</span>
              <h3 className="feature-title">Designed for You</h3>
              <p className="feature-desc">Designed around simplicity, discovery and quality. A frictionless journey from inspiration to possession.</p>
            </div>
            <div className="feature-block reveal reveal-delay-4">
              <span className="feature-number">04 — MADE FOR THE CURIOUS</span>
              <h3 className="feature-title">Discover What's Next</h3>
              <p className="feature-desc">For people who always want to discover what's next. Join a community of forward-thinkers and early adopters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATEGORY SHOWCASE */}
      <section className="categories-section" id="categories">
        <div className="container">
          <div className="categories-header reveal">
            <h2 className="intro-heading">DISCOVER WHAT'S COMING</h2>
          </div>
          <div className="category-grid">
            {categories.map((cat, index) => (
              <div className={`category-card reveal reveal-delay-${(index % 4) + 1}`} key={index}>
                <img src={cat.image} alt={cat.name} className="category-img" />
                <div className="category-overlay"></div>
                <div className="category-content">
                  <h3 className="category-title">{cat.name}</h3>
                  <ArrowRight className="category-arrow" size={24} strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL BRAND SECTION */}
      <section className="editorial-section">
        <div className="container editorial-container">
          <div className="editorial-left reveal">
            <GradualSpacing text="NOT JUST ANOTHER MARKETPLACE." className="editorial-heading" />
          </div>
          <div className="editorial-right reveal reveal-delay-2">
            <p className="editorial-desc">
              ERARE is designed around discovery, variety and uncommon choices. We are redefining the e-commerce landscape by prioritizing curation and aesthetic excellence. It is a destination where the ordinary is left behind.
            </p>
          </div>
        </div>
      </section>

      {/* 7. COMING SOON SECTION */}
      <section className="coming-soon-section" id="contact">
        <div className="coming-soon-glow"></div>
        <div className="container coming-soon-content reveal">
          <GradualSpacing text="SOMETHING RARE IS COMING." className="cs-heading" />
          <p className="cs-desc">Be the first to know when ERARE opens its doors.</p>
          <form className="cs-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className="cs-input" required />
            <button type="submit" className="cs-btn">Notify Me</button>
          </form>
        </div>
      </section>

      {/* 8. FINAL BRAND STATEMENT */}
      <section className="final-brand-section reveal">
        <GradualSpacing text="MADE FOR THE CURIOUS." className="final-statement" />
        <span className="final-year">ERARE / 2026</span>
      </section>

      {/* 9. FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <a href="#top" className="brand-logo" aria-label="ERARE home">
            <img src={logoUrl} alt="" />
            <span>ERARE</span>
          </a>
          
          <div className="footer-nav">
            <div className="footer-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#about">About</a>
              <a href="#categories">Categories</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Legal</span>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Social</span>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><InstagramIcon /> Instagram</a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FacebookIcon /> Facebook</a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><LinkedinIcon /> LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>&copy; 2026 ERARE. All rights reserved.</span>
          <span>A RARE ERA OF CHOICE.</span>
        </div>
      </footer>
    </main>
  )
}
