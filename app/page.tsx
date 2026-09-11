'use client'

import { useEffect, useState } from 'react'
import { Search, User, ShoppingCart, Menu, ArrowRight } from 'lucide-react'

const InstagramIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const FacebookIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const wideBackground = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2010%2C%202026%2C%2009_48_21%20PM%20%282%29-xVEKY9Z39fS3nFQdGpqJynky64nhID.png'
const tallBackground = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2010%2C%202026%2C%2009_52_05%20PM%20%281%29-suNTE2LEyqKj4AH9ysfA151VrfZx4P.png'
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%201%20%281%29-9vKnR7Vqhayept4DpB9a0ZrINu2bWX.png'

const categories = [
  { name: 'Fashion', image: '/category_fashion_1789097636790.png' },
  { name: 'Beauty', image: '/category_beauty_1789097655065.png' },
  { name: 'Electronics', image: '/category_electronics_1789097794523.png' },
  { name: 'Appliances', image: '/category_appliances_1789097809334.png' },
  { name: 'Books', image: '/category_books_1789097825856.png' },
  { name: 'Travel', image: '/category_travel_1789097850598.png' },
  { name: 'Sports', image: '/category_sports_1789097865594.png' },
  { name: 'Education', image: '/category_education_1789097878894.png' },
  { name: 'Art & Craft', image: '/category_art_craft_1789098018543.png' },
  { name: 'Health', image: '/category_health_1789098033786.png' },
  { name: 'Toys', image: '/category_toys_1789098046989.png' },
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="premium-layout">
      <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="brand-logo" aria-label="ERARE home">
          <img src={logoUrl} alt="ERARE" />
        </a>
        
        <div className="nav-actions">
          <button className="notify-btn">Notify Me</button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="hero-section" id="top">
        <picture className="hero-bg" aria-hidden="true">
          <source media="(max-width: 700px)" srcSet={tallBackground} />
          <img src={wideBackground} alt="" />
        </picture>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="minimal-footer">
        <a href="#" aria-label="Instagram"><InstagramIcon /></a>
        <a href="#" aria-label="Facebook"><FacebookIcon /></a>
        <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
      </footer>

    </main>
  )
}
