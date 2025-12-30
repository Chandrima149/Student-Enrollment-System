import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const enrollmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  location: z.string().min(2, "Location is required"),
  education: z.string().min(1, "Please select your education level"),
  branch: z.string().min(2, "Branch/Specialization is required"),
  graduationYear: z.string().min(1, "Please select graduation year"),
  status: z.string().min(1, "Please select your current status"),
  program: z.string().min(1, "Please select a program"),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

const programs = [
  { value: "fullstack", label: "Full-Stack Development", category: "Engineering & Tech" },
  { value: "aiml", label: "AI/ML Engineering", category: "Engineering & Tech" },
  { value: "java", label: "Java Development", category: "Engineering & Tech" },
  { value: "data-analyst", label: "Data Analyst", category: "Engineering & Tech" },
  { value: "sql", label: "SQL & Database", category: "Engineering & Tech" },
  { value: "bootcamp-8", label: "School Bootcamp (Class 8)", category: "School Bootcamps" },
  { value: "bootcamp-9", label: "School Bootcamp (Class 9)", category: "School Bootcamps" },
  { value: "bootcamp-10", label: "School Bootcamp (Class 10)", category: "School Bootcamps" },
  { value: "bootcamp-11", label: "School Bootcamp (Class 11)", category: "School Bootcamps" },
  { value: "bootcamp-12", label: "School Bootcamp (Class 12)", category: "School Bootcamps" },
];

const educationLevels = [
  "High School",
  "Diploma",
  "Undergraduate",
  "Graduate",
  "Post Graduate",
];

const statusOptions = [
  { value: "student", label: "Student" },
  { value: "fresher", label: "Fresher" },
  { value: "working", label: "Working Professional" },
  { value: "other", label: "Other" },
];

const currentYear = new Date().getFullYear();
const graduationYears = Array.from({ length: 10 }, (_, i) => (currentYear - 2 + i).toString());

export const EnrollmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Enrollment data:", data);
    setIsSubmitted(true);
    toast({
      title: "Enrollment Successful!",
      description: "We'll contact you shortly with next steps.",
    });
  };

  if (isSubmitted) {
    return (
      <Card variant="glass" className="max-w-2xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">
            Enrollment Submitted!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Thank you for your interest in AlgoAscend. Our team will review your
            application and contact you within 24-48 hours.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="glass" className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl">Start Your Journey</CardTitle>
        <CardDescription>
          Fill in your details and choose your preferred program
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Shreya Sen"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-destructive text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Shreya@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-destructive text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="9876543210"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-destructive text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="City, State"
                {...register("location")}
              />
              {errors.location && (
                <p className="text-destructive text-sm">{errors.location.message}</p>
              )}
            </div>
          </div>

          {/* Education Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Education Level *</Label>
              <Select onValueChange={(value) => setValue("education", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {educationLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.education && (
                <p className="text-destructive text-sm">{errors.education.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch">Branch/Specialization *</Label>
              <Input
                id="branch"
                placeholder="Computer Science, ECE, etc."
                {...register("branch")}
              />
              {errors.branch && (
                <p className="text-destructive text-sm">{errors.branch.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Graduation Year *</Label>
              <Select onValueChange={(value) => setValue("graduationYear", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {graduationYears.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.graduationYear && (
                <p className="text-destructive text-sm">{errors.graduationYear.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Current Status *</Label>
              <Select onValueChange={(value) => setValue("status", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.status && (
                <p className="text-destructive text-sm">{errors.status.message}</p>
              )}
            </div>
          </div>

          {/* Program Selection */}
          <div className="space-y-2">
            <Label>Preferred Program *</Label>
            <Select onValueChange={(value) => setValue("program", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border max-h-64">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  Engineering & Tech
                </div>
                {programs
                  .filter((p) => p.category === "Engineering & Tech")
                  .map((program) => (
                    <SelectItem key={program.value} value={program.value}>
                      {program.label}
                    </SelectItem>
                  ))}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">
                  School Bootcamps
                </div>
                {programs
                  .filter((p) => p.category === "School Bootcamps")
                  .map((program) => (
                    <SelectItem key={program.value} value={program.value}>
                      {program.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {errors.program && (
              <p className="text-destructive text-sm">{errors.program.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Application
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
