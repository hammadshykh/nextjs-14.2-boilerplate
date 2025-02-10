import { Facebook, Dribbble, Github, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
 { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
 { icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
 { icon: Github, href: "https://github.com", label: "GitHub" },
 { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function SocialLinks() {
 return (
  <div className="flex space-x-4">
   {socialLinks.map((link) => (
    <Link
     key={link.label}
     href={link.href}
     target="_blank"
     rel="noopener noreferrer"
     className="text-gray-400 hover:text-gray-300 transition-colors"
    >
     <link.icon className="w-5 h-5" />
     <span className="sr-only">{link.label}</span>
    </Link>
   ))}
  </div>
 );
}
