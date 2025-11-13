"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export default function DesktopDeveloperPage() {
  const projects = [
    {
      title: "Scientific Calculator",
      description: "Advanced desktop calculator with theme changing capabilities",
      tech: ["C++", ".NET", "Windows Forms"],
      link: "#",
    },
    {
      title: "Student Information Portal",
      description: "Windows desktop application for managing students data from an admin panel" +
          " whiles providing student information to students",
      tech: ["Microsoft SQL Server", "SQLite", ".NET","C++","Windows Forms"],
      link: "#",
    },
    {
      title: "Authentication System",
      description: "Desktop application that provides user authentication or authorization at a" +
          " workplace",
      tech: ["C++", ".NET", "Windows Forms","SQL"],
      link: "#",
    },
    {
      title: "Stack Data Structure Emulator",
      description: "Desktop application that emulates a stack data structure and its operations" +
          " through an interactive user interface",
      tech: ["SQL",".NET","C++","Windows Forms"],
      link: "#",
    },
    {
      title: "Church Projection App",
      description: "Desktop application that projects Bible verses from 7 different versions" +
          " spanning both old and new testament books. The app also provides multimedia" +
          " functionalities such as poster,lyrics and video projections.",
      tech: ["Microsoft SQL Server","SQLite","C++",".NET","Windows Forms"],
      link: "#",
    }
  ]

  return (
      <main className="min-h-screen">
        <Navbar />
        <section className="py-20 px-4 gradient-primary">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Desktop Developer</h1>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
              Building powerful, native-like desktop applications across all platforms
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
