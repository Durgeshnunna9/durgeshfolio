import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Durgesh Nunna — Crafted with{" "}
            <Heart className="h-4 w-4 text-destructive fill-destructive animate-pulse" />{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
