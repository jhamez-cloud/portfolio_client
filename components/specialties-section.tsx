"use client"

import { SpecialtyCard } from "./specialty-card"

export function SpecialtiesSection() {
  const specialties = [
    {
      icon: "🌐",
      title: "Web Developer",
      description: "Building responsive, scalable web applications with modern frameworks",
      href: "/web-developer",
    },
    {
      icon: "📱",
      title: "Mobile Developer",
      description: "Creating intuitive mobile apps for iOS and Android platforms",
      href: "/mobile-developer",
    },
    {
      icon: "💻",
      title: "Desktop Developer",
      description: "Developing powerful desktop applications across all platforms",
      href: "/desktop-developer",
    },
    {
      icon: "🎮",
      title: "Game Developer",
      description: "Crafting engaging games and interactive experiences",
      href: "/game-developer",
    },
    {
      icon: "⚙️",
      title: "Embedded Systems",
      description: "Programming microcontrollers and IoT devices",
      href: "/embedded-systems",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">What I Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.title}
              icon={specialty.icon}
              title={specialty.title}
              description={specialty.description}
              href={specialty.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
