import { services } from "@/constants/_data/services-dropwon-data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface ServicesProps {
 params: { type: string };
}

const ServicesForMbile: FC<ServicesProps> = ({ params }) => {
 const { type } = params;

 // Find the service matching the type
 const currentService = services.find((service) => service.type === type);

 // Handle case where no service matches the type
 if (!currentService) {
  return <div className="p-6 lg:p-10">Service not found</div>;
 }
 return (
  <div>
   {" "}
   <div className="flex-1 bg-white p-6 lg:p-10">
    <div className="grid grid-cols-1 gap-10">
     {currentService.subcategories.map((category) => (
      <div key={category.title} className="space-y-0">
       <div className="flex items-center justify-between w-full border-b pb-1 border-primary-red">
        <h3 className="font-semibold pe-4">{category.title}</h3>
        <ChevronRight className=" w-7 bg-primary-red  h-6 text-white" />
       </div>
       <ul className="space-y-2 pt-3">
        {category.items.map((item) => (
         <li key={item.link}>
          <Link
           href={`/service/${type}/${category.category}/${item.link}`}
           className="text-sm text-zinc-800  hover:text-black"
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
 );
};

export default ServicesForMbile;
