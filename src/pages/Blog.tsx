
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Why I Love Machine Learning: A Journey into Data Science",
      excerpt: "Exploring my passion for machine learning and how it shapes the way we understand and interact with data. From my first 'Hello World' in Python to building complex neural networks...",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Personal",
      tags: ["Machine Learning", "Career", "Data Science"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      title: "Top 5 Python Libraries Every Data Scientist Should Master",
      excerpt: "A comprehensive guide to the essential Python libraries that form the backbone of modern data science: NumPy, Pandas, Matplotlib, Scikit-learn, and TensorFlow...",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Tutorial",
      tags: ["Python", "Libraries", "Tutorial"],
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop"
    },
    {
      title: "How I Built My First Recommender System",
      excerpt: "Step-by-step walkthrough of creating a movie recommendation system using collaborative filtering. Learn about the challenges, solutions, and key insights gained...",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Project",
      tags: ["Recommendation Systems", "Collaborative Filtering", "Project"],
      image: "https://images.unsplash.com/photo-1489599818821-f2d76ba6c17b?w=400&h=250&fit=crop"
    },
    {
      title: "Understanding LSTM vs SARIMA for Time Series Forecasting",
      excerpt: "Deep dive into two powerful approaches for time series prediction. When to use statistical methods like SARIMA versus deep learning approaches like LSTM networks...",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Technical",
      tags: ["LSTM", "SARIMA", "Time Series", "Forecasting"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "The Role of AI in Healthcare: My Psoriasis Detection Project",
      excerpt: "Sharing insights from developing a deep learning model for medical diagnosis. Discussing the challenges of working with medical data and the potential impact of AI in healthcare...",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Healthcare AI",
      tags: ["Healthcare", "Deep Learning", "Medical AI", "ResNet"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      title: "Data Visualization Best Practices: Making Your Data Tell a Story",
      excerpt: "Learn how to create compelling visualizations that communicate insights effectively. Tips, tricks, and common pitfalls to avoid when presenting data...",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Visualization",
      tags: ["Data Visualization", "Storytelling", "Best Practices"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Personal", "Tutorial", "Project", "Technical", "Healthcare AI", "Visualization"];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing my journey in data science, machine learning insights, and lessons learned along the way
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <BookOpen className="h-5 w-5 text-cyan-400" />
            <span className="text-gray-300 font-medium">Browse by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <Badge 
                  className="absolute top-4 left-4 bg-cyan-600/90 text-white"
                >
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white group/btn"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to get notified about new blog posts and insights into the world of data science and AI.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
