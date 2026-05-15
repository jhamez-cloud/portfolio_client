"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ExternalLink } from "lucide-react";
import {
  SiUnity,
  SiGodotengine,
  SiJavascript,
  SiCanvas,
  SiWebgl,
  SiShell,
} from "@icons-pack/react-simple-icons";

export default function GameDeveloperPage() {
  const projects = [
    {
      title: "Space Shooter",
      description: "Classic arcade-style space shooting game",
      tech: [
        { name: "Unity", icon: <SiUnity color="default" size={18} /> },
        { name: "C#", icon: <SiShell color="default" size={18} /> },
        { name: "Physics", icon: <SiShell color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Puzzle Adventure",
      description: "Brain-teasing puzzle platformer",
      tech: [
        { name: "Godot", icon: <SiGodotengine color="default" size={18} /> },
        { name: "GDScript", icon: <SiShell color="default" size={18} /> },
        { name: "Shaders", icon: <SiShell color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Browser Games",
      description: "Collection of casual HTML5 games",
      tech: [
        {
          name: "JavaScript",
          icon: <SiJavascript color="default" size={18} />,
        },
        { name: "Canvas", icon: <SiCanvas color="default" size={18} /> },
        { name: "WebGL", icon: <SiWebgl color="default" size={18} /> },
      ],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20 px-4 gradient-primary">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Game Developer
          </h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
            Creating engaging, entertaining game experiences across multiple
            platforms
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 px-2 py-1 text-xs bg-background/50 border border-primary/50 rounded"
                    >
                      {tech.icon}
                      {tech.name}
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
  );
}
