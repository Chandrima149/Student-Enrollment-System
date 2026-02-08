// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const ADMIN_PASSWORD = "algoascend123"; // Change this!

// type Program = {
//   _id?: string;
//   category: string;
//   title: string;
//   description: string;
//   duration: string;
//   enrolled: number;
//   rating: number;
//   price: number;
//   curriculum: string[];
//   projects: string[];
//   isPopular: boolean;
// };

// export const AdminPrograms = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [programs, setPrograms] = useState<Program[]>([]);
//   const [curriculumInput, setCurriculumInput] = useState("");
//   const [projectInput, setProjectInput] = useState("");

//   const [formData, setFormData] = useState<Program>({
//     category: "ENGINEERING & TECH",
//     title: "",
//     description: "",
//     duration: "",
//     enrolled: 0,
//     rating: 4.9,
//     price: 0,
//     curriculum: [],
//     projects: [],
//     isPopular: false,
//   });

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchPrograms();
//     }
//   }, [isAuthenticated]);

//   const fetchPrograms = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/programs");
//       const data = await res.json();
//       setPrograms(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password === ADMIN_PASSWORD) {
//       setIsAuthenticated(true);
//     } else {
//       alert("Wrong password!");
//     }
//   };

//   const addCurriculumItem = () => {
//     if (curriculumInput.trim()) {
//       setFormData({
//         ...formData,
//         curriculum: [...formData.curriculum, curriculumInput.trim()],
//       });
//       setCurriculumInput("");
//     }
//   };

//   const addProjectItem = () => {
//     if (projectInput.trim()) {
//       setFormData({
//         ...formData,
//         projects: [...formData.projects, projectInput.trim()],
//       });
//       setProjectInput("");
//     }
//   };

//   const removeCurriculum = (index: number) => {
//     setFormData({
//       ...formData,
//       curriculum: formData.curriculum.filter((_, i) => i !== index),
//     });
//   };

//   const removeProject = (index: number) => {
//     setFormData({
//       ...formData,
//       projects: formData.projects.filter((_, i) => i !== index),
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.curriculum.length === 0 || formData.projects.length === 0) {
//       alert("Please add at least one curriculum item and one project.");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/programs", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           price: Number(formData.price),
//           enrolled: Number(formData.enrolled),
//           rating: Number(formData.rating),
//         }),
//       });

//       if (res.ok) {
//         alert("Program added successfully!");
//         setFormData({
//           category: "ENGINEERING & TECH",
//           title: "",
//           description: "",
//           duration: "",
//           enrolled: 0,
//           rating: 4.9,
//           price: 0,
//           curriculum: [],
//           projects: [],
//           isPopular: false,
//         });
//         setCurriculumInput("");
//         setProjectInput("");
//         fetchPrograms();
//       } else {
//         alert("Failed to add program");
//       }
//     } catch (err) {
//       alert("Error: Check console");
//       console.error(err);
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <Card className="max-w-md mx-auto mt-32 p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <Label>Password</Label>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" className="w-full">Login</Button>
//         </form>
//       </Card>
//     );
//   }

//   return (
//     <div className="container mx-auto p-8 max-w-5xl">
//       <h1 className="text-4xl font-bold mb-10 text-center">Admin - Manage Programs</h1>

//       {/* Add New Program Form */}
//       <Card className="p-8 mb-12">
//         <h2 className="text-2xl font-bold mb-6">Add New Program</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <Label>Title *</Label>
//               <Input
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 required
//               />
//             </div>

//             <div>
//               <Label>Category</Label>
//               <Select
//                 value={formData.category}
//                 onValueChange={(value) => setFormData({ ...formData, category: value })}
//               >
//                 <SelectTrigger>
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="ENGINEERING & TECH">Engineering & Tech</SelectItem>
//                   <SelectItem value="School Bootcamps">School Bootcamps</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div>
//             <Label>Description *</Label>
//             <Textarea
//               rows={4}
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <Label>Duration (e.g., 6 months) *</Label>
//               <Input
//                 value={formData.duration}
//                 onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Price (₹) *</Label>
//               <Input
//                 type="number"
//                 value={formData.price}
//                 onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
//                 required
//               />
//             </div>
//             <div>
//               <Label>Rating (e.g., 4.9)</Label>
//               <Input
//                 type="number"
//                 step="0.1"
//                 min="0"
//                 max="5"
//                 value={formData.rating}
//                 onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
//               />
//             </div>
//           </div>

//           <div>
//             <Label>Enrolled Students (default 0)</Label>
//             <Input
//               type="number"
//               value={formData.enrolled}
//               onChange={(e) => setFormData({ ...formData, enrolled: Number(e.target.value) })}
//             />
//           </div>

//           <div className="flex items-center gap-3">
//             <Checkbox
//               checked={formData.isPopular}
//               onCheckedChange={(checked) => setFormData({ ...formData, isPopular: !!checked })}
//             />
//             <Label className="cursor-pointer">Mark as Popular (shows "Popular" badge)</Label>
//           </div>

//           {/* Curriculum List */}
//           <div>
//             <Label>Curriculum Items *</Label>
//             <div className="flex gap-2 mb-3">
//               <Input
//                 placeholder="e.g., React.js & Redux"
//                 value={curriculumInput}
//                 onChange={(e) => setCurriculumInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCurriculumItem())}
//               />
//               <Button type="button" onClick={addCurriculumItem}>Add</Button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {formData.curriculum.map((item, i) => (
//                 <span key={i} className="bg-secondary px-3 py-1 rounded-full text-sm flex items-center gap-2">
//                   {item}
//                   <button type="button" onClick={() => removeCurriculum(i)} className="text-destructive">×</button>
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Projects List */}
//           <div>
//             <Label>Live Projects *</Label>
//             <div className="flex gap-2 mb-3">
//               <Input
//                 placeholder="e.g., E-Commerce Platform"
//                 value={projectInput}
//                 onChange={(e) => setProjectInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addProjectItem())}
//               />
//               <Button type="button" onClick={addProjectItem}>Add</Button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {formData.projects.map((item, i) => (
//                 <span key={i} className="bg-secondary px-3 py-1 rounded-full text-sm flex items-center gap-2">
//                   {item}
//                   <button type="button" onClick={() => removeProject(i)} className="text-destructive">×</button>
//                 </span>
//               ))}
//             </div>
//           </div>

//           <Button type="submit" size="lg" className="w-full">
//             Add Program to Database
//           </Button>
//         </form>
//       </Card>

//       {/* List of Existing Programs */}
//       <h2 className="text-2xl font-bold mb-6">Current Programs ({programs.length})</h2>
//       <div className="grid gap-6 md:grid-cols-2">
//         {programs.map((prog) => (
//           <Card key={prog._id} className="p-6">
//             <h3 className="font-bold text-xl">{prog.title}</h3>
//             <p className="text-sm text-muted-foreground mb-2">{prog.category} • ₹{prog.price} • {prog.duration}</p>
//             <p className="text-sm">{prog.description}</p>
//             {prog.isPopular && <span className="inline-block mt-2 px-3 py-1 bg-foreground text-background text-xs rounded-full">Popular</span>}
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ADMIN_PASSWORD = "algoascend123"; // Change this!

type Program = {
  _id?: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  enrolled: number;
  rating: number;
  price: number;
  curriculum: string[];
  projects: string[];
  isPopular: boolean;
};

export const AdminPrograms = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [curriculumInput, setCurriculumInput] = useState("");
  const [projectInput, setProjectInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null); // Track which program is being edited

  const [formData, setFormData] = useState<Program>({
    category: "ENGINEERING & TECH",
    title: "",
    description: "",
    duration: "",
    enrolled: 0,
    rating: 4.9,
    price: 0,
    curriculum: [],
    projects: [],
    isPopular: false,
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchPrograms();
    }
  }, [isAuthenticated]);

  const fetchPrograms = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/programs");
      const data = await res.json();
      setPrograms(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Wrong password!");
    }
  };

  const addCurriculumItem = () => {
    if (curriculumInput.trim()) {
      setFormData({
        ...formData,
        curriculum: [...formData.curriculum, curriculumInput.trim()],
      });
      setCurriculumInput("");
    }
  };

  const addProjectItem = () => {
    if (projectInput.trim()) {
      setFormData({
        ...formData,
        projects: [...formData.projects, projectInput.trim()],
      });
      setProjectInput("");
    }
  };

  const removeCurriculum = (index: number) => {
    setFormData({
      ...formData,
      curriculum: formData.curriculum.filter((_, i) => i !== index),
    });
  };

  const removeProject = (index: number) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.curriculum.length === 0 || formData.projects.length === 0) {
      alert("Please add at least one curriculum item and one project.");
      return;
    }

    try {
      const url = editingId
        ? `http://localhost:5000/api/programs/${editingId}`
        : "http://localhost:5000/api/programs";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          enrolled: Number(formData.enrolled),
          rating: Number(formData.rating),
        }),
      });

      if (res.ok) {
        alert(editingId ? "Program updated successfully!" : "Program added successfully!");
        resetForm();
        fetchPrograms();
      } else {
        alert("Failed to save program");
      }
    } catch (err) {
      alert("Error: Check console");
      console.error(err);
    }
  };

  const handleEdit = (program: Program) => {
    setFormData(program);
    setEditingId(program._id || null);
    setCurriculumInput("");
    setProjectInput("");
    window.scrollTo(0, 0); // Scroll to top to see form
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program? This cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/programs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Program deleted successfully!");
        fetchPrograms();
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting program");
    }
  };

  const resetForm = () => {
    setFormData({
      category: "ENGINEERING & TECH",
      title: "",
      description: "",
      duration: "",
      enrolled: 0,
      rating: 4.9,
      price: 0,
      curriculum: [],
      projects: [],
      isPopular: false,
    });
    setEditingId(null);
  };

  if (!isAuthenticated) {
    return (
      <Card className="max-w-md mx-auto mt-32 p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </Card>
    );
  }

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-10 text-center">Admin - Manage Programs</h1>

      {/* Add/Edit Program Form */}
      <Card className="p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">
          {editingId ? "Edit Program" : "Add New Program"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <Label>Title *</Label>
      <Input
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
    </div>

    <div>
      <Label>Category</Label>
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full p-3 border border-border rounded-md bg-card text-foreground"
      >
        <option value="ENGINEERING & TECH">Engineering & Tech</option>
        <option value="School Bootcamps">School Bootcamps</option>
      </select>
    </div>
  </div>

  <div>
    <Label>Description *</Label>
    <Textarea
      rows={4}
      value={formData.description}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      required
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <Label>Duration (e.g., 6 months) *</Label>
      <Input
        value={formData.duration}
        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
        required
      />
    </div>
    <div>
      <Label>Price (₹) *</Label>
      <Input
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
        required
      />
    </div>
    <div>
      <Label>Rating</Label>
      <Input
        type="number"
        step="0.1"
        min="0"
        max="5"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
      />
    </div>
  </div>

  <div>
    <Label>Enrolled Students</Label>
    <Input
      type="number"
      value={formData.enrolled}
      onChange={(e) => setFormData({ ...formData, enrolled: Number(e.target.value) })}
    />
  </div>

  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      id="isPopular"
      checked={formData.isPopular}
      onChange={(e) => setFormData({ ...formData, isPopular: e.target.checked })}
      className="w-4 h-4"
    />
    <Label htmlFor="isPopular" className="cursor-pointer">
      Mark as Popular (shows "Popular" badge)
    </Label>
  </div>

  {/* Curriculum */}
  <div>
    <Label>Curriculum Items *</Label>
    <div className="flex gap-2 mb-3">
      <Input
        placeholder="e.g., React.js & Redux"
        value={curriculumInput}
        onChange={(e) => setCurriculumInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCurriculumItem())}
      />
      <Button type="button" onClick={addCurriculumItem}>Add</Button>
    </div>
    <div className="flex flex-wrap gap-2">
      {formData.curriculum.map((item, i) => (
        <span key={i} className="bg-secondary px-3 py-1 rounded-full text-sm flex items-center gap-2">
          {item}
          <button type="button" onClick={() => removeCurriculum(i)} className="text-destructive">×</button>
        </span>
      ))}
    </div>
  </div>

  {/* Projects */}
  <div>
    <Label>Live Projects *</Label>
    <div className="flex gap-2 mb-3">
      <Input
        placeholder="e.g., E-Commerce Platform"
        value={projectInput}
        onChange={(e) => setProjectInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addProjectItem())}
      />
      <Button type="button" onClick={addProjectItem}>Add</Button>
    </div>
    <div className="flex flex-wrap gap-2">
      {formData.projects.map((item, i) => (
        <span key={i} className="bg-secondary px-3 py-1 rounded-full text-sm flex items-center gap-2">
          {item}
          <button type="button" onClick={() => removeProject(i)} className="text-destructive">×</button>
        </span>
      ))}
    </div>
  </div>

  <div className="flex gap-4">
    <Button type="submit" size="lg" className="flex-1">
      {editingId ? "Save Changes" : "Add Program to Database"}
    </Button>
    {editingId && (
      <Button type="button" variant="outline" onClick={resetForm}>
        Cancel Edit
      </Button>
    )}
  </div>
</form>
      </Card>

      {/* List of Programs with Edit/Delete */}
      <h2 className="text-2xl font-bold mb-6">Current Programs ({programs.length})</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((prog) => (
          <Card key={prog._id} className="p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-xl">{prog.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {prog.category} • ₹{prog.price} • {prog.duration}
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => handleEdit(prog)}>
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => prog._id && handleDelete(prog._id)}>
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-sm mb-2">{prog.description}</p>
            {prog.isPopular && (
              <span className="inline-block mt-2 px-3 py-1 bg-foreground text-background text-xs rounded-full">
                Popular
              </span>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};