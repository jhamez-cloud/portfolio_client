"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface SpecialtyCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function SpecialtyCard({ icon, title, description, href }: SpecialtyCardProps) {
  return (
      <Link href={href}>
        <div className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
          <h3 className="text-2xl font-bold text-accent mb-3">{title}</h3>
          <p className="text-foreground/70 mb-4">{description}</p>
          <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
            View Projects
            <span className="ml-2">→</span>
          </div>
        </div>
      </Link>
  )
}
