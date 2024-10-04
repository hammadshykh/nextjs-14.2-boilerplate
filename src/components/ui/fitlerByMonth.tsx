import * as React from "react";
import { format } from "date-fns";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerWithRangeProps {
 className?: string;
 selectedDateRange: DateRange | undefined;
 onSelect: (dateRange: DateRange) => void;
 onClearFilters: (() => void) | undefined;
}

export function DatePickerWithRange({
 className,
 selectedDateRange,
 onSelect,
 onClearFilters,
}: DatePickerWithRangeProps) {
 const handleDateSelect: SelectRangeEventHandler = (dateRange) => {
  if (dateRange) {
   onSelect(dateRange);
  }
 };

 return (
  <div className={cn("grid gap-2", className)}>
   <Popover>
    <PopoverTrigger asChild>
     <Button
      id="date"
      variant={"secondary"}
      className={cn(
       "min-w-max justify-start text-left font-normal",
       !selectedDateRange && "text-muted-foreground"
      )}
     >
      {selectedDateRange?.from ? (
       selectedDateRange.to ? (
        <>
         {format(selectedDateRange.from, "LLL dd, y")} -{" "}
         {format(selectedDateRange.to, "LLL dd, y")}
        </>
       ) : (
        format(selectedDateRange.from, "LLL dd, y")
       )
      ) : (
       <span>Pick a date</span>
      )}
     </Button>
    </PopoverTrigger>
    <PopoverContent
     className="p-1 space-y-2 flex flex-col justify-center items-center w-full"
     align="center"
    >
     <Button className="w-32" variant={"secondary"} onClick={onClearFilters}>
      Remove Filters
     </Button>
     <Calendar
      initialFocus
      mode="range"
      defaultMonth={selectedDateRange?.from}
      selected={selectedDateRange}
      onSelect={handleDateSelect}
      numberOfMonths={2}
     />
    </PopoverContent>
   </Popover>
  </div>
 );
}
