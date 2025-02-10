import { Container } from "./layout/Container";
import { strategicPartnershipslogos } from "@/constants/_data/home";
import Image from "next/image";

const AnimatedLogoCloud = () => {
 return (
  <div className="w-full py-5 md:py-10 bg-[#0D0D0D]">
   <Container>
    <div className="flex lg:flex-row flex-col lg:items-center">
     <div className="mb-4">
      <h2 className="text-white/90 text-base w-44 font-semibold">
       Strategic Technology Partnerships
      </h2>
     </div>
     <div
      className="group relative flex gap-6 overflow-hidden items-center p-2"
      style={{
       maskImage:
        "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
      }}
     >
      {Array(8)
       .fill(null)
       .map((_, index) => (
        <div
         key={index}
         className="flex shrink-0 animate-x-slider items-center flex-row justify-around gap-6 md:gap-10"
        >
         {strategicPartnershipslogos.map((logo, key) => (
          <div key={key}>
           <Image
            src={logo.url}
            alt={logo.name}
            width={160} // Replace with actual width
            height={64} // Replace with actual height
            className="px-2 flex-none md:block hidden"
           />
           <Image
            src={logo.url}
            alt={logo.name}
            width={100} // Replace with actual width
            height={48} // Replace with actual height
            className="px-2 flex-none block md:hidden"
           />
          </div>
         ))}
        </div>
       ))}
     </div>
    </div>
   </Container>
  </div>
 );
};

const StrategicPartnerships = () => {
 return (
  <div className="w-full">
   <AnimatedLogoCloud />
  </div>
 );
};

export default StrategicPartnerships;
