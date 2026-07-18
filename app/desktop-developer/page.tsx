"use client";

import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import {
  SiCplusplus,
  SiDotnet,
  SiMysql,
  SiSqlite,
} from "@icons-pack/react-simple-icons";

const Navbar = dynamic(
  () => import("@/components/navbar").then((mod) => mod.Navbar),
  {
    ssr: false,
    loading: () => <div className="h-16 border-b border-border/50" />,
  },
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  {
    ssr: false,
    loading: () => <div className="h-40" />,
  },
);

export default function DesktopDeveloperPage() {
  const projects = [
    {
      title: "Scientific Calculator",
      description:
        "Advanced desktop calculator with theme changing capabilities",
      tech: [
        { name: "C++", icon: <SiCplusplus color="default" size={18} /> },
        { name: ".NET", icon: <SiDotnet color="default" size={18} /> },
        { name: "Windows Forms", icon: <SiDotnet color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Student Information Portal",
      description:
        "Windows desktop application for managing students data from an admin panel" +
        " whiles providing student information to students",
      tech: [
        {
          name: "Microsoft SQL Server",
          icon: <SiMysql color="default" size={18} />,
        },
        { name: "SQLite", icon: <SiSqlite color="default" size={18} /> },
        { name: ".NET", icon: <SiDotnet color="default" size={18} /> },
        { name: "C++", icon: <SiCplusplus color="default" size={18} /> },
        { name: "Windows Forms", icon: <SiDotnet color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Authentication System",
      description:
        "Desktop application that provides user authentication or authorization at a" +
        " workplace",
      tech: [
        { name: "C++", icon: <SiCplusplus color="default" size={18} /> },
        { name: ".NET", icon: <SiDotnet color="default" size={18} /> },
        { name: "Windows Forms", icon: <SiDotnet color="default" size={18} /> },
        { name: "SQL", icon: <SiMysql color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Stack Data Structure Emulator",
      description:
        "Desktop application that emulates a stack data structure and its operations" +
        " through an interactive user interface",
      tech: [
        { name: "SQL", icon: <SiMysql color="default" size={18} /> },
        { name: ".NET", icon: <SiDotnet color="default" size={18} /> },
        { name: "C++", icon: <SiCplusplus color="default" size={18} /> },
        { name: "Windows Forms", icon: <SiDotnet color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Church Projection App",
      description:
        "Desktop application that projects Bible verses from 7 different versions" +
        " spanning both old and new testament books. The app also provides multimedia" +
        " functionalities such as poster,lyrics and video projections.",
      tech: [
        {
          name: "Microsoft SQL Server",
          icon: <SiMysql color="default" size={18} />,
        },
        { name: "SQLite", icon: <SiSqlite color="default" size={18} /> },
        { name: "C++", icon: <SiCplusplus color="default" size={18} /> },
        { name: ".NET", icon: <SiDotnet color="default" size={18} /> },
        { name: "Windows Forms", icon: <SiDotnet color="default" size={18} /> },
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
            Desktop Developer
          </h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
            Building powerful, native-like desktop applications across all
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
