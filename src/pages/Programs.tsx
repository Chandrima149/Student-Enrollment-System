import { Link } from "react-router-dom";
import { Code, Brain, Database, FileCode, Layers, GraduationCap, ArrowRight, Check, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const programs = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Master both frontend and backend development with React, Node.js, and modern databases. Build production-ready applications from scratch.",
    duration: "6 months",
    students: 2500,
    rating: 4.9,
    price: "₹19,999",
    category: "Engineering & Tech",
    icon: <Code className="w-8 h-8 text-foreground" />,
    curriculum: ["HTML, CSS, JavaScript", "React.js & Redux", "Node.js & Express", "MongoDB & PostgreSQL", "REST APIs & GraphQL", "Deployment & DevOps"],
    projects: ["E-commerce Platform", "Social Media App", "Real-time Chat", "Portfolio Website"],
  },
  {
    id: "aiml",
    title: "AI/ML Engineering",
    description: "Deep dive into machine learning, neural networks, and AI applications. Learn Python, TensorFlow, and deploy ML models.",
    duration: "8 months",
    students: 1800,
    rating: 4.8,
    price: "₹29,999",
    category: "Engineering & Tech",
    icon: <Brain className="w-8 h-8 text-foreground" />,
    curriculum: ["Python Programming", "Statistics & Probability", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "NLP & Computer Vision", "Model Deployment"],
    projects: ["Image Classification", "Sentiment Analysis", "Recommendation System", "Chatbot Development"],
  },
  {
    id: "java",
    title: "Java Development",
    description: "Comprehensive Java programming covering core concepts, Spring framework, and enterprise application development.",
    duration: "5 months",
    students: 2100,
    rating: 4.7,
    price: "₹15,999",
    category: "Engineering & Tech",
    icon: <FileCode className="w-8 h-8 text-foreground" />,
    curriculum: ["Core Java & OOPs", "Collections Framework", "Spring Boot", "Hibernate & JPA", "Microservices", "Testing & CI/CD"],
    projects: ["Banking Application", "Inventory System", "API Gateway", "Microservices Architecture"],
  },
  {
    id: "data-analyst",
    title: "Data Analytics",
    description: "Learn data visualization, SQL, Python for analytics, and business intelligence tools to become a data-driven decision maker.",
    duration: "4 months",
    students: 3200,
    rating: 4.9,
    price: "₹12,999",
    category: "Engineering & Tech",
    icon: <Database className="w-8 h-8 text-foreground" />,
    curriculum: ["Excel Advanced", "SQL & Database Management", "Python for Data Analysis", "Power BI & Tableau", "Statistical Analysis", "Data Storytelling"],
    projects: ["Sales Dashboard", "Customer Segmentation", "Market Analysis", "Financial Reports"],
  },
  {
    id: "sql",
    title: "SQL & Database",
    description: "Master database design, SQL queries, and database administration. Work with MySQL, PostgreSQL, and NoSQL databases.",
    duration: "3 months",
    students: 1500,
    rating: 4.8,
    price: "₹10,999",
    category: "Engineering & Tech",
    icon: <Layers className="w-8 h-8 text-foreground" />,
    curriculum: ["SQL Fundamentals", "Advanced Queries", "Database Design", "Performance Optimization", "NoSQL Databases", "Database Administration"],
    projects: ["Database Design Project", "Query Optimization", "Data Migration", "Backup & Recovery"],
  },
  {
    id: "bootcamp",
    title: "School Bootcamps (8-12)",
    description: "Introducing students to programming fundamentals, web development basics, and computational thinking from an early age.",
    duration: "3 months",
    students: 5000,
    rating: 4.9,
    price: "₹9,999",
    category: "School Bootcamps",
    icon: <GraduationCap className="w-8 h-8 text-foreground" />,
    curriculum: ["Scratch Programming", "HTML & CSS Basics", "JavaScript Intro", "Python Fundamentals", "App Development Intro", "Project Building"],
    projects: ["Interactive Website", "Simple Game", "Calculator App", "Personal Portfolio"],
  },
];

const comparisonData = [
  { feature: "Duration", fullstack: "6 months", aiml: "8 months", java: "5 months", dataAnalyst: "4 months", sql: "3 months", bootcamp: "3 months" },
  { feature: "Price", fullstack: "₹19,999", aiml: "₹29,999", java: "₹15,999", dataAnalyst: "₹12,999", sql: "₹10,999", bootcamp: "₹9,999" },
  { feature: "Live Projects", fullstack: "4+", aiml: "4+", java: "4+", dataAnalyst: "4+", sql: "4+", bootcamp: "4+" },
  { feature: "Mentorship", fullstack: "1:1", aiml: "1:1", java: "1:1", dataAnalyst: "1:1", sql: "1:1", bootcamp: "Group" },
  { feature: "Placement Support", fullstack: "Yes", aiml: "Yes", java: "Yes", dataAnalyst: "Yes", sql: "Yes", bootcamp: "No" },
  { feature: "Certificate", fullstack: "Yes", aiml: "Yes", java: "Yes", dataAnalyst: "Yes", sql: "Yes", bootcamp: "Yes" },
];

const testimonials = [
  {
    name: "Vikram Singh",
    role: "Frontend Developer",
    company: "Flipkart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content: "The Full-Stack program gave me exactly the skills I needed. Got placed at Flipkart with a 12 LPA package!",
    rating: 5,
    program: "Full-Stack Development",
  },
  {
    name: "Sneha Saha",
    role: "Data Scientist",
    company: "Swiggy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    content: "Best investment in my career. The AI/ML curriculum is on par with top universities. Highly recommend!",
    rating: 5,
    program: "AI/ML Engineering",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Program Catalog
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive programs designed to transform you into an industry-ready professional
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                id={program.id}
                variant="glass"
                className="group animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-1 bg-secondary rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mt-4">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{program.students.toLocaleString()}+ enrolled</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{program.rating} rating</span>
                    </div>
                  </div>

                  {/* Curriculum */}
                  <div>
                    <h4 className="font-semibold mb-3">Curriculum</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.curriculum.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="font-semibold mb-3">Live Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.projects.map((project, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-secondary text-foreground rounded-full"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <p className="text-2xl font-display font-bold">{program.price}</p>
                    </div>
                    <Button variant="hero" asChild>
                      <Link to="/#enroll">
                        Enroll Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Programs */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Compare Programs
            </h2>
            <p className="text-muted-foreground">
              Find the perfect program that matches your goals
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="font-semibold">Feature</TableHead>
                  <TableHead className="text-center">Full-Stack</TableHead>
                  <TableHead className="text-center">AI/ML</TableHead>
                  <TableHead className="text-center">Java</TableHead>
                  <TableHead className="text-center">Data Analyst</TableHead>
                  <TableHead className="text-center">SQL</TableHead>
                  <TableHead className="text-center">Bootcamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="border-border">
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.fullstack}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.aiml}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.java}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.dataAnalyst}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.sql}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.bootcamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Program Fits You?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Take our quick quiz and get personalized program recommendations based on your goals and interests
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/quiz">
              Take the Quiz
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
