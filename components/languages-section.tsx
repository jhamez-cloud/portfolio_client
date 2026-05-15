"use client"
import {SiCplusplus, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPython, SiTypescript} from '@icons-pack/react-simple-icons'

export function LanguagesSection() {
  const languages = [
    { name: "JavaScript", proficiency: 95,image:<SiJavascript color='default' size={50}/> },
    { name: "TypeScript", proficiency: 92,image:<SiTypescript color='default' size={50}/> },
    { name: "Python", proficiency: 70,image:<SiPython color='default' size={50}/> },
    { name: "C++", proficiency: 75,image:<SiCplusplus color='default' size={50}/> },
    { name: "MongoDB", proficiency: 78,image:<SiMongodb color='default' size={50}/>},
    { name: "MySQL", proficiency: 70,image:<SiMysql color='default' size={50}/> },
    { name: "HTML/CSS", proficiency: 95,image:<SiHtml5 color='default' size={50}/>},
  ]

  return (
      <section id="languages" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Programming Languages</h2>

          <div className="space-y-6">
            {languages.map((lang) => (
                <div key={lang.name} className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6 flex space-x-4">
                  <div>
                    {lang.image}
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">{lang.name}</span>
                    <span className="text-accent text-sm">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-linear-to-r from-primary to-accent h-full transition-all duration-1000"
                        style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}
