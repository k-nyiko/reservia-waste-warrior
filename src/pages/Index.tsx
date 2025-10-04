import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  TrendingDown, 
  ShoppingCart, 
  Gavel, 
  BarChart3,
  Menu,
  X
} from "lucide-react";
import heroImage from "@/assets/hero-food-inventory.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const techStack = [
    "HTML", "CSS", "JavaScript", "ASP.NET/C#", "PostgreSQL", "Docker"
  ];

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "FEFO Inventory Management",
      description: "First-Expired, First-Out system ensures products are sold before expiration, minimizing waste."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Dynamic Pricing",
      description: "Automatically adjust prices based on expiration dates to maximize sales and reduce losses."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Automated Crate Offers",
      description: "Bundle near-expiry products into discounted crates to clear inventory efficiently."
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Reverse Auctions",
      description: "Let customers bid on bulk products, creating competitive pricing while reducing waste."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Predictive Suite",
      description: "Data-driven insights help forecast demand and optimize inventory management."
    }
  ];

  const team = [
    { name: "Nyiko Khoza", role: "Backend & Database" },
    { name: "Teammate 2", role: "Frontend & Design" },
    { name: "Teammate 3", role: "DevOps & Deployment" },
    { name: "Teammate 4", role: "Research & Analytics" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">Team Reservia</h1>
              <p className="text-sm text-muted-foreground">Smart Food Waste Reduction Platform</p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {["about", "tech-stack", "features", "team", "video"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-primary transition-colors capitalize"
                >
                  {section.replace("-", " ")}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
              {["about", "tech-stack", "features", "team", "video"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-foreground hover:text-primary transition-colors capitalize"
                >
                  {section.replace("-", " ")}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(0.5)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent z-0" />
        
        <div className="container mx-auto relative z-10 animate-fade-in">
          <div className="max-w-3xl">
            <h2 className="text-7xl md:text-8xl font-bold text-foreground/20 mb-4 uppercase tracking-tight">
              Food Waste
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              welcome
            </h3>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-2xl md:text-3xl text-foreground font-medium mb-4">
              Reduce Food Waste, Maximize Profits
            </p>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Smart technology for retailers to minimize waste and optimize inventory management through intelligent FEFO systems and dynamic pricing.
            </p>
            <Button 
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">About Reservia</h3>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">The Problem</CardTitle>
              <CardDescription className="text-base">
                Food retailers lose significant revenue when products expire unsold. This not only impacts profitability but also contributes to environmental waste.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="text-xl font-semibold mb-3 text-accent">Our Solution</h4>
              <p className="text-muted-foreground">
                Team Reservia's platform reduces food waste using FEFO inventory management, dynamic pricing algorithms, automated bundle creation, reverse auctions, and predictive analytics. Our comprehensive approach helps retailers maximize profits while minimizing environmental impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-12 text-foreground">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-6 py-2 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Meet the Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Project Presentation</h3>
          <div className="aspect-video bg-muted rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Team Reservia Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Replace the video URL above with your actual presentation link
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Team Reservia | Building Smarter Food Solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;