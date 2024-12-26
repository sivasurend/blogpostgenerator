import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContentInput = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "Error",
        description: "Please enter the core content",
        variant: "destructive",
      });
      return;
    }
    navigate("/blog-generator");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Content Input</h1>
        <p className="text-gray-500">Enter your content and additional instructions</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="content" className="text-lg font-semibold">Core Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your main content here..."
                className="min-h-[200px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions" className="text-lg font-semibold">Additional Instructions</Label>
              <Textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Enter any additional instructions or requirements..."
                className="min-h-[100px]"
              />
            </div>
          </div>
        </Card>

        <Button type="submit" className="w-full">Generate Blog</Button>
      </form>
    </div>
  );
};

export default ContentInput;