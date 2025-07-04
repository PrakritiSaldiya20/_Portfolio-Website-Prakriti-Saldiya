
import { GraduationCap, Award, Code, Brain, Heart, Microscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = {
    "Courses": ["Data Structures and Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
    "Programming Languages": ["Python", "C++"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools": ["Git", "Jira", "Power BI", "Excel", "Figma"],
    "Technical Expertise": ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Computer Vision", "Time Series Analysis", "Big Data"],
    "Web Development": ["HTML", "CSS", "Javascript"]
  };

  const interests = [
    { icon: Brain, title: "Natural Language Processing", description: "Understanding and processing human language" },
    { icon: Microscope, title: "Computer Vision", description: "Teaching machines to see and interpret images" },
    { icon: Heart, title: "Healthcare AI", description: "Applying AI to improve medical diagnostics" },
    { icon: Code, title: "Time Series Analysis", description: "Forecasting and pattern recognition in temporal data" }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about transforming data into meaningful insights and building intelligent systems that make a difference
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-16">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">My Journey</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hello! I'm Prakriti Saldiya, an aspiring data scientist with a deep passion for artificial intelligence 
                  and machine learning. My journey into the world of data science began with a fascination for how patterns 
                  in data can reveal profound insights about our world.
                </p>
                <p>
                  I believe in the power of data to solve complex problems and create positive impact. Whether it's predicting 
                  health outcomes, optimizing business processes, or building intelligent systems, I'm driven by the potential 
                  to make technology work for people.
                </p>
                <p>
                  When I'm not coding or analyzing data, you'll find me exploring the latest research papers, contributing to 
                  open-source projects, or writing about my learnings in the field of AI and machine learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Education</h2>
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Technology in Computer Science</h3>
                  <p className="text-gray-300 mb-2">Bennett University • 2022-2026</p>
                  <p className="text-cyan-400 font-semibold mb-2">CGPA: 8.95</p>
                  <p className="text-gray-400">
                    Specialized in Data Structures, Algorithms, Machine Learning, Database Systems, and Software Engineering
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Certifications</h2>
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 p-3 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">PW Skills – Data Science 2.0 Course</h3>
                    <p className="text-gray-300 mb-2">May 2025</p>
                    <p className="text-gray-400">
                      Comprehensive data science course covering machine learning, statistics, and data analysis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 p-3 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Exploratory Data Analysis for Machine Learning</h3>
                    <p className="text-gray-300 mb-2">IBM • Mar 2024</p>
                    <p className="text-gray-400">
                      Data exploration techniques and statistical analysis for machine learning applications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 p-3 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Algorithmic Toolbox</h3>
                    <p className="text-gray-300 mb-2">UC San Diego • Apr 2024</p>
                    <p className="text-gray-400">
                      Advanced algorithms and data structures for computational problem solving
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 p-3 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Python Using AI</h3>
                    <p className="text-gray-300 mb-2">AI For Techies</p>
                    <p className="text-gray-400">
                      Python programming with AI applications and machine learning integration
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Areas of Interest</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-900/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-600 p-3 rounded-full">
                      <interest.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{interest.title}</h3>
                      <p className="text-gray-400">{interest.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
