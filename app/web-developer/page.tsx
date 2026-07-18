"use client";

import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiStripe,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiFirebase,
  SiChartdotjs,
  SiShell,
  SiAppwrite,
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

export default function WebDeveloperPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs color="default" size={18} /> },
        {
          name: "TypeScript",
          icon: <SiTypescript color="default" size={18} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss color="default" size={18} />,
        },
        { name: "Stripe", icon: <SiStripe color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "School Management System",
      description: "Analytics dashboard for data visualization",
      tech: [
        { name: "Next", icon: <SiNextdotjs color="default" size={18} /> },
        { name: "Node.js", icon: <SiNodedotjs color="default" size={18} /> },
        { name: "MongoDB", icon: <SiMongodb color="default" size={18} /> },
        { name: "Express.js", icon: <SiExpress color="default" size={18} /> },
        { name: "JWT", icon: <SiJsonwebtokens color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Social Media App",
      description: "Real-time social networking platform",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs color="default" size={18} /> },
        { name: "WebSocket", icon: <SiShell color="default" size={18} /> },
        { name: "MongoDB", icon: <SiMongodb color="default" size={18} /> },
        {
          name: "Socket.io",
          icon: <SiSocketdotio color="default" size={18} />,
        },
        { name: "JWT", icon: <SiJsonwebtokens color="default" size={18} /> },
        { name: "Express.js", icon: <SiExpress color="default" size={18} /> },
        { name: "Node.js", icon: <SiNodedotjs color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Recipe Web Application",
      description:
        "Interactive recipe finder with real-time search, detailed meal pages, and API-driven results.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs color="default" size={18} /> },
        { name: "Forkify", icon: <SiShell color="default" size={18} /> },
        { name: "Reactbit", icon: <SiShell color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Digital Banking Platform",
      description:
        "A user-friendly digital banking interface for managing accounts, payments," +
        " and transactions online.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs color="default" size={18} /> },
        { name: "Firebase", icon: <SiFirebase color="default" size={18} /> },
        { name: "MongoDB", icon: <SiMongodb color="default" size={18} /> },
        { name: "Chart.js", icon: <SiChartdotjs color="default" size={18} /> },
        { name: "Express.js", icon: <SiExpress color="default" size={18} /> },
        { name: "Node.js", icon: <SiNodedotjs color="default" size={18} /> },
      ],
      link: "#",
    },
    {
      title: "Kolox Hub",
      description:
        "A clean website for a printing press offering quick access to print" +
        " services, products, and customer support.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs color="default" size={18} /> },
        { name: "Firebase", icon: <SiFirebase color="default" size={18} /> },
        { name: "MongoDB", icon: <SiMongodb color="default" size={18} /> },
        { name: "Express.js", icon: <SiExpress color="default" size={18} /> },
        { name: "Node.js", icon: <SiNodedotjs color="default" size={18} /> },
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
            Web Developer
          </h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl">
            Specializing in modern, responsive web applications using
            cutting-edge technologies
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
