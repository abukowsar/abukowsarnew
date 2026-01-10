"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Award, Users, Calendar, CheckCircle, Star, Briefcase } from "lucide-react";
import ownImage from "@/assets/images/about.png";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const titles = [
    "Technical Project Manager",
    "PMP Certified Professional", 
    "AI Integration Specialist",
    "Digital Transformation Leader"
  ];

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 px-4 py-20 relative overflow-hidden"
    >

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 md:order-1 space-y-8">
          {/* Professional Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certified Project Management Professional</span>
          </div>

          {/* Main Header */}
          <div className="space-y-6">
            <div 
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Hello, I'm
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                Engr Abu Kowsar
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg text-muted-foreground">(</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">PMP</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">PMI-ACP</span>
                <span className="text-lg text-muted-foreground">)</span>
              </div>
            </div>

            {/* Animated Title */}
            <div 
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="h-16 flex items-center">
                <h3 className="text-3xl md:text-4xl font-bold text-accent leading-tight">
                  {titles[currentTitle]}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div 
              className={`transition-all duration-1000 delay-600 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Delivering high-impact projects across software, hardware, and manufacturing. 
                Expert in Agile methodologies, cross-functional team leadership, and digital transformation.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div 
            className={`transition-all duration-1000 delay-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-foreground">30% Faster Delivery</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-foreground">20% Higher Satisfaction</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-foreground">100+ Team Members Led</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all">
                <Briefcase className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-foreground">12+ Years Experience</span>
              </div>
            </div>
          </div>


        </div>

        <div className="order-1 lg:order-2 flex flex-col items-center justify-center space-y-8">
          {/* Beautiful Profile Image Section with Floating Cards */}
          <div
            className={`relative transition-all duration-700 delay-500 ${
              mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
            }`}
          >
            {/* Enhanced Profile Image Container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Gradient Background with Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/15 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Professional Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/30 to-blue-500/30 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent p-2">
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 ring-offset-4 ring-offset-transparent">
                    <Image
                      src={ownImage}
                      alt="Engr Abu Kowsar - Technical Project Manager"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    {/* Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Beautiful Floating Skill Cards */}
            
            {/* Top Left - Project Management */}
            <div className="absolute -top-8 -left-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-float group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Project Management</div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">PMP Certified</div>
                </div>
              </div>
            </div>

            {/* Top Right - AI Integration */}
            <div className="absolute -top-12 -right-12 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-float delay-300 group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">AI Integration</div>
                  <div className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">Specialist</div>
                </div>
              </div>
            </div>

            {/* Bottom Left - Agile Specialist */}
            <div className="absolute -bottom-8 -left-12 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-float delay-600 group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-green-500/25 transition-all duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Agile Specialist</div>
                  <div className="text-[10px] text-green-600 dark:text-green-400 font-semibold">PMI-ACP</div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Industrial Designer */}
            <div className="absolute -bottom-12 -right-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-float delay-900 group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-orange-500/25 transition-all duration-300">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Industrial Designer</div>
                  <div className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold">12+ Years</div>
                </div>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute top-1/4 -left-16 w-24 h-24 bg-gradient-to-br from-teal-400/15 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-16 w-28 h-28 bg-gradient-to-br from-purple-400/15 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Professional Content Below Image - No Card */}
          <div 
            className={`transition-all duration-1000 delay-1000 w-full max-w-sm ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Professional Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Engr Abu Kowsar
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold">PMP</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold">PMI-ACP</span>
              </div>
              <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">
                Technical Project Manager
              </p>
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Available</span>
                <span className="text-sm text-green-600 dark:text-green-400">Part-time / Consulting</span>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="mb-8">
              <button
                onClick={handleDownloadResume}
                className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105 relative overflow-hidden"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                <span>Download Resume (PDF)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>

            {/* Social Links - Single Row */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800/70 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg font-medium transition-all hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
              >
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 rounded-lg font-medium transition-all hover:scale-105 border border-blue-200/50 dark:border-blue-800/50"
              >
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 rounded-lg font-medium transition-all hover:scale-105 border border-green-200/50 dark:border-green-800/50"
              >
                <span className="text-sm">Upwork</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float.delay-300 {
          animation-delay: 0.3s;
        }
        
        .animate-float.delay-600 {
          animation-delay: 0.6s;
        }
        
        .animate-float.delay-900 {
          animation-delay: 0.9s;
        }
        
        @keyframes animate-spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: animate-spin-slow 25s linear infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}
