
import { useState } from "react";
import { Github, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Data Science", "UI/UX", "Web Development", "C++"];

  const projects = [
    // Data Science Projects
    {
      title: "Optimizing Food Delivery",
      description: "Time series forecasting model to optimize food delivery operations, predicting demand patterns and improving delivery efficiency using advanced statistical methods.",
      category: "Data Science",
      subcategory: "Time Series",
      tech: ["Python", "Time Series", "Pandas", "Matplotlib", "Forecasting"],
      github: "https://github.com/PrakritiSaldiya20/Optimizing-Food-Delivery-App",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      title: "QLoRA-LLaMA2-Tuning",
      description: "Parameter-efficient fine-tuning of LLaMA2 model using QLoRA technique, reducing memory requirements while maintaining performance for specific downstream tasks.",
      category: "Data Science",
      subcategory: "LLM Fine-tuning",
      tech: ["Python", "PyTorch", "QLoRA", "LLaMA2", "Transformers"],
      github: "https://github.com/PrakritiSaldiya20/QLoRA-LLaMA2-Tuning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning model to detect fraudulent credit card transactions using ensemble methods and anomaly detection techniques with high precision and recall.",
      category: "Data Science",
      subcategory: "Machine Learning",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Seaborn"],
      github: "https://github.com/PrakritiSaldiya20/Credit_Card_Fraud_Detection_ML_Project",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      title: "Credit Card Financial Dashboard",
      description: "Interactive Power BI dashboard providing comprehensive analysis of credit card transactions, spending patterns, and financial insights for business intelligence.",
      category: "Data Science",
      subcategory: "Power BI",
      tech: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
      github: "https://github.com/PrakritiSaldiya20/Credit_Crad_Financial_Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Face Recognition System",
      description: "Deep learning application for real-time face recognition using convolutional neural networks, capable of identifying and verifying individuals with high accuracy.",
      category: "Data Science",
      subcategory: "Deep Learning",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Face Recognition"],
      github: "https://github.com/PrakritiSaldiya20/Face-Recognition-System",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      title: "Sales Dashboard",
      description: "Comprehensive Power BI dashboard for sales analytics, featuring KPI tracking, trend analysis, and interactive visualizations for data-driven decision making.",
      category: "Data Science",
      subcategory: "Power BI",
      tech: ["Power BI", "DAX", "Sales Analytics", "KPI Tracking"],
      github: "https://github.com/PrakritiSaldiya20/PowerBI_dashboard_Project",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Skin Disease Classification",
      description: "Deep learning model for automated skin disease classification using computer vision techniques, helping in early diagnosis and medical decision support.",
      category: "Data Science",
      subcategory: "Deep Learning",
      tech: ["Python", "TensorFlow", "CNN", "Medical AI", "Image Classification"],
      github: "https://github.com/PrakritiSaldiya20/Skin-Disease-Classification",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    // UI/UX Projects
    {
      title: "Nike Homepage UI Clone",
      description: "Pixel-perfect recreation of Nike's homepage featuring modern design principles, responsive layout, and smooth user interactions with attention to detail.",
      category: "UI/UX",
      subcategory: "UI Design",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      github: "https://github.com/PrakritiSaldiya20/Nike-Homepage-UI-Clone",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
    },
    // Web Development Projects
    {
      title: "BlinkIt Clone (Frontend)",
      description: "Frontend clone of the popular grocery delivery app BlinkIt, featuring modern UI design, product catalog, and responsive layout using HTML and CSS.",
      category: "Web Development",
      subcategory: "Frontend",
      tech: ["HTML", "CSS", "Responsive Design", "Frontend Development"],
      github: "https://github.com/PrakritiSaldiya20/Blinkit-Clone---Frontend-HTML-CSS-",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Skillify - Online Learning Platform",
      description: "Comprehensive online learning platform with course management, user authentication, and interactive learning features designed for modern education needs.",
      category: "Web Development",
      subcategory: "Full Stack",
      tech: ["HTML", "CSS", "JavaScript", "Web Development", "Education Tech"],
      github: "https://github.com/PrakritiSaldiya20/_Skillify",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    // C++ Projects
    {
      title: "Huffman Coding (File Compression)",
      description: "Implementation of Huffman coding algorithm for efficient file compression and decompression, featuring visualization tools and performance optimization.",
      category: "C++",
      subcategory: "Algorithms",
      tech: ["C++", "Data Structures", "Algorithms", "File Compression", "Huffman Coding"],
      github: "https://github.com/PrakritiSaldiya20/HuffmanCoding/blob/main/image_encoding.cpp/visualization_and_fileCompression",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in data science, UI/UX design, web development, and programming
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-cyan-400" />
            <span className="text-gray-300 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                    : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-cyan-600/20 text-cyan-300">
                    {project.subcategory}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gray-800 hover:bg-gray-700 text-white w-full"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Interested in collaborating?</h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on new projects and explore innovative solutions. Let's connect!
              </p>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <a href="https://github.com/PrakritiSaldiya20" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View All Projects on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
