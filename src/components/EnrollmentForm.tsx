// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { ArrowRight, CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";

// const enrollmentSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email"),
//   phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
//   location: z.string().min(2, "Location is required"),
//   education: z.string().min(1, "Please select your education level"),
//   branch: z.string().min(2, "Branch/Specialization is required"),
//   graduationYear: z.string().min(1, "Please select graduation year"),
//   status: z.string().min(1, "Please select your current status"),
//   program: z.string().min(1, "Please select a program"),
// });

// type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

// const programs = [
//   { value: "fullstack", label: "Full-Stack Development", category: "Engineering & Tech" },
//   { value: "aiml", label: "AI/ML Engineering", category: "Engineering & Tech" },
//   { value: "java", label: "Java Development", category: "Engineering & Tech" },
//   { value: "data-analyst", label: "Data Analyst", category: "Engineering & Tech" },
//   { value: "sql", label: "SQL & Database", category: "Engineering & Tech" },
//   { value: "bootcamp-8", label: "School Bootcamp (Class 8)", category: "School Bootcamps" },
//   { value: "bootcamp-9", label: "School Bootcamp (Class 9)", category: "School Bootcamps" },
//   { value: "bootcamp-10", label: "School Bootcamp (Class 10)", category: "School Bootcamps" },
//   { value: "bootcamp-11", label: "School Bootcamp (Class 11)", category: "School Bootcamps" },
//   { value: "bootcamp-12", label: "School Bootcamp (Class 12)", category: "School Bootcamps" },
// ];

// const educationLevels = [
//   "High School",
//   "Diploma",
//   "Undergraduate",
//   "Graduate",
//   "Post Graduate",
// ];

// const statusOptions = [
//   { value: "student", label: "Student" },
//   { value: "fresher", label: "Fresher" },
//   { value: "working", label: "Working Professional" },
//   { value: "other", label: "Other" },
// ];

// const currentYear = new Date().getFullYear();
// const graduationYears = Array.from({ length: 10 }, (_, i) => (currentYear - 2 + i).toString());

// export const EnrollmentForm = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { toast } = useToast();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm<EnrollmentFormData>({
//     resolver: zodResolver(enrollmentSchema),
//   });

//   const onSubmit = async (data: EnrollmentFormData) => {
//   try {
//     const res = await fetch("http://localhost:5000/api/enroll", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (!res.ok) throw new Error();

//     setIsSubmitted(true);
//     toast({
//       title: "Enrollment Successful!",
//       description: "We'll contact you shortly with next steps.",
//     });
//   } catch (error) {
//     console.error("Submission error:", error);
//     toast({
//       title: "Submission Failed",
//       description: "Something went wrong. Please try again.",
//       variant: "destructive",
//     });
//   }
// };

//   if (isSubmitted) {
//     return (
//       <Card variant="glass" className="max-w-2xl mx-auto">
//         <CardContent className="pt-12 pb-12 text-center">
//           <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
//             <CheckCircle className="w-10 h-10 text-emerald-400" />
//           </div>
//           <h3 className="font-display text-2xl font-bold mb-3">
//             Enrollment Submitted!
//           </h3>
//           <p className="text-muted-foreground max-w-md mx-auto">
//             Thank you for your interest in AlgoAscend. Our team will review your
//             application and contact you within 24-48 hours.
//           </p>
//           <Button
//             variant="outline"
//             className="mt-6"
//             onClick={() => setIsSubmitted(false)}
//           >
//             Submit Another Application
//           </Button>
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <Card variant="glass" className="max-w-2xl mx-auto">
//       <CardHeader className="text-center">
//         <CardTitle className="text-2xl md:text-3xl">Start Your Journey</CardTitle>
//         <CardDescription>
//           Fill in your details and choose your preferred program
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Personal Information */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name *</Label>
//               <Input
//                 id="name"
//                 placeholder="Shreya Sen"
//                 {...register("name")}
//               />
//               {errors.name && (
//                 <p className="text-destructive text-sm">{errors.name.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address *</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Shreya@example.com"
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <p className="text-destructive text-sm">{errors.email.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number *</Label>
//               <Input
//                 id="phone"
//                 placeholder="9876543210"
//                 {...register("phone")}
//               />
//               {errors.phone && (
//                 <p className="text-destructive text-sm">{errors.phone.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="location">Location *</Label>
//               <Input
//                 id="location"
//                 placeholder="City, State"
//                 {...register("location")}
//               />
//               {errors.location && (
//                 <p className="text-destructive text-sm">{errors.location.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Education Details */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label>Education Level *</Label>
//               <Select onValueChange={(value) => setValue("education", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select education level" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-card border-border">
//                   {educationLevels.map((level) => (
//                     <SelectItem key={level} value={level}>
//                       {level}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {errors.education && (
//                 <p className="text-destructive text-sm">{errors.education.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="branch">Branch/Specialization *</Label>
//               <Input
//                 id="branch"
//                 placeholder="Computer Science, ECE, etc."
//                 {...register("branch")}
//               />
//               {errors.branch && (
//                 <p className="text-destructive text-sm">{errors.branch.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label>Graduation Year *</Label>
//               <Select onValueChange={(value) => setValue("graduationYear", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select year" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-card border-border">
//                   {graduationYears.map((year) => (
//                     <SelectItem key={year} value={year}>
//                       {year}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {errors.graduationYear && (
//                 <p className="text-destructive text-sm">{errors.graduationYear.message}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label>Current Status *</Label>
//               <Select onValueChange={(value) => setValue("status", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select status" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-card border-border">
//                   {statusOptions.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {errors.status && (
//                 <p className="text-destructive text-sm">{errors.status.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Program Selection */}
//           <div className="space-y-2">
//             <Label>Preferred Program *</Label>
//             <Select onValueChange={(value) => setValue("program", value)}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a program" />
//               </SelectTrigger>
//               <SelectContent className="bg-card border-border max-h-64">
//                 <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
//                   Engineering & Tech
//                 </div>
//                 {programs
//                   .filter((p) => p.category === "Engineering & Tech")
//                   .map((program) => (
//                     <SelectItem key={program.value} value={program.value}>
//                       {program.label}
//                     </SelectItem>
//                   ))}
//                 <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">
//                   School Bootcamps
//                 </div>
//                 {programs
//                   .filter((p) => p.category === "School Bootcamps")
//                   .map((program) => (
//                     <SelectItem key={program.value} value={program.value}>
//                       {program.label}
//                     </SelectItem>
//                   ))}
//               </SelectContent>
//             </Select>
//             {errors.program && (
//               <p className="text-destructive text-sm">{errors.program.message}</p>
//             )}
//           </div>

//           <Button
//             type="submit"
//             variant="hero"
//             size="xl"
//             className="w-full"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? (
//               "Submitting..."
//             ) : (
//               <>
//                 Submit Application
//                 <ArrowRight className="w-5 h-5" />
//               </>
//             )}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };


import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, CreditCard, AlertTriangle } from "lucide-react";
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
// import Link from "next/link"; // ← Add this if using Next.js
import { Link } from "react-router-dom";


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

// ... (keep your existing schema, programs, educationLevels, statusOptions, graduationYears)

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


// ──────────────────────────────────────────────────────────────
// PROGRAM DISPLAY HELPER FUNCTION - ADD THIS BLOCK
// ──────────────────────────────────────────────────────────────

const getProgramDisplayName = (value: string) => {
  const program = programs.find(p => p.value === value);
  return program ? program.label : value.replace("-", " ").toUpperCase();
};


export const EnrollmentForm = () => {
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [enrollmentData, setEnrollmentData] = useState<any>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
  });

  // const onSubmit = async (data: EnrollmentFormData) => {
  //   try {
  //     const res = await fetch("http://localhost:5000/api/enroll", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });

  //     if (!res.ok) {
  //       const errorData = await res.json();
  //       throw new Error(errorData.message || "Enrollment failed");
  //     }

  //     const result = await res.json();
  //     setEnrollmentData(result.student || result); // save the returned student data
  //     setStep("payment");

  //     toast({
  //       title: "Enrollment Created!",
  //       description: "Please complete the payment to activate your enrollment.",
  //     });
  //   } catch (error: any) {
  //     console.error("Submission error:", error);
  //     toast({
  //       title: "Submission Failed",
  //       description: error.message || "Something went wrong. Please try again.",
  //       variant: "destructive",
  //     });
  //   }
  // };

//   const onSubmit = async (data: EnrollmentFormData) => {
//   console.log("=== FORM SUBMIT STARTED ===");
//   console.log("Data collected from form (before sending):", data);
//   console.log("JSON payload:", JSON.stringify(data, null, 2));

//   try {
//     const res = await fetch("http://localhost:5000/api/enroll", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     console.log("Backend responded with status:", res.status);

//     if (!res.ok) {
//       const errorData = await res.json().catch(() => ({}));
//       console.log("Error response from backend:", errorData);
//       throw new Error(errorData.message || `Server error (${res.status})`);
//     }

//     const result = await res.json();
//     console.log("Success response from backend:", result);

//     setEnrollmentData(result.student || result);
//     setStep("payment");

//     toast({
//       title: "Enrollment Created!",
//       description: "Please complete the payment to activate your enrollment.",
//     });
//   } catch (error: any) {
//     console.error("=== SUBMISSION FAILED ===", error);
//     toast({
//       title: "Submission Failed",
//       description: error.message || "Something went wrong. Please try again.",
//       variant: "destructive",
//     });
//   }
// };

//   // Mock payment handler
//   const handleMockPayment = async (outcome: "success" | "failed") => {
//     if (outcome === "failed") {
//       toast({
//         title: "Payment Failed",
//         description: "Transaction declined. Please try again.",
//         variant: "destructive",
//       });
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/enroll/confirm-payment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           studentId: enrollmentData._id,
//           // enrollmentId: enrollmentData.enrollmentId, // use whichever your backend returns
//         }),
//       });

//       if (!res.ok) throw new Error("Payment confirmation failed");

//       const result = await res.json();

//       if (result.success) {
//         setEnrollmentData(result.student); // update with latest data
//         setStep("success");
//         toast({
//           title: "Payment Successful (Mock)",
//           description: "Your enrollment is now active!",
//         });
//       }
//     } catch (err) {
//       toast({
//         title: "Confirmation Failed",
//         description: "Could not confirm payment. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

const onSubmit = async (data: EnrollmentFormData) => {
  console.log("=== FORM SUBMIT STARTED ===");
  console.log("Data collected:", data);

  try {
    const res = await fetch("http://localhost:5000/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("Enrollment status:", res.status);

    if (!res.ok) {
      const err = await res.json();
      console.log("Enrollment error:", err);
      throw new Error(err.message || "Enrollment failed");
    }

    const result = await res.json();
    console.log("Enrollment success - received:", result);

    // Save the full student object
    setEnrollmentData(result.student || result);
    setStep("payment");

    toast({
      title: "Enrollment Created!",
      description: "Please complete the payment.",
    });
  } catch (error: any) {
    console.error("Submission failed:", error);
    toast({
      title: "Submission Failed",
      description: error.message || "Something went wrong.",
      variant: "destructive",
    });
  }
};

const handleMockPayment = async (outcome: "success" | "failed") => {
  if (outcome === "failed") {
    toast({ title: "Payment Failed", description: "Try again.", variant: "destructive" });
    return;
  }

  try {
    if (!enrollmentData) {
      throw new Error("No enrollment data found");
    }

    console.log("Payment confirmation - sending:", {
      studentId: enrollmentData._id,
      enrollmentId: enrollmentData.enrollmentId,
    });

    const res = await fetch("http://localhost:5000/api/enroll/confirm-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId: enrollmentData._id,
        enrollmentId: enrollmentData.enrollmentId || null,
      }),
    });

    console.log("Payment response status:", res.status);

    if (!res.ok) {
      const err = await res.json();
      console.log("Payment error from backend:", err);
      throw new Error(err.message || `Payment failed (${res.status})`);
    }

    const result = await res.json();
    console.log("Payment success:", result);

    setEnrollmentData(result.student);
    setStep("success");

    toast({
      title: "Payment Successful (Mock)",
      description: "Enrollment active!",
    });
  } catch (err: any) {
    console.error("Payment confirmation failed:", err);
    toast({
      title: "Confirmation Failed",
      description: err.message || "Could not confirm payment.",
      variant: "destructive",
    });
  }
};

  // ──────────────────────────────────────────────────────────────
  // RENDERING LOGIC - MULTI STEP
  // ──────────────────────────────────────────────────────────────

  if (step === "payment") {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Complete Payment</CardTitle>
          <CardDescription>
            Secure your seat in {enrollmentData?.program?.replace("-", " ").toUpperCase() || "selected program"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 py-10">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">₹9,999</div>
            <p className="text-muted-foreground text-lg">One-time enrollment fee</p>
            <p className="text-sm text-muted-foreground mt-2">(EMI options available soon)</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 min-w-[200px]"
              onClick={() => handleMockPayment("success")}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Pay Now (Mock Success)
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px]"
              onClick={() => handleMockPayment("failed")}
            >
              <AlertTriangle className="mr-2 h-5 w-5" />
              Simulate Failure
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            (This is a simulation — real Razorpay integration coming soon)
          </p>
        </CardContent>
      </Card>
    );
  }

 if (step === "success") {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="pt-16 pb-12 text-center">
        <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-14 h-14 text-emerald-500" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Welcome Aboard!</h3>
        <p className="text-xl text-muted-foreground mb-6">
          Enrollment ID: <strong>{enrollmentData?.enrollmentId || "ALGO-XXXXXX"}</strong>
        </p>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
  Your journey in {getProgramDisplayName(enrollmentData?.program || '')} program is now active.
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/dashboard">
              Go to Student Dashboard
            </Link>
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setStep("form")}
          >
            Submit Another Application
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
  // Default: Show the form (your original form stays here)
  // Default: Show the form
return (
  <Card variant="glass" className="max-w-2xl mx-auto">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl md:text-3xl">Start Your Journey</CardTitle>
      <CardDescription>
        Secure your seat in {getProgramDisplayName(enrollmentData?.program || '')}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" placeholder="Shreya Sen" {...register("name")} />
            {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="example@email.com" {...register("email")} />
            {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" placeholder="9876543210" {...register("phone")} />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input id="location" placeholder="City, State" {...register("location")} />
            {errors.location && <p className="text-destructive text-sm">{errors.location.message}</p>}
          </div>
        </div>

        {/* Education Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Education Level *</Label>
            <Select onValueChange={(value) => setValue("education", value, { shouldValidate: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                {educationLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.education && <p className="text-destructive text-sm">{errors.education.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="branch">Branch/Specialization *</Label>
            <Input id="branch" placeholder="Computer Science, ECE, etc." {...register("branch")} />
            {errors.branch && <p className="text-destructive text-sm">{errors.branch.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Graduation Year *</Label>
            <Select onValueChange={(value) => setValue("graduationYear", value, { shouldValidate: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {graduationYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.graduationYear && <p className="text-destructive text-sm">{errors.graduationYear.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Current Status *</Label>
            <Select onValueChange={(value) => setValue("status", value, { shouldValidate: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.status && <p className="text-destructive text-sm">{errors.status.message}</p>}
          </div>
        </div>

        {/* Program Selection */}
        <div className="space-y-2">
          <Label>Preferred Program *</Label>
          <Select onValueChange={(value) => setValue("program", value, { shouldValidate: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent className="max-h-64">
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
          {errors.program && <p className="text-destructive text-sm">{errors.program.message}</p>}
        </div>

        <Button
          type="submit"
          variant="hero"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : <>Submit Application <ArrowRight className="w-5 h-5 ml-2" /></>}
        </Button>
      </form>
    </CardContent>
  </Card>
);
};