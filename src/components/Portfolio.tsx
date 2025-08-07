import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Code2, 
  Palette, 
  BarChart3, 
  Globe, 
  Github, 
  Linkedin, 
  Mail,
  Send,
  ExternalLink,
  Star
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    'React.js', 'Tailwind CSS', 'Django', 'PostgreSQL', 'GitHub', 
    'Canva', 'Figma', 'Google Analytics', 'Meta Ads', 'Looker Studio',
    'Content Writing', 'Flyer Design'
  ];

  const projects = [
    {
      title: 'SproutQ Marketing Strategy',
      description: 'Designed ad strategies and flyers for HR recruiters. Built paid campaigns that converted.',
      tools: ['Meta Ads Manager', 'Canva', 'ChatGPT', 'Google Analytics'],
      type: 'Marketing Strategy'
    },
    {
      title: 'IoT-based Home Automation',
      description: 'Used Arduino and NodeMCU to automate appliances via web dashboard.',
      tools: ['Arduino', 'NodeMCU', 'Web Dashboard', 'IoT'],
      type: 'Full Stack Development'
    },
    {
      title: 'Nursery Management System',
      description: 'Developed a web-based system to manage plant nursery operations.',
      tools: ['PHP', 'MySQL', 'Web Development', 'Database'],
      type: 'Web Development'
    }
  ];

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Paid Ads Strategy',
      description: 'Strategic campaign development and optimization for maximum ROI'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding & Visual Design',
      description: 'Creating compelling visual identities that resonate with your audience'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Web Analytics Reporting',
      description: 'GA4 and Looker Studio insights to drive data-informed decisions'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full-Stack Web Development',
      description: 'Building robust web applications with modern technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div 
            className={`transition-all duration-1000 ${
              isVisible['hero'] ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            data-animate
            id="hero"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Arbaj Jamadar
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-8">
              Brand Strategy Learner | Full Stack Developer | Digital Marketer
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              "Building bridges between engineering and marketing through design, code, and strategy."
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform glow"
            >
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent/20 float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-white/10 float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible['about'] ? 'animate-slide-in-left' : 'opacity-0'
            }`}
            data-animate
            id="about"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="glass-card max-w-4xl mx-auto">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm Arbaj Jamadar, a Computer Engineering graduate pivoting into the exciting world of marketing and brand strategy. 
                My technical background helps me understand tools, data, and performance, while my creative projects help me reach people where it matters.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">B.E. in Computer Engineering</h3>
                  <p className="text-sm text-muted-foreground">Strong technical foundation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">EY GDS / Edunet Intern</h3>
                  <p className="text-sm text-muted-foreground">Full-stack development experience</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Marketing & Tech Blend</h3>
                  <p className="text-sm text-muted-foreground">Unique perspective on strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible['projects'] ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            data-animate
            id="projects"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 group-hover:text-primary">
                    View Details <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible['services'] ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            data-animate
            id="services"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What I Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                  <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible['skills'] ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            data-animate
            id="skills"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="glass px-4 py-2 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-pointer float"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-600 ${
              isVisible['testimonials'] ? 'animate-slide-in-left' : 'opacity-0'
            }`}
            data-animate
            id="testimonials"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What People Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">
                  "Arbaj's ability to blend development with digital strategy is a rare combo. 
                  His work on SproutQ helped us attract HRs with effective messaging."
                </p>
                <div className="text-sm text-muted-foreground">— SproutQ Team</div>
              </Card>
              <Card className="glass-card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">
                  "He understands both technical and creative sides of marketing. A valuable asset."
                </p>
                <div className="text-sm text-muted-foreground">— Digital Mentor</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible['contact'] ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            data-animate
            id="contact"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <Card className="glass-card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="glass border-white/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="glass border-white/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="glass border-white/20 focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white font-semibold py-3 hover:scale-105 transition-transform"
                >
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold mb-4 md:mb-0">
              Arbaj Jamadar
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Arbaj Jamadar. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;