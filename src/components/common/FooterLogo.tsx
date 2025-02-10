import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLogo = () => {
 return (
  <Link href="/" className="flex items-center">
   <Image
    src={"/site/footer-logo.svg"}
    alt="Verbox Logo"
    width={200}
    height={100}
    className="md:w-48 w-36 -ms-4"
   />
  </Link>
 );
};

export default FooterLogo;
