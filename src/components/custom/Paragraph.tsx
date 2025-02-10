import React from "react";
import { cn } from "@/lib/utils"; // Ensure you have a cn utility
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
 className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
 className,
 children,
 ...props
}) => {
 return (
  <p className={cn("~text-xs/base", className)} {...props}>
   {children}
  </p>
 );
};

export default Paragraph;
