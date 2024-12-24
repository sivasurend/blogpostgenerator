import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Building, User, Calendar, FileText, MessageSquare, Lightbulb, CheckCircle2, Quote, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const MAX_WORDS = 500;

const Setup = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings saved",
      description: "Your email marketing settings have been saved successfully.",
    });
  };

  const checkWordLimit = (text: string) => {
    const wordCount = text.trim().split(/\s+/).length;
    return wordCount <= MAX_WORDS;
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!checkWordLimit(e.target.value)) {
      toast({
        title: "Word limit exceeded",
        description: `Please keep the content within ${MAX_WORDS} words.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-2 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Jazon</h1>
        <p className="text-gray-500">Let's get your email marketing setup ready</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="p-6 space-y-6 backdrop-blur-sm bg-white/80">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Company Details */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Enter your company name" required />
              </div>
            </div>

            {/* Agent Details */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Agent Name</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Enter agent name" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Agent Designation</label>
              <div className="relative">
                <FileText className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Enter agent designation" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Meeting Link (Calendly)</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Enter your Calendly link" type="url" required />
              </div>
            </div>
          </div>

          {/* Expandable Text Areas */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">About Product or Service</label>
              <Textarea 
                placeholder="Describe your product or service..."
                className="min-h-[100px] resize-y"
                onChange={handleTextAreaChange}
                maxLength={2500} // Approximately 500 words
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pain Points Addressed</label>
              <Textarea 
                placeholder="What problems does your product/service solve?"
                className="min-h-[100px] resize-y"
                onChange={handleTextAreaChange}
                maxLength={2500}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Solution</label>
              <Textarea 
                placeholder="How does your product/service address these pain points?"
                className="min-h-[100px] resize-y"
                onChange={handleTextAreaChange}
                maxLength={2500}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Case Studies</label>
              <Textarea 
                placeholder="Share relevant case studies..."
                className="min-h-[100px] resize-y"
                onChange={handleTextAreaChange}
                maxLength={2500}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Customer Testimonials</label>
              <Textarea 
                placeholder="Share customer testimonials..."
                className="min-h-[100px] resize-y"
                onChange={handleTextAreaChange}
                maxLength={2500}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Example Emails</label>
              <Textarea 
                placeholder="Add example email templates..."
                className="min-h-[100px] resize-y"
                onChange={handleTextAreaChange}
                maxLength={2500}
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-white"
          >
            Save Settings
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Setup;