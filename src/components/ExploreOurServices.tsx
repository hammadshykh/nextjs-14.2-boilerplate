import React from "react";
import ExploreCard from "./ExploreCard";
import { Container } from "./layout";
import { CONTENT } from "@/constants/_data/content";

const ExploreOurServices = () => {
 const { MISSION, VISION } = CONTENT.EXPLORE_OUR_SERVICES;
 return (
  <div className="md:pt-20 pt-10">
   <Container className="md:pt-10 pb-10 lg:pb-28">
    <div className="grid md:grid-cols-2 w-full md:gap-14 gap-8">
     <ExploreCard title={MISSION.title} description={MISSION.description} />
     <ExploreCard title={VISION.title} description={VISION.description} />
    </div>
   </Container>
   <div className="bg-[#F3F3F3] w-full h-full">
    <Container>
     <div className="lg:h-[215px] h-20 flex items-center justify-start">
      <h1 className="~text-2xl/5xl text-[1D1D1D]">
       Explore Our <span className="text-primary-red">Services</span>
      </h1>
     </div>
    </Container>
   </div>
  </div>
 );
};

export default ExploreOurServices;
