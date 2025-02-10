"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Container } from "../Container";
import IndustryInovatingCard from "../IndustryInovatingCard";
import { FadeText } from "../ui/fade-text";
import { industryInnovatingCardsData } from "@/constant";
const HowWeWorkSection = () => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.5 });
 return (
  <div
   ref={ref}
   className="bg-white min-h-[514px] h-full relative overflow-hidden py-10  w-full items-start justify-start shadow-none rounded-lg bg-background"
  >
   <Container>
    <div className="flex items-start justify-start flex-col md:mt-10">
     <div className="flex gap-2 md:gap-4 text-start">
      <FadeText
       className="~text-xl/5xl font-medium text-black"
       direction="up"
       framerProps={{
        show: { transition: { delay: 0.2 } },
       }}
       text="How We"
       inView={isInView}
      />
      <FadeText
       className={`~text-xl/5xl  text-primary-red  font-medium`}
       direction="right"
       framerProps={{
        show: { transition: { delay: 0.4 } },
       }}
       text="Work"
       inView={isInView}
      />
     </div>
     <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 my-10 lg:mt-20">
      {industryInnovatingCardsData.map((card) => (
       <IndustryInovatingCard key={card.id} {...card} />
      ))}
     </div>
    </div>
   </Container>
  </div>
 );
};

export default HowWeWorkSection;
