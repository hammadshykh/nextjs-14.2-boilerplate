import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import React from "react";
import Icons from "../icons";

interface DataTableColumnHeaderProps<TData, TValue>
 extends React.HTMLAttributes<HTMLDivElement> {
 column: Column<TData, TValue>;
 title: string;
}

export function DataTableColumnHeader<TData, TValue>({
 column,
 title,
 className,
}: DataTableColumnHeaderProps<TData, TValue>) {
 if (!column.getCanSort()) {
  return <div className={cn(className)}>{title}</div>;
 }

 return (
  <Button
   variant="link"
   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
   className={"px-0 gap-2 text-accent" + className}
  >
   {title}
   <Icons.ArrowUpDown className="h-4 w-4" />
  </Button>
 );
}
