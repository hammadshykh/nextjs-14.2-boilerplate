"use client";
import React, { FC } from "react";
export type ExploreCardDataType = {
 id?: string;
 title: string;
 description: string;
};
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";

const ExploreCard: FC<ExploreCardDataType> = ({ description, title }) => {
 return (
  <Card className="shadow-none px-0 w-full max-w-full bg-transparent border-none">
   <div className="~space-y-2/4">
    <CardTitle className="px-0 flex items-center gap-4 md:gap-5">
     <Image
      src="/images/explore.svg"
      className="object-cover p-0 -ms-1"
      alt={"Arrow icon"}
      width={46}
      height={46}
     />
     <h3 className="~text-base/xl font-medium -mt-2">{title}</h3>
    </CardTitle>
    <p className="~text-sm/base text-[#1D1D1D]">{description}</p>
   </div>
  </Card>
 );
};

export default ExploreCard;
