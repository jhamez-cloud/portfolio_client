"use client"

import Image from "next/image"

export function HeroSection() {
  return (
      <section id="home" className="min-h-screen flex items-center justify-center gradient-primary py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Profile Picture - Top */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-4 ring-primary/30 hover:ring-accent transition-all shadow-2xl">
                <Image src="/images/profile_pic.jpg" alt="Profile Picture" fill className="object-cover" priority />
              </div>
            </div>

            {/* Text Content - Bottom */}
            <div className="text-center">
              <div className="mb-8 inline-block">
                <div className="glow rounded-full p-1 bg-gradient-to-r from-primary/40 to-accent/40">
                  <div className="px-6 py-3 rounded-full bg-background/50 border border-border/50">
                    <span className="text-lg font-bold gradient-text">Welcome to My Portfolio</span>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text text-balance">
                Full Stack Developer
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 mb-8 text-balance">
                Building beautiful, performant applications across web, mobile, desktop, games, and embedded systems
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary cursor-pointer text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  View My Work
                </button>
                <button className="px-8 py-3 bg-background/40 cursor-pointer backdrop-blur-md border border-border/50 rounded-lg font-semibold hover:bg-background/60 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
