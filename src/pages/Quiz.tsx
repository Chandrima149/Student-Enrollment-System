import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle, Code, Brain, Database, FileCode, GraduationCap, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: 1,
    question: "What's your current education level?",
    options: [
      { value: "school", label: "School Student (Class 8-12)", score: { bootcamp: 3 } },
      { value: "undergraduate", label: "Undergraduate", score: { fullstack: 2, aiml: 2, java: 2, dataAnalyst: 2, sql: 1 } },
      { value: "graduate", label: "Graduate / Post-Graduate", score: { aiml: 3, fullstack: 2, dataAnalyst: 2 } },
      { value: "working", label: "Working Professional", score: { fullstack: 2, aiml: 2, dataAnalyst: 3 } },
    ],
  },
  {
    id: 2,
    question: "What interests you the most?",
    options: [
      { value: "websites", label: "Building Websites & Apps", score: { fullstack: 3, java: 1 } },
      { value: "ai", label: "Artificial Intelligence & Machine Learning", score: { aiml: 3 } },
      { value: "data", label: "Working with Data & Analytics", score: { dataAnalyst: 3, sql: 2 } },
      { value: "coding", label: "General Programming & Logic", score: { java: 2, fullstack: 1, bootcamp: 2 } },
    ],
  },
  {
    id: 3,
    question: "How much time can you dedicate per week?",
    options: [
      { value: "few", label: "5-10 hours", score: { sql: 3, bootcamp: 2 } },
      { value: "moderate", label: "10-20 hours", score: { dataAnalyst: 2, java: 2, fullstack: 1 } },
      { value: "dedicated", label: "20-30 hours", score: { fullstack: 3, aiml: 2, java: 2 } },
      { value: "fulltime", label: "30+ hours (Almost Full-time)", score: { aiml: 3, fullstack: 2 } },
    ],
  },
  {
    id: 4,
    question: "What's your primary goal?",
    options: [
      { value: "job", label: "Get a High-Paying Tech Job", score: { fullstack: 3, aiml: 3, java: 2 } },
      { value: "freelance", label: "Freelancing & Side Income", score: { fullstack: 2, dataAnalyst: 2 } },
      { value: "upskill", label: "Upskill for Current Role", score: { dataAnalyst: 3, sql: 2 } },
      { value: "explore", label: "Explore & Learn Something New", score: { bootcamp: 3, sql: 2 } },
    ],
  },
  {
    id: 5,
    question: "Do you have any prior coding experience?",
    options: [
      { value: "none", label: "No, Complete Beginner", score: { bootcamp: 3, sql: 2, dataAnalyst: 1 } },
      { value: "basic", label: "Some Basic Knowledge", score: { fullstack: 2, java: 2, dataAnalyst: 2 } },
      { value: "intermediate", label: "Intermediate Level", score: { fullstack: 3, aiml: 2, java: 2 } },
      { value: "advanced", label: "Advanced / Professional", score: { aiml: 3, fullstack: 2 } },
    ],
  },
  {
    id: 6,
    question: "Which work environment appeals to you?",
    options: [
      { value: "startup", label: "Fast-Paced Startups", score: { fullstack: 3, aiml: 2 } },
      { value: "corporate", label: "Large Corporations", score: { java: 3, dataAnalyst: 2 } },
      { value: "research", label: "Research & Innovation", score: { aiml: 3, dataAnalyst: 1 } },
      { value: "remote", label: "Remote / Flexible Work", score: { fullstack: 2, dataAnalyst: 2, sql: 2 } },
    ],
  },
];

const programDetails = {
  fullstack: {
    name: "Full-Stack Development",
    description: "Perfect for building complete web applications from frontend to backend",
    icon: <Code className="w-12 h-12 text-foreground" />,
    duration: "6 months",
    price: "₹49,999",
  },
  aiml: {
    name: "AI/ML Engineering",
    description: "Ideal for those passionate about artificial intelligence and data science",
    icon: <Brain className="w-12 h-12 text-foreground" />,
    duration: "8 months",
    price: "₹59,999",
  },
  java: {
    name: "Java Development",
    description: "Great for enterprise application development and backend systems",
    icon: <FileCode className="w-12 h-12 text-foreground" />,
    duration: "5 months",
    price: "₹44,999",
  },
  dataAnalyst: {
    name: "Data Analytics",
    description: "Perfect for turning data into actionable business insights",
    icon: <Database className="w-12 h-12 text-foreground" />,
    duration: "4 months",
    price: "₹39,999",
  },
  sql: {
    name: "SQL & Database",
    description: "Focused on database management and query optimization",
    icon: <Database className="w-12 h-12 text-foreground" />,
    duration: "3 months",
    price: "₹29,999",
  },
  bootcamp: {
    name: "School Bootcamps",
    description: "Introduction to programming for school students",
    icon: <GraduationCap className="w-12 h-12 text-foreground" />,
    duration: "3 months",
    price: "₹14,999",
  },
};

type ProgramKey = keyof typeof programDetails;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<Record<ProgramKey, number>>({
    fullstack: 0,
    aiml: 0,
    java: 0,
    dataAnalyst: 0,
    sql: 0,
    bootcamp: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionValue: string, optionScore: Record<string, number>) => {
    setAnswers({ ...answers, [currentQuestion]: optionValue });
    
    // Update scores
    const newScores = { ...scores };
    Object.entries(optionScore).forEach(([program, score]) => {
      newScores[program as ProgramKey] += score;
    });
    setScores(newScores);

    // Move to next question or show result
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const getRecommendation = (): ProgramKey => {
    return Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0] as ProgramKey;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({
      fullstack: 0,
      aiml: 0,
      java: 0,
      dataAnalyst: 0,
      sql: 0,
      bootcamp: 0,
    });
    setShowResult(false);
  };

  const recommendation = getRecommendation();
  const recommendedProgram = programDetails[recommendation];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {!showResult ? (
            <div className="max-w-2xl mx-auto">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <Card variant="glass" className="animate-scale-in">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl md:text-3xl">
                    {questions[currentQuestion].question}
                  </CardTitle>
                  <CardDescription>
                    Select the option that best describes you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value, option.score)}
                      className={cn(
                        "w-full p-4 rounded-xl border text-left transition-all duration-300",
                        "hover:bg-secondary hover:border-muted-foreground/50 hover:-translate-y-0.5",
                        answers[currentQuestion] === option.value
                          ? "bg-secondary border-foreground"
                          : "bg-card/50 border-border"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                          answers[currentQuestion] === option.value
                            ? "bg-foreground text-background"
                            : "bg-secondary text-foreground"
                        )}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="font-medium">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Navigation */}
              {currentQuestion > 0 && (
                <div className="mt-6 text-center">
                  <Button
                    variant="ghost"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Question
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto animate-scale-in">
              <Card variant="glass" className="text-center">
                <CardContent className="pt-12 pb-12">
                  <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-12 h-12 text-foreground" />
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Your Perfect Match!
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Based on your answers, we recommend:
                  </p>

                  <Card variant="elevated" className="mb-8 max-w-md mx-auto">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-20 h-20 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                        {recommendedProgram.icon}
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">
                        {recommendedProgram.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {recommendedProgram.description}
                      </p>
                      <div className="flex items-center justify-center gap-6 text-sm">
                        <span className="text-muted-foreground">
                          Duration: <span className="text-foreground font-medium">{recommendedProgram.duration}</span>
                        </span>
                        <span className="text-muted-foreground">
                          Price: <span className="text-foreground font-medium">{recommendedProgram.price}</span>
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/#enroll">
                        Enroll Now
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" onClick={resetQuiz}>
                      <RotateCcw className="w-4 h-4" />
                      Retake Quiz
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Want personalized guidance?
                    </p>
                    <Button variant="glass" asChild>
                      <Link to="/counseling">
                        Schedule a Free Counseling Call
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quiz;
