// import { Link } from "react-router-dom";
// import { Code, Brain, Database, FileCode, Layers, GraduationCap, ArrowRight, Check, Clock, Users, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { TestimonialCard } from "@/components/TestimonialCard";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { cn } from "@/lib/utils";

// const programs = [
//   {
//     id: "fullstack",
//     title: "Full-Stack Development",
//     description: "Master both frontend and backend development with React, Node.js, and modern databases. Build production-ready applications from scratch.",
//     duration: "6 months",
//     students: 2500,
//     rating: 4.9,
//     price: "₹19,999",
//     category: "Engineering & Tech",
//     icon: <Code className="w-8 h-8 text-foreground" />,
//     curriculum: ["HTML, CSS, JavaScript", "React.js & Redux", "Node.js & Express", "MongoDB & PostgreSQL", "REST APIs & GraphQL", "Deployment & DevOps"],
//     projects: ["E-commerce Platform", "Social Media App", "Real-time Chat", "Portfolio Website"],
//   },
//   {
//     id: "aiml",
//     title: "AI/ML Engineering",
//     description: "Deep dive into machine learning, neural networks, and AI applications. Learn Python, TensorFlow, and deploy ML models.",
//     duration: "8 months",
//     students: 1800,
//     rating: 4.8,
//     price: "₹29,999",
//     category: "Engineering & Tech",
//     icon: <Brain className="w-8 h-8 text-foreground" />,
//     curriculum: ["Python Programming", "Statistics & Probability", "Machine Learning Algorithms", "Deep Learning & Neural Networks", "NLP & Computer Vision", "Model Deployment"],
//     projects: ["Image Classification", "Sentiment Analysis", "Recommendation System", "Chatbot Development"],
//   },
//   {
//     id: "java",
//     title: "Java Development",
//     description: "Comprehensive Java programming covering core concepts, Spring framework, and enterprise application development.",
//     duration: "5 months",
//     students: 2100,
//     rating: 4.7,
//     price: "₹15,999",
//     category: "Engineering & Tech",
//     icon: <FileCode className="w-8 h-8 text-foreground" />,
//     curriculum: ["Core Java & OOPs", "Collections Framework", "Spring Boot", "Hibernate & JPA", "Microservices", "Testing & CI/CD"],
//     projects: ["Banking Application", "Inventory System", "API Gateway", "Microservices Architecture"],
//   },
//   {
//     id: "data-analyst",
//     title: "Data Analytics",
//     description: "Learn data visualization, SQL, Python for analytics, and business intelligence tools to become a data-driven decision maker.",
//     duration: "4 months",
//     students: 3200,
//     rating: 4.9,
//     price: "₹12,999",
//     category: "Engineering & Tech",
//     icon: <Database className="w-8 h-8 text-foreground" />,
//     curriculum: ["Excel Advanced", "SQL & Database Management", "Python for Data Analysis", "Power BI & Tableau", "Statistical Analysis", "Data Storytelling"],
//     projects: ["Sales Dashboard", "Customer Segmentation", "Market Analysis", "Financial Reports"],
//   },
//   {
//     id: "sql",
//     title: "SQL & Database",
//     description: "Master database design, SQL queries, and database administration. Work with MySQL, PostgreSQL, and NoSQL databases.",
//     duration: "3 months",
//     students: 1500,
//     rating: 4.8,
//     price: "₹10,999",
//     category: "Engineering & Tech",
//     icon: <Layers className="w-8 h-8 text-foreground" />,
//     curriculum: ["SQL Fundamentals", "Advanced Queries", "Database Design", "Performance Optimization", "NoSQL Databases", "Database Administration"],
//     projects: ["Database Design Project", "Query Optimization", "Data Migration", "Backup & Recovery"],
//   },
//   {
//     id: "bootcamp",
//     title: "School Bootcamps (8-12)",
//     description: "Introducing students to programming fundamentals, web development basics, and computational thinking from an early age.",
//     duration: "3 months",
//     students: 5000,
//     rating: 4.9,
//     price: "₹9,999",
//     category: "School Bootcamps",
//     icon: <GraduationCap className="w-8 h-8 text-foreground" />,
//     curriculum: ["Scratch Programming", "HTML & CSS Basics", "JavaScript Intro", "Python Fundamentals", "App Development Intro", "Project Building"],
//     projects: ["Interactive Website", "Simple Game", "Calculator App", "Personal Portfolio"],
//   },
// ];

// const comparisonData = [
//   { feature: "Duration", fullstack: "6 months", aiml: "8 months", java: "5 months", dataAnalyst: "4 months", sql: "3 months", bootcamp: "3 months" },
//   { feature: "Price", fullstack: "₹19,999", aiml: "₹29,999", java: "₹15,999", dataAnalyst: "₹12,999", sql: "₹10,999", bootcamp: "₹9,999" },
//   { feature: "Live Projects", fullstack: "4+", aiml: "4+", java: "4+", dataAnalyst: "4+", sql: "4+", bootcamp: "4+" },
//   { feature: "Mentorship", fullstack: "1:1", aiml: "1:1", java: "1:1", dataAnalyst: "1:1", sql: "1:1", bootcamp: "Group" },
//   { feature: "Placement Support", fullstack: "Yes", aiml: "Yes", java: "Yes", dataAnalyst: "Yes", sql: "Yes", bootcamp: "No" },
//   { feature: "Certificate", fullstack: "Yes", aiml: "Yes", java: "Yes", dataAnalyst: "Yes", sql: "Yes", bootcamp: "Yes" },
// ];

// const testimonials = [
//   {
//     name: "Vikram Singh",
//     role: "Frontend Developer",
//     company: "Flipkart",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
//     content: "The Full-Stack program gave me exactly the skills I needed. Got placed at Flipkart with a 12 LPA package!",
//     rating: 5,
//     program: "Full-Stack Development",
//   },
//   {
//     name: "Sneha Saha",
//     role: "Data Scientist",
//     company: "Swiggy",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
//     content: "Best investment in my career. The AI/ML curriculum is on par with top universities. Highly recommend!",
//     rating: 5,
//     program: "AI/ML Engineering",
//   },
// ];

// const Programs = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero */}
//       <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
//               Program Catalog
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Explore our comprehensive programs designed to transform you into an industry-ready professional
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Programs Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {programs.map((program, index) => (
//               <Card
//                 key={program.id}
//                 id={program.id}
//                 variant="glass"
//                 className="group animate-slide-up overflow-hidden"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       {program.icon}
//                     </div>
//                     <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-1 bg-secondary rounded-full">
//                       {program.category}
//                     </span>
//                   </div>
//                   <CardTitle className="text-2xl mt-4">{program.title}</CardTitle>
//                   <CardDescription className="text-base">{program.description}</CardDescription>
//                 </CardHeader>

//                 <CardContent className="space-y-6">
//                   {/* Stats */}
//                   <div className="flex flex-wrap gap-4 text-sm">
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Clock className="w-4 h-4" />
//                       <span>{program.duration}</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Users className="w-4 h-4" />
//                       <span>{program.students.toLocaleString()}+ enrolled</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
//                       <span>{program.rating} rating</span>
//                     </div>
//                   </div>

//                   {/* Curriculum */}
//                   <div>
//                     <h4 className="font-semibold mb-3">Curriculum</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {program.curriculum.map((item, i) => (
//                         <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <Check className="w-4 h-4 text-foreground flex-shrink-0" />
//                           <span>{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Projects */}
//                   <div>
//                     <h4 className="font-semibold mb-3">Live Projects</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {program.projects.map((project, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 text-xs bg-secondary text-foreground rounded-full"
//                         >
//                           {project}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Price & CTA */}
//                   <div className="pt-4 border-t border-border flex items-center justify-between">
//                     <div>
//                       <span className="text-xs text-muted-foreground">Starting from</span>
//                       <p className="text-2xl font-display font-bold">{program.price}</p>
//                     </div>
//                     <Button variant="hero" asChild>
//                       <Link to="/#enroll">
//                         Enroll Now
//                         <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Compare Programs */}
//       <section className="py-20 bg-card border-y border-border">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
//               Compare Programs
//             </h2>
//             <p className="text-muted-foreground">
//               Find the perfect program that matches your goals
//             </p>
//           </div>

//           <div className="max-w-6xl mx-auto overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow className="border-border">
//                   <TableHead className="font-semibold">Feature</TableHead>
//                   <TableHead className="text-center">Full-Stack</TableHead>
//                   <TableHead className="text-center">AI/ML</TableHead>
//                   <TableHead className="text-center">Java</TableHead>
//                   <TableHead className="text-center">Data Analyst</TableHead>
//                   <TableHead className="text-center">SQL</TableHead>
//                   <TableHead className="text-center">Bootcamp</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {comparisonData.map((row, index) => (
//                   <TableRow key={index} className="border-border">
//                     <TableCell className="font-medium">{row.feature}</TableCell>
//                     <TableCell className="text-center text-muted-foreground">{row.fullstack}</TableCell>
//                     <TableCell className="text-center text-muted-foreground">{row.aiml}</TableCell>
//                     <TableCell className="text-center text-muted-foreground">{row.java}</TableCell>
//                     <TableCell className="text-center text-muted-foreground">{row.dataAnalyst}</TableCell>
//                     <TableCell className="text-center text-muted-foreground">{row.sql}</TableCell>
//                     <TableCell className="text-center text-muted-foreground">{row.bootcamp}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
//               What Our Students Say
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard key={index} {...testimonial} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-card border-t border-border">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
//             Not Sure Which Program Fits You?
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
//             Take our quick quiz and get personalized program recommendations based on your goals and interests
//           </p>
//           <Button variant="hero" size="xl" asChild>
//             <Link to="/quiz">
//               Take the Quiz
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Programs;




// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Clock,
//   Users,
//   Star,
//   ArrowRight,
//   Check,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";

// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { TestimonialCard } from "@/components/TestimonialCard";
// import { ProgramCard } from "@/components/ProgramCard"; // Your reusable card
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import {
//   Code,
//   Brain,
//   Database,
//   FileCode,
//   Layers,
//   GraduationCap,
// } from "lucide-react";

// const iconMap: Record<string, React.ReactNode> = {
//   "Full-Stack Development": <Code className="w-8 h-8 text-foreground" />,
//   "AI/ML Engineering": <Brain className="w-8 h-8 text-foreground" />,
//   "Java Development": <FileCode className="w-8 h-8 text-foreground" />,
//   "Data Analytics": <Database className="w-8 h-8 text-foreground" />,
//   "SQL & Database": <Layers className="w-8 h-8 text-foreground" />,
//   "School Bootcamps (8-12)": <GraduationCap className="w-8 h-8 text-foreground" />,
// };
// const testimonials = [
//   // Keep your existing testimonials
//   {
//     name: "Vikram Singh",
//     role: "Frontend Developer",
//     company: "Flipkart",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
//     content: "The Full-Stack program gave me exactly the skills I needed. Got placed at Flipkart with a 12 LPA package!",
//     rating: 5,
//     program: "Full-Stack Development",
//   },
//   {
//     name: "Sneha Saha",
//     role: "Data Scientist",
//     company: "Swiggy",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
//     content: "Best investment in my career. The AI/ML curriculum is on par with top universities. Highly recommend!",
//     rating: 5,
//     program: "AI/ML Engineering",
//   },
// ];

// const Programs = () => {
//   const [programs, setPrograms] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPrograms = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/programs");
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setPrograms(data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };
//     fetchPrograms();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-background flex items-center justify-center">
//         <p className="text-xl">Loading programs...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
//               Program Catalog
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Explore our comprehensive programs designed to transform you into an industry-ready professional
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Programs Grid using your beautiful ProgramCard */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             {programs.map((program) => (
//               <ProgramCard
//                 key={program._id}
//                 id={program._id}
//                 title={program.title}
//                 description={program.description}
//                 duration={program.duration}
//                 students={program.enrolled || 0}
//                 rating={program.rating || 4.9}
//                 price={`₹${program.price?.toLocaleString() || "0"}`}
//                 category={program.category}
//                 icon={<div className="w-8 h-8" />} // You can add icon mapping later
//                 featured={program.isPopular || false}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Detailed Program Cards (your original detailed view) */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {programs.map((program, index) => (
//               <Card
//                 key={program._id}
//                 variant="glass"
//                 className="group animate-slide-up overflow-hidden"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
//                       {/* Icon placeholder - add mapping if needed */}
//                     </div>
//                     <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-1 bg-secondary rounded-full">
//                       {program.category}
//                     </span>
//                   </div>
//                   <CardTitle className="text-2xl mt-4">{program.title}</CardTitle>
//                   <CardDescription className="text-base">{program.description}</CardDescription>
//                 </CardHeader>

//                 <CardContent className="space-y-6">
//                   <div className="flex flex-wrap gap-4 text-sm">
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Clock className="w-4 h-4" />
//                       <span>{program.duration}</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Users className="w-4 h-4" />
//                       <span>{(program.enrolled || 0).toLocaleString()}+ enrolled</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
//                       <span>{program.rating || 4.9}</span>
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="font-semibold mb-3">Curriculum</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {program.curriculum?.map((item: string, i: number) => (
//                         <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <Check className="w-4 h-4 text-foreground flex-shrink-0" />
//                           <span>{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="font-semibold mb-3">Live Projects</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {program.projects?.map((project: string, i: number) => (
//                         <span key={i} className="px-3 py-1 text-xs bg-secondary text-foreground rounded-full">
//                           {project}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="pt-4 border-t border-border flex items-center justify-between">
//                     <div>
//                       <span className="text-xs text-muted-foreground">Starting from</span>
//                       <p className="text-2xl font-display font-bold">₹{program.price?.toLocaleString()}</p>
//                     </div>
//                     <Button variant="hero" asChild>
//                       <Link to="/#enroll">Enroll Now <ArrowRight className="w-4 h-4" /></Link>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Keep your comparison table, testimonials, and CTA as-is for now */}

//       <Footer />
//     </div>
//   );
// };

// export default Programs;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Clock,
//   Users,
//   Star,
//   ArrowRight,
//   Check,
//   Code,
//   Brain,
//   Database,
//   FileCode,
//   Layers,
//   GraduationCap,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { TestimonialCard } from "@/components/TestimonialCard";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// // Icon mapping function - returns the correct icon based on program title
// const getProgramIcon = (title: string) => {
//   switch (title) {
//     case "Full-Stack Development":
//       return <Code className="w-8 h-8 text-foreground" />;
//     case "AI/ML Engineering":
//       return <Brain className="w-8 h-8 text-foreground" />;
//     case "Java Development":
//       return <FileCode className="w-8 h-8 text-foreground" />;
//     case "Data Analytics":
//       return <Database className="w-8 h-8 text-foreground" />;
//     case "SQL & Database":
//       return <Layers className="w-8 h-8 text-foreground" />;
//     case "School Bootcamps (8-12)":
//       return <GraduationCap className="w-8 h-8 text-foreground" />;
//     default:
//       return <Code className="w-8 h-8 text-foreground" />; // fallback
//   }
// };

// // Testimonials (keep as static for now)
// const testimonials = [
//   {
//     name: "Vikram Singh",
//     role: "Frontend Developer",
//     company: "Flipkart",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
//     content: "The Full-Stack program gave me exactly the skills I needed. Got placed at Flipkart with a 12 LPA package!",
//     rating: 5,
//     program: "Full-Stack Development",
//   },
//   {
//     name: "Sneha Saha",
//     role: "Data Scientist",
//     company: "Swiggy",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
//     content: "Best investment in my career. The AI/ML curriculum is on par with top universities. Highly recommend!",
//     rating: 5,
//     program: "AI/ML Engineering",
//   },
// ];

// const Programs = () => {
//   const [programs, setPrograms] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPrograms = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/programs");
//         if (!res.ok) throw new Error("Failed to fetch programs");
//         const data = await res.json();
//         setPrograms(data);
//       } catch (err) {
//         console.error("Error fetching programs:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPrograms();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-background flex items-center justify-center">
//         <p className="text-xl">Loading programs...</p>
//       </div>
//     );
//   }

//   if (programs.length === 0) {
//     return (
//       <div className="min-h-screen bg-background flex items-center justify-center">
//         <p className="text-xl">No programs found. Add some via the admin panel!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
//               Program Catalog
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Explore our comprehensive programs designed to transform you into an industry-ready professional
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Detailed Program Cards Only */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {programs.map((program, index) => (
//               <Card
//                 key={program._id}
//                 variant="glass"
//                 className="group animate-slide-up overflow-hidden"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       {getProgramIcon(program.title)}
//                     </div>
//                     <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-1 bg-secondary rounded-full">
//                       {program.category}
//                     </span>
//                   </div>
//                   <CardTitle className="text-2xl mt-4">{program.title}</CardTitle>
//                   <CardDescription className="text-base">{program.description}</CardDescription>
//                 </CardHeader>

//                 <CardContent className="space-y-6">
//                   {/* Stats */}
//                   <div className="flex flex-wrap gap-4 text-sm">
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Clock className="w-4 h-4" />
//                       <span>{program.duration}</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Users className="w-4 h-4" />
//                       <span>{(program.enrolled || 0).toLocaleString()}+ enrolled</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-muted-foreground">
//                       <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
//                       <span>{program.rating || 4.9}</span>
//                     </div>
//                   </div>

//                   {/* Curriculum */}
//                   <div>
//                     <h4 className="font-semibold mb-3">Curriculum</h4>
//                     <div className="grid grid-cols-2 gap-2">
//                       {program.curriculum?.map((item: string, i: number) => (
//                         <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
//                           <Check className="w-4 h-4 text-foreground flex-shrink-0" />
//                           <span>{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Live Projects */}
//                   <div>
//                     <h4 className="font-semibold mb-3">Live Projects</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {program.projects?.map((project: string, i: number) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 text-xs bg-secondary text-foreground rounded-full"
//                         >
//                           {project}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Price & CTA */}
//                   <div className="pt-4 border-t border-border flex items-center justify-between">
//                     <div>
//                       <span className="text-xs text-muted-foreground">Starting from</span>
//                       <p className="text-2xl font-display font-bold">
//                         ₹{program.price?.toLocaleString()}
//                       </p>
//                     </div>
//                     <Button variant="hero" asChild>
//                       <Link to="/#enroll">
//                         Enroll Now
//                         <ArrowRight className="w-4 h-4 ml-2" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* You can keep the comparison table, testimonials, and CTA sections below if you want */}
//       {/* Or comment them out for now */}

//       <Footer />
//     </div>
//   );
// };

// export default Programs;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  Check,
  Code,
  Brain,
  Database,
  FileCode,
  Layers,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Icon mapping
const getProgramIcon = (title: string) => {
  const map: Record<string, React.ReactNode> = {
    "Full-Stack Development": <Code className="w-8 h-8 text-foreground" />,
    "AI/ML Engineering": <Brain className="w-8 h-8 text-foreground" />,
    "Java Development": <FileCode className="w-8 h-8 text-foreground" />,
    "Data Analytics": <Database className="w-8 h-8 text-foreground" />,
    "SQL & Database": <Layers className="w-8 h-8 text-foreground" />,
    "School Bootcamps (8-12)": <GraduationCap className="w-8 h-8 text-foreground" />,
  };
  return map[title] || <Code className="w-8 h-8 text-foreground" />;
};

const Programs = () => {
  const [programs, setPrograms] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/programs");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setPrograms(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/testimonials");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Failed to load testimonials");
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchPrograms();
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-xl">Loading programs...</p>
      </div>
    );
  }

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

      {/* Detailed Program Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={program._id}
                variant="glass"
                className="group animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getProgramIcon(program.title)}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-1 bg-secondary rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mt-4">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{(program.enrolled || 0).toLocaleString()}+ enrolled</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{program.rating || 4.9}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Curriculum</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.curriculum?.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Live Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.projects?.map((project: string, i: number) => (
                        <span key={i} className="px-3 py-1 text-xs bg-secondary text-foreground rounded-full">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <p className="text-2xl font-display font-bold">
                        ₹{program.price?.toLocaleString()}
                      </p>
                    </div>
                    <Button variant="hero" asChild>
                      <Link to="/#enroll">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Programs Table - Fully Dynamic */}
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
                <TableRow>
                  <TableHead className="font-semibold">Feature</TableHead>
                  {programs.map((p) => (
                    <TableHead key={p._id} className="text-center">
                      {p.title.length > 12 ? p.title.slice(0, 12) + "..." : p.title}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Duration</TableCell>
                  {programs.map((p) => (
                    <TableCell key={p._id} className="text-center text-muted-foreground">
                      {p.duration}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  {programs.map((p) => (
                    <TableCell key={p._id} className="text-center text-muted-foreground">
                      ₹{p.price?.toLocaleString()}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Live Projects</TableCell>
                  {programs.map((p) => (
                    <TableCell key={p._id} className="text-center text-muted-foreground">
                      {p.projects?.length || 0}+
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Rating</TableCell>
                  {programs.map((p) => (
                    <TableCell key={p._id} className="text-center text-muted-foreground">
                      {p.rating || 4.9} ⭐
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Enrolled</TableCell>
                  {programs.map((p) => (
                    <TableCell key={p._id} className="text-center text-muted-foreground">
                      {(p.enrolled || 0).toLocaleString()}+
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Testimonials - Dynamic from DB */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
          </div>

          {loadingTestimonials ? (
            <p className="text-center text-muted-foreground">Loading testimonials...</p>
          ) : testimonials.length === 0 ? (
            <p className="text-center text-muted-foreground">No testimonials available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t._id}
                  name={t.name}
                  role={t.role}
                  company={t.company}
                  image={t.image}
                  content={t.content}
                  rating={t.rating}
                  program={t.program}
                />
              ))}
            </div>
          )}
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