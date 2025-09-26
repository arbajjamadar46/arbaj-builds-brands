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
  Star,
  Calendar,
  ArrowRight,
  Eye,
  Layers
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg-bw.jpg';
import adDesign1 from '@/assets/graphics/ad-design-1.jpg';
import adDesign2 from '@/assets/graphics/ad-design-2.jpg';
import bannerDesign from '@/assets/graphics/banner-design.jpg';
import hrAdCreative from '@/assets/graphics/hr-ad-creative.jpg';
import marketingFlyer from '@/assets/graphics/marketing-flyer.jpg';
import websiteMockup from '@/assets/graphics/website-mockup.jpg';

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

  const blogPosts = [
    {
      title: 'The Engineer\'s Guide to Marketing Analytics',
      excerpt: 'How my technical background helps me decode marketing metrics and build data-driven strategies that actually convert.',
      date: '2025-01-15',
      category: 'Marketing Strategy',
      readTime: '5 min read'
    },
    {
      title: 'Why Full-Stack Developers Make Better Digital Marketers',
      excerpt: 'Understanding code, databases, and user experience gives marketers a unique edge in the digital landscape.',
      date: '2025-01-10',
      category: 'Career Insights',
      readTime: '7 min read'
    },
    {
      title: 'Building Landing Pages That Convert: A Developer\'s Perspective',
      excerpt: 'Technical optimization meets conversion psychology. Learn how to build landing pages that perform.',
      date: '2025-01-05',
      category: 'Web Development',
      readTime: '6 min read'
    },
    {
      title: 'Meta Ads Manager: Advanced Strategies for Tech Companies',
      excerpt: 'Deep dive into campaign optimization, audience targeting, and performance tracking for SaaS and tech startups.',
      date: '2024-12-28',
      category: 'Paid Advertising',
      readTime: '8 min read'
    },
    {
      title: 'From Code to Creative: My Journey into Brand Strategy',
      excerpt: 'How I transitioned from computer engineering to marketing and what I learned about building brands.',
      date: '2024-12-20',
      category: 'Personal Story',
      readTime: '4 min read'
    },
    {
      title: 'Google Analytics 4 for Developers: Beyond Basic Tracking',
      excerpt: 'Advanced GA4 implementation, custom events, and how to build marketing dashboards that matter.',
      date: '2024-12-15',
      category: 'Analytics',
      readTime: '9 min read'
    },
    {
      title: 'The Future of Marketing: Where Tech Meets Creativity',
      excerpt: 'Exploring AI tools, automation, and how technical skills amplify creative marketing campaigns.',
      date: '2024-12-08',
      category: 'Future Trends',
      readTime: '6 min read'
    }
  ];

  const graphicsShowcase = [
    {
      title: 'Modern Social Media Ad',
      description: 'Clean minimalist design for tech startup campaign',
      image: adDesign1,
      category: 'Social Media',
      tools: ['Canva', 'Figma']
    },
    {
      title: 'Instagram Story Template',
      description: 'Branded story design for digital marketing agency',
      image: adDesign2,
      category: 'Social Media',
      tools: ['Canva', 'Adobe Creative Suite']
    },
    {
      title: 'Web Development Banner',
      description: 'Professional service banner with modern aesthetics',
      image: bannerDesign,
      category: 'Web Banner',
      tools: ['Figma', 'Photoshop']
    },
    {
      title: 'HR Recruitment Ad',
      description: 'Facebook ad creative for SproutQ recruitment campaign',
      image: hrAdCreative,
      category: 'Paid Ads',
      tools: ['Meta Ads Manager', 'Canva']
    },
    {
      title: 'Marketing Consultation Flyer',
      description: 'Elegant flyer design for business consultation services',
      image: marketingFlyer,
      category: 'Print Design',
      tools: ['Canva', 'InDesign']
    },
    {
      title: 'Website UI Mockup',
      description: 'Responsive web design showcase with modern interface',
      image: websiteMockup,
      category: 'Web Design',
      tools: ['Figma', 'React', 'Tailwind']
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
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight drop-shadow-2xl">
                Arbaj Jamadar
              </h1>
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-white/90 tracking-wide">
                Brand Strategy Learner
              </h2>
              <div className="flex items-center justify-center space-x-4 text-white/70">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                <span className="text-lg md:text-xl font-medium">Full Stack Developer</span>
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                <span className="text-lg md:text-xl font-medium">Digital Marketer</span>
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
              </div>
            </div>
            <div className="relative mb-16">
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                "Building bridges between engineering and marketing through design, code, and strategy."
              </p>
              <div className="absolute -left-8 top-0 text-6xl text-white/20 font-serif">"</div>
              <div className="absolute -right-8 bottom-0 text-6xl text-white/20 font-serif">"</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Button 1: Let's Connect */}
<Button 
  size="lg"
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="relative group px-12 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/20 transition-transform duration-300 hover:scale-105 hover:border-white/40"
>
  <span className="relative z-10">Let's Connect</span>
  {/* Shine overlay */}
  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-shine" />
</Button>

{/* Button 2: View Portfolio */}
<Button 
  size="lg"
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  className="relative group px-12 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/20 transition-transform duration-300 hover:scale-105 hover:border-white/40"
>
  <span className="relative z-10">View Portfolio</span>
  {/* Shine overlay */}
  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-shine" />
</Button>


            </div>
          </div>
        </div>

        {/* Creative floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/5 border border-white/10 float backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-black/10 border border-white/20 float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-white/10 float animate-shimmer" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-white/30 rotate-45 float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/20 rotate-12 float" style={{animationDelay: '3s'}}></div>
        
        {/* Interactive Animated Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-1000 hover:opacity-30"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            e.currentTarget.style.background = `
              radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 20%, transparent 40%),
              radial-gradient(circle at 1px 1px, white 1px, transparent 0)
            `;
            e.currentTarget.style.backgroundSize = `200px 200px, 25px 25px`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%),
              radial-gradient(circle at 1px 1px, white 1px, transparent 0)
            `;
            e.currentTarget.style.backgroundSize = `400px 400px, 30px 30px`;
          }}
          style={{
            background: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%),
              radial-gradient(circle at 1px 1px, white 1px, transparent 0)
            `,
            backgroundSize: '400px 400px, 30px 30px',
            animation: 'float 20s ease-in-out infinite, shimmer 8s ease-in-out infinite alternate'
          }}
        >
          {/* Animated particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '3.5s'}}></div>
          <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '4.5s'}}></div>
          
          {/* Dynamic light rays */}
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-white/10 via-transparent to-transparent animate-pulse" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-white/8 via-transparent to-transparent animate-pulse" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
          
          {/* Rotating geometric shapes */}
          <div className="absolute top-24 right-24 w-8 h-8 border border-white/20 rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-28 left-28 w-6 h-6 border border-white/15 rotate-12 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
        </div>
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
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="relative">
              <div className="glass-card max-w-5xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <div className="relative z-10">
                  <p className="text-xl text-foreground/90 leading-relaxed mb-8 font-light">
                    I'm <span className="font-semibold gradient-text">Arbaj Jamadar</span>, a Computer Engineering graduate pivoting into the exciting world of marketing and brand strategy. 
                    My technical background helps me understand tools, data, and performance, while my creative projects help me reach people where it matters.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center group">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-secondary border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Code2 className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h3 className="font-bold text-lg mb-3">B.E. in Computer Engineering</h3>
                      <p className="text-muted-foreground leading-relaxed">Strong technical foundation with hands-on experience</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-secondary border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h3 className="font-bold text-lg mb-3">EY GDS / Edunet Intern</h3>
                      <p className="text-muted-foreground leading-relaxed">Full-stack development in enterprise environment</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-secondary border-2 border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <BarChart3 className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h3 className="font-bold text-lg mb-3">Marketing & Tech Blend</h3>
                      <p className="text-muted-foreground leading-relaxed">Unique perspective bridging two powerful worlds</p>
                    </div>
                  </div>
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
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-3 tracking-tight pb-3">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
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
                  <Button variant="ghost" size="sm" className="mt-4 text-foreground hover:text-white transition-colors">
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
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight">
                What I Offer
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
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
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight pb-3">
                Skills & Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="glass px-6 py-3 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 cursor-pointer magnetic-hover border border-primary/10 hover:border-primary/30"
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
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight pb-3">
                What People Say
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
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

      {/* Blog Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-600 ${
              isVisible['blog'] ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            data-animate
            id="blog"
          >
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight pb-3">
                Latest Blog Posts
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Insights on marketing strategy, web development, and the intersection of technology and creativity
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-white transition-colors">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Showcase Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible['graphics'] ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            data-animate
            id="graphics"
          >
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight pb-3">
                Creative Showcase
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Ad designs, creatives, and visual content that converts and engages audiences
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {graphicsShowcase.map((graphic, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={graphic.image} 
                      alt={graphic.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" size="sm" className="text-white border-white/20 hover:bg-white/20">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Size
                      </Button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full">
                        {graphic.category}
                      </span>
                      <Layers className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {graphic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {graphic.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {graphic.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
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
            <div className="relative text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 tracking-tight pb-3">
                Let's Work Together
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
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