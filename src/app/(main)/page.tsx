import LandingPageComponent from "@/components/LandingPageComponent";
import { AuroraText } from "@/components/magic/AuroraText";

export default function Home() {
 return (
  <main className="min-h-screen">
   <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl pt-10  z-50 text-center">
    Vintage & <AuroraText>Beyond</AuroraText>
   </h1>
   <LandingPageComponent />
  </main>
 );
}
