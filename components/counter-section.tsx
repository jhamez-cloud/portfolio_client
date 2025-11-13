"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  label: string
  icon: React.ReactNode
}

function Counter({ end, label, icon }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true
            const duration = 5000
            const steps = 60
            const increment = end / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        },
        { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end])

  return (
      <div
          ref={ref}
          className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow glow"
      >
        <div className="text-accent mb-3">{icon}</div>
        <div className="text-5xl font-bold gradient-text mb-2">{count}+</div>
        <p className="text-foreground/70 font-medium">{label}</p>
      </div>
  )
}

export function CounterSection() {
  return (
      <section className="py-20 px-4 gradient-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Fields Of Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter end={50} label="Web Projects" icon={<span className="text-4xl">🌐</span>} />
            <Counter end={25} label="Mobile Apps" icon={<span className="text-4xl">📱</span>} />
            <Counter end={15} label="Desktop Apps" icon={<span className="text-4xl">💻</span>} />
            <Counter end={8} label="Games Built" icon={<span className="text-4xl">🎮</span>} />
          </div>
        </div>
      </section>
  )
}
