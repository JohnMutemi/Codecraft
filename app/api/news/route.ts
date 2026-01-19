import { NextResponse } from "next/server"

// Tech and cybersecurity news keywords for filtering
const TECH_KEYWORDS = [
  "cybersecurity",
  "technology",
  "software",
  "IT",
  "data breach",
  "cloud computing",
  "artificial intelligence",
  "AI",
  "machine learning",
  "digital transformation",
  "cyber attack",
  "ransomware",
  "network security",
  "healthcare IT",
  "education technology",
  "enterprise software",
]

interface NewsArticle {
  id: string
  title: string
  description: string
  url: string
  source: string
  publishedAt: string
  imageUrl?: string
  category: string
}

// Fallback articles when API is unavailable or for demo purposes
const FALLBACK_ARTICLES: NewsArticle[] = [
  {
    id: "fallback-1",
    title: "The Rise of Zero Trust Architecture in Enterprise Security",
    description: "Organizations worldwide are adopting zero trust security models to protect against sophisticated cyber threats. Learn how this paradigm shift is reshaping enterprise security strategies.",
    url: "#",
    source: "CodeCraft Insights",
    publishedAt: new Date().toISOString(),
    category: "Cybersecurity",
  },
  {
    id: "fallback-2",
    title: "AI-Powered Threat Detection: The Future of Cybersecurity",
    description: "Machine learning algorithms are revolutionizing how organizations detect and respond to security threats in real-time, offering unprecedented protection against zero-day attacks.",
    url: "#",
    source: "CodeCraft Insights",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    category: "AI & Security",
  },
  {
    id: "fallback-3",
    title: "Digital Transformation in Healthcare: Challenges and Opportunities",
    description: "Healthcare institutions are accelerating their digital transformation journeys, but face unique challenges in balancing innovation with patient data security and regulatory compliance.",
    url: "#",
    source: "CodeCraft Insights",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    category: "Healthcare IT",
  },
  {
    id: "fallback-4",
    title: "Cloud Security Best Practices for 2025",
    description: "As organizations continue migrating to the cloud, implementing robust security measures becomes critical. Discover the essential practices for securing your cloud infrastructure.",
    url: "#",
    source: "CodeCraft Insights",
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    category: "Cloud Security",
  },
  {
    id: "fallback-5",
    title: "The Impact of Remote Work on Enterprise Security",
    description: "The shift to remote and hybrid work models has fundamentally changed the security landscape. Organizations must adapt their strategies to protect distributed workforces.",
    url: "#",
    source: "CodeCraft Insights",
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    category: "Enterprise Security",
  },
  {
    id: "fallback-6",
    title: "EdTech Revolution: Securing Digital Learning Environments",
    description: "Educational institutions are embracing technology at unprecedented rates. Learn how schools can implement secure digital learning platforms while protecting student data.",
    url: "#",
    source: "CodeCraft Insights",
    publishedAt: new Date(Date.now() - 432000000).toISOString(),
    category: "Education Technology",
  },
]

export async function GET() {
  try {
    // Try fetching from NewsAPI if API key is available
    const apiKey = process.env.NEWS_API_KEY

    if (apiKey) {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=cybersecurity+OR+technology+OR+"data+security"&language=en&sortBy=publishedAt&pageSize=12`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      )

      if (response.ok) {
        const data = await response.json()
        
        if (data.articles && data.articles.length > 0) {
          const articles: NewsArticle[] = data.articles
            .filter((article: { title: string; description: string }) => 
              article.title && 
              article.description && 
              !article.title.includes("[Removed]")
            )
            .slice(0, 9)
            .map((article: { title: string; description: string; url: string; source: { name: string }; publishedAt: string; urlToImage?: string }, index: number) => ({
              id: `news-${index}`,
              title: article.title,
              description: article.description,
              url: article.url,
              source: article.source.name,
              publishedAt: article.publishedAt,
              imageUrl: article.urlToImage,
              category: categorizeArticle(article.title + " " + article.description),
            }))

          return NextResponse.json({ articles, source: "live" })
        }
      }
    }

    // Try alternative free API - GNews
    const gnewsKey = process.env.GNEWS_API_KEY
    if (gnewsKey) {
      const gnewsResponse = await fetch(
        `https://gnews.io/api/v4/search?q=cybersecurity+technology&lang=en&max=9&apikey=${gnewsKey}`,
        { next: { revalidate: 3600 } }
      )

      if (gnewsResponse.ok) {
        const gnewsData = await gnewsResponse.json()
        
        if (gnewsData.articles && gnewsData.articles.length > 0) {
          const articles: NewsArticle[] = gnewsData.articles.map((article: { title: string; description: string; url: string; source: { name: string }; publishedAt: string; image?: string }, index: number) => ({
            id: `gnews-${index}`,
            title: article.title,
            description: article.description,
            url: article.url,
            source: article.source.name,
            publishedAt: article.publishedAt,
            imageUrl: article.image,
            category: categorizeArticle(article.title + " " + article.description),
          }))

          return NextResponse.json({ articles, source: "live" })
        }
      }
    }

    // Return fallback articles if no API keys or API failed
    return NextResponse.json({ 
      articles: FALLBACK_ARTICLES, 
      source: "curated",
      message: "Showing curated tech insights" 
    })

  } catch (error) {
    console.error("News API Error:", error)
    return NextResponse.json({ 
      articles: FALLBACK_ARTICLES, 
      source: "curated",
      message: "Showing curated tech insights" 
    })
  }
}

// Helper function to categorize articles based on content
function categorizeArticle(content: string): string {
  const lowerContent = content.toLowerCase()
  
  if (lowerContent.includes("cyber") || lowerContent.includes("security") || lowerContent.includes("breach") || lowerContent.includes("hack")) {
    return "Cybersecurity"
  }
  if (lowerContent.includes("ai") || lowerContent.includes("artificial intelligence") || lowerContent.includes("machine learning")) {
    return "AI & Technology"
  }
  if (lowerContent.includes("cloud") || lowerContent.includes("aws") || lowerContent.includes("azure")) {
    return "Cloud Computing"
  }
  if (lowerContent.includes("health") || lowerContent.includes("medical") || lowerContent.includes("hospital")) {
    return "Healthcare IT"
  }
  if (lowerContent.includes("school") || lowerContent.includes("education") || lowerContent.includes("learning")) {
    return "Education Technology"
  }
  if (lowerContent.includes("ransomware") || lowerContent.includes("malware") || lowerContent.includes("phishing")) {
    return "Threat Intelligence"
  }
  
  return "Technology"
}
