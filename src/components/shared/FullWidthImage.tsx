import Image from "next/image";
import React from "react";
interface FullWidthImageProps {
 src: string; // URL for the main image
 alt: string; // Alt text for the image
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt }) => {
 return (
  <section className="relative w-full h-[200px] md:h-[481px] xl:h-[500px] overflow-hidden">
   <Image
    src={src}
    alt={alt}
    fill
    className="rounded-md object-cover bg-center"
   />
  </section>
 );
};

export default FullWidthImage;
