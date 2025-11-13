"use client"

export function SkillsSection() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Django", "MongoDB","JWT","Socket.io"] },
    { category: "Mobile", items: ["React Native", "Nativewind","Appwrite"] },
    { category: "Desktop", items: ["Electron","Windows Forms", "Qt",".NET","SQLite","MySQL"] },
    { category: "Game Dev", items: ["Unreal Engine", "C++"] },
    { category: "Embedded", items: ["Arduino", "Raspberry Pi", "C++", "Micropython"] },
  ]

  return (
      <section id="skills" className="py-20 px-4 gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
                <div
                    key={skillGroup.category}
                    className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-accent mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-background/50 border border-primary/50 text-sm text-foreground/80"
                        >
                    {skill}
                  </span>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}
