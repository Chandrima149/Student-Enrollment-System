import { Link } from "react-router-dom";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  category: string;
  icon: React.ReactNode;
  featured?: boolean;
  className?: string;
}

export const ProgramCard = ({
  id,
  title,
  description,
  duration,
  students,
  rating,
  price,
  category,
  icon,
  featured,
  className,
}: ProgramCardProps) => {
  return (
    <Card
      variant="interactive"
      className={cn(
        "group relative overflow-hidden",
        featured && "border-foreground/30 shadow-[0_0_30px_hsl(var(--foreground)/0.1)]",
        className
      )}
    >
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}

      <CardHeader>
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {category}
        </span>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}+</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs text-muted-foreground">Starting from</span>
              <p className="text-2xl font-display font-bold">{price}</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full group/btn" asChild>
          <Link to={`/programs#${id}`}>
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
