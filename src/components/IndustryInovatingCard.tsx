"use client";
export type IndustryInnovatingCardsDataType = {
 id?: string;
 title: string;
 description: string;
};
import React, { FC } from "react";
import { Card, CardTitle } from "../components/ui/card";
import Image from "next/image";

const IndustryInovatingCard: FC<IndustryInnovatingCardsDataType> = ({
 description,
 title,
}) => {
 return (
  <Card className="shadow-none px-0 w-full max-w-md bg-transparent border-none rounded-none">
   <div className="~space-y-2/4">
    <CardTitle className="px-0">
     <Image
      src="/images/work-flow-card-arrow.svg"
      className="object-cover p-0 -ms-1"
      alt={"Arrow icon"}
      width={46}
      height={46}
     />
    </CardTitle>
    <h3 className="~text-base/xl font-medium">{title}</h3>
    <p className="~text-xs/sm text-[#1D1D1D]">{description}</p>
   </div>
  </Card>
 );
};

export default IndustryInovatingCard;
