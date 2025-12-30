import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  program: string;
  className?: string;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  image,
  content,
  rating,
  program,
  className,
}: TestimonialCardProps) => {
  return (
    <Card variant="glass" className={cn("group", className)}>
      <CardContent className="pt-6">
        <Quote className="w-10 h-10 text-muted-foreground/30 mb-4" />
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          "{content}"
        </p>

        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs font-medium text-muted-foreground">
            Program: {program}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
