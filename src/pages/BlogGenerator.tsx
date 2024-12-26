import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const BlogGenerator = () => {
  const [generatedBlog, setGeneratedBlog] = useState("This is a sample generated blog post. In a real implementation, this would be generated based on the content and instructions provided in the previous step.");
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedBlog).then(() => {
      toast({
        title: "Copied",
        description: "Blog post copied to clipboard",
      });
    });
  };

  const handleSendFeedback = () => {
    if (!feedback.trim()) {
      toast({
        title: "Error",
        description: "Please enter your feedback",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback sent",
      description: "Your feedback has been recorded and will be used to improve the next generation",
    });
    setFeedback("");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Blog Generator</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          className="h-10 w-10"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 backdrop-blur-sm bg-white/80">
          <CardContent className="p-6">
            <pre className="whitespace-pre-wrap font-sans">{generatedBlog}</pre>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-white/80">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Feedback
            </h2>
            <Textarea
              placeholder="Provide your feedback to improve the blog post..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[150px]"
            />
            <Button
              onClick={handleSendFeedback}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogGenerator;