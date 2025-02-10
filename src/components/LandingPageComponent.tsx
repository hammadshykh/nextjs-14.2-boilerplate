import React from "react";
import { DotPattern } from "./magic/DotPattern";
import { cn } from "@/lib/utils";
import { VelocityScroll } from "./magic/VelocityScroll";
import { Container } from "./layout/Container";

const LandingPageComponent = () => {
 return (
  <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black border-none md:shadow-xl">
   <Container>
    <VelocityScroll>Launching Soon</VelocityScroll>
   </Container>
   <DotPattern
    className={cn(
     "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] bordder-none"
    )}
   />
  </div>
 );
};

export default LandingPageComponent;
