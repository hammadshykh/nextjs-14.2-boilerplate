import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
 return (
  <div className="bg-primary-red relative z-20 py-2 px-4">
   <div className="md:flex  md:items-center md:justify-center text-xs text-white">
    <p className="font-thin mr-1">
     Explore Verbox data-backed insights into current threat trends.
     <span>
      {" "}
      <Link
       href="/report"
       className="hover:underline transition-opacity group font-semibold inline-flex items-center"
      >
       Read Report
       <ArrowRight
        size={16}
        className="ml-1 group-hover:translate-x-1 transition-all duration-200"
       />
      </Link>
     </span>
    </p>
   </div>
  </div>
 );
}
