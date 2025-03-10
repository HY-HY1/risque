"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2, Code2, Palette, Rocket, Trophy, Users } from "lucide-react";
import { Stepper, StepperItem, StepperTitle, StepperDescription, StepperIndicator, StepperSeparator, StepperTrigger } from "@/components/ui/stepper";

const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    description: "Tell us about you and your company",
    fields: ["name", "email", "company"],
  },
  {
    id: "Step 2",
    name: "Project Details",
    description: "Define your project scope and budget",
    fields: ["projectType", "budget", "timeline"],
  },
  {
    id: "Step 3",
    name: "Additional Information",
    description: "Share your requirements and preferences",
    fields: ["requirements", "preferences"],
  },
  {
    id: "Step 4",
    name: "Review",
    description: "Review your project details",
    fields: ["review"],
  },
];

const benefits = [
  {
    icon: <Palette className="w-12 h-12 text-blue-500" />,
    title: "Beautiful Design",
    description: "Stunning, modern websites that capture your brand's essence and engage your audience.",
  },
  {
    icon: <Code2 className="w-12 h-12 text-purple-500" />,
    title: "Expert Development",
    description: "Clean, efficient code that ensures your website performs flawlessly across all devices.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-pink-500" />,
    title: "Fast Performance",
    description: "Lightning-fast loading times and smooth interactions for the best user experience.",
  },
  {
    icon: <Users className="w-12 h-12 text-orange-500" />,
    title: "User-Focused",
    description: "Intuitive interfaces that guide visitors and convert them into customers.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-green-500" />,
    title: "Results-Driven",
    description: "Strategic design decisions that help achieve your business goals and ROI.",
  },
  {
    icon: <CheckCircle2 className="w-12 h-12 text-teal-500" />,
    title: "Full Support",
    description: "Dedicated assistance from project kickoff through launch and beyond.",
  },
];

export default function OnboardingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: 5000,
    timeline: "",
    requirements: "",
    preferences: "",
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background pt-40 pb-32">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,transparent,white)]" />
        <div className="container max-w-6xl mx-auto px-4 relative">
          <div className={`transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Transform Your Online Presence
            </h1>
            <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Partner with us to create a stunning, high-performance website that drives results and delights your users.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-700 transform ${
                  isLoaded 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className={`mb-4 transition-transform duration-500 transform ${
                  isLoaded ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Form Section */}
      <div className={`mb-40 bg-background transition-all duration-1000 transform ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`} style={{ transitionDelay: '1200ms' }}>
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
            <p className="text-muted-foreground">
              Tell us about your vision, and we'll help you bring it to life.
            </p>
          </div>

          <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-0">
              <Stepper
                value={currentStep}
                onValueChange={setCurrentStep}
                className="mb-8"
              >
                {steps.map((step, index) => (
                  <StepperItem
                    key={step.id}
                    step={index}
                    completed={index < currentStep}
                  >
                    <StepperTrigger className="h-16">
                      <StepperIndicator />
                      <div className="ml-3 px-2 py-2 text-left">
                        <StepperTitle>{step.name}</StepperTitle>
                        {/* <StepperDescription>{step.description}</StepperDescription> */}
                      </div>
                    </StepperTrigger>
                    {index < steps.length - 1 && <StepperSeparator />}
                  </StepperItem>
                ))}
              </Stepper>
              <CardDescription className="text-center pt-4">
                Step {currentStep + 1} of {steps.length}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label>Project Type</Label>
                    <RadioGroup
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
                    >
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent">
                        <RadioGroupItem value="website" id="website" />
                        <Label htmlFor="website">Website Development</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent">
                        <RadioGroupItem value="ecommerce" id="ecommerce" />
                        <Label htmlFor="ecommerce">E-commerce</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent">
                        <RadioGroupItem value="webapp" id="webapp" />
                        <Label htmlFor="webapp">Web Application</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-accent">
                        <RadioGroupItem value="redesign" id="redesign" />
                        <Label htmlFor="redesign">Website Redesign</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label>Budget Range (£)</Label>
                    <div className="pt-4 px-2">
                      <Slider
                        value={[formData.budget]}
                        onValueChange={(value) => setFormData({ ...formData, budget: value[0] })}
                        max={20000}
                        min={1000}
                        step={1000}
                      />
                      <p className="text-right text-sm text-muted-foreground mt-2">
                        £{formData.budget.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Input
                      id="timeline"
                      placeholder="e.g., 2-3 months"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="requirements">Project Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Describe your project requirements..."
                      className="min-h-[150px]"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferences">Design Preferences</Label>
                    <Textarea
                      id="preferences"
                      placeholder="Any specific design preferences or inspiration..."
                      className="min-h-[150px]"
                      value={formData.preferences}
                      onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h3 className="font-medium mb-2">Personal Information</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Company: {formData.company}</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h3 className="font-medium mb-2">Project Details</h3>
                    <p>Type: {formData.projectType}</p>
                    <p>Budget: £{formData.budget.toLocaleString()}</p>
                    <p>Timeline: {formData.timeline}</p>
                  </div>
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h3 className="font-medium mb-2">Additional Information</h3>
                    <p className="text-sm">Requirements: {formData.requirements}</p>
                    <p className="text-sm">Preferences: {formData.preferences}</p>
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={back}
                disabled={currentStep === 0}
              >
                Back
              </Button>
              <Button
                onClick={currentStep === steps.length - 1 ? () => console.log(formData) : next}
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
