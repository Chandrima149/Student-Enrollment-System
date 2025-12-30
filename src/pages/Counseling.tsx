import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const counselingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  date: z.date({ required_error: "Please select a date" }),
  timeSlot: z.string().min(1, "Please select a time slot"),
});

type CounselingFormData = z.infer<typeof counselingSchema>;

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const Counseling = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CounselingFormData>({
    resolver: zodResolver(counselingSchema),
  });

  const onSubmit = async (data: CounselingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Counseling data:", data);
    setIsSubmitted(true);
    toast({
      title: "Callback Scheduled!",
      description: "Our counselor will call you at the scheduled time.",
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setValue("date", date);
    }
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    setValue("timeSlot", slot);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Schedule a Counseling Call
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Speak with our expert counselors to get personalized guidance on choosing the right program for your career goals
            </p>
          </div>

          {!isSubmitted ? (
            <Card variant="glass" className="max-w-xl mx-auto animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-2xl">Book Your Free Callback</CardTitle>
                <CardDescription>
                  Choose a convenient date and time for our counselor to reach out
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
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

                  {/* Phone */}
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

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          disabled={(date) =>
                            date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                          }
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.date && (
                      <p className="text-destructive text-sm">{errors.date.message}</p>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-2">
                    <Label>Preferred Time Slot *</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleSlotSelect(slot)}
                          className={cn(
                            "p-3 rounded-lg border text-sm font-medium transition-all duration-300",
                            selectedSlot === slot
                              ? "bg-foreground text-background border-foreground"
                              : "bg-card/50 border-border hover:bg-secondary hover:border-muted-foreground/50"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    {errors.timeSlot && (
                      <p className="text-destructive text-sm">{errors.timeSlot.message}</p>
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
                      "Scheduling..."
                    ) : (
                      <>
                        Schedule Callback
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card variant="glass" className="max-w-xl mx-auto animate-scale-in">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-emerald-400" />
                </div>

                <h2 className="font-display text-3xl font-bold mb-4">
                  Callback Scheduled!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our counselor will call you on
                </p>

                <div className="inline-flex items-center gap-4 px-6 py-4 bg-secondary rounded-xl mb-8">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">
                      {selectedDate && format(selectedDate, "PPP")}
                    </span>
                  </div>
                  <div className="w-px h-6 bg-border" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{selectedSlot}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Make sure to keep your phone handy. Our counselor will call from +91 98765 43210
                </p>

                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Schedule Another Call
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              {
                title: "Free Consultation",
                description: "No cost, no obligation. Get genuine guidance.",
              },
              {
                title: "Expert Counselors",
                description: "Talk to industry professionals with 5+ years experience.",
              },
              {
                title: "Personalized Advice",
                description: "Get program recommendations tailored to your goals.",
              },
            ].map((item, index) => (
              <Card key={index} variant="glass" className="text-center">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Counseling;
