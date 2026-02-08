// src/pages/Dashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Student Dashboard</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Your enrollment is active. Start exploring your program.
          </p>
          
          <div className="mt-6">
            <Button>Start Learning</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}