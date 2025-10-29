"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Navigation - Improved mobile responsiveness */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About</h2>
            <nav className="space-y-3">
              <a
                href="#about"
                className="block text-accent font-semibold hover:text-accent/80 transition-colors text-sm md:text-base"
              >
                Background
              </a>
              <a
                href="#skills"
                className="block text-foreground/60 hover:text-accent transition-colors text-sm md:text-base"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-foreground/60 hover:text-accent transition-colors text-sm md:text-base"
              >
                Projects
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div
            className={`md:col-span-2 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              I'm a passionate Software Developer and Creative Technologist with a deep interest in building
              intelligent, scalable, and user-centric software solutions. I specialize in crafting systems that merge
              technology, design, and business strategy — from AI-integrated automation tools to fintech platforms and
              social-impact software.
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              As a developer with a business mindset and engineering background, I focus on creating products that are
              not just functional, but also purposeful, efficient, and transformative. My expertise spans full-stack
              development, AI & automation systems, fintech integrations, and modern frontend engineering.
            </p>

            <div className="pt-6 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Core Competencies</h3>
              <ul className="space-y-2 text-foreground/70 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  <span>Full Stack Development, API Integrations, Cloud Functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  <span>AI & Automation Systems (OpenAI API, OCR, Intelligent Scoring)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  <span>Fintech & Payment Integrations (Flutterwave, Monnify, Paystack)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  <span>Frontend/UI Engineering (React, Next.js, Tailwind, TypeScript)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  <span>Backend & Database Systems (Firebase, Node.js, FastAPI)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
