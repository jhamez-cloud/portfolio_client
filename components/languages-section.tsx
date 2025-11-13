"use client"

export function LanguagesSection() {
  const languages = [
    { name: "JavaScript", proficiency: 95 },
    { name: "TypeScript", proficiency: 92 },
    { name: "Python", proficiency: 50 },
    { name: "C++", proficiency: 75 },
    { name: "MongoDB", proficiency: 78 },
    { name: "SQL", proficiency: 70 },
    { name: "HTML/CSS", proficiency: 95 },
  ]

  return (
      <section id="languages" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Programming Languages</h2>

          <div className="space-y-6">
            {languages.map((lang) => (
                <div key={lang.name} className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">{lang.name}</span>
                    <span className="text-accent text-sm">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-1000"
                        style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}
