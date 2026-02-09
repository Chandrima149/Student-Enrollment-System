// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import { Upload, Loader2 } from "lucide-react";

// interface DocumentUploadProps {
//   studentId: string;
// }

// export const DocumentUpload = ({ studentId }: DocumentUploadProps) => {
//   const [files, setFiles] = useState<FileList | null>(null);
//   const [loading, setLoading] = useState(false);
//   const { toast } = useToast();

// //   
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!files || files.length === 0) {
//     toast({ title: "No files selected", variant: "destructive" });
//     return;
//   }

//   setLoading(true);

//   const formData = new FormData();
//   formData.append("studentId", studentId);

//   Array.from(files).forEach((file) => {
//     formData.append("documents", file);
//   });

//   try {
//     const res = await fetch("http://localhost:5000/api/enroll/upload-documents", {
//       method: "POST",
//       body: formData,
//     });

//     console.log("Upload response status:", res.status);

//     if (!res.ok) {
//       const err = await res.json();
//       console.log("Upload error from backend:", err);
//       throw new Error(err.message || "Upload failed");
//     }

//     const result = await res.json();
//     console.log("Upload success:", result);

//     toast({
//       title: "Success",
//       description: "Documents uploaded! Waiting for verification.",
//     });

//     setFiles(null); // Clear input
//   } catch (err: any) {
//     console.error("Upload error:", err);
//     toast({
//       title: "Upload Failed",
//       description: err.message || "Something went wrong",
//       variant: "destructive",
//     });
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <Card className="max-w-lg mx-auto">
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <Upload className="h-5 w-5" />
//           Upload Your Documents
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <Label htmlFor="documents" className="block mb-2">
//               Select files (Aadhaar, Marksheet, Resume, etc.)
//             </Label>
//             <Input
//               id="documents"
//               type="file"
//               multiple
//               accept=".pdf,.jpg,.jpeg,.png"
//               onChange={(e) => setFiles(e.target.files)}
//               disabled={loading}
//             />
//             <p className="text-sm text-muted-foreground mt-1">
//               Max 5 files • PDF, JPG, PNG supported
//             </p>
//           </div>

//           <Button type="submit" disabled={loading || !files} className="w-full">
//             {loading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Uploading...
//               </>
//             ) : (
//               "Upload Documents"
//             )}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Loader2, Check } from "lucide-react";

interface DocumentUploadProps {
  studentId: string;
}

export const DocumentUpload = ({ studentId }: DocumentUploadProps) => {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const documentTypes = [
    { id: "aadhaar", label: "Aadhaar Card" },
    { id: "photo", label: "Passport Size Photograph" },
    { id: "collegeId", label: "College ID" },
    { id: "certificate", label: "Academic Certificate" },
    { id: "resume", label: "Resume" },
  ];

  const handleFileChange = (type: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [type]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedFiles = Object.values(files).filter(Boolean);
    if (selectedFiles.length === 0) {
      toast({ title: "No files selected", variant: "destructive" });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("studentId", studentId);

    Object.entries(files).forEach(([type, file]) => {
      if (file) {
        formData.append("documents", file);
        formData.append("documentTypes", type); // Send type with each file
      }
    });

    try {
      const res = await fetch("http://localhost:5000/api/enroll/upload-documents", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Upload failed");
      }

      const result = await res.json();
      console.log("Upload success:", result);

      toast({
        title: "Success",
        description: "Documents uploaded! Waiting for verification.",
      });

      setFiles({}); // Clear all inputs
    } catch (err: any) {
      console.error("Upload error:", err);
      toast({
        title: "Upload Failed",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Upload Required Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {documentTypes.map((doc) => (
            <div key={doc.id} className="space-y-2">
              <Label htmlFor={doc.id} className="font-medium">
                {doc.label} <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-4">
                <Input
                  id={doc.id}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(doc.id, e.target.files?.[0] || null)}
                  disabled={loading}
                  className="flex-1"
                />
                {files[doc.id] && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Check className="h-4 w-4" />
                    {files[doc.id]?.name}
                  </div>
                )}
              </div>
            </div>
          ))}

          <Button
            type="submit"
            disabled={loading || Object.values(files).every((f) => !f)}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Submit Documents"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};