"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = ({ type }: { type: string }) => {
 const router = useRouter();

 const handleBack = () => {
  // Navigate to Home with the "fromBackButton" query
  router.push("/?fromBackButton=true");
 };

 return (
  <div
   onClick={handleBack}
   className="bg-primary-red w-full cursor-pointer h-20 px-5 text-white gap-2 justify-start text-start font-normal flex items-center"
  >
   <ArrowLeft className="w-8 bg-primary-red h-6 text-white" />
   {type}
  </div>
 );
};

export default BackButton;
