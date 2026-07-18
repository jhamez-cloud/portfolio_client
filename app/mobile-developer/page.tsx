"use client";

import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import {
  SiReact,
  SiFirebase,
  SiRedux,
  SiGetx,
  SiShell,
  SiAppwrite,
  SiTailwindcss,
  SiApollographql,
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

export default function MobileDeveloperPage() {
  const projects = [
    {
      title: "Fitness Tracker",
      description: "Health monitoring app with wearable integration",
      tech: [
        { name: "React Native", icon: <SiReact color="default" size={18} /> },
        { name: "Firebase", icon: <SiFirebase color="default" size={18} /> },
        { name: "Redux", icon: <SiRedux color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with forecasts",
      tech: [
        { name: "React Native", icon: <SiReact color="default" size={18} /> },
        { name: "REST API", icon: <SiShell color="default" size={18} /> },
        { name: "Getx", icon: <SiGetx color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Todo Manager",
      description: "Cross-platform task management application",
      tech: [
        { name: "React Native", icon: <SiReact color="default" size={18} /> },
        { name: "AsyncStorage", icon: <SiShell color="default" size={18} /> },
        {
          name: "Nativewind",
          icon: <SiTailwindcss color="default" size={18} />,
        },
      ],
      link: "#",
    },
    {
      title: "XianFlix",
      description:
        "A mobile app for discovering, streaming, and tracking movies with real-time data and personalized recommendations.",
      tech: [
        { name: "React Native", icon: <SiReact color="default" size={18} /> },
        { name: "TMDB", icon: <SiShell color="default" size={18} /> },
        { name: "Appwrite", icon: <SiAppwrite color="default" size={18} /> },
        {
          name: "Nativewind",
          icon: <SiTailwindcss color="default" size={18} />,
        },
      ],
      link: "#",
    },
    {
      title: "Xian Library",
      description:
        "A complete ebook platform with fast book search, in-app reading mode," +
        " downloadable content, bookmarks, and offline access.",
      tech: [
        { name: "React Native", icon: <SiReact color="default" size={18} /> },
        { name: "Async Storage", icon: <SiShell color="default" size={18} /> },
        {
          name: "Library API",
          icon: <SiApollographql color="default" size={18} />,
        },
        {
          name: "Nativewind",
          icon: <SiTailwindcss color="default" size={18} />,
        },
      ],
      link: "#",
    },
    {
      title: "XianCalc",
      description:
        "A sleek, theme-enabled calculator offering light/dark modes, vibrant color" +
        " presets, and responsive calculation features.",
      tech: [
        { name: "React Native", icon: <SiReact color="default" size={18} /> },
        {
          name: "Nativewind",
          icon: <SiTailwindcss color="default" size={18} />,
        },
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
            Mobile Developer
          </h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
            Creating intuitive mobile applications for iOS and Android platforms
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
