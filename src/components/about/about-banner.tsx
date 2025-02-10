"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "../Container";
import BoxReveal from "../box-reveal";
import { Button } from "../ui/button";
import Paragraph from "../custom/Paragraph";

const AboutBanner = () => {
 const [imageLoading, setImageLoading] = useState(false);

 return (
  <section className="sm:min-h-[544px] h-[400px] w-full mt-0 relative">
   {/* Secondary Image (Lazy Loaded) */}
   {/* Background Image */}
   <div
    onLoad={() => setImageLoading(true)}
    className="bg-[url('/services.png')] absolute inset-0 z-1 h-full w-full md:block hidden"
   />
   <div
    onLoad={() => setImageLoading(true)}
    className="bg-[url('/services.png')] absolute inset-0 z-1 h-full w-full bg-cover bg-no-repeat bg-center md:hidden block"
   />
   {imageLoading && (
    <div className="backdrop-blur-xl w-full h-[500px] absolute inset-0"></div>
   )}
   <Container>
    <div className="relative translate-y-[25%] h-full xl:translate-y-[70%] size-full max-w-fit items-center justify-center overflow-hidden space-y-2 md:space-0">
     <BoxReveal width="fit-content" boxColor="#BF0E14" duration={1.2}>
      <h1 className="text-left capitalize max-w-full ~text-2xl/5xl w-full md:pb-4 md:min-h-14 mr-auto font-geist font-medium text-white">
       We are <span className="text-primary-red">Verbox Systems</span>
      </h1>
     </BoxReveal>

     <BoxReveal width="fit-content" boxColor="#BF0E14" duration={1.2}>
      <div className="mr-auto text-white text-left lg:max-w-3xl mb-2 md:py-2 w-fit">
       <p className="~text-sm/base max-w-md md:max-w-4xl text-wrap tracking-normal"></p>
       <Paragraph>
        Verbox Systems Private Ltd. is a premier provider of enterprise-grade IT
        solutions, committed to helping organizations navigate the complexities
        of modern technology. With a foundation built on decades of industry
        expertise, we distinguish ourselves through our deep technical knowledge
        and proven ability to deliver tailored, high-impact solutions.
       </Paragraph>
      </div>
     </BoxReveal>

     <BoxReveal width="fit-content" boxColor="#BF0E14" duration={1.2}>
      <div className="mr-auto mt-2 flex flex-wrap gap-y-4 items-start justify-start gap-x-3">
       <Link href={"#"} className="border-primary-red border">
        <Button
         className="w-[131px]"
         effect="expandIcon"
         variant={"custom"}
         icon={ArrowRightIcon}
         iconPlacement="right"
        >
         Explore
        </Button>
       </Link>
      </div>
     </BoxReveal>
    </div>
   </Container>
  </section>
 );
};

export default AboutBanner;
