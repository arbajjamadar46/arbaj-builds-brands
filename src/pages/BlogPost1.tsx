import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profileImage from '@/assets/profile-image.jpg';

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => window.history.back()}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
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
              Marketing Strategy
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
              The Engineer's Guide to Marketing Analytics
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
                      Dec 20, 2023
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      14 min read
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
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-muted/50 to-muted rounded-xl mb-8 flex items-center justify-center">
              <div className="text-muted-foreground text-lg">Marketing Analytics Visualization</div>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                Engineering and marketing may seem like two very different worlds, but in today's digital era, 
                data-driven thinking links them closer than ever. What if engineering rigor—testing, measuring, 
                optimizing—could supercharge marketing results? That's where marketing analytics comes in. 
                This guide empowers engineers to confidently step into the marketing realm, demystifying 
                analytics while offering a technical framework for building, evaluating, and optimizing 
                successful marketing campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Why Marketing Analytics Matters for Engineers</h2>
              <p>
                Marketing analytics is not just for marketers. Engineers are natural problem solvers who 
                thrive on data, logic, and validation. These same skills, applied to marketing, can elevate 
                business outcomes by revealing what's working, what's failing, and—most importantly—why. 
                Far from gut feeling or guesswork, analytical marketing strategies help teams allocate 
                resources wisely, minimize risk, and drive better ROI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Blog Content Summary</h2>
              <p>
                Marketing analytics is the systematic approach to monitoring, controlling, and evaluating 
                marketing performance with the aim of maximizing effectiveness and efficiency. The core pillars include:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Data Collection:</h3>
                  <p>
                    This foundational step gathers data from sources such as surveys, website analytics, 
                    CRM systems, and social platforms to build a complete view of marketing performance.
                  </p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Data Analysis:</h3>
                  <p>
                    Once collected, data is analyzed to uncover trends, patterns, and actionable insights. 
                    Common techniques include web traffic analysis, funnel analysis, and customer segmentation.
                  </p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Reporting:</h3>
                  <p>
                    Insights are distilled into dashboards and reports that help marketers and executives 
                    track KPIs and campaign success in real time.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Types of Marketing Analytics Approaches</h2>
              <p>
                Marketing analytics consists of several analytical modes, with each serving business 
                decision-making in a unique way:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Descriptive Analytics:</h3>
                  <p>Summarizes historical performance, allowing benchmarking and identification of patterns.</p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Diagnostic Analytics:</h3>
                  <p>Pinpoints causes of success or underperformance by correlating campaign variables.</p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Predictive Analytics:</h3>
                  <p>Uses machine learning and statistics to forecast future trends, outcomes, and optimal resource allocation.</p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Prescriptive Analytics:</h3>
                  <p>Recommends specific actions, using scenario modeling to optimize strategy and budget deployment.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Choosing the Right Tools</h2>
              <p>Engineers often have access to open-source and enterprise analytics platforms. The table below summarizes common choices:</p>
              
              <div className="my-6 overflow-x-auto">
                <table className="w-full border-collapse glass-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/20">
                      <th className="text-left p-4 font-semibold border-b border-border/40">Tool</th>
                      <th className="text-left p-4 font-semibold border-b border-border/40">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-border/20">Google Analytics</td>
                      <td className="p-4 border-b border-border/20">Website traffic/behavior</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/20">Tableau/PowerBI</td>
                      <td className="p-4 border-b border-border/20">Data visualization</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border/20">HubSpot</td>
                      <td className="p-4 border-b border-border/20">CRM and marketing funnels</td>
                    </tr>
                    <tr>
                      <td className="p-4">Python/R</td>
                      <td className="p-4">Custom modeling/automation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Marketing Analytics in Action: Real-World Examples</h2>
              <div className="space-y-4">
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">E-commerce Optimization:</h3>
                  <p>
                    Identifying high-converting product pages and optimizing them based on user behavior 
                    data can improve revenue by focusing engineering attention on high-impact features.
                  </p>
                </div>
                
                <div className="p-4 glass-card rounded-lg">
                  <h3 className="font-semibold mb-2">Customer Journey Mapping:</h3>
                  <p>
                    Mapping touchpoints and analyzing drop-off rates enables fine-tuning of onboarding 
                    and support, akin to root-cause analysis in system troubleshooting.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Engineer's Edge: From Intuition to Evidence</h2>
              <p>
                Engineers naturally move from hypothesis to experimentation and validation. Marketing 
                analytics brings the same rigor—every marketing initiative becomes measurable, testable, 
                and improvable. This data-driven mindset ensures efficient resource allocation, risk 
                reduction, and sustained business growth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Conclusion: Drive Growth Through Analytics</h2>
              <p>
                For engineers, embracing marketing analytics is not just about tracking vanity metrics—it's 
                about implementing a systematic, repeatable process for maximizing marketing ROI. By integrating 
                analytical thinking with creative strategy, engineers become invaluable partners in building 
                scalable, resilient, and data-proven marketing programs.
              </p>
            </section>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-16 pt-16 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Meta Ads Manager: Advanced Strategies for Tech Companies",
                category: "Paid Advertising",
                date: "12/28/2024",
                readTime: "8 min read"
              },
              {
                title: "Why Full-Stack Developers Make Better Digital Marketers",
                category: "Career Insights", 
                date: "1/10/2025",
                readTime: "7 min read"
              },
              {
                title: "Building Landing Pages That Convert: A Developer's Guide",
                category: "Web Development",
                date: "1/5/2025", 
                readTime: "6 min read"
              }
            ].map((post, index) => (
              <div key={index} className="glass-card p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-2">
                    {post.category}
                  </span>
                  <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{post.readTime}</span>
                  <span className="text-primary hover:underline">Read More →</span>
                </div>
              </div>
            ))}
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

export default BlogPost1;