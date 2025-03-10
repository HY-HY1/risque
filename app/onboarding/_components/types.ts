export interface FormData {
  // Personal Information
  name: string;
  email: string;
  phone?: string;
  company: string;
  role?: string;

  // Project Details
  projectType: string;
  budget: number;
  timeline: string;
  industry?: string;
  targetAudience?: string;

  // Technical Requirements
  requirements: string;
  features?: string[];
  existingWebsite?: string;
  hosting?: string;

  // Design Preferences
  preferences: string;
  colorScheme?: string;
  inspiration?: string[];
  brandAssets?: boolean;

  // Additional Information
  goals?: string;
  challenges?: string;
  successMetrics?: string;
}

export interface Step {
  id: string;
  name: string;
  description: string;
  fields: (keyof FormData)[];
} 