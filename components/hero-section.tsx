"use client";

import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 gradient-primary"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.2),transparent_35%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] blur-3xl md:block" />
      <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 md:gap-12">
        <div className="flex justify-center">
          <div className="group relative h-48 w-48 overflow-hidden rounded-4xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] ring-4 ring-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:ring-accent sm:h-64 sm:w-64 md:h-80 md:w-80">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-accent/20 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute -inset-1 rounded-4xl border border-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Image
              src="/images/profile_pic.jpg"
              alt="Profile Picture"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/55 px-5 py-3 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/80">
              Welcome to My Portfolio
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
            <span className="gradient-text">Software Developer</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-foreground/70 md:text-xl">
            I build polished digital experiences across web, mobile, desktop,
            games, and embedded systems with a focus on performance and
            thoughtful design.
          </p>

          <div className="mb-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#achievements"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:jameskekeli12@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-border/60 bg-background/45 px-7 py-3 font-semibold text-foreground/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/70"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </div>

          <a
            href="/JamesKekeliGbafa_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
