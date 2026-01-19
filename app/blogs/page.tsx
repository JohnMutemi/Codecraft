import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import { SectionHeader } from "@/components/sections/section-header"
import { ScrollCta } from "@/components/sections/scroll-cta"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, ExternalLink, Newspaper, BookOpen, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

// Our curated blog posts
const BLOG_POSTS = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Best Practices for Modern Organizations",
    excerpt:
      "Learn essential cybersecurity strategies to protect your organization from evolving threats and ensure data security compliance.",
    category: "Cybersecurity",
    readTime: "8 min read",
    date: "2024-01-15",
    href: "/blogs/cybersecurity",
    featured: true,
  },
  {
    id: "systems-security",
    title: "Systems Security and Infrastructure Upgrades",
    excerpt:
      "Discover how to modernize your IT infrastructure with security-first approaches and seamless upgrade strategies.",
    category: "Systems Security",
    readTime: "10 min read",
    date: "2024-01-10",
    href: "/blogs/systems-security",
    featured: true,
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions: When Off-the-Shelf Won't Fit",
    excerpt:
      "Explore how custom software development can solve unique business challenges and drive operational efficiency.",
    category: "Custom Software",
    readTime: "12 min read",
    date: "2024-01-05",
    href: "/blogs/custom-software",
    featured: true,
  },
]

// Fetch live news from our API
async function getNews() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "http://localhost:3000"
    
    const response = await fetch(`${baseUrl}/api/news`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error("Failed to fetch news")
    }
    
    return response.json()
  } catch (error) {
    console.error("Error fetching news:", error)
    return { articles: [], source: "error" }
  }
}

export default async function BlogsPage() {
  const newsData = await getNews()
  const liveArticles = newsData.articles || []
  const newsSource = newsData.source

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Elegant Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--primary)/6%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--accent)/6%,transparent_50%)]"></div>
          
          {/* Visible Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          {/* Content */}
          <Container className="relative z-10 py-12 sm:py-16">
            <div className="max-w-4xl space-y-8 text-center">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Knowledge Hub</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Insights & <span className="text-primary">Expertise</span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-foreground/70 leading-relaxed">
                Stay informed with the latest trends, best practices, and expert insights in cybersecurity, systems
                security, and custom software development.
              </p>
            </div>
          </Container>
        </section>

        <ScrollCta targetId="hero-cta-section" />

        {/* Hero CTA Section */}
        <section id="hero-cta-section" className="relative bg-background py-12 sm:py-16">
          <Container>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 sm:p-12 text-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
              </div>
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed">
                Explore our expert insights, best practices, and industry trends in cybersecurity and ICT solutions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
              >
                <Link href="/contact" className="gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Featured Blog Posts */}
        <section id="blog-posts-section" className="relative py-12 sm:py-16 lg:py-20 bg-background">
          {/* Visible Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="relative space-y-10 sm:space-y-12">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <SectionHeader
                subtitle="Featured Articles"
                title="Expert Guides & Best Practices"
                description="Deep-dive articles written by our team of ICT and cybersecurity experts."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col rounded-xl border border-border/50 bg-gradient-to-br from-background to-muted/20 p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
                >
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-2 py-1 text-[10px] font-semibold text-primary bg-primary/10 rounded-full">
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-sm sm:text-base text-foreground/60 mb-6 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-foreground/50 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Link href={post.href} className="gap-2">
                      Read Article
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Live Tech News Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-muted/30">
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3Ccircle cx='3' cy='13' r='1.5'/%3E%3Ccircle cx='13' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="relative space-y-10 sm:space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Industry Pulse</h2>
                    {newsSource === "live" && (
                      <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-500/10 rounded-full animate-pulse">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/60 mt-1">
                    {newsSource === "live" 
                      ? "Real-time tech and cybersecurity news from around the world"
                      : "Curated insights on technology and cybersecurity trends"
                    }
                  </p>
                </div>
              </div>
            </div>

            {liveArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {liveArticles.map((article: { id: string; title: string; description: string; url: string; source: string; publishedAt: string; imageUrl?: string; category: string }) => (
                  <article
                    key={article.id}
                    className="group flex flex-col rounded-xl border border-border/50 bg-background p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md"
                  >
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-2.5 py-1 text-[10px] font-semibold text-accent bg-accent/10 rounded-full uppercase tracking-wider">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-foreground/40">
                        <Newspaper className="h-3 w-3" />
                        {article.source}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-foreground/60 mb-4 leading-relaxed flex-1 line-clamp-3">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                      <div className="flex items-center gap-1.5 text-[10px] text-foreground/40">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(article.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      
                      {article.url && article.url !== "#" ? (
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                        >
                          Read More
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40">CodeCraft Insight</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 rounded-xl border border-border/50 bg-background/50">
                <Newspaper className="h-12 w-12 text-foreground/20 mx-auto mb-4" />
                <p className="text-foreground/60">Loading industry insights...</p>
              </div>
            )}

            {/* Industry News CTA */}
            <div className="text-center pt-4">
              <p className="text-sm text-foreground/50 mb-4">
                Want personalized insights for your industry?
              </p>
              <Button asChild variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5">
                <Link href="/contact" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Get Custom Analysis
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Newsletter/CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="relative text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Need Expert ICT Guidance?</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              Our team of cybersecurity and ICT experts is ready to help you navigate the complex world of technology.
              Get in touch for personalized consultation.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl">
              <Link href="/contact" className="gap-2">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
