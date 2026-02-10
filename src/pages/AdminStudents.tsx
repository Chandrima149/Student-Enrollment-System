// // // import { useEffect, useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import { useToast } from "@/hooks/use-toast";
// // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// // // interface Document {
// // //   url: string;
// // //   originalName: string;
// // //   uploadedAt: string;
// // //   verified: boolean;
// // // }

// // // interface Student {
// // //   _id: string;
// // //   name: string;
// // //   email: string;
// // //   program: string;
// // //   paymentStatus: string;
// // //   enrollmentStatus: string;
// // //   leadStatus: string;
// // //   createdAt: string;
// // //   documents?: Document[];  // ← This was missing — now TypeScript knows about it
// // // } // ← THIS LINE ADDED (optional array)
// // // }

// // // export const AdminStudents = () => {
// // //   const [students, setStudents] = useState<Student[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const { toast } = useToast();

// // //   useEffect(() => {
// // //     fetchStudents();
// // //   }, []);

// // //   const fetchStudents = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/enroll/admin/students");
// // //       if (!res.ok) throw new Error("Failed to fetch");
// // //       const data = await res.json();
// // //       setStudents(data.students || []);
// // //     } catch (err) {
// // //       toast({
// // //         title: "Error",
// // //         description: "Failed to load students",
// // //         variant: "destructive",
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const updateStatus = async (studentId: string, newStatus: string) => {
// // //     try {
// // //       const res = await fetch(`http://localhost:5000/api/enroll/admin/students/${studentId}/status`, {
// // //         method: "PUT",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ status: newStatus }),
// // //       });

// // //       if (!res.ok) throw new Error("Failed to update");

// // //       toast({ title: "Success", description: `Status changed to ${newStatus}` });
// // //       fetchStudents(); // Refresh list
// // //     } catch (err) {
// // //       toast({
// // //         title: "Error",
// // //         description: "Failed to update status",
// // //         variant: "destructive",
// // //       });
// // //     }
// // //   };

// // //   if (loading) return <div className="p-8 text-center">Loading students...</div>;

// // //   return (
// // //     <div className="p-6">
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>Student Management Dashboard</CardTitle>
// // //         </CardHeader>
// // //         <CardContent>
// // //           {/* <Table>
// // //             <TableHeader>
// // //               <TableRow>
// // //                 <TableHead>Name</TableHead>
// // //                 <TableHead>Email</TableHead>
// // //                 <TableHead>Program</TableHead>
// // //                 <TableHead>Payment</TableHead>
// // //                 <TableHead>Lead Status</TableHead>
// // //                 <TableHead>Actions</TableHead>
// // //               </TableRow>
// // //             </TableHeader>
// // //             <TableBody>
// // //               {students.map((student) => (
// // //                 <TableRow key={student._id}>
// // //                   <TableCell>{student.name}</TableCell>
// // //                   <TableCell>{student.email}</TableCell>
// // //                   <TableCell>{student.program}</TableCell>
// // //                   <TableCell>
// // //                     <Badge variant={student.paymentStatus === "paid" ? "default" : "secondary"}>
// // //                       {student.paymentStatus}
// // //                     </Badge>
// // //                   </TableCell>
// // //                   <TableCell>
// // //                     <Badge variant="outline">{student.leadStatus}</Badge>
// // //                   </TableCell>
// // //                   <TableCell>
// // //                     <div className="flex gap-2">
// // //                       <Button size="sm" variant="default" onClick={() => updateStatus(student._id, "Approved")}>
// // //                         Approve
// // //                       </Button>
// // //                       <Button size="sm" variant="destructive" onClick={() => updateStatus(student._id, "Rejected")}>
// // //                         Reject
// // //                       </Button>
// // //                       <Button size="sm" variant="secondary" onClick={() => updateStatus(student._id, "On-Hold")}>
// // //                         On-Hold
// // //                       </Button>
// // //                     </div>
// // //                   </TableCell>
// // //                 </TableRow>
// // //               ))}
// // //             </TableBody>
// // //           </Table> */}
// // //           <Table>
// // //   <TableHeader>
// // //     <TableRow>
// // //       <TableHead>Name</TableHead>
// // //       <TableHead>Email</TableHead>
// // //       <TableHead>Program</TableHead>
// // //       <TableHead>Payment</TableHead>
// // //       <TableHead>Status</TableHead>
// // //       <TableHead>Documents</TableHead>
// // //       <TableHead>Actions</TableHead>
// // //     </TableRow>
// // //   </TableHeader>
// // //   <TableBody>
// // //     {students.map((student) => (
// // //       <TableRow key={student._id}>
// // //         <TableCell className="font-medium">{student.name}</TableCell>
// // //         <TableCell>{student.email}</TableCell>
// // //         <TableCell>{student.program}</TableCell>
// // //         <TableCell>
// // //           <Badge variant={student.paymentStatus === "paid" ? "default" : "secondary"}>
// // //             {student.paymentStatus}
// // //           </Badge>
// // //         </TableCell>
// // //         <TableCell>
// // //           <Badge variant="outline">{student.leadStatus}</Badge>
// // //         </TableCell>
// // //         <TableCell>
// // //           {student.documents && student.documents.length > 0 ? (
// // //             <div className="flex flex-col gap-1 max-w-xs">
// // //               {student.documents?.map((doc: Document, index: number) => (
// // //                 // <a
// // //                 //   key={index}
// // //                 //   href={doc.url}
// // //                 //   target="_blank"
// // //                 //   rel="noopener noreferrer"
// // //                 //   className="text-blue-600 hover:underline text-sm truncate block"
// // //                 //   title={doc.originalName}
// // //                 // >
// // //                 //   {doc.originalName} 
// // //                 //   {doc.verified ? " ✓ Verified" : " ⏳ Pending"}
// // //                 // </a>

// // //                 <a
// // //   href={doc.url}
// // //   download={doc.originalName}           // ← This forces download with correct filename
// // //   target="_blank"
// // //   rel="noopener noreferrer"
// // //   className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 text-sm underline"
// // //   title={doc.originalName}
// // // >
// // //   <Upload className="h-3.5 w-3.5" />    // ← small icon for clarity
// // //   {doc.originalName}
// // //   {doc.verified ? (
// // //     <span className="ml-1 text-green-600 text-xs">✓ Verified</span>
// // //   ) : (
// // //     <span className="ml-1 text-yellow-600 text-xs">⏳ Pending</span>
// // //   )}
// // // </a>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             <span className="text-muted-foreground text-sm">No documents</span>
// // //           )}
// // //         </TableCell>
// // //         <TableCell>
// // //           <div className="flex gap-2 flex-wrap">
// // //             <Button
// // //               size="sm"
// // //               variant="default"
// // //               onClick={() => updateStatus(student._id, "Approved")}
// // //             >
// // //               Approve
// // //             </Button>
// // //             <Button
// // //               size="sm"
// // //               variant="destructive"
// // //               onClick={() => updateStatus(student._id, "Rejected")}
// // //             >
// // //               Reject
// // //             </Button>
// // //             <Button
// // //               size="sm"
// // //               variant="secondary"
// // //               onClick={() => updateStatus(student._id, "On-Hold")}
// // //             >
// // //               On-Hold
// // //             </Button>
// // //           </div>
// // //         </TableCell>
// // //       </TableRow>
// // //     ))}
// // //   </TableBody>
// // // </Table>
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   );
// // // };



// // import { useEffect, useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { useToast } from "@/hooks/use-toast";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import { Upload } from "lucide-react";

// // // Define the shape of each document object
// // interface Document {
// //   url: string;
// //   originalName: string;
// //   uploadedAt: string;
// //   verified: boolean;
// // }

// // // Full Student type including documents
// // interface Student {
// //   _id: string;
// //   name: string;
// //   email: string;
// //   program: string;
// //   paymentStatus: string;
// //   enrollmentStatus: string;
// //   leadStatus: string;
// //   createdAt: string;
// //   documents?: Document[]; // optional array
// // }

// // export const AdminStudents = () => {
// //   const [students, setStudents] = useState<Student[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const { toast } = useToast();

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   const fetchStudents = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/enroll/admin/students");
// //       if (!res.ok) throw new Error("Failed to fetch");
// //       const data = await res.json();
// //       setStudents(data.students || []);
// //     } catch (err) {
// //       toast({
// //         title: "Error",
// //         description: "Failed to load students",
// //         variant: "destructive",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // const updateStatus = async (studentId: string, newStatus: string) => {
// //   //   try {
// //   //     const res = await fetch(`http://localhost:5000/api/enroll/admin/students/${studentId}/status`, {
// //   //       method: "PUT",
// //   //       headers: { "Content-Type": "application/json" },
// //   //       body: JSON.stringify({ status: newStatus }),
// //   //     });

// //   //     if (!res.ok) throw new Error("Failed to update");

// //   //     toast({ title: "Success", description: `Status updated to ${newStatus}` });
// //   //     fetchStudents(); // Refresh list
// //   //   } catch (err) {
// //   //     toast({
// //   //       title: "Error",
// //   //       description: "Failed to update status",
// //   //       variant: "destructive",
// //   //     });
// //   //   }
// //   // };

// //   const updateStatus = async (studentId: string, newStatus: string) => {
// //   try {
// //     const res = await fetch(`http://localhost:5000/api/enroll/admin/students/${studentId}/status`, {
// //       method: "PUT",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ status: newStatus }),
// //     });

// //     if (!res.ok) {
// //       const err = await res.json();
// //       throw new Error(err.message || "Failed to update status");
// //     }

// //     toast({
// //       title: "Success",
// //       description: `Status updated to ${newStatus}`,
// //     });

    
// //     await new Promise(resolve => setTimeout(resolve, 1000));
// //     fetchStudents();
// //   } catch (err: any) {
// //     console.error("Status update error:", err);
// //     toast({
// //       title: "Error",
// //       description: err.message || "Failed to update status",
// //       variant: "destructive",
// //     });
// //   }
// // };
// // const updateDocumentVerification = async (
// //   studentId: string,
// //   docId: string,
// //   verified: boolean
// // ) => {
// //   try {
// //     const res = await fetch(
// //       `http://localhost:5000/api/enroll/admin/students/${studentId}/documents/${docId}/verify`,
// //       {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ verified }),
// //       }
// //     );

// //     if (!res.ok) throw new Error("Failed to update verification");

// //     toast({
// //       title: "Success",
// //       description: `Document marked as ${verified ? "Verified" : "Rejected"}`,
// //     });

// //     // Refresh student list after short delay
// //     setTimeout(fetchStudents, 800);
// //   } catch (err: any) {
// //     console.error("Verification error:", err);
// //     toast({
// //       title: "Error",
// //       description: "Failed to update document status",
// //       variant: "destructive",
// //     });
// //   }
// // };


// //   if (loading) return <div className="p-8 text-center">Loading students...</div>;

// //   return (
// //     <div className="p-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Student Management Dashboard</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <Table>
// //             <TableHeader>
// //               <TableRow>
// //                 <TableHead>Name</TableHead>
// //                 <TableHead>Email</TableHead>
// //                 <TableHead>Program</TableHead>
// //                 <TableHead>Payment</TableHead>
// //                 <TableHead>Status</TableHead>
// //                 <TableHead>Documents</TableHead>
// //                 <TableHead>Actions</TableHead>
// //               </TableRow>
// //             </TableHeader>
// //             <TableBody>
// //               {students.map((student) => (
// //                 <TableRow key={student._id}>
// //                   <TableCell className="font-medium">{student.name}</TableCell>
// //                   <TableCell>{student.email}</TableCell>
// //                   <TableCell>{student.program}</TableCell>
// //                   <TableCell>
// //                     <Badge variant={student.paymentStatus === "paid" ? "default" : "secondary"}>
// //                       {student.paymentStatus}
// //                     </Badge>
// //                   </TableCell>
// //                   <TableCell>
// //                     <Badge variant="outline">{student.leadStatus}</Badge>
// //                   </TableCell>
// //                   <TableCell>
// //                     {/* {student.documents && student.documents.length > 0 ? (
// //                       <div className="flex flex-col gap-1 max-w-xs">
// //                         {student.documents.map((doc: Document, index: number) => (
// //                           // 
// //                           <a
// //   href={doc.url}
// //   download={doc.originalName} 
// //   target="_blank"
// //   rel="noopener noreferrer"
// //   className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm underline"
// //   title={doc.originalName}
// // >
// //   <Upload className="h-4 w-4" /> 
// //   {doc.originalName}
// //   {doc.verified ? (
// //     <span className="ml-1 text-xs text-green-600">✓ Verified</span>
// //   ) : (
// //     <span className="ml-1 text-xs text-yellow-600">⏳ Pending</span>
// //   )}
// // </a>
// //                         ))}
// //                       </div>
// //                     ) : (
// //                       <span className="text-muted-foreground text-sm">No documents</span>
// //                     )} */}

// //                     {student.documents && student.documents.length > 0 ? (
// //   <div className="flex flex-col gap-1 max-w-xs">
// //     {student.documents.map((doc: Document, index: number) => (
// //       <div key={index} className="flex items-center justify-between gap-2">
// //         <a
// //           href={doc.url}
// //           download={doc.originalName}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 text-sm underline flex-1"
// //           title={doc.originalName}
// //         >
// //           <Upload className="h-3.5 w-3.5" />
// //           {doc.originalName}
// //         </a>

// //         <div className="flex gap-1">
// //           <Button
// //             size="xs"
// //             variant={doc.verified ? "default" : "outline"}
// //             className="h-6 px-2 text-xs"
// //             onClick={() => updateDocumentVerification(student._id, doc._id, true)}
// //             disabled={doc.verified}
// //           >
// //             Verify
// //           </Button>
// //           <Button
// //             size="xs"
// //             variant={!doc.verified ? "destructive" : "outline"}
// //             className="h-6 px-2 text-xs"
// //             onClick={() => updateDocumentVerification(student._id, doc._id, false)}
// //             disabled={!doc.verified}
// //           >
// //             Reject
// //           </Button>
// //         </div>

// //         {doc.verified ? (
// //           <span className="ml-1 text-xs text-green-600">✓ Verified</span>
// //         ) : (
// //           <span className="ml-1 text-xs text-yellow-600">⏳ Pending</span>
// //         )}
// //       </div>
// //     ))}
// //   </div>
// // ) : (
// //   <span className="text-muted-foreground text-sm">No documents</span>
// // )}
// //                   </TableCell>
// //                   <TableCell>
// //                     <div className="flex gap-2 flex-wrap">
// //                       <Button
// //                         size="sm"
// //                         variant="default"
// //                         onClick={() => updateStatus(student._id, "Approved")}
// //                       >
// //                         Approve
// //                       </Button>
// //                       <Button
// //                         size="sm"
// //                         variant="destructive"
// //                         onClick={() => updateStatus(student._id, "Rejected")}
// //                       >
// //                         Reject
// //                       </Button>
// //                       <Button
// //                         size="sm"
// //                         variant="secondary"
// //                         onClick={() => updateStatus(student._id, "On-Hold")}
// //                       >
// //                         On-Hold
// //                       </Button>
// //                     </div>
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };



// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useToast } from "@/hooks/use-toast";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Upload } from "lucide-react";

// // Define Document with _id (MongoDB adds this automatically)
// interface Document {
//   _id: string;              // ← added this
//   url: string;
//   originalName: string;
//   uploadedAt: string;
//   verified: boolean;
// }

// // Student interface including documents
// interface Student {
//   _id: string;
//   name: string;
//   email: string;
//   program: string;
//   paymentStatus: string;
//   enrollmentStatus: string;
//   leadStatus: string;
//   createdAt: string;
//   documents?: Document[];
// }

// export const AdminStudents = () => {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState(true);
//   const { toast } = useToast();

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/enroll/admin/students");
//       if (!res.ok) throw new Error("Failed to fetch");
//       const data = await res.json();
//       setStudents(data.students || []);
//     } catch (err) {
//       toast({
//         title: "Error",
//         description: "Failed to load students",
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (studentId: string, newStatus: string) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/enroll/admin/students/${studentId}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!res.ok) throw new Error("Failed to update");

//       toast({ title: "Success", description: `Status updated to ${newStatus}` });

//       // Wait for DB to commit
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       fetchStudents();
//     } catch (err: any) {
//       console.error("Status update error:", err);
//       toast({
//         title: "Error",
//         description: err.message || "Failed to update status",
//         variant: "destructive",
//       });
//     }
//   };

//   const updateDocumentVerification = async (
//     studentId: string,
//     docId: string,
//     verified: boolean
//   ) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/enroll/admin/students/${studentId}/documents/${docId}/verify`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ verified }),
//         }
//       );

//       if (!res.ok) throw new Error("Failed to update verification");

//       toast({
//         title: "Success",
//         description: `Document marked as ${verified ? "Verified" : "Rejected"}`,
//       });

//       // Refresh after delay
//       setTimeout(fetchStudents, 800);
//     } catch (err: any) {
//       console.error("Verification error:", err);
//       toast({
//         title: "Error",
//         description: "Failed to update document status",
//         variant: "destructive",
//       });
//     }
//   };

//   if (loading) return <div className="p-8 text-center">Loading students...</div>;

//   return (
//     <div className="p-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Student Management Dashboard</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Program</TableHead>
//                 <TableHead>Payment</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Documents</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {students.map((student) => (
//                 <TableRow key={student._id}>
//                   <TableCell className="font-medium">{student.name}</TableCell>
//                   <TableCell>{student.email}</TableCell>
//                   <TableCell>{student.program}</TableCell>
//                   <TableCell>
//                     <Badge variant={student.paymentStatus === "paid" ? "default" : "secondary"}>
//                       {student.paymentStatus}
//                     </Badge>
//                   </TableCell>
//                   <TableCell>
//                     <Badge variant="outline">{student.leadStatus}</Badge>
//                   </TableCell>
//                   <TableCell>
//                     {student.documents && student.documents.length > 0 ? (
//                       <div className="flex flex-col gap-2 max-w-xs">
//                         {student.documents.map((doc: Document, index: number) => (
//                           <div key={index} className="flex items-center justify-between gap-3 py-1 border-b last:border-b-0">
//                             <a
//                               href={doc.url}
//                               download={doc.originalName}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm underline flex-1"
//                               title={doc.originalName}
//                             >
//                               <Upload className="h-4 w-4" />
//                               {doc.originalName}
//                             </a>

//                             <div className="flex gap-1">
//                               <Button
//                                 size="sm"
//                                 variant={doc.verified ? "default" : "outline"}
//                                 className="h-7 px-3 text-xs"
//                                 onClick={() => updateDocumentVerification(student._id, doc._id, true)}
//                                 disabled={doc.verified}
//                               >
//                                 Verify
//                               </Button>
//                               <Button
//                                 size="sm"
//                                 variant={!doc.verified ? "destructive" : "outline"}
//                                 className="h-7 px-3 text-xs"
//                                 onClick={() => updateDocumentVerification(student._id, doc._id, false)}
//                                 disabled={!doc.verified}
//                               >
//                                 Reject
//                               </Button>
//                             </div>

//                             {doc.verified ? (
//                               <span className="text-xs text-green-600 font-medium">✓ Verified</span>
//                             ) : (
//                               <span className="text-xs text-yellow-600 font-medium">⏳ Pending</span>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <span className="text-muted-foreground text-sm">No documents</span>
//                     )}
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex gap-2 flex-wrap">
//                       <Button
//                         size="sm"
//                         variant="default"
//                         onClick={() => updateStatus(student._id, "Approved")}
//                       >
//                         Approve
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="destructive"
//                         onClick={() => updateStatus(student._id, "Rejected")}
//                       >
//                         Reject
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="secondary"
//                         onClick={() => updateStatus(student._id, "On-Hold")}
//                       >
//                         On-Hold
//                       </Button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useToast } from "@/hooks/use-toast";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Upload } from "lucide-react";

// // Document interface
// interface Document {
//   _id: string;
//   url: string;
//   originalName: string;
//   uploadedAt: string;
//   verified: boolean;
// }

// // Student interface
// interface Student {
//   _id: string;
//   name: string;
//   email: string;
//   program: string;
//   location: string;
//   counselor?: string;
//   paymentStatus: string;
//   enrollmentStatus: string;
//   leadStatus: string;
//   createdAt: string;
//   documents?: Document[];
// }

// export const AdminStudents = () => {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState(true);
//   const { toast } = useToast();

//   // Explicitly type filter states as string
//   const [programFilter, setProgramFilter] = useState<string>("all");
//   const [cityFilter, setCityFilter] = useState<string>("all");
//   const [counselorFilter, setCounselorFilter] = useState<string>("all");
//   const [paymentFilter, setPaymentFilter] = useState<string>("all");
//   const [statusFilter, setStatusFilter] = useState<string>("all");

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/enroll/admin/students");
//       if (!res.ok) throw new Error("Failed to fetch");
//       const data = await res.json();
//       setStudents(data.students || []);
//       setFilteredStudents(data.students || []);
//     } catch (err) {
//       toast({
//         title: "Error",
//         description: "Failed to load students",
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Apply filters
//   useEffect(() => {
//     let result = [...students];

//     if (programFilter !== "all") {
//       result = result.filter((s) => s.program === programFilter);
//     }
//     if (cityFilter !== "all") {
//       result = result.filter((s) => s.location === cityFilter);
//     }
//     if (counselorFilter !== "all") {
//       result = result.filter((s) => s.counselor === counselorFilter);
//     }
//     if (paymentFilter !== "all") {
//       result = result.filter((s) => s.paymentStatus === paymentFilter);
//     }
//     if (statusFilter !== "all") {
//       result = result.filter((s) => s.leadStatus === statusFilter);
//     }

//     setFilteredStudents(result);
//   }, [students, programFilter, cityFilter, counselorFilter, paymentFilter, statusFilter]);

//   const updateStatus = async (studentId: string, newStatus: string) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/enroll/admin/students/${studentId}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!res.ok) throw new Error("Failed to update");

//       toast({ title: "Success", description: `Status updated to ${newStatus}` });

//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       fetchStudents();
//     } catch (err: any) {
//       console.error("Status update error:", err);
//       toast({
//         title: "Error",
//         description: err.message || "Failed to update status",
//         variant: "destructive",
//       });
//     }
//   };

//   const updateDocumentVerification = async (
//     studentId: string,
//     docId: string,
//     verified: boolean
//   ) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/enroll/admin/students/${studentId}/documents/${docId}/verify`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ verified }),
//         }
//       );

//       if (!res.ok) throw new Error("Failed to update verification");

//       toast({
//         title: "Success",
//         description: `Document marked as ${verified ? "Verified" : "Rejected"}`,
//       });

//       setTimeout(fetchStudents, 800);
//     } catch (err: any) {
//       console.error("Verification error:", err);
//       toast({
//         title: "Error",
//         description: "Failed to update document status",
//         variant: "destructive",
//       });
//     }
//   };

//   if (loading) return <div className="p-8 text-center">Loading students...</div>;

//   // Get unique values for filters
//   const programs = ["all", ...new Set(students.map(s => s.program))];
//   const cities = ["all", ...new Set(students.map(s => s.location).filter(Boolean))];
//   const counselors = ["all", ...new Set(students.map(s => s.counselor || "").filter(Boolean))];
//   const paymentStatuses = ["all", "pending", "paid"];
//   const leadStatuses = ["all", "New", "Approved", "Rejected", "On-Hold"];

//   return (
//     <div className="p-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>Student Management Dashboard</CardTitle>
//         </CardHeader>
//         <CardContent>
//           {/* Filters */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
//             <div>
//               <Select value={programFilter} onValueChange={setProgramFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Program" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {programs.map(p => (
//                     <SelectItem key={p} value={p}>
//                       {p === "all" ? "All Programs" : p}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Select value={cityFilter} onValueChange={setCityFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="City" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {cities.map(c => (
//                     <SelectItem key={c} value={c}>
//                       {c === "all" ? "All Cities" : c}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Select value={counselorFilter} onValueChange={setCounselorFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Counselor" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {counselors.map(c => (
//                     <SelectItem key={c} value={c}>
//                       {c === "all" ? "All Counselors" : c}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Select value={paymentFilter} onValueChange={setPaymentFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Payment" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {paymentStatuses.map(p => (
//                     <SelectItem key={p} value={p}>
//                       {p === "all" ? "All Payments" : p.charAt(0).toUpperCase() + p.slice(1)}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Select value={statusFilter} onValueChange={setStatusFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {leadStatuses.map(s => (
//                     <SelectItem key={s} value={s}>
//                       {s === "all" ? "All Statuses" : s}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Program</TableHead>
//                 <TableHead>Payment</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Documents</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredStudents.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
//                     No students match the selected filters
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 filteredStudents.map((student) => (
//                   <TableRow key={student._id}>
//                     <TableCell className="font-medium">{student.name}</TableCell>
//                     <TableCell>{student.email}</TableCell>
//                     <TableCell>{student.program}</TableCell>
//                     <TableCell>
//                       <Badge variant={student.paymentStatus === "paid" ? "default" : "secondary"}>
//                         {student.paymentStatus}
//                       </Badge>
//                     </TableCell>
//                     <TableCell>
//                       <Badge variant="outline">{student.leadStatus}</Badge>
//                     </TableCell>
//                     <TableCell>
//                       {student.documents && student.documents.length > 0 ? (
//                         <div className="flex flex-col gap-2 max-w-xs">
//                           {student.documents.map((doc: Document, index: number) => (
//                             <div key={index} className="flex items-center justify-between gap-3 py-1 border-b last:border-b-0">
//                               <a
//                                 href={doc.url}
//                                 download={doc.originalName}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm underline flex-1"
//                                 title={doc.originalName}
//                               >
//                                 <Upload className="h-4 w-4" />
//                                 {doc.originalName}
//                               </a>

//                               <div className="flex gap-1">
//                                 <Button
//                                   size="sm"
//                                   variant={doc.verified ? "default" : "outline"}
//                                   className="h-7 px-3 text-xs"
//                                   onClick={() => updateDocumentVerification(student._id, doc._id, true)}
//                                   disabled={doc.verified}
//                                 >
//                                   Verify
//                                 </Button>
//                                 <Button
//                                   size="sm"
//                                   variant={!doc.verified ? "destructive" : "outline"}
//                                   className="h-7 px-3 text-xs"
//                                   onClick={() => updateDocumentVerification(student._id, doc._id, false)}
//                                   disabled={!doc.verified}
//                                 >
//                                   Reject
//                                 </Button>
//                               </div>

//                               {doc.verified ? (
//                                 <span className="text-xs text-green-600 font-medium">✓ Verified</span>
//                               ) : (
//                                 <span className="text-xs text-yellow-600 font-medium">⏳ Pending</span>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       ) : (
//                         <span className="text-muted-foreground text-sm">No documents</span>
//                       )}
//                     </TableCell>
//                     <TableCell>
//                       <div className="flex gap-2 flex-wrap">
//                         <Button
//                           size="sm"
//                           variant="default"
//                           onClick={() => updateStatus(student._id, "Approved")}
//                         >
//                           Approve
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="destructive"
//                           onClick={() => updateStatus(student._id, "Rejected")}
//                         >
//                           Reject
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="secondary"
//                           onClick={() => updateStatus(student._id, "On-Hold")}
//                         >
//                           On-Hold
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Download } from "lucide-react";
import Papa from "papaparse";

// Document interface
interface Document {
  _id: string;
  url: string;
  originalName: string;
  uploadedAt: string;
  verified: boolean;
}

// Student interface
interface Student {
  _id: string;
  name: string;
  email: string;
  program: string;
  location: string;
  counselor?: string;
  paymentStatus: string;
  enrollmentStatus: string;
  leadStatus: string;
  createdAt: string;
  documents?: Document[];
}

export const AdminStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Filter states
  const [programFilter, setProgramFilter] = useState<string>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [counselorFilter, setCounselorFilter] = useState<string>("all");
  const [paymentFilter, setPaymentFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/enroll/admin/students");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setStudents(data.students || []);
      setFilteredStudents(data.students || []);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to load students",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Apply filters
  useEffect(() => {
    let result = [...students];

    if (programFilter !== "all") result = result.filter(s => s.program === programFilter);
    if (cityFilter !== "all") result = result.filter(s => s.location === cityFilter);
    if (counselorFilter !== "all") result = result.filter(s => s.counselor === counselorFilter);
    if (paymentFilter !== "all") result = result.filter(s => s.paymentStatus === paymentFilter);
    if (statusFilter !== "all") result = result.filter(s => s.leadStatus === statusFilter);

    setFilteredStudents(result);
  }, [students, programFilter, cityFilter, counselorFilter, paymentFilter, statusFilter]);

  // Export to CSV
  const exportToCSV = () => {
    if (filteredStudents.length === 0) {
      toast({ title: "No data", description: "No students to export", variant: "destructive" });
      return;
    }

    const csvData = filteredStudents.map(student => ({
      Name: student.name,
      Email: student.email,
      Program: student.program,
      City: student.location,
      Counselor: student.counselor || "N/A",
      "Payment Status": student.paymentStatus,
      "Lead Status": student.leadStatus,
      "Documents Count": student.documents?.length || 0,
      "Verified Documents": student.documents?.filter(d => d.verified).length || 0,
      "Enrollment Date": new Date(student.createdAt).toLocaleDateString(),
    }));

    const csv = Papa.unparse(csvData);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `students-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({ title: "Success", description: "CSV file downloaded" });
  };

  const updateStatus = async (studentId: string, newStatus: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/enroll/admin/students/${studentId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update");

      toast({ title: "Success", description: `Status updated to ${newStatus}` });

      await new Promise(resolve => setTimeout(resolve, 1000));
      fetchStudents();
    } catch (err: any) {
      console.error("Status update error:", err);
      toast({
        title: "Error",
        description: err.message || "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const updateDocumentVerification = async (
    studentId: string,
    docId: string,
    verified: boolean
  ) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/enroll/admin/students/${studentId}/documents/${docId}/verify`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ verified }),
        }
      );

      if (!res.ok) throw new Error("Failed to update verification");

      toast({
        title: "Success",
        description: `Document marked as ${verified ? "Verified" : "Rejected"}`,
      });

      setTimeout(fetchStudents, 800);
    } catch (err: any) {
      console.error("Verification error:", err);
      toast({
        title: "Error",
        description: "Failed to update document status",
        variant: "destructive",
      });
    }
  };

  if (loading) return <div className="p-8 text-center">Loading students...</div>;

  // Unique values for filters
  const programs = ["all", ...new Set(students.map(s => s.program))];
  const cities = ["all", ...new Set(students.map(s => s.location).filter(Boolean))];
  const counselors = ["all", ...new Set(students.map(s => s.counselor || "").filter(Boolean))];
  const paymentStatuses = ["all", "pending", "paid"];
  const leadStatuses = ["all", "New", "Approved", "Rejected", "On-Hold"];

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Student Management Dashboard</CardTitle>
          <Button onClick={exportToCSV} disabled={filteredStudents.length === 0}>
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div>
              <Select value={programFilter} onValueChange={setProgramFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map(p => (
                    <SelectItem key={p} value={p}>
                      {p === "all" ? "All Programs" : p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map(c => (
                    <SelectItem key={c} value={c}>
                      {c === "all" ? "All Cities" : c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={counselorFilter} onValueChange={setCounselorFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Counselor" />
                </SelectTrigger>
                <SelectContent>
                  {counselors.map(c => (
                    <SelectItem key={c} value={c}>
                      {c === "all" ? "All Counselors" : c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Payment" />
                </SelectTrigger>
                <SelectContent>
                  {paymentStatuses.map(p => (
                    <SelectItem key={p} value={p}>
                      {p === "all" ? "All Payments" : p.charAt(0).toUpperCase() + p.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {leadStatuses.map(s => (
                    <SelectItem key={s} value={s}>
                      {s === "all" ? "All Statuses" : s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Documents</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    No students match the selected filters
                  </TableCell>
                </TableRow>
              ) : (
                filteredStudents.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell>
                      <Badge variant={student.paymentStatus === "paid" ? "default" : "secondary"}>
                        {student.paymentStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{student.leadStatus}</Badge>
                    </TableCell>
                    <TableCell>
                      {student.documents && student.documents.length > 0 ? (
                        <div className="flex flex-col gap-2 max-w-xs">
                          {student.documents.map((doc: Document, index: number) => (
                            <div key={index} className="flex items-center justify-between gap-3 py-1 border-b last:border-b-0">
                              <a
                                href={doc.url}
                                download={doc.originalName}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm underline flex-1"
                                title={doc.originalName}
                              >
                                <Upload className="h-4 w-4" />
                                {doc.originalName}
                              </a>

                              <div className="flex gap-1">
                                <Button
                                  size="sm"
                                  variant={doc.verified ? "default" : "outline"}
                                  className="h-7 px-3 text-xs"
                                  onClick={() => updateDocumentVerification(student._id, doc._id, true)}
                                  disabled={doc.verified}
                                >
                                  Verify
                                </Button>
                                <Button
                                  size="sm"
                                  variant={!doc.verified ? "destructive" : "outline"}
                                  className="h-7 px-3 text-xs"
                                  onClick={() => updateDocumentVerification(student._id, doc._id, false)}
                                  disabled={!doc.verified}
                                >
                                  Reject
                                </Button>
                              </div>

                              {doc.verified ? (
                                <span className="text-xs text-green-600 font-medium">✓ Verified</span>
                              ) : (
                                <span className="text-xs text-yellow-600 font-medium">⏳ Pending</span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">No documents</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => updateStatus(student._id, "Approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateStatus(student._id, "Rejected")}
                        >
                          Reject
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => updateStatus(student._id, "On-Hold")}
                        >
                          On-Hold
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};