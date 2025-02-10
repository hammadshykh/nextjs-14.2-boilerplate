"use client";
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
 HoverCard,
 HoverCardContent,
 HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { services } from "@/constants/_data/services-dropwon-data";

export function ServiceMenu() {
 const [activeIndex, setActiveIndex] = React.useState(0);
 const [openDropdown, setOpenDropdown] = React.useState(false);
 const handleClose = () => {
  setOpenDropdown(false);
 };

 return (
  <HoverCard
   openDelay={0}
   closeDelay={0}
   open={openDropdown}
   onOpenChange={setOpenDropdown}
  >
   <HoverCardTrigger asChild>
    <button
     className={cn(
      "transition-colors hover:text-red-500 flex items-center gap-1 py-4",
      "text-white/95"
     )}
    >
     <p>Services</p>
     <ChevronRight className="h-4 w-4 mt-1" />
    </button>
   </HoverCardTrigger>
   <HoverCardContent
    className="w-screen p-0  borcer-none border-0 min-h-[400px] h-full relative z-50"
    align="start"
    sideOffset={0}
   >
    <div className="flex min-h-[400px] h-full">
     <div className="xl:w-80 w-60  bg-[#2A2829] border-r pt-4 border-zinc-800">
      {services.map((service, idx) => (
       <button
        key={service.title}
        onMouseEnter={() => setActiveIndex(idx)}
        className={cn(
         "flex w-full items-center justify-between px-3 xl:px-6 py-3 text-left text-xs xl:text-sm transition-colors",
         idx === activeIndex
          ? "bg-primary-red text-white"
          : "text-[#959595] hover:bg-zinc-800"
        )}
       >
        {service.title}
        {idx === activeIndex && <ChevronRight className="xl:w-10 w-6" />}
       </button>
      ))}
     </div>
     <div className="flex-1 bg-white p-6 lg:p-10">
      <div className="grid grid-cols-2 xl:gap-8 gap-4">
       {services[activeIndex].subcategories.map((category) => (
        <div key={category.title} className="xl:space-y-4 space-y-0">
         <Link
          className="group"
          href={`/service/${services[activeIndex].type}/${category.category}/`}
          onClick={handleClose}
         >
          <div className="flex items-center justify-between w-full border-b pb-1 border-primary-red">
           <h2 className="font-semibold xl:text-base text-xs group-hover:text-primary-red ">
            {category.title}
           </h2>
           <ChevronRight className="xl:w-10 w-6 group-hover:animate-pulse group-hover:bg-transparent group-hover:text-black group-hover:-me-4 transition-all bg-primary-red xl:h-8 h-6 text-white" />
          </div>
         </Link>
         <ul className="xl:space-y-4 space-y-1 mt-2 xl:mt-0">
          {category.items.map((item) => (
           <li key={item.link} className="transition-all duration-300">
            <Link
             href={`/service/${services[activeIndex].type}/${category.category}/${item.link}`}
             className="xl:text-sm  duration-300 text-[10px] text-zinc-800 hover:text-primary-red transition-all hover:underline gap-2 flex items-center"
             onClick={() => {
              setOpenDropdown?.(false);
             }}
            >
             {item.name}
            </Link>
           </li>
          ))}
         </ul>
        </div>
       ))}
      </div>
     </div>
    </div>
   </HoverCardContent>
  </HoverCard>
 );
}
