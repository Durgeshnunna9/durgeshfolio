import { Badge } from "@/components/ui/badge";

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Supabase",
    "Firebase"
  ],
  tools: [
    "Git",
    "GitHub",
    "Figma",
    "VS Code",
    "Netlify",
    "Postman"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ⚡ <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
              <span className="text-3xl">💻</span>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-secondary flex items-center gap-2">
              <span className="text-3xl">🔧</span>
              Backend <span className="text-sm text-muted-foreground">(Learning)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-semibold text-accent flex items-center gap-2">
              <span className="text-3xl">🛠️</span>
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
