<<<<<<< HEAD
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "./Container";
import { MainNav } from "./Navbar";
// import { MobileNav } from "./MobileNav";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";
import { SiteLogo } from "../common/SiteLogo";
import {} from "@/components/layout";

export function Header() {
 //  const pathName = usePathname();
 const [hasScrolled, setHasScrolled] = useState(false);
 //  const isHomePage = pathName === "/";

 const checkScroll = useCallback(() => {
  setHasScrolled(window.scrollY > 500);
 }, []);

 useEffect(() => {
  let frameId: number;
  const handleScroll = () => {
   frameId = requestAnimationFrame(checkScroll);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial scroll position

  return () => {
   window.removeEventListener("scroll", handleScroll);
   cancelAnimationFrame(frameId);
  };
 }, [checkScroll]);

 const getBackgroundClass = () => {
  return hasScrolled ? "bg-black/40 backdrop-blur-lg " : "bg-black";
 };
=======
import { Container } from "./Container";
>>>>>>> 1b6d885d224adcca8256b9be3f7f92f5c4b5007b

 return (
  <header
   className={`text-white w-full z-50 sticky top-0 inset-x-0 transition-all duration-300  ${getBackgroundClass()} `}
  >
   <Container>
<<<<<<< HEAD
    <div className="flex justify-between items-center py-2 min-h-[66px] relative">
     <div className="flex items-center gap-10">
      <SiteLogo />
      <div className="hidden md:flex space-x-4">
       <MainNav />
      </div>
     </div>
     {/* <MobileNav /> */}
     <div className="space-x-8 lg:block hidden">
      <a
       href={`tel:${siteConfig.contactDetails.phone}`}
       className="transition-colors md:text-base text-sm"
      >
       {siteConfig.contactDetails.phone}
      </a>
      <Link href="/contact-us">
       <Button
        className="w-[131px] rounded-[30px]"
        effect="expandIcon"
        variant={"custom"}
        icon={ArrowRightIcon}
        iconPlacement="right"
       >
        Contact Us
       </Button>
      </Link>
     </div>
    </div>
=======
    <nav className="flex items-center justify-between py-2">
     <div>Logo</div>
     {/* <div className="flex items-center gap-2">
      <ThemeToggle />
     </div> */}
    </nav>
>>>>>>> 1b6d885d224adcca8256b9be3f7f92f5c4b5007b
   </Container>
  </header>
 );
}
