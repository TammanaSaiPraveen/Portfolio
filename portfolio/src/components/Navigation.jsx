"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHireModal, setShowHireModal] = useState(false)
  const [hireForm, setHireForm] = useState({
    name: "",
    email: "",
    company: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleHireSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Removed health check for simplicity in direct sending

      const response = await fetch('http://localhost:4000/hire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hireForm),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("Thank you for your interest! I\\'ll get back to you soon.")
        setHireForm({ name: "", email: "", company: "" })
        setTimeout(() => {
          setShowHireModal(false)
          setSubmitMessage("")
        }, 2000)
      } else {
        setSubmitMessage(data.message || "Error sending message. Please try again.")
      }
    } catch (error) {
      console.error('Error sending message:', error)
      if (error.message === 'Failed to fetch') {
        setSubmitMessage("Cannot connect to server. Please make sure the server is running.")
      } else {
        setSubmitMessage(error.message || "Error sending message. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full ${
          isScrolled ? "shadow-md" : ""
        }`}
        style={{ backgroundColor: 'var(--background-color)', transition: 'background-color 0.3s' }}
      >
        <nav className="flex h-20 items-center justify-between px-8">
          {/* Logo */}
          <a href="#home" className="font-bold text-2xl tracking-tight" style={{ color: 'var(--text-color)' }}>Portfolio</a>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium hover:text-gray-900 transition-colors"
                style={{ color: 'var(--text-color)' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setShowHireModal(true)}
              className="ml-2 bg-blue-600 text-white font-semibold rounded px-5 py-2 hover:bg-blue-700 transition-colors"
            >
              Hire Me
            </button>
          </div>
          {/* Mobile Nav Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {/* Mobile Nav Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40 animate-fadeIn">
              <div className="flex flex-col items-center gap-6 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-blue-600 transition-colors"
                    style={{ color: 'var(--text-color)' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => { setShowHireModal(true); setMenuOpen(false); }}
                  className="bg-blue-600 text-white font-semibold rounded px-8 py-2 hover:bg-blue-700 transition-colors"
                >
                  Hire Me
                </button>
              </div>
            </div>
          )}
        </nav>
      </motion.header>

      {/* Hire Me Modal */}
      {showHireModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="rounded-lg p-6 max-w-md w-full" style={{ backgroundColor: 'var(--card-background)', color: 'var(--text-color)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold" style={{ color: 'var(--text-color)' }}>Hire Me</h3>
              <button
                onClick={() => setShowHireModal(false)}
                className="hover:text-gray-700 dark:hover:text-gray-100"
                style={{ color: 'var(--text-light)' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleHireSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--text-color)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={hireForm.name}
                  onChange={(e) => setHireForm({ ...hireForm, name: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ backgroundColor: 'var(--card-background)', color: 'var(--text-color)' }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--text-color)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={hireForm.email}
                  onChange={(e) => setHireForm({ ...hireForm, email: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ backgroundColor: 'var(--card-background)', color: 'var(--text-color)' }}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--text-color)' }}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={hireForm.company}
                  onChange={(e) => setHireForm({ ...hireForm, company: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ backgroundColor: 'var(--card-background)', color: 'var(--text-color)' }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && (
                <p className="mt-4 text-center text-sm" style={{ color: 'var(--text-light)' }}>{submitMessage}</p>
              )}
              <div className="text-center mt-4">
                <p className="text-sm" style={{ color: 'var(--text-light)' }}>Or</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=saipraveentammana@gmail.com&su=Hire Request"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mt-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email directly
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
