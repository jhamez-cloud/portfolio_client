"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export default function EmbeddedSystemsPage() {
  const projects = [
    {
      title: "Smart Home Controller",
      description: "IoT device controller with mobile integration",
      tech: ["Arduino", "C++", "MQTT"],
      link: "#",
    },
    {
      title: "Weather Station",
      description: "Networked weather monitoring system",
      tech: ["Raspberry Pi", "Python", "Sensors"],
      link: "#",
    },
    {
      title: "Robot Arm",
      description: "Programmable robotic arm with servo control",
      tech: ["Arduino", "Servo Motors", "C++"],
      link: "#",
    },
  ]

  return (
      <main className="min-h-screen">
        <Navbar />
        <section className="py-20 px-4 gradient-primary">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Embedded Systems</h1>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
              Programming microcontrollers and IoT devices for real-world applications
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                  <div
                      key={project.title}
                      className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:shadow-xl transition-all"
                  >
                    <h3 className="text-xl font-semibold text-accent mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs bg-background/50 border border-primary/50 rounded">
                      {tech}
                    </span>
                      ))}
                    </div>
                    <a
                        href={project.link}
                        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
  )
}
