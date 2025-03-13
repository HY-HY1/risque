// app/not-found.tsx
import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white dark:bg-neutral-950">
      <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
      <h1 className="text-5xl font-bold text-foreground">Coming Soon</h1>
      <p className="text-lg text-muted-foreground mt-4">
        We havent created this page yet. Check back soon!
      </p>
      <Link
        href="/"
      >
        <Button variant="default" ><Home className="h-5 w-5 mr-2" />  Home</Button>
      </Link>
    </div>
  );
}
