
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="animate-fade-in">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Prakriti Saldiya
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-300 mb-4">
                  Data Scientist | AI & ML Enthusiast
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                  Transforming raw data into actionable insights and building intelligent systems that solve real-world problems through the power of machine learning and artificial intelligence
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button 
                    asChild 
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg group"
                  >
                    <Link to="/resume">
                      View Resume
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg group"
                  >
                    <Link to="/projects">
                      See Projects
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/prakriti-saldiya-01934b259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-400/10 rounded-full"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/PrakritiSaldiya20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-400/10 rounded-full"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:saldiyaprakriti@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-400/10 rounded-full"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/641dfc75-eb93-4495-a1e8-81f2067880ac.png"
                      alt="Prakriti Saldiya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Welcome to my digital space</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about leveraging data science and artificial intelligence to solve real-world problems. 
              From predictive modeling to deep learning applications, I enjoy exploring the intersection of technology, 
              data, and innovation to create impactful solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Prakriti Saldiya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
