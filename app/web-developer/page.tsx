"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export default function WebDeveloperPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      link: "#",
    },
    {
      title: "School Management System",
      description: "Analytics dashboard for data visualization",
      tech: ["Next", "Node.js", "MongoDB", "Express.js","JWT",],
      link: "#",
    },
    {
      title: "Social Media App",
      description: "Real-time social networking platform",
      tech: ["Next.js", "WebSocket", "MongoDB", "Socket.io","JWT","Express.js","Node.js"],
      link: "#",
    },
    {
      title:"Recipe Web Application",
      description:"Interactive recipe finder with real-time search, detailed meal pages, and API-driven results.",
      tech:["Next.js","Forkify","Reactbit"],
      link:"#"
    },
    {
      title: "Digital Banking Platform",
      description: "A user-friendly digital banking interface for managing accounts, payments," +
          " and transactions online.",
      tech:["Next.js","Firebase","MongoDB","Chart.js","Express.js","Node.js"],
      link:"#"
    },
    {
      title: "Kolox Hub",
      description: "A clean website for a printing press offering quick access to print" +
          " services, products, and customer support.",
      tech:["Next.js","Firebase","MongoDB","Express.js","Node.js"],
      link:"#"
    }
  ]

  return (
      <main className="min-h-screen">
        <Navbar />
        <section className="py-20 px-4 gradient-primary">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Web Developer</h1>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
              Specializing in modern, responsive web applications using cutting-edge technologies
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
