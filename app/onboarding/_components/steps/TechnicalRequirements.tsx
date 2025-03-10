"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "../types";

interface TechnicalRequirementsProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const commonFeatures = [
  { id: "responsive", label: "Responsive Design" },
  { id: "cms", label: "Content Management System" },
  { id: "seo", label: "SEO Optimization" },
  { id: "analytics", label: "Analytics Integration" },
  { id: "social", label: "Social Media Integration" },
  { id: "blog", label: "Blog Section" },
  { id: "forms", label: "Contact Forms" },
  { id: "search", label: "Search Functionality" },
  { id: "multilingual", label: "Multiple Languages" },
  { id: "security", label: "Enhanced Security" },
];

export function TechnicalRequirements({ formData, setFormData }: TechnicalRequirementsProps) {
  const handleFeatureToggle = (feature: string) => {
    const currentFeatures = formData.features || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((f) => f !== feature)
      : [...currentFeatures, feature];
    setFormData({ ...formData, features: newFeatures });
  };

  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="requirements">Project Requirements</Label>
        <Textarea
          id="requirements"
          placeholder="Describe your technical requirements and functionality needs..."
          className="min-h-[150px] mt-2"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
        />
      </div>

      <div>
        <Label>Key Features</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {commonFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent transition-colors"
            >
              <Checkbox
                id={feature.id}
                checked={(formData.features || []).includes(feature.id)}
                onCheckedChange={() => handleFeatureToggle(feature.id)}
              />
              <Label htmlFor={feature.id} className="flex-1 cursor-pointer">
                {feature.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="existingWebsite">Existing Website URL (if any)</Label>
        <Input
          id="existingWebsite"
          type="url"
          placeholder="https://your-website.com"
          className="h-12 mt-2"
          value={formData.existingWebsite || ""}
          onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
        />
      </div>

      <div>
        <Label>Hosting Preferences</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {["Managed Hosting", "Cloud Hosting", "Custom Server", "Not Sure"].map((option) => (
            <div
              key={option}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                formData.hosting === option.toLowerCase() ? "bg-accent" : "hover:bg-accent/50"
              }`}
              onClick={() => setFormData({ ...formData, hosting: option.toLowerCase() })}
            >
              <p className="font-medium">{option}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 