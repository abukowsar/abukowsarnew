"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Download, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import Header from "@/components/header";
import ImageLightbox from "@/components/image-lightbox";
import Footer from "@/components/footer";

// Import project images
import img1 from "@/assets/images/projects/img-1.jpg";
import img2 from "@/assets/images/projects/img-13.png";
import img3 from "@/assets/images/projects/img-14.png";
import img4 from "@/assets/images/projects/img-15.png";
import img5 from "@/assets/images/projects/img-2.png";
import img6 from "@/assets/images/projects/img-3.png";
import img7 from "@/assets/images/projects/img-4.png";
import img8 from "@/assets/images/projects/img-5.png";

export default function Portfolio() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
  }>({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
  });

  const [fullscreenImage, setFullscreenImage] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
  }>({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
  });

  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const allProjects = [
    {
      title: "AI Based Factchecking Platform (Khoj-BD)",
      description: "Artificial Intelligence Powered First Bangla Fact Checking Platform. This platform uses advanced NLP and machine learning algorithms to verify news and information in Bengali language.",
      longDescription: "A comprehensive fact-checking platform that leverages AI to combat misinformation in Bengali content. Features include automated content analysis, source verification, and real-time fact-checking capabilities.",
      tags: ["React", "Node.js", "MongoDB", "AI/ML", "NLP"],
      image: img1,
      category: "AI/ML",
      year: "2024",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "LLM Platform (Bangla AI)",
      description: "Modern AI solutions for all your Bengali language needs - anytime, anywhere. A comprehensive language model platform specifically designed for Bengali language processing.",
      longDescription: "An advanced Large Language Model platform optimized for Bengali language tasks including text generation, translation, summarization, and conversational AI capabilities.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI", "Python"],
      image: img2,
      category: "AI/ML",
      year: "2024",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Complaint Management System",
      description: "A Digital Solution centralizes and automates the process of handling complaints. Streamlines workflow from complaint submission to resolution with real-time tracking.",
      longDescription: "Enterprise-grade complaint management system with automated routing, priority assignment, SLA tracking, and comprehensive reporting dashboard for efficient complaint resolution.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      image: img3,
      category: "Enterprise",
      year: "2023",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "ERP System",
      description: "Enterprise Resource Planning system is a type of business management software that integrates various business processes and functions into a unified system.",
      longDescription: "Comprehensive ERP solution covering inventory management, financial accounting, HR management, and supply chain optimization with real-time analytics and reporting.",
      tags: ["React", "Storybook", "CSS-in-JS", "PostgreSQL", "Docker"],
      image: img4,
      category: "Enterprise",
      year: "2023",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    // Additional projects
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features including AI-powered recommendations, real-time inventory management, and seamless payment integration.",
      longDescription: "Full-stack e-commerce platform with microservices architecture, featuring AI-driven product recommendations, advanced search capabilities, and multi-vendor support.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Docker"],
      image: img5,
      category: "E-commerce",
      year: "2023",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform for hospitals and clinics with patient management, appointment scheduling, and medical records.",
      longDescription: "Digital healthcare solution featuring patient portal, doctor dashboard, appointment management, electronic health records, and telemedicine capabilities.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      image: img6,
      category: "Healthcare",
      year: "2022",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS platform for educational institutions with course management, student tracking, and interactive learning tools.",
      longDescription: "Full-featured learning management system with video streaming, assignment management, grade tracking, and collaborative learning tools.",
      tags: ["React", "Express.js", "MySQL", "WebRTC", "AWS S3"],
      image: img7,
      category: "Education",
      year: "2023",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
      longDescription: "Comprehensive real estate solution featuring property search, virtual reality tours, mortgage calculations, and CRM for real estate agents.",
      tags: ["Vue.js", "Laravel", "PostgreSQL", "Stripe", "Google Maps API"],
      image: img8,
      category: "Real Estate",
      year: "2022",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "AI/ML", "Enterprise", "E-commerce", "Healthcare", "Education", "Real Estate"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      imageAlt,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      ...lightboxState,
      isOpen: false,
    });
  };

  const handleFullscreenImage = (imageSrc: string, imageAlt: string) => {
    setFullscreenImage({
      isOpen: true,
      imageSrc,
      imageAlt,
    });
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage({
      ...fullscreenImage,
      isOpen: false,
    });
    // Reset zoom and position
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Header - Hero Style */}
        <div className="bg-gradient-to-br from-background via-background to-accent/5 py-20">
          <div className="max-w-6xl mx-auto px-4">

            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center md:text-left space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                      Engr Abu Kowsar
                    </h1>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold">PMP</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold">PMI-ACP</span>
                  </div>
                </div>



                {/* Download Resume Button */}
                <div className="w-full">
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/resume.pdf";
                      link.download = "resume.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-teal-400/50 text-lg"
                  >
                    <Download size={20} />
                    Download Resume (PDF)
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-8 pt-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-800 font-medium text-lg transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors"
                  >
                    Upwork
                  </a>
                </div>

                {/* Description */}
                <div className="pt-4">
                  <p className="text-lg text-muted-foreground text-center md:text-left">
                    Explore my complete collection of projects, from AI-powered solutions to enterprise applications. 
                    Each project represents a unique challenge and innovative solution.
                  </p>
                </div>
              </div>

              {/* Right Side - Stats & Info */}
              <div className="space-y-8">
                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">{allProjects.length}+</p>
                    <p className="text-muted-foreground">Total Projects</p>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">{categories.length - 1}</p>
                    <p className="text-muted-foreground">Categories</p>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">100%</p>
                    <p className="text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">12+</p>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                </div>

                {/* Quick Navigation */}
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(1, 5).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="py-8 bg-background border-b">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden group/image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Fullscreen Button */}
                    <button
                      onClick={() => handleFullscreenImage(project.image.src, project.title)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group/image-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/90 text-foreground rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-yellow-500/90 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group/image-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      <ImageLightbox
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.imageSrc}
        imageAlt={lightboxState.imageAlt}
        onClose={handleCloseLightbox}
      />

      {/* Enhanced Fullscreen Image Modal with Zoom */}
      {fullscreenImage.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation Bar */}
          <div className="absolute top-4 left-4 z-60 flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="px-4 py-2 bg-white/10 text-white rounded-lg">
              <span className="text-sm font-medium">{fullscreenImage.imageAlt}</span>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute top-4 right-20 z-60 flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="Zoom Out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <div className="px-3 py-2 bg-white/10 text-white rounded-lg text-sm font-medium min-w-[60px] text-center">
              {Math.round(zoomLevel * 100)}%
            </div>
            <button
              onClick={handleZoomIn}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="Zoom In"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={handleResetZoom}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="Reset Zoom"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
          
          {/* Image Container with Zoom and Pan */}
          <div 
            className="relative max-w-full max-h-full overflow-hidden cursor-move"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <Image
              src={fullscreenImage.imageSrc}
              alt={fullscreenImage.imageAlt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-200 select-none"
              style={{
                transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              draggable={false}
            />
          </div>
          
          {/* Enhanced Image Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg">
            <p className="text-sm font-medium text-center">{fullscreenImage.imageAlt}</p>
            <p className="text-xs text-white/70 text-center mt-1">
              Use zoom controls • Drag to pan when zoomed • Click outside or press X to close
            </p>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={handleCloseFullscreen}
          ></div>
        </div>
      )}
      
      <Footer />
    </>
  );
}