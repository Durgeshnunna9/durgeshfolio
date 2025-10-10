import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "FMAE WebApp",
    description: "A modern web application showcasing advanced frontend techniques and responsive design.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://fmae-webapp.netlify.app",
    codeUrl: "#"
  },
  {
    name: "Sansan Group",
    description: "Professional business website with smooth animations and elegant UI/UX.",
    tech: ["React", "CSS3", "Vite"],
    liveUrl: "https://sansangroup.netlify.app",
    codeUrl: "#"
  },
  {
    name: "MagFlip",
    description: "Interactive magazine-style application with flip animations and dynamic content.",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://magflip.netlify.app",
    codeUrl: "#"
  },
  {
    name: "Littone",
    description: "Clean and minimal portfolio website with focus on typography and spacing.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://littone.netlify.app",
    codeUrl: "#"
  },
  {
    name: "PromptAce",
    description: "AI prompt management tool with modern interface and real-time features.",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://promptace.netlify.app",
    codeUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🧠 <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of web applications I've built, showcasing modern design and clean code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass hover:scale-105 transition-all duration-300 group border-border/50 hover:border-primary/50 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-gradient transition-all">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
