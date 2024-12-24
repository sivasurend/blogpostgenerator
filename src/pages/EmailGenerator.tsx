import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmailGenerator = () => {
  const [generatedEmail, setGeneratedEmail] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const { toast } = useToast();

  const generateEmail = () => {
    // This is a placeholder. In a real implementation, this would call an AI service
    const sampleEmail = `Dear [Prospect],

I hope this email finds you well. I wanted to reach out regarding our [Product/Service] that helps companies like yours improve their [Value Proposition].

Would you be interested in a brief conversation to discuss how we could help your team?

Best regards,
[Your Name]`;
    
    setGeneratedEmail(sampleEmail);
    setShowFeedback(false);
    setFeedback("");
  };

  const handleSendFeedback = () => {
    if (!feedback.trim()) {
      toast({
        title: "Error",
        description: "Please provide feedback before sending",
        variant: "destructive",
      });
      return;
    }

    // This is a placeholder. In a real implementation, this would send the feedback to an AI service
    toast({
      title: "Feedback sent",
      description: "Your feedback has been recorded and will be used to improve the next generation",
    });
    setShowFeedback(false);
    setFeedback("");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Email Generator</h1>
        <Button 
          onClick={generateEmail}
          className="bg-accent hover:bg-accent/90 text-white"
        >
          Generate Email
        </Button>
      </div>

      {generatedEmail && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 backdrop-blur-sm bg-white/80">
            <CardContent className="p-6">
              <pre className="whitespace-pre-wrap font-sans">{generatedEmail}</pre>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowFeedback(true)}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Give Feedback
            </Button>

            {showFeedback && (
              <>
                <Textarea
                  placeholder="Enter your feedback here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[150px]"
                />
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={handleSendFeedback}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Feedback
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailGenerator;