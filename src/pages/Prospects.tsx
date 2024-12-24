import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, Search, Plus } from "lucide-react";

interface Prospect {
  id: number;
  name: string;
  email: string;
  company: string;
  description: string;
}

const Prospects = () => {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [search, setSearch] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle CSV upload logic here
      console.log("File uploaded:", file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Prospects</h1>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => document.getElementById("csv-upload")?.click()}>
            <Upload className="w-4 h-4 mr-2" />
            Import CSV
            <input
              id="csv-upload"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileUpload}
            />
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Prospect
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <Input
          className="pl-10"
          placeholder="Search prospects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="rounded-md border backdrop-blur-sm bg-white/80">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prospects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                  No prospects yet. Import a CSV or add prospects manually.
                </TableCell>
              </TableRow>
            ) : (
              prospects.map((prospect) => (
                <TableRow key={prospect.id}>
                  <TableCell>{prospect.name}</TableCell>
                  <TableCell>{prospect.email}</TableCell>
                  <TableCell>{prospect.company}</TableCell>
                  <TableCell>{prospect.description}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Prospects;