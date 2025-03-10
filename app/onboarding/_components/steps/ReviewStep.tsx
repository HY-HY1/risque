"use client";

import { FormData } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface ReviewStepProps {
  formData: FormData;
}

export function ReviewStep({ formData }: ReviewStepProps) {
  const formatValue = (value: any) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (typeof value === "number") {
      return `£${value.toLocaleString()}`;
    }
    return value || "Not specified";
  };

  const sections = [
    {
      title: "Personal Information",
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Company", value: formData.company },
        { label: "Role", value: formData.role },
      ],
    },
    {
      title: "Project Details",
      fields: [
        { label: "Project Type", value: formData.projectType },
        { label: "Industry", value: formData.industry },
        { label: "Budget", value: formData.budget },
        { label: "Timeline", value: formData.timeline },
        { label: "Target Audience", value: formData.targetAudience },
      ],
    },
    {
      title: "Technical Requirements",
      fields: [
        { label: "Requirements", value: formData.requirements },
        { label: "Features", value: formData.features },
        { label: "Existing Website", value: formData.existingWebsite },
        { label: "Hosting Preference", value: formData.hosting },
      ],
    },
    {
      title: "Design Preferences",
      fields: [
        { label: "Design Style", value: formData.colorScheme },
        { label: "Preferences", value: formData.preferences },
        { label: "Inspiration Sites", value: formData.inspiration },
        { label: "Has Brand Assets", value: formData.brandAssets },
      ],
    },
    {
      title: "Project Goals",
      fields: [
        { label: "Goals", value: formData.goals },
        { label: "Challenges", value: formData.challenges },
        { label: "Success Metrics", value: formData.successMetrics },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields
                .filter((field) => field.value)
                .map((field) => (
                  <div key={field.label} className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">{field.label}</dt>
                    <dd className="text-sm">
                      {Array.isArray(field.value) ? (
                        <div className="flex flex-wrap gap-1">
                          {field.value.map((item: string) => (
                            <Badge key={item} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        formatValue(field.value)
                      )}
                    </dd>
                  </div>
                ))}
            </dl>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 