
import { Download, GraduationCap, Award, Code, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1LpejJFhml5IB-KPbJFwA64mD9CRyUCNt/view?usp=sharing", "_blank");
  };

  const skills = {
    "Courses": ["Data Structures and Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
    "Programming Languages": ["Python", "C++"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools": ["Git", "Jira", "Power BI", "Excel", "Figma"],
    "Technical Expertise": ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Computer Vision", "Time Series Analysis", "Big Data"],
    "Web Development": ["HTML", "CSS", "Javascript"]
  };

  const projects = [
    {
      title: "Food Delivery Forecasting with LSTM & SARIMAX",
      description: "Time series forecasting for demand prediction",
      tech: ["Python", "LSTM", "SARIMAX", "Pandas"]
    },
    {
      title: "Psoriasis Detection using ResNet50",
      description: "Medical image classification for early diagnosis",
      tech: ["TensorFlow", "ResNet50", "OpenCV", "Flask"]
    },
    {
      title: "Heart Disease Prediction",
      description: "ECG image analysis for cardiovascular risk assessment",
      tech: ["Scikit-learn", "OpenCV", "Numpy"]
    }
  ];

  const certifications = [
    "PW Skills – Data Science 2.0 Course - May 2025",
    "Exploratory Data Analysis for Machine Learning – IBM - Mar 2024",
    "Algorithmic Toolbox – UC San Diego - Apr 2024",
    "Python Using AI – AI For Techies"
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Resume
          </h1>
          <Button 
            onClick={handleDownload}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Information */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-cyan-400">Prakriti Saldiya</CardTitle>
              <p className="text-center text-xl text-gray-300">Aspiring Data Scientist | AI & ML Enthusiast</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>saldiyaprakriti@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span>+91-9818191146</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-cyan-400" />
                  <a href="https://www.linkedin.com/in/prakriti-saldiya-01934b259/" className="hover:text-cyan-400">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-cyan-400" />
                  <a href="https://github.com/PrakritiSaldiya20" className="hover:text-cyan-400">
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate and dedicated aspiring data scientist with strong foundation in machine learning, 
                deep learning, and statistical analysis. Experienced in developing end-to-end ML solutions 
                for real-world problems including healthcare diagnostics, time series forecasting, and 
                recommendation systems. Committed to leveraging data-driven insights to create meaningful 
                impact and drive innovation.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor of Technology in Computer Science</h3>
                  <p className="text-gray-300">Bennett University • 2022 - 2026</p>
                  <p className="text-cyan-400 font-semibold mb-2">CGPA: 8.95/10</p>
                  <p className="text-gray-400 mt-2">
                    Relevant Coursework: Data Structures & Algorithms, Database Management Systems, 
                    Operating Systems, Computer Networks, Machine Learning, Artificial Intelligence
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                <Code className="h-6 w-6" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-white mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-cyan-600/20 text-cyan-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Projects */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Key Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {index < projects.length - 1 && <Separator className="mt-4 bg-gray-700" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-300">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">English</span>
                  <span className="text-gray-400">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Hindi</span>
                  <span className="text-gray-400">Native</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
