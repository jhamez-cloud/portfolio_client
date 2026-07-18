"use client";

import Image from "next/image";
import { ImagePreviewModal } from "@/components/image-preview-modal";

const universityItems = [
  {
    period: "2022 — 2023",
    stage: "Professional Training",
    title: "GCOM IT Academy",
    institution: "Network Engineering and Administration",
    description:
      "I pursued hands-on training in networking concepts, system administration, and IT support. The programme sharpened my technical confidence and gave me practical exposure to infrastructure and connectivity.",
    highlights: [
      "Learned networking fundamentals, cabling, and troubleshooting",
      "Explored administration workflows and practical IT operations",
      "Developed a strong interest in building reliable digital systems",
    ],
    certificateLabel: "Certificate in Network Engineering and Administration",
    certificateMeta: "Practical Training • GCOM Institute",
    placeholder: false,
    image: "/images/GCOM_IT_Academy_network_eng_certificate.webp",
  },
  {
    period: "2024 — Present",
    stage: "University",
    title: "Ghana Communication Technology University",
    institution: "BSc. Computer Science • Level 300",
    description:
      "I am currently advancing my academic journey in computer science at GCTU, where I continue to deepen my understanding of software development, systems, and emerging technologies.",
    highlights: [
      "Studying core concepts in computer science and software engineering",
      "Applying theoretical knowledge to practical innovation and development",
      "Preparing for impactful contributions in the tech ecosystem",
    ],
    certificateLabel: "Academic Progress",
    certificateMeta: "Level 300 • BSc Computer Science",
    placeholder: true,
  },
];

const onlineCourseItems = [
  {
    period: "2023 — 2025",
    stage: "Online Learning",
    title: "Online Courses",
    institution: "Responsive Web Design • JavaScript Algorithms • MERN Stack",
    description:
      "I complemented my formal training with online learning in modern web technologies. These courses helped me strengthen my frontend, backend, and full-stack development skills with real project focus.",
    highlights: [
      "Responsive Web Design — freeCodeCamp",
      "JavaScript Algorithms and Data Structures — freeCodeCamp",
      "MERN Stack Development — Devtown",
    ],
    certificateLabel: "Course Completion Records",
    certificateMeta: "Online Learning • Certificates Available",
    courses: [
      {
        title: "MongoDB Course",
        provider: "Devtown • Google & Microsoft",
        images: [
          "/images/mongodb_course_devtown_google_certificate.webp",
          "/images/mongodb_course_devtown_microsoft_certificate.webp",
        ],
      },
      {
        title: "Responsive Web Design",
        provider: "freeCodeCamp",
        image: "/images/responsive_web_design_freecodecamp.webp",
      },
      {
        title: "JavaScript Data Structures and Algorithms",
        provider: "freeCodeCamp",
        image: "/images/javascript_algorithms_and datastructures.webp",
      },
      {
        title: "MERN Stack Development",
        provider: "Devtown",
        image: "/images/mernstack_devtown_completion_certification.webp",
      },
    ],
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-4 py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_40%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Education & Growth
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
              A journey shaped by curiosity, discipline, and practical learning.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-foreground/70 md:text-base">
            Every stage of my education has strengthened my ability to solve
            real-world problems and build meaningful digital products.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Universities & Training
              </h3>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {universityItems.map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-transparent to-accent/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                      {item.stage}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {item.institution}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-foreground/70">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.placeholder ? (
                    <div className="mt-6 rounded-2xl border border-dashed border-border/70 bg-background/40 p-4">
                      <div className="flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-primary/20 via-background to-accent/10 p-4 text-center text-sm text-muted-foreground">
                        YET TO COMPLETE
                      </div>
                    </div>
                  ) : item.image ? (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-primary/20 via-background to-accent/10 p-3">
                      <ImagePreviewModal
                        src={item.image}
                        alt={`${item.title} certificate preview`}
                      >
                        <div className="relative h-64 overflow-hidden rounded-xl border border-white/10 bg-background/70">
                          <Image
                            src={item.image}
                            alt={`${item.title} certificate preview`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </ImagePreviewModal>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Online Courses
              </h3>
            </div>
            <div className="grid gap-6">
              {onlineCourseItems.map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[28px] border border-border/60 bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-transparent to-accent/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                      {item.stage}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {item.institution}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-foreground/70">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-dashed border-border/70 bg-background/40 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      Certificate Preview
                    </p>
                    <div className="mt-3 grid gap-4 lg:grid-cols-2">
                      {item.courses.map((course) => (
                        <div
                          key={course.title}
                          className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-primary/20 via-background to-accent/10 p-3"
                        >
                          <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-background/70 p-3">
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                {course.title}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {course.provider}
                              </p>
                            </div>
                            <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold text-primary">
                              Verified
                            </span>
                          </div>

                          {course.images ? (
                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                              {course.images.map((image) => (
                                <ImagePreviewModal
                                  key={image}
                                  src={image}
                                  alt={`${course.title} certificate`}
                                >
                                  <div className="relative h-56 overflow-hidden rounded-xl border border-white/10 bg-background/70 sm:h-64">
                                    <Image
                                      src={image}
                                      alt={`${course.title} certificate`}
                                      fill
                                      className="object-contain p-2"
                                    />
                                  </div>
                                </ImagePreviewModal>
                              ))}
                            </div>
                          ) : course.image ? (
                            <ImagePreviewModal
                              src={course.image}
                              alt={`${course.title} certificate`}
                            >
                              <div className="mt-3 relative h-56 overflow-hidden rounded-xl border border-white/10 bg-background/70 sm:h-64">
                                <Image
                                  src={course.image}
                                  alt={`${course.title} certificate`}
                                  fill
                                  className="object-contain p-2"
                                />
                              </div>
                            </ImagePreviewModal>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
