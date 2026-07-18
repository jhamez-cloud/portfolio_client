"use client";

import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { ImagePreviewModal } from "@/components/image-preview-modal";

const experiences = [
  {
    title: "Devtown Ambassador",
    meta: "Ghana Communication Technology University",
    description:
      "Represented the Devtown community on campus, helping students discover opportunities in modern development and digital learning.",
    icon: Sparkles,
  },
  {
    title: "Internship Completion",
    meta: "Multiple practical engagements",
    description:
      "Completed internships that strengthened my experience in development workflows, collaboration, and delivering user-focused solutions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Project Portfolio",
    meta: "Web, mobile, desktop, and embedded systems",
    description:
      "Built and contributed to a range of projects that span frontend applications, product interfaces, and technical problem-solving.",
    icon: GraduationCap,
  },
];

const projects = [
  "Responsive web applications with polished UI systems",
  "Cross-platform mobile and desktop software experiences",
  "Game and embedded systems projects with a strong focus on usability",
  "Collaborative learning initiatives and community technology impact",
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl rounded-4xl border border-border/60 bg-card/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl md:p-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Achievements & Experience
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
              Growth backed by real opportunities and measurable impact.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-foreground/70 md:text-base">
            Beyond the classroom, I have embraced leadership, learning, and
            hands-on delivery, creating a foundation for long-term impact in the
            tech industry.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-border/60 bg-background/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                          {index === 0
                            ? "Leadership"
                            : index === 1
                              ? "Experience"
                              : "Projects"}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-accent">{item.meta}</p>
                      <p className="mt-3 text-sm leading-7 text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-dashed border-border/70 bg-linear-to-br from-primary/10 via-background to-accent/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accent/15 p-3 text-accent">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Recognition
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  Certificate Spotlight
                </h3>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-background/70 p-4">
              <ImagePreviewModal
                src="/images/devtown_campus_ambassador.webp"
                alt="Devtown ambassador certificate"
              >
                <div className="relative h-72 overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-primary/20 to-accent/10 sm:h-80">
                  <Image
                    src="/images/devtown_campus_ambassador.webp"
                    alt="Devtown ambassador certificate"
                    fill
                    className="object-cover"
                  />
                </div>
              </ImagePreviewModal>
              <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-background/70 p-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Ambassador Certificate
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Devtown • GCTU
                  </p>
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold text-primary">
                  Featured
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-foreground/70">
              {projects.map((project) => (
                <li key={project} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
