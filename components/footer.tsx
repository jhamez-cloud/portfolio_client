"use client";

import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border border-border/50 border-t bg-background/40 px-4 py-12 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-foreground/70 text-sm">
              Creating exceptional digital experiences across all platforms
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-accent transition-colors"
                >
                  jameskekeli12@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+233555530670"
                  className="hover:text-accent transition-colors"
                >
                  +233 5555 30670
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-accent transition-colors"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>© 2025 James Kekeli Gbafa. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
