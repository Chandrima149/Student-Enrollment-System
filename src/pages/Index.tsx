// import { Link } from "react-router-dom";
// import { ArrowRight, Code, Brain, Database, Sparkles, Users, Trophy, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { ProgramCard } from "@/components/ProgramCard";
// import { TestimonialCard } from "@/components/TestimonialCard";
// import { EnrollmentForm } from "@/components/EnrollmentForm";

// const featuredPrograms = [
//   {
//     id: "fullstack",
//     title: "Full-Stack Development",
//     description: "Master both frontend and backend development with React, Node.js, and modern databases.",
//     duration: "6 months",
//     students: 2500,
//     rating: 4.9,
//     price: "₹19,999",
//     category: "Engineering & Tech",
//     icon: <Code className="w-7 h-7 text-foreground" />,
//     featured: true,
//   },
//   {
//     id: "aiml",
//     title: "AI/ML Engineering",
//     description: "Deep dive into machine learning, neural networks, and AI applications with Python.",
//     duration: "8 months",
//     students: 1800,
//     rating: 4.8,
//     price: "₹21,999",
//     category: "Engineering & Tech",
//     icon: <Brain className="w-7 h-7 text-foreground" />,
//   },
//   {
//     id: "data-analyst",
//     title: "Data Analytics",
//     description: "Learn data visualization, SQL, Python for analytics, and business intelligence tools.",
//     duration: "4 months",
//     students: 3200,
//     rating: 4.9,
//     price: "₹19,999",
//     category: "Engineering & Tech",
//     icon: <Database className="w-7 h-7 text-foreground" />,
//   },
// ];

// const testimonials = [
//   {
//     name: "Priya Paul",
//     role: "Software Engineer",
//     company: "Google",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
//     content: "AlgoAscend transformed my career. The hands-on projects and mentorship helped me land my dream job at Google.",
//     rating: 5,
//     program: "Full-Stack Development",
//   },
//   {
//     name: "Rahul Roy",
//     role: "ML Engineer",
//     company: "Microsoft",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
//     content: "The AI/ML program is incredibly comprehensive. Real industry projects made all the difference in my learning journey.",
//     rating: 5,
//     program: "AI/ML Engineering",
//   },
//   {
//     name: "Ananya Jana",
//     role: "Data Analyst",
//     company: "Amazon",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
//     content: "From complete beginner to Data Analyst at Amazon in just 6 months. AlgoAscend made it possible.",
//     rating: 5,
//     program: "Data Analytics",
//   },
// ];

// const stats = [
//   { value: "10,000+", label: "Students Trained", icon: Users },
//   { value: "95%", label: "Placement Rate", icon: Trophy },
//   { value: "50+", label: "Live Projects", icon: Code },
//   { value: "24/7", label: "Mentor Support", icon: Clock },
// ];

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
//               <Sparkles className="w-4 h-4 text-foreground" />
//               <span className="text-sm font-medium">New Batch Starting February 2026</span>
//             </div>

//             <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
//               Transform Your Future with
//               <span className="block mt-2 text-muted-foreground">Industry-Ready Skills</span>
//             </h1>

//             <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
//               Join 10,000+ students who have accelerated their tech careers with our
//               comprehensive programs, live projects, and expert mentorship.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
//               <Button variant="hero" size="xl" asChild>
//                 <a href="#enroll">
//                   Start Learning Today
//                   <ArrowRight className="w-5 h-5" />
//                 </a>
//               </Button>
//               <Button variant="glass" size="xl" asChild>
//                 <Link to="/programs">Explore Programs</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div
//                 key={stat.label}
//                 className="text-center p-6 rounded-2xl glass animate-scale-in"
//                 style={{ animationDelay: `${(index + 3) * 100}ms` }}
//               >
//                 <stat.icon className="w-6 h-6 text-muted-foreground mx-auto mb-3" />
//                 <div className="font-display text-3xl md:text-4xl font-bold mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Programs */}
//       <section className="py-20 md:py-32">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
//               Popular Programs
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Choose from our industry-designed programs and kickstart your tech career
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {featuredPrograms.map((program) => (
//               <ProgramCard key={program.id} {...program} />
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button variant="outline" size="lg" asChild>
//               <Link to="/programs">
//                 View All Programs
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Why AlgoAscend */}
//       <section className="py-20 md:py-32 bg-card border-y border-border">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
//             <div>
//               <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
//                 Why Choose AlgoAscend?
//               </h2>
//               <p className="text-muted-foreground text-lg mb-8">
//                 We don't just teach code – we build careers. Our programs are designed
//                 by industry experts to give you practical skills that employers want.
//               </p>

//               <div className="space-y-6">
//                 {[
//                   {
//                     title: "Industry-Aligned Curriculum",
//                     description: "Learn technologies that top companies are hiring for",
//                   },
//                   {
//                     title: "Live Projects & Portfolio",
//                     description: "Build real-world projects that showcase your skills",
//                   },
//                   {
//                     title: "1:1 Mentorship",
//                     description: "Get personalized guidance from experienced professionals",
//                   },
//                   {
//                     title: "Placement Assistance",
//                     description: "Dedicated support to help you land your dream job",
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="flex gap-4">
//                     <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center flex-shrink-0">
//                       <div className="w-2 h-2 rounded-full bg-foreground" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">{item.title}</h4>
//                       <p className="text-muted-foreground text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-background border border-border overflow-hidden">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center p-8">
//                     <div className="w-24 h-24 rounded-2xl bg-foreground/10 flex items-center justify-center mx-auto mb-6">
//                       <Code className="w-12 h-12 text-foreground" />
//                     </div>
//                     <h3 className="font-display text-2xl font-bold mb-2">
//                       Not sure which program fits you?
//                     </h3>
//                     <p className="text-muted-foreground mb-6">
//                       Take our quick quiz to find your perfect match
//                     </p>
//                     <Button variant="hero" asChild>
//                       <Link to="/quiz">
//                         Take the Quiz
//                         <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 md:py-32">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
//               Success Stories
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Hear from our alumni who have transformed their careers
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard key={index} {...testimonial} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enrollment Form */}
//       <section id="enroll" className="py-20 md:py-32 bg-card border-t border-border">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
//               Enroll Today
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Take the first step towards your dream career
//             </p>
//           </div>

//           <EnrollmentForm />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Brain, Database, Sparkles, Users, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { EnrollmentForm } from "@/components/EnrollmentForm";

const stats = [
  { value: "10,000+", label: "Students Trained", icon: Users },
  { value: "95%", label: "Placement Rate", icon: Trophy },
  { value: "50+", label: "Live Projects", icon: Code },
  { value: "24/7", label: "Mentor Support", icon: Clock },
];

const Index = () => {
  const [featuredPrograms, setFeaturedPrograms] = useState<any[]>([]);
  const [successStories, setSuccessStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch programs (limit to 3 for featured)
        const programsRes = await fetch("http://localhost:5000/api/programs");
        const programsData = await programsRes.json();
        setFeaturedPrograms(programsData.slice(0, 3)); // Show top 3

        // Fetch success stories
        const storiesRes = await fetch("http://localhost:5000/api/success-stories");
        const storiesData = await storiesRes.json();
        setSuccessStories(storiesData);
      } catch (err) {
        console.error("Error loading home page data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium">New Batch Starting February 2026</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Transform Your Future with
              <span className="block mt-2 text-muted-foreground">Industry-Ready Skills</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
              Join 10,000+ students who have accelerated their tech careers with our
              comprehensive programs, live projects, and expert mentorship.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
              <Button variant="hero" size="xl" asChild>
                <a href="#enroll">
                  Start Learning Today
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl glass animate-scale-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <stat.icon className="w-6 h-6 text-muted-foreground mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs - Dynamic */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Popular Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our industry-designed programs and kickstart your tech career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredPrograms.map((program) => (
              <ProgramCard
                key={program._id}
                id={program._id}
                title={program.title}
                description={program.description}
                duration={program.duration}
                students={program.enrolled || 0}
                rating={program.rating || 4.9}
                price={`₹${program.price?.toLocaleString()}`}
                category={program.category}
                icon={program.icon || <Code className="w-7 h-7 text-foreground" />}
                featured={program.isPopular || false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/programs">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why AlgoAscend - Keep as is */}
      {/* <section className="py-20 md:py-32 bg-card border-y border-border">
        {/* ... your existing "Why Choose AlgoAscend" section ... */}
      {/* </section> */} 
      {/* Why AlgoAscend */}
<section className="py-20 md:py-32 bg-card border-y border-border">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
      <div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Why Choose AlgoAscend?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          We don't just teach code – we build careers. Our programs are designed
          by industry experts to give you practical skills that employers want.
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Industry-Aligned Curriculum",
              description: "Learn technologies that top companies are hiring for",
            },
            {
              title: "Live Projects & Portfolio",
              description: "Build real-world projects that showcase your skills",
            },
            {
              title: "1:1 Mentorship",
              description: "Get personalized guidance from experienced professionals",
            },
            {
              title: "Placement Assistance",
              description: "Dedicated support to help you land your dream job",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-background border border-border overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 rounded-2xl bg-foreground/10 flex items-center justify-center mx-auto mb-6">
                <Code className="w-12 h-12 text-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Not sure which program fits you?
              </h3>
              <p className="text-muted-foreground mb-6">
                Take our quick quiz to find your perfect match
              </p>
              <Button variant="hero" asChild>
                <Link to="/quiz">
                  Take the Quiz
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Success Stories - Dynamic */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our alumni who have transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {successStories.map((story) => (
              <TestimonialCard
                key={story._id}
                name={story.name}
                role={story.role}
                company={story.company}
                image={story.image}
                content={story.quote}
                rating={story.rating}
                program={story.program}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enroll" className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Enroll Today
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards your dream career
            </p>
          </div>

          <EnrollmentForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;