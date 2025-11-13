"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { LanguagesSection } from "@/components/languages-section"
import { CounterSection } from "@/components/counter-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LanguagesSection />
      <CounterSection />
      <SpecialtiesSection />
      <Footer />
    </main>
  )
}
