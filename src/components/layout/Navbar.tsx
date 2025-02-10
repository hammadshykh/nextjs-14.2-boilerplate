"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ServiceMenu } from "../mobile/ServiceMenu";
export function MainNav() {
 const pathname = usePathname();
 // Helper function to check if the current path matches or starts with a given path
 const isActivePath = (path: string) => {
  if (path === "/") {
   return pathname === "/";
  }
  return pathname?.startsWith(path);
 };

 return (
  <div className="relative">
   <div className="mr-4 hidden md:flex">
    <nav className="flex items-center gap-4 lg:text-[15px] shrink-0 text-sm lg:gap-8">
     <ServiceMenu />
     <Link
      href="/partners"
      className={cn(
       "transition-colors hover:text-red-500",
       isActivePath("/partners") ? "text-red-500" : "text-white/95"
      )}
     >
      Partners
     </Link>
     <Link
      href="/about"
      className={cn(
       "transition-colors hover:text-red-500",
       isActivePath("/about") ? "text-red-500" : "text-white/95"
      )}
     >
      About
     </Link>
     <Link
      href="/news-and-insights"
      className={cn(
       "transition-colors hover:text-red-500",
       isActivePath("/news-and-insights") ? "text-red-500" : "text-white/95"
      )}
     >
      News & Insights
     </Link>
    </nav>
   </div>
  </div>
 );
}
