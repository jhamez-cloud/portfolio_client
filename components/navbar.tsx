"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {href:"/",label: "Overview"},
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#languages", label: "Languages"}
  ]

  return (
      <nav className="sticky top-0 z-50 bg-background/40 backdrop-blur-md border border-border/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            <Link href="/" className="flex items-center gap-3 space-x-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-accent transition-all">
                <Image src="/images/profile_pic.jpg" alt="Profile" fill className="object-cover" />
              </div>
              <span className="hidden sm:block text-2xl font-bold gradient-text">Portfolio</span>
              <span className="sm:hidden text-xl font-bold gradient-text">PF</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {links.map((link) => (
                  <a
                      key={link.href}
                      href={link.href}
                      className="text-foreground/80 hover:text-accent transition-colors font-medium active:underline"
                  >
                    {link.label}
                  </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
              <div className="md:hidden pb-4 space-y-2">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-foreground/80 hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                ))}
              </div>
          )}
        </div>
      </nav>
  )
}
