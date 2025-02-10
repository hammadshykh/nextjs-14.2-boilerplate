import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
 return (
  <Link href="/" className="flex items-center">
   <Image
    src={siteConfig.logo}
    alt="Verbox Logo"
    width={200}
    height={100}
    className="md:w-48 w-36 -ms-4"
   />
  </Link>
 );
}
