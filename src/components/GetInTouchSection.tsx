import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Container } from "./layout";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function GetInTouchSection() {
 return (
  <section className="bg-primary-dark py-10 md:py-16 relative overflow-hidden">
   <Container>
    <div className="relative z-10 text-white mb-14 md:mb-28">
     <h2 className="~md/lg:~text-2xl/4xl ~xs/md:text-xl/2xl font-medium mb-6 w-1/2 flex flex-wrap lg:w-2/4">
      Get in touch now!
     </h2>
    </div>
   </Container>
   <div className="flex items-center  absolute bottom-0 w-full z-50 ">
    <Link
     href="/contact-us"
     className="w-1/2 bg-primary-red rounded-none  hover:bg-red-800 text-white px-4 md:px-8 md:py-8 py-2 h-full  ~text-sm/base  font-normal"
    >
     <Button
      variant="destructive"
      className="bg-transparent -tracking-tighter ~text-sm/base rounded-none hover:bg-transparent flex items-center justify-center text-center w-full"
     >
      Contact us
      <ChevronRight className="ml-2 h-4 w-4 mt-1" />
     </Button>
    </Link>
    <a
     href="tel:+923001402820"
     className="text-white hover:text-gray-200 transition-colors w-1/2 px-4 md:px-8 md:py-8 py-2 h-full  bg-primary-dark"
    >
     <div className="flex items-center h-full justify-center ~text-sm/base  min-h-[40px]">
      Call {siteConfig.contactDetails.phone}
     </div>
    </a>
   </div>
   <div className="absolute top-1/2 right-0 transform -translate-x-0 -translate-y-1/2 w-[800px] h-full">
    <Image
     src="/images/home/vector.svg"
     alt="V-shaped background"
     fill
     className="object-cover"
     priority
    />
   </div>
  </section>
 );
}
