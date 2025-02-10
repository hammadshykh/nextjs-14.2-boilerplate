"use client";

import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/constants/_data/services-dropwon-data";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesAccordion() {
 const pathName = usePathname();
 return (
  <div className="w-full text-zinc-100">
   <Accordion
    defaultValue="item-1"
    type="single"
    collapsible
    className="w-full pt-0"
   >
    <AccordionItem value="item-1" className="border-0 py-0 ">
     <AccordionTrigger className="hover:text-zinc-400 py-0 hidden">
      Services
     </AccordionTrigger>
     <AccordionContent className="text-zinc-400 mt-2 p-0 space-y-6 flex flex-col">
      {services.map((service) => (
       <Link
        href={`/mobile/service/${service.type}`}
        key={service.title}
        className={cn(
         "flex w-full items-center justify-between xl:px-6 text-base transition-colors",
         pathName === `/mobile/service/${service.type}`
          ? "bg-primary-red text-white"
          : "text-[#959595] hover:bg-zinc-800"
        )}
       >
        {service.title}
        <ChevronRight className="w-6 h-6 !text-white" />
       </Link>
      ))}
     </AccordionContent>
    </AccordionItem>
   </Accordion>
  </div>
 );
}
