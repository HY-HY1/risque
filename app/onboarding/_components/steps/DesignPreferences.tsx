"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { FormData } from "../types";

interface DesignPreferencesProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const colorSchemes = [
  { value: "modern", label: "Modern & Minimal", description: "Clean, simple, and contemporary" },
  { value: "bold", label: "Bold & Vibrant", description: "Eye-catching and energetic" },
  { value: "professional", label: "Professional & Corporate", description: "Traditional and trustworthy" },
  { value: "creative", label: "Creative & Artistic", description: "Unique and expressive" },
];

export function DesignPreferences({ formData, setFormData }: DesignPreferencesProps) {
  const handleInspirationAdd = (url: string) => {
    const currentInspirations = formData.inspiration || [];
    if (url && !currentInspirations.includes(url)) {
      setFormData({ ...formData, inspiration: [...currentInspirations, url] });
    }
  };

  const handleInspirationRemove = (url: string) => {
    const currentInspirations = formData.inspiration || [];
    setFormData({
      ...formData,
      inspiration: currentInspirations.filter((i) => i !== url),
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <Label>Design Style</Label>
        <RadioGroup
          value={formData.colorScheme}
          onValueChange={(value) => setFormData({ ...formData, colorScheme: value })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
        >
          {colorSchemes.map((scheme) => (
            <div
              key={scheme.value}
              className="relative flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent transition-colors"
            >
              <RadioGroupItem value={scheme.value} id={scheme.value} className="mt-1" />
              <Label htmlFor={scheme.value} className="flex-1 cursor-pointer space-y-1">
                <span className="font-medium">{scheme.label}</span>
                <p className="text-sm text-muted-foreground">{scheme.description}</p>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="preferences">Design Preferences</Label>
        <Textarea
          id="preferences"
          placeholder="Describe your design preferences, including colors, styles, and any specific elements you'd like to include..."
          className="min-h-[150px] mt-2"
          value={formData.preferences}
          onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
        />
      </div>

      <div>
        <Label>Inspiration Websites</Label>
        <div className="space-y-4 mt-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter website URL"
              className="h-12"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleInspirationAdd((e.target as HTMLInputElement).value);
                  (e.target as HTMLInputElement).value = "";
                }
              }}
            />
          </div>
          <div className="space-y-2">
            {(formData.inspiration || []).map((url) => (
              <div
                key={url}
                className="flex items-center justify-between border rounded-lg p-3 bg-muted/50"
              >
                <span className="text-sm truncate flex-1">{url}</span>
                <button
                  onClick={() => handleInspirationRemove(url)}
                  className="text-sm text-destructive hover:text-destructive/80 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border rounded-lg p-4">
        <div className="space-y-0.5">
          <Label>Brand Assets</Label>
          <p className="text-sm text-muted-foreground">
            Do you have logos, brand guidelines, or other assets to share?
          </p>
        </div>
        <Switch
          checked={formData.brandAssets}
          onCheckedChange={(checked) => setFormData({ ...formData, brandAssets: checked })}
        />
      </div>
    </div>
  );
} 