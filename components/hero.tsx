"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { blurPlaceholders } from "@/lib/blur-placeholder"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-background via-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-4 md:space-y-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <p className="text-accent text-xs md:text-sm font-semibold tracking-wide">Welcome to my portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-accent">Swhavy</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
              A Software Developer and Creative Technologist building intelligent, scalable, and human-centered systems
              that power innovation across fintech, AI, and social impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="px-6 md:px-8 py-2.5 md:py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors text-center"
              >
                Learn More
              </a>
            </div>

            <div className="flex gap-4 md:gap-6 pt-4">
              <a
                href="https://github.com/Swhavy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/divine-anyanechi-36850726a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.927.758 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="mailto:divineanyanechi@gmail.com"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <svg className="w-5 md:w-6 h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image - Added blur placeholder for smooth image loading */}
          <div
            className={`relative h-64 sm:h-80 md:h-96 lg:h-full min-h-96 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-accent/20 bg-card/50">
              <Image
                src="/images/design-mode/swhavy-hero-landscape.jpg"
                alt="Swhavy - Software Developer and Creative Technologist"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL={blurPlaceholders["swhavy-hero"]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
