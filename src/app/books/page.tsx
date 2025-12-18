"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, BookOpen, Download, ExternalLink, ShoppingCart } from "lucide-react";
import Footer from "@/components/footer";

// Import book cover images
import book1 from "@/assets/images/projects/img-1.jpg";
import book2 from "@/assets/images/projects/img-2.png";
import book3 from "@/assets/images/projects/img-3.png";
import book4 from "@/assets/images/projects/img-4.png";
import book5 from "@/assets/images/projects/img-5.png";
import book6 from "@/assets/images/projects/img-6.png";

export default function Books() {
  const allBooks = [
    {
      id: 1,
      title: "Project Management Excellence",
      subtitle: "A Comprehensive Guide to Modern PM Practices",
      author: "Abu Kowsar",
      description: "Master the art of project management with proven methodologies, real-world case studies, and practical frameworks for success. This comprehensive guide covers traditional and agile approaches, risk management, stakeholder engagement, and leadership strategies.",
      category: "Project Management",
      rating: 4.8,
      reviews: 156,
      pages: 320,
      language: "English",
      publishYear: "2024",
      price: "$29.99",
      image: book1,
      color: "bg-blue-500",
      icon: "📊",
      downloadUrl: "#",
      previewUrl: "#",
      bestseller: true
    },
    {
      id: 2,
      title: "AI Integration in Business",
      subtitle: "Transforming Organizations with Artificial Intelligence",
      author: "Abu Kowsar",
      description: "Explore practical strategies for implementing AI solutions in business processes, from automation to decision-making systems. Learn how to identify AI opportunities, manage implementation challenges, and measure ROI.",
      category: "Technology",
      rating: 4.9,
      reviews: 203,
      pages: 280,
      language: "English",
      publishYear: "2024",
      price: "$34.99",
      image: book2,
      color: "bg-purple-500",
      icon: "🤖",
      downloadUrl: "#",
      previewUrl: "#",
      bestseller: true
    },
    {
      id: 3,
      title: "Agile Leadership Handbook",
      subtitle: "Leading Teams in the Digital Age",
      author: "Abu Kowsar",
      description: "Develop agile leadership skills to navigate complex projects and inspire high-performing teams in dynamic environments. Covers servant leadership, team dynamics, and change management.",
      category: "Leadership",
      rating: 4.7,
      reviews: 128,
      pages: 250,
      language: "English",
      publishYear: "2023",
      price: "$27.99",
      image: book3,
      color: "bg-green-500",
      icon: "🎯",
      downloadUrl: "#",
      previewUrl: "#",
      bestseller: false
    },
    {
      id: 4,
      title: "Digital Transformation Guide",
      subtitle: "Strategies for Modern Organizations",
      author: "Abu Kowsar",
      description: "Navigate the digital transformation journey with proven frameworks, case studies, and implementation strategies. Learn how to build digital capabilities and drive organizational change.",
      category: "Digital Strategy",
      rating: 4.6,
      reviews: 94,
      pages: 300,
      language: "English",
      publishYear: "2023",
      price: "$31.99",
      image: book4,
      color: "bg-orange-500",
      icon: "🚀",
      downloadUrl: "#",
      previewUrl: "#",
      bestseller: false
    },
    {
      id: 5,
      title: "Cybersecurity for Managers",
      subtitle: "Protecting Digital Assets in the Modern Era",
      author: "Abu Kowsar",
      description: "Essential cybersecurity knowledge for business leaders and project managers. Covers risk assessment, security frameworks, incident response, and building security-aware cultures.",
      category: "Security",
      rating: 4.5,
      reviews: 87,
      pages: 275,
      language: "English",
      publishYear: "2023",
      price: "$28.99",
      image: book5,
      color: "bg-red-500",
      icon: "🔐",
      downloadUrl: "#",
      previewUrl: "#",
      bestseller: false
    },
    {
      id: 6,
      title: "Innovation Management",
      subtitle: "Driving Growth Through Creative Solutions",
      author: "Abu Kowsar",
      description: "Learn how to foster innovation within organizations, manage creative processes, and turn ideas into successful products and services. Includes frameworks for innovation strategy and culture building.",
      category: "Innovation",
      rating: 4.4,
      reviews: 72,
      pages: 290,
      language: "English",
      publishYear: "2022",
      price: "$26.99",
      image: book6,
      color: "bg-indigo-500",
      icon: "💡",
      downloadUrl: "#",
      previewUrl: "#",
      bestseller: false
    }
  ];

  const categories = ["All", "Project Management", "Technology", "Leadership", "Digital Strategy", "Security", "Innovation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks = selectedCategory === "All" 
    ? allBooks 
    : allBooks.filter(book => book.category === selectedCategory);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header - Hero Style */}
        <div className="bg-gradient-to-br from-background via-background to-accent/5 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center md:text-left space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Engr Abu Kowsar (PMP, PMI-ACP)
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-accent leading-tight">
                    Featured Books
                  </h2>
                </div>

                {/* Availability Section */}
                <div className="flex justify-between items-center py-4">
                  <div>
                    <p className="text-lg font-semibold text-muted-foreground">Publications</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-muted-foreground">Digital & Print</p>
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="w-full">
                  <button
                    onClick={handleDownloadResume}
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
                    Comprehensive guides and handbooks covering project management, technology integration, 
                    and leadership in the digital age. Available in digital and print formats.
                  </p>
                </div>
              </div>

              {/* Right Side - Stats & Info */}
              <div className="space-y-8">
                {/* Book Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">{allBooks.length}+</p>
                    <p className="text-muted-foreground">Published Books</p>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">{categories.length - 1}</p>
                    <p className="text-muted-foreground">Categories</p>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">4.7</p>
                    <p className="text-muted-foreground">Avg Rating</p>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-2">740+</p>
                    <p className="text-muted-foreground">Total Reviews</p>
                  </div>
                </div>

                {/* Quick Navigation */}
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Popular Categories</h3>
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

        {/* Books Grid */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all hover:shadow-xl hover:shadow-accent/10"
                >
                  {book.bestseller && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-bold">
                        BESTSELLER
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row">
                    {/* Book Cover */}
                    <div className="relative md:w-48 h-64 md:h-auto bg-gradient-to-br from-secondary to-muted overflow-hidden">
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Icon Badge */}
                      <div
                        className={`absolute -bottom-4 -right-4 w-16 h-16 ${book.color} rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                      >
                        <span className="text-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                          {book.icon}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm text-foreground rounded-lg text-xs font-semibold">
                          {book.category}
                        </span>
                      </div>
                    </div>

                    {/* Book Details */}
                    <div className="flex-1 p-6">
                      {/* Title and Author */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                          {book.title}
                        </h3>
                        <p className="text-sm text-accent font-medium mb-2">{book.subtitle}</p>
                        <p className="text-sm text-muted-foreground">by {book.author}</p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(book.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-foreground">{book.rating}</span>
                        <span className="text-sm text-muted-foreground">({book.reviews} reviews)</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {book.description}
                      </p>

                      {/* Book Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary/60" />
                          <span className="text-muted-foreground">{book.pages} pages</span>
                        </div>
                        <div className="text-muted-foreground">
                          Published: {book.publishYear}
                        </div>
                        <div className="text-muted-foreground">
                          Language: {book.language}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {book.price}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <a
                          href={book.downloadUrl}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                        <a
                          href={book.previewUrl}
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Preview
                        </a>
                        <button className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                          <ShoppingCart className="w-4 h-4" />
                          Buy
                        </button>
                      </div>
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
              Looking for Custom Training or Consultation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I offer personalized training sessions and consultation based on the topics covered in my books.
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
      
      <Footer />
    </>
  );
}