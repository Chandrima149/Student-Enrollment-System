// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import Programs from "./pages/Programs";
// import Quiz from "./pages/Quiz";
// import Counseling from "./pages/Counseling";
// import NotFound from "./pages/NotFound";
// import { AdminPrograms } from "./pages/AdminPrograms";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/programs" element={<Programs />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/counseling" element={<Counseling />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//           <Route path="/admin/programs" element={<AdminPrograms />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Index from "./pages/Index";
// import Programs from "./pages/Programs";
// import Quiz from "./pages/Quiz";
// import Counseling from "./pages/Counseling";
// import NotFound from "./pages/NotFound";
// import { AdminPrograms } from "./pages/AdminPrograms";

// // Add this new import
// import Dashboard from "./pages/Dashboard.tsx";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/programs" element={<Programs />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/counseling" element={<Counseling />} />
          
//           {/* New dashboard route */}
//           <Route path="/dashboard" element={<Dashboard />} />

//           <Route path="*" element={<NotFound />} />
//           <Route path="/admin/programs" element={<AdminPrograms />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Quiz from "./pages/Quiz";
import Counseling from "./pages/Counseling";
import NotFound from "./pages/NotFound";
import { AdminPrograms } from "./pages/AdminPrograms";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* ❌ NO BrowserRouter here */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/programs" element={<AdminPrograms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
