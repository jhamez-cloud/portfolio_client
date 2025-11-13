"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export default function MobileDeveloperPage() {
  const projects = [
    {
      title: "Fitness Tracker",
      description: "Health monitoring app with wearable integration",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with forecasts",
      tech: ["React Native", "REST API", "Getx"],
      link: "#",
    },
    {
      title: "Todo Manager",
      description: "Cross-platform task management application",
      tech: ["React Native", "AsyncStorage","Nativewind"],
      link: "#",
    },
    {
      title: "XianFlix",
      description: "A mobile app for discovering, streaming, and tracking movies with real-time data and personalized recommendations.",
      tech:["React Native","TMDB","Appwrite","Nativewind"],
      link: "#",
    },
    {
      title:"Xian Library",
      description: "A complete ebook platform with fast book search, in-app reading mode," +
          " downloadable content, bookmarks, and offline access.",
      tech: ["React Native","Async Storage","Library API","Nativewind"],
      link: "#",
    },
    {
      title: "XianCalc",
      description: "A sleek, theme-enabled calculator offering light/dark modes, vibrant color" +
          " presets, and responsive calculation features.",
      tech: ["React Native","Nativewind"],
      link: "#",
    }
  ]

  return (
      <main className="min-h-screen">
        <Navbar />
        <section className="py-20 px-4 gradient-primary">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Mobile Developer</h1>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
              Creating intuitive mobile applications for iOS and Android platforms
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
