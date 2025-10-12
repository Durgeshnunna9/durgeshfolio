import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus("");

  try {
    const sendToYou = await emailjs.send(
      "service_09f0hwf",   // ← replace with your EmailJS Service ID
      "template_0bqz2qb",  // ← replace with your EmailJS Template ID
      
      {
        name: formData.name,      // ← from your form data
        email: formData.email,    // ← from your form data
        message: formData.message,     // ← from your form data
      },
      "Ob5gnnsKx8iB2ZuFZ"     // ← replace with your EmailJS Public Key
    );

    if (sendToYou.status !== 200) {
      
    }

    const autoReply = await emailjs.send(
      "service_09f0hwf",   // ← replace with your EmailJS Service ID
      "template_pcp59bs",  // ← replace with your EmailJS Template ID
      {
        name: formData.name,      // ← from your form data
        email: formData.email,    // ← from your form data
      },
      "Ob5gnnsKx8iB2ZuFZ"     // ← replace with your EmailJS Public Key
    );
    if (autoReply.status !== 200) {
      throw new Error("❌ Failed to send auto-reply. Please try again.");
    }

    setStatus("✅ Message sent successfully! Auto-reply sent.");
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    console.error("EmailJS error:", error);
    setStatus("⚠️ Something went wrong. Try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            💬 Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's connect and create something extraordinary
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50"
                required
              />
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/50"
                required
              />
              <Textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 min-h-[150px]"
                required
              />
              <Button
                type="submit"
                className="w-full glow-primary"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {status && (
              <p className="text-sm text-center mt-4 text-muted-foreground">
                {status}
              </p>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Get in Touch</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:durgesh.nunna.dev@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">durgesh.nunna.dev@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/durgesh-nunna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                  <a 
                    href="https://github.com/Durgeshnunna9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">GitHub Profile</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <Button className="w-full" variant="outline" asChild>
                  <a href="/Durgesh_Nunna_Developer.docx" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(-10px); }
        }
        .animate-wave {
          animation: wave 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
