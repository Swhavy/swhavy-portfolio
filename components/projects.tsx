'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blurPlaceholders } from '@/lib/blur-placeholder'

const projects = [
  {
    id: 1,
    title: 'ArcFlow',
    description:
      'Automated receipt management system using OCR to scan, sort, and arrange receipts chronologically, exporting seamlessly into Word documents.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XSgxUpUchBovV7YPgnGMmO26CoLYz4.png',
    tech: ['Python', 'FastAPI', 'Tesseract OCR', 'Pillow'],
    impact: 'Reduced document processing time by 90%',
    link: 'https://receipt-sorter-eta.vercel.app/',
  },
  {
    id: 2,
    title: 'Grantera',
    description:
      'Grant and funding platform for emerging entrepreneurs. Integrated OpenAI models to score business proposals automatically before human review.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kqJC1jjYHkAMrY2ZI7j8Y1p0sDREIx.png',
    tech: ['React', 'Node.js', 'OpenAI API', 'Firebase', 'TailwindCSS'],
    impact: 'Enhanced review efficiency and transparency',
    link: 'https://grantera.org',
  },
  {
    id: 3,
    title: 'BloomGirls Initiative',
    description:
      'Social-impact platform empowering underprivileged girls in Nigeria through menstrual health education, dignity, and digital advocacy.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cs0swOTRqUO9cJ1H7UaiJpSS2hEJ37.png',
    tech: ['Next.js', 'Firebase', 'TailwindCSS'],
    impact: 'Digitally empowered hundreds of young girls nationwide',
    link: 'https://www.bloomgirlsfoundation.org/',
    partnership: true,
    partnerName: 'Fellow Developer',
  },
  {
    id: 4,
    title: 'Swhavy Collective Technologies',
    description:
      'Solar and renewable energy consultancy landing page with modern visual identity, motion design, and smooth responsiveness.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B4Pj4g8YqsnaKxUC4z3cVhQfZtTWGY.png',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    impact: 'Elevated brand presence and client trust',
    link: 'https://swhavycollectivetech.vercel.app/',
  },
  {
    id: 5,
    title: 'PayWaka',
    description:
      'Fintech platform simplifying payments, virtual accounts, and automated transfers across Africa. Implementing Firebase Cloud Functions and Flutterwave integration.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rPR75flyMYmA5e5Z7LTYKTduBTFDCS.png',
    tech: ['React', 'Firebase', 'Flutterwave API', 'TypeScript'],
    impact: 'Designed to revolutionize African payment automation',
    link: '#',
    inProgress: true,
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 md:px-6 bg-card/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-base md:text-lg">
            A selection of my recent work across fintech, AI, and social impact
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Image - Added blur placeholder for smooth loading */}
                <div
                  className={`relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden border border-accent/20 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL={
                      blurPlaceholders[
                        project.title.toLowerCase().replace(/\s+/g, '')
                      ] || blurPlaceholders.arcflow
                    }
                  />
                  {project.inProgress && (
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                      <span className="text-accent font-semibold text-sm md:text-base">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    {project.partnership && (
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full whitespace-nowrap w-fit">
                        👥 Partnership
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs md:text-sm text-foreground/50 mb-2">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 md:px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border">
                      <p className="text-xs md:text-sm text-accent font-semibold">
                        Impact: {project.impact}
                      </p>
                    </div>
                  </div>

                  {!project.inProgress && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors pt-2 text-sm md:text-base"
                    >
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
