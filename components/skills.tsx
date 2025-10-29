"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "FastAPI", "Firebase", "Cloud Functions", "REST APIs"],
  },
  {
    category: "AI & Automation",
    skills: ["OpenAI API", "OCR (Tesseract)", "Intelligent Scoring", "Process Automation"],
  },
  {
    category: "Fintech",
    skills: ["Flutterwave", "Monnify", "Paystack", "Payment Integration", "Virtual Accounts"],
  },
  {
    category: "Databases",
    skills: ["Firebase", "Firestore", "PostgreSQL", "Real-time Sync"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Docker", "AWS"],
  },
]

export function Skills() {
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
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-foreground/60 text-base md:text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`p-4 md:p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-base md:text-lg font-semibold text-accent mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground/70 flex items-center gap-2 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
