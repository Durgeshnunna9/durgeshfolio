const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            👨‍💻 <span className="text-gradient">About Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 space-y-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-glow">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl md:text-8xl">
                    👨‍💻
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm a developer who loves turning ideas into interactive, real-world applications. 
                  Currently learning full-stack to build end-to-end solutions.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Passionate about clean UI, smooth UX, and performance optimization. I believe great 
                  design is invisible – it just works.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Outside of code, I explore new tech, design patterns, and occasionally write about 
                  what I learn. Always excited to collaborate on innovative projects!
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-semibold text-center mb-6 text-gradient">My Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-primary mb-2">Present</h4>
                  <p className="text-sm text-muted-foreground">Frontend Developer building responsive web apps</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-colors">
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold text-secondary mb-2">Learning</h4>
                  <p className="text-sm text-muted-foreground">Transitioning to Full Stack development</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors">
                  <div className="text-3xl mb-2">💫</div>
                  <h4 className="font-semibold text-accent mb-2">Future</h4>
                  <p className="text-sm text-muted-foreground">Building complete end-to-end solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
