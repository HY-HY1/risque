import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import React from "react";

function Features() {
  return (
    <div className="min-h-screen w-full py-30  ">
      <h3 className="w-[70vw] m-auto mt-10 border-b light:border-neutral-300   dark: border-neutral-700 pb-4  tracking-tight">Why RISQUE</h3>
        <FeaturesSectionWithHoverEffects />
    </div>
  );
}

export { Features };