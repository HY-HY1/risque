"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "../types";

interface ProjectDetailsProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const industries = [
  "E-commerce",
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "Real Estate",
  "Travel",
  "Food & Beverage",
  "Entertainment",
  "Other",
];

export function ProjectDetails({ formData, setFormData }: ProjectDetailsProps) {
  return (
    <div className="space-y-8">
      <div>
        <Label>Project Type</Label>
        <RadioGroup
          value={formData.projectType}
          onValueChange={(value) => setFormData({ ...formData, projectType: value })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
        >
          <div className="relative flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors">
            <RadioGroupItem value="website" id="website" />
            <Label htmlFor="website" className="flex-1 cursor-pointer">
              <span className="font-medium">Website Development</span>
              <p className="text-sm text-muted-foreground">Custom website built from scratch</p>
            </Label>
          </div>
          <div className="relative flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors">
            <RadioGroupItem value="ecommerce" id="ecommerce" />
            <Label htmlFor="ecommerce" className="flex-1 cursor-pointer">
              <span className="font-medium">E-commerce</span>
              <p className="text-sm text-muted-foreground">Online store with payment processing</p>
            </Label>
          </div>
          <div className="relative flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors">
            <RadioGroupItem value="webapp" id="webapp" />
            <Label htmlFor="webapp" className="flex-1 cursor-pointer">
              <span className="font-medium">Web Application</span>
              <p className="text-sm text-muted-foreground">Complex web-based software solution</p>
            </Label>
          </div>
          <div className="relative flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors">
            <RadioGroupItem value="redesign" id="redesign" />
            <Label htmlFor="redesign" className="flex-1 cursor-pointer">
              <span className="font-medium">Website Redesign</span>
              <p className="text-sm text-muted-foreground">Upgrade your existing website</p>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label>Industry</Label>
        <Select
          value={formData.industry}
          onValueChange={(value) => setFormData({ ...formData, industry: value })}
        >
          <SelectTrigger className="h-12 mt-2">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase()}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Budget Range (£)</Label>
        <div className="pt-6 px-2">
          <Slider
            value={[formData.budget]}
            onValueChange={(value) => setFormData({ ...formData, budget: value[0] })}
            max={50000}
            min={1000}
            step={1000}
            className="mb-6"
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">£1,000</span>
            <span className="text-sm font-medium">£{formData.budget.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">£50,000</span>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="timeline">Project Timeline</Label>
        <Select
          value={formData.timeline}
          onValueChange={(value) => setFormData({ ...formData, timeline: value })}
        >
          <SelectTrigger className="h-12 mt-2">
            <SelectValue placeholder="Select your preferred timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-2">1-2 months</SelectItem>
            <SelectItem value="2-3">2-3 months</SelectItem>
            <SelectItem value="3-6">3-6 months</SelectItem>
            <SelectItem value="6+">6+ months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="targetAudience">Target Audience</Label>
        <Input
          id="targetAudience"
          placeholder="Describe your target audience"
          value={formData.targetAudience || ""}
          onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
          className="h-12 mt-2"
        />
      </div>
    </div>
  );
} 