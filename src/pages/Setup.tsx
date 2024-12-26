import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Setup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [blogFocus, setBlogFocus] = useState("");
  const [wordLimit, setWordLimit] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogFocus || !wordLimit) {
      toast({
        title: "Error",
        description: "Please select both blog focus and word limit",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: "Settings saved successfully",
    });
    navigate("/content-input");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog Post Setup</h1>
        <p className="text-gray-500">Configure your blog post parameters</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Blog Focus</Label>
              <RadioGroup
                value={blogFocus}
                onValueChange={setBlogFocus}
                className="grid gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="awareness" id="awareness" />
                  <Label htmlFor="awareness">Brand Awareness & Education</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="consideration" id="consideration" />
                  <Label htmlFor="consideration">Product Consideration</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="decision" id="decision" />
                  <Label htmlFor="decision">Purchase Decision</Label>
                </div>
              </RadioGroup>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Word Limit</Label>
              <RadioGroup
                value={wordLimit}
                onValueChange={setWordLimit}
                className="grid gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1000" id="1000" />
                  <Label htmlFor="1000">1000 words</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2000" id="2000" />
                  <Label htmlFor="2000">2000 words</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3000" id="3000" />
                  <Label htmlFor="3000">3000 words</Label>
                </div>
              </RadioGroup>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <Label className="text-lg font-semibold" htmlFor="seo-keywords">
              SEO Keywords
            </Label>
            <Textarea
              id="seo-keywords"
              placeholder="Enter your SEO keywords (separated by commas)..."
              value={seoKeywords}
              onChange={(e) => setSeoKeywords(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </Card>

        <Button type="submit" className="w-full">Save Settings</Button>
      </form>
    </div>
  );
};

export default Setup;