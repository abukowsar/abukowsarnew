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

          {/* Action Buttons */}
          <div 
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/25 hover:scale-105 relative overflow-hidden"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume (PDF)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <Link
                href="#contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Calendar size={20} />
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>

          {/* Availability Status */}
          <div 
            className={`transition-all duration-1000 delay-1200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Available for Projects</span>
              </div>
              <span className="text-sm text-green-600 dark:text-green-400">Part-time / Consulting</span>
            </div>
          </div>

          {/* Social Links */}
          <div 
            className={`transition-all duration-1000 delay-1400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 rounded-lg font-medium transition-all hover:scale-105"
              >
                <span>LinkedIn</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-700 rounded-lg font-medium transition-all hover:scale-105"
              >
                <span>GitHub</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-600 hover:text-green-700 rounded-lg font-medium transition-all hover:scale-105"
              >
                <span>Upwork</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className=" order-1 md:order-2 md:flex flex-col items-center justify-center relative h-[550px] md:h-[500px]">
          {/* Main avatar circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-60 h-60 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center border-2 border-accent/20">
              <div
                className={`text-8xl transition-transform duration-1000 ${
                  mounted ? "scale-100" : "scale-75"
                }`}
              >
                <Image
                  src={ownImage}
                  alt="Avatar"
                  className="rounded-full object-cover"
                  width={220}
                  height={220}
                />
              </div>
            </div>
          </div>

          {/* Floating card - React */}
          <div
            className={`absolute  top-4 left-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted ? "float 6s ease-in-out infinite" : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">Project</p>
                <p className="text-xs text-muted-foreground">Management</p>
              </div>
            </div>
          </div>

          {/* Floating card - Next.js */}
          <div
            className={`absolute bottom-8 right-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted ? "float 8s ease-in-out infinite 1s" : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">AI</p>
                <p className="text-xs text-muted-foreground">Integration</p>
              </div>
            </div>
          </div>

          {/* Floating card - TypeScript */}
          <div
            className={`absolute top-1/7 md:top-1/3 right-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted
                ? "float 7s ease-in-out infinite 0.5s"
                : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">
                  Agile 
                </p>
                <p className="text-xs text-muted-foreground">Specialist</p>
              </div>
            </div>
          </div>

          {/* Floating card - Tailwind */}
          <div
            className={`absolute bottom-12 left-0 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted
                ? "float 8s ease-in-out infinite 1.5s"
                : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <div>
                <p className="font-semibold text-sm text-foreground">
                  Industrial
                </p>
                <p className="text-xs text-muted-foreground">Designer</p>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

          {/* Download Resume & Portfolio Quick Access */}
          <div
            className={`absolute -bottom-5 md:bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              {/* Download Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-xl font-semibold hover:from-accent/90 hover:to-accent/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/25 text-sm cursor-pointer hover:scale-105"
              >
                <Download size={16} />
                Download Resume (PDF)
              </button>

              {/* Quick Portfolio Access */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>or</span>
                <Link
                  href="/portfolio"
                  className="text-accent hover:text-accent/80 font-medium underline underline-offset-2 hover:no-underline transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Showcase - Positioned below the avatar */}
          <div
            className={`absolute -bottom-32 md:-bottom-28 left-1/2 transform -translate-x-1/2 w-full max-w-md transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              animation: mounted ? "float 10s ease-in-out infinite 2s" : "none",
            }}
          >
            <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-3">
                <h3 className="text-sm font-semibold text-foreground mb-1 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  Featured Projects
                </h3>
                <p className="text-xs text-muted-foreground">Recent work highlights</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-lg p-2 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">AI Fact-Checker</div>
                  <div className="text-xs text-muted-foreground">Bangla Platform</div>
                </div>
                
                <div className="group bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg p-2 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">LLM Platform</div>
                  <div className="text-xs text-muted-foreground">Bangla AI</div>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-lg p-2 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">ERP System</div>
                  <div className="text-xs text-muted-foreground">Enterprise</div>
                </div>
                
                <div className="group bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-lg p-2 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 cursor-pointer">
                  <div className="text-xs font-medium text-foreground mb-1">CMS Platform</div>
                  <div className="text-xs text-muted-foreground">Digital Solution</div>
                </div>
              </div>
              
              <Link
                href="/portfolio"
                className="block w-full text-center px-3 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg text-xs font-medium hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
              >
                View More Projects →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
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
          animation: animate-spin-slow 20s linear infinite;
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
      `}</style>
    </section>
  );
}
