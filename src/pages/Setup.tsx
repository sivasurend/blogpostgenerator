import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Setup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [funnelType, setFunnelType] = useState("");
  const [wordLimit, setWordLimit] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!funnelType || !wordLimit) {
      toast({
        title: "Error",
        description: "Please select both funnel type and word limit",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: "Setup completed successfully",
    });
    navigate("/content-input");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog Post Setup</h1>
        <p className="text-gray-500">Configure your blog post parameters</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Funnel Type</Label>
              <RadioGroup
                value={funnelType}
                onValueChange={setFunnelType}
                className="grid gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TOFU" id="TOFU" />
                  <Label htmlFor="TOFU">TOFU - Top of the Funnel</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="MOFU" id="MOFU" />
                  <Label htmlFor="MOFU">MOFU - Middle of the Funnel</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="BOFU" id="BOFU" />
                  <Label htmlFor="BOFU">BOFU - Bottom of the Funnel</Label>
                </div>
              </RadioGroup>
            </div>

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
          </div>
        </Card>

        <Button type="submit" className="w-full">Continue to Content Input</Button>
      </form>
    </div>
  );
};

export default Setup;