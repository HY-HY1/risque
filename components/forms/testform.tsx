"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      answer1: z.string().min(1, "This field is required"),
    })
  ),
});

const defaultValues = {
  answers: [
    { questionId: "r65e588374cbf430cbcb8ef08963a72af", answer1: "" },
    { questionId: "r17c1115dfc3d48139514cbce2d881a26", answer1: "" },
    { questionId: "r582f4d5ee19f48c087998f0af8b3a4cf", answer1: "" },
    { questionId: "r0cbd9504eb554b07b8cb5378cf99c398", answer1: "" },
    { questionId: "ra855282afbe3439dac590c970ef58f27", answer1: "" },
    { questionId: "r42d71d6d67df4b97912caafa8d55f3ab", answer1: "" },
    { questionId: "r66424892eadd488b8052810c8976a907", answer1: "" },
    { questionId: "r42348ed59e7d4ba5a33e07d16ec90843", answer1: "" },
    { questionId: "r8da19ffff7964fc880ead660c57a0ae4", answer1: "" },
  ],
};

export function OfficeForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const payload = {
      startDate: new Date().toISOString(),
      submitDate: new Date().toISOString(),
      answers: JSON.stringify(values.answers),
    };

    try {
      const response = await axios.post(
        "https://forms.office.com/formapi/api/c7024e57-6102-45b3-9dbb-faca7e9b8b91/users/3b000775-8fc8-4899-ab1d-02d10d0f8551/forms('V04CxwJhs0Wdu_rKfpuLkXUHADvIj5lIqx0C0Q0PhVFUN0IyUUpDVThMMVhQT05PMkw5N0dPVzNIVS4u')/responses",
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://forms.office.com",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Credentials": "true"
          }
        }
      );
      setSubmittedData(response.data);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {form.watch("answers").map((_, index) => (
          <FormField
            key={index}
            control={form.control}
            name={`answers.${index}.answer1`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Answer {index + 1}</FormLabel>
                <FormControl>
                  <Input placeholder={`Enter answer ${index + 1}`} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {submittedData && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="font-bold">Submission Response:</h3>
          <pre className="text-sm">{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}
