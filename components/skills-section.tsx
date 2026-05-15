"use client";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiJsonwebtokens,
  SiSocketdotio,
  SiAppwrite,
  SiElectron,
  SiQt,
  SiDotnet,
  SiSqlite,
  SiMysql,
  SiUnrealengine,
  SiCplusplus,
  SiArduino,
  SiRaspberrypi,
  SiMicropython,
} from "@icons-pack/react-simple-icons";

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact color="default" size={18} /> },
        {
          name: "TypeScript",
          icon: <SiTypescript color="default" size={18} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss color="default" size={18} />,
        },
        { name: "Next.js", icon: <SiNextdotjs color="white" size={18} /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs color="default" size={18} /> },
        { name: "Express", icon: <SiExpress color="#F7DF1E" size={18} /> },
        { name: "Django", icon: <SiDjango color="default" size={18} /> },
        { name: "MongoDB", icon: <SiMongodb color="default" size={18} /> },
        { name: "JWT", icon: <SiJsonwebtokens color="white" size={18} /> },
        { name: "Socket.io", icon: <SiSocketdotio color="white" size={18} /> },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "React Native", icon: <SiReact color="default" size={18} /> },
        {
          name: "Nativewind",
          icon: <SiTailwindcss color="default" size={18} />,
        },
        { name: "Appwrite", icon: <SiAppwrite color="default" size={18} /> },
      ],
    },
    {
      category: "Desktop",
      items: [
        { name: "Electron", icon: <SiElectron color="default" size={18} /> },
        { name: "Windows Forms", icon: <SiDotnet color="default" size={18} /> },
        { name: "Qt", icon: <SiQt color="default" size={18} /> },
        { name: ".NET", icon: <SiDotnet color="default" size={18} /> },
        { name: "SQLite", icon: <SiSqlite color="default" size={18} /> },
        { name: "MySQL", icon: <SiMysql color="default" size={18} /> },
      ],
    },
    {
      category: "Game Dev",
      items: [
        {
          name: "Unreal Engine",
          icon: <SiUnrealengine color="blue" size={18} />,
        },
        { name: "C++", icon: <SiCplusplus color="default" size={18} /> },
      ],
    },
    {
      category: "Embedded",
      items: [
        { name: "Arduino", icon: <SiArduino color="default" size={18} /> },
        {
          name: "Raspberry Pi",
          icon: <SiRaspberrypi color="default" size={18} />,
        },
        { name: "C++", icon: <SiCplusplus color="default" size={18} /> },
        {
          name: "Micropython",
          icon: <SiMicropython color="default" size={18} />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-primary/50 text-sm text-foreground/80"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
