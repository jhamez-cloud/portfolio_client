"use client"

export function AboutSection() {
  return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">About Me</h2>

          <div className="bg-background/40 backdrop-blur-md border border-border/50 rounded-lg p-6 mb-8">
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              My name is James Kekeli Gbafa.
              I'm a passionate full-stack developer with expertise in creating digital experiences across multiple
              platforms. With a foundation in web technologies, I've expanded my skills to mobile development, desktop
              applications, game development, and embedded systems programming.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My approach combines clean code, performance optimization, and user-centered design principles to deliver
              solutions that not only look great but also function seamlessly. I'm constantly learning and exploring new
              technologies to stay at the forefront of development.
            </p>
          </div>
        </div>
      </section>
  )
}
