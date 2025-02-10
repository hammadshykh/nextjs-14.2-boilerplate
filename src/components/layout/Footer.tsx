import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, Phone, MapPin } from "lucide-react";
import FooterLogo from "../common/FooterLogo";
import { SocialLinks } from "../shared/SocialLinks";
import { Container } from "./Container";
const contactItems = [
 { icon: Clock, text: "Sun-Fri: 9:00-5:00" },
 { icon: Mail, text: "info@example.com" },
 { icon: Phone, text: "0834 3849 9200" },
 { icon: MapPin, text: "16/A New York, USA" },
];
export default function Footer() {
 return (
  <Container>
   <footer className="w-full border-t border-border pt-16 md:pt-20 pb-8 ">
    <Card className="border-none shadow-none px-0">
     <CardContent className="grid gap-8 px-0 xl:grid-cols-3 xl:gap-8">
      <div className="flex flex-col items-start justify-start md:max-w-[300px]">
       <div className="flex items-start">
        <FooterLogo />
       </div>
       <p className="mt-4 text-sm text-muted-foreground  leading-6 ">
        Bring a best development experience to designers and developers by offer
        the tools needed for having a quicks and most web projects.
       </p>
      </div>
      <div className="md:mt-16 mt-6 grid md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
       <div className="lg:block hidden"></div>
       <div className="grid grid-cols-2 md:gap-8">
        <div>
         <h3 className="text-base font-medium">Company</h3>
         <ul className="mt-4 space-y-2 text-sm">
          {["About Us", "Privacy Policy", "Terms & Conditions"].map((item) => (
           <li key={item}>
            <Button
             variant="link"
             asChild
             className="h-auto p-0 text-muted-foreground hover:text-foreground"
            >
             <Link href="">{item}</Link>
            </Button>
           </li>
          ))}
         </ul>
        </div>
        <ul className="space-y-4">
         {contactItems.map((item, index) => (
          <li
           key={index}
           className="flex items-center space-x-2 text-sm text-gray-600"
          >
           <item.icon className="w-4 h-4" />
           <span>{item.text}</span>
          </li>
         ))}
        </ul>
       </div>
      </div>
     </CardContent>
    </Card>
    <div className="mt-8 border-t border-border/40  pt-8 space-y-4">
     <SocialLinks />
     <p className="text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Verbox. Developed by ConfigLabs. All
      rights reserved.
     </p>
    </div>
   </footer>
  </Container>
 );
}
