import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Building, User } from "lucide-react";

const Setup = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-2 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Jazon</h1>
        <p className="text-gray-500">Let's get your email marketing setup ready</p>
      </div>

      <Card className="p-6 space-y-6 backdrop-blur-sm bg-white/80">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Company Name
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input className="pl-10" placeholder="Enter your company name" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sender Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input className="pl-10" placeholder="Enter sender name" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sender Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input className="pl-10" type="email" placeholder="Enter sender email" />
            </div>
          </div>
        </div>

        <Button className="w-full bg-accent hover:bg-accent/90 text-white">
          Save Settings
        </Button>
      </Card>
    </div>
  );
};

export default Setup;