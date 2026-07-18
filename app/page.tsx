"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("@/components/navbar").then((mod) => mod.Navbar),
  {
    ssr: false,
    loading: () => <div className="h-16 border-b border-border/50" />,
  },
);

const HeroSection = dynamic(
  () => import("@/components/hero-section").then((mod) => mod.HeroSection),
  {
    ssr: false,
    loading: () => <div className="min-h-screen" />,
  },
);

const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => mod.AboutSection),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  },
);

const SkillsSection = dynamic(
  () => import("@/components/skills-section").then((mod) => mod.SkillsSection),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  },
);

const LanguagesSection = dynamic(
  () =>
    import("@/components/languages-section").then(
      (mod) => mod.LanguagesSection,
    ),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  },
);

const CounterSection = dynamic(
  () =>
    import("@/components/counter-section").then((mod) => mod.CounterSection),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  },
);

const SpecialtiesSection = dynamic(
  () =>
    import("@/components/specialties-section").then(
      (mod) => mod.SpecialtiesSection,
    ),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  },
);

const EducationSection = dynamic(
  () =>
    import("@/components/education-section").then(
      (mod) => mod.EducationSection,
    ),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  },
);

const AchievementsSection = dynamic(
  () =>
    import("@/components/achievements-section").then(
      (mod) => mod.AchievementsSection,
    ),
  {
    ssr: false,
    loading: () => <div className="h-64" />,
  },
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  {
    ssr: false,
    loading: () => <div className="h-40" />,
  },
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <LanguagesSection />
      <CounterSection />
      <SpecialtiesSection />
      <AchievementsSection />
      <Footer />
    </main>
  );
}
