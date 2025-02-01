import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Next Shadcn Dashboard Starter",
 description: "Basic dashboard with Next.js and Shadcn",
};

export default function MainLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <div className="bg-black">
   <main className="w-full h-full overflow-hidden">{children}</main>
  </div>
 );
}
