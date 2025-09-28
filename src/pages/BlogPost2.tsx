import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile-image.jpg';

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex-1" />
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('https://arbajjamadar46.vercel.app/', '_blank')}
          >
            Portfolio
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">
              Career Insights
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
              Why Full-Stack Developers Make Better Digital Marketers
            </h1>

            {/* Author Meta */}
            <div className="flex items-center justify-between mb-8 p-6 glass-card rounded-xl">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={profileImage} alt="Arbaj Jamadar" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Arbaj Jamadar</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-4">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Jan 10, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      7 min read
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-8 flex items-center justify-center">
              <div className="text-foreground text-lg font-semibold">Full-Stack Development Meets Marketing</div>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Unexpected Career Advantage</h2>
              <p>
                In today's digital landscape, the lines between development and marketing are blurring. 
                Full-stack developers possess a unique combination of technical skills, analytical thinking, 
                and systems understanding that translates remarkably well to digital marketing success. 
                Here's why developers often outperform traditional marketers in the digital space.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Technical Foundation = Marketing Advantage</h2>
              
              <div className="space-y-6">
                <div className="p-6 glass-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Understanding the Tech Stack</h3>
                  <p>
                    While marketers struggle with technical implementations, developers inherently understand 
                    how websites work, how databases function, and how APIs integrate. This knowledge allows 
                    for more sophisticated marketing automation, better tracking implementation, and deeper 
                    insights into user behavior.
                  </p>
                </div>

                <div className="p-6 glass-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Data-Driven Decision Making</h3>
                  <p>
                    Developers are trained to debug, test, and optimize based on concrete data. This 
                    analytical mindset directly applies to marketing campaigns, A/B testing strategies, 
                    and performance optimization. Where traditional marketers might rely on intuition, 
                    developers lean on metrics and systematic testing.
                  </p>
                </div>

                <div className="p-6 glass-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Automation and Scalability</h3>
                  <p>
                    The developer's instinct to automate repetitive tasks transforms marketing operations. 
                    From automated email sequences to dynamic content personalization, developers build 
                    marketing systems that scale efficiently without proportional increases in manual effort.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Real-World Applications</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 glass-card rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Advanced Analytics Implementation</h3>
                  <p>
                    Setting up Google Analytics 4, implementing custom events, and creating complex 
                    tracking funnels becomes straightforward when you understand JavaScript and 
                    can read technical documentation.
                  </p>
                </div>

                <div className="p-6 glass-card rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Landing Page Optimization</h3>
                  <p>
                    Understanding CSS, performance optimization, and user experience principles 
                    allows developers to create landing pages that not only convert but also 
                    load fast and rank well in search engines.
                  </p>
                </div>

                <div className="p-6 glass-card rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Marketing Tool Integration</h3>
                  <p>
                    Connecting CRMs, email platforms, and analytics tools through APIs becomes 
                    a powerful advantage, enabling custom workflows that most marketers 
                    can't implement.
                  </p>
                </div>

                <div className="p-6 glass-card rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">SEO Technical Excellence</h3>
                  <p>
                    Technical SEO, schema markup, and Core Web Vitals optimization are natural 
                    extensions of development skills, giving developer-marketers a significant 
                    advantage in search rankings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Skills Translation Matrix</h2>
              
              <div className="my-6 overflow-x-auto">
                <table className="w-full border-collapse glass-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/20">
                      <th className="text-left p-4 font-semibold border-b border-border/40">Development Skill</th>
                      <th className="text-left p-4 font-semibold border-b border-border/40">Marketing Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-border/20">Database Design</td>
                      <td className="p-4 border-b border-border/20">Customer segmentation and data architecture</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/20">API Integration</td>
                      <td className="p-4 border-b border-border/20">Marketing automation and tool connectivity</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/20">Version Control</td>
                      <td className="p-4 border-b border-border/20">Campaign iteration and A/B testing</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/20">Performance Optimization</td>
                      <td className="p-4 border-b border-border/20">Conversion rate optimization</td>
                    </tr>
                    <tr>
                      <td className="p-4">User Experience Design</td>
                      <td className="p-4">Customer journey optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Building Your Marketing Developer Toolkit</h2>
              
              <div className="space-y-4">
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Analytics & Tracking:</h3>
                  <p>Google Analytics 4, Google Tag Manager, Mixpanel, Amplitude</p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Marketing Automation:</h3>
                  <p>HubSpot, Mailchimp API, Zapier, Custom webhook integrations</p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Performance Tools:</h3>
                  <p>Google PageSpeed Insights, Lighthouse, Hotjar, Crazy Egg</p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">A/B Testing Platforms:</h3>
                  <p>Google Optimize, Optimizely, VWO, Custom implementations</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Competitive Edge</h2>
              <p>
                In a world where digital marketing is becoming increasingly technical, full-stack 
                developers have a natural advantage. They can implement solutions that traditional 
                marketers need to outsource, understand the technical limitations and possibilities 
                of marketing tools, and build custom solutions when off-the-shelf tools fall short.
              </p>
              
              <p>
                This technical foundation, combined with marketing knowledge, creates professionals 
                who can bridge the gap between what marketing teams want to achieve and what's 
                technically possible—making them invaluable in today's digital landscape.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Making the Transition</h2>
              <p>
                If you're a developer interested in marketing, start by applying your existing 
                skills to marketing challenges. Build landing pages, implement tracking, automate 
                workflows, and measure results. Your technical background gives you a unique 
                perspective that can drive real business value in the marketing world.
              </p>
            </section>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-16 pt-16 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/blog/the-engineers-guide-to-marketing-analytics" className="glass-card p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-2">
                  Marketing Strategy
                </span>
                <div className="text-xs text-muted-foreground mb-2">Dec 20, 2023</div>
              </div>
              <h3 className="font-semibold mb-2 line-clamp-2">The Engineer's Guide to Marketing Analytics</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">14 min read</span>
                <span className="text-primary hover:underline">Read More →</span>
              </div>
            </Link>
            
            <div className="glass-card p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer opacity-50">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-2">
                  Web Development
                </span>
                <div className="text-xs text-muted-foreground mb-2">Coming Soon</div>
              </div>
              <h3 className="font-semibold mb-2 line-clamp-2">Building Landing Pages That Convert</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Coming Soon</span>
                <span className="text-muted-foreground">Coming Soon</span>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer opacity-50">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-2">
                  Paid Advertising
                </span>
                <div className="text-xs text-muted-foreground mb-2">Coming Soon</div>
              </div>
              <h3 className="font-semibold mb-2 line-clamp-2">Meta Ads Manager: Advanced Strategies</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Coming Soon</span>
                <span className="text-muted-foreground">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border/40 text-center">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Arbaj Jamadar</div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/arbajjamadar46/" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/arbajjamadar46" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="mailto:arbajjamadar46@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                Email
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Arbaj Jamadar. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default BlogPost2;