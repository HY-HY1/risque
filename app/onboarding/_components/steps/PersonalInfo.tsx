"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "../types";

interface PersonalInfoProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export function PersonalInfo({ formData, setFormData }: PersonalInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="h-12"
        />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-12"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+44 123 456 7890"
          value={formData.phone || ""}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="h-12"
        />
      </div>
      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          placeholder="Your company name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="h-12"
        />
      </div>
      <div>
        <Label htmlFor="role">Your Role</Label>
        <Input
          id="role"
          placeholder="e.g., CEO, Marketing Manager, etc."
          value={formData.role || ""}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="h-12"
        />
      </div>
    </div>
  );
} 