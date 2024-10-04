"use client";

import { ReactNode, useState } from "react";
import {
 ColumnDef,
 flexRender,
 useReactTable,
 getCoreRowModel,
 getPaginationRowModel,
 SortingState,
 getSortedRowModel,
 Header,
 ColumnFiltersState,
 getFilteredRowModel,
} from "@tanstack/react-table";

import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import DataTablePagination from "./pagination";
import { DateRange } from "react-day-picker";

import Icons from "@/components/common/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/fitlerByMonth";

// Define the type for row selection
type RowSelection = Record<string, boolean>;

interface Options {
 onRemoveSelectedRows?: (state: RowSelection) => void;
 addItemButton?: ReactNode;
 filterByMonth?: {
  component?: string;
  onSelect?: (val: DateRange) => void;
  selectedDateRange?: DateRange | undefined;
  onClearFilters?: () => void | undefined;
 };
 pagination?: boolean;
 pageSizes?: number[];
 searchBy?: {
  label: string;
  field: string;
 } | null;
 exporter?: React.JSX.Element;
 loading?: {
  status: boolean;
  columns: number;
  rows?: number;
  noSelection?: boolean;
 } | null;
}

interface DataTableProps<TData extends { id: string }, TValue> {
 columns: ColumnDef<TData, TValue>[];
 data: TData[];
 options?: Options;
}

export default function DataTable<TData extends { id: string }, TValue>({
 columns,
 data,
 options,
}: DataTableProps<TData, TValue>) {
 const [rowSelection, setRowSelection] = useState<RowSelection>({});
 const [sorting, setSorting] = useState<SortingState>([]);
 const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

 const {
  addItemButton,
  searchBy,
  exporter = undefined,
  filterByMonth = undefined,
  loading,
  pageSizes = [5, 10, 20, 40, 50],
  pagination = true,
  onRemoveSelectedRows = () => {},
 } = options || {};

 const table = useReactTable({
  data,
  columns,
  onSortingChange: setSorting,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  onColumnFiltersChange: setColumnFilters,
  getFilteredRowModel: getFilteredRowModel(),
  onRowSelectionChange: setRowSelection,
  getRowId: (row: TData) => row.id,
  state: {
   sorting,
   columnFilters,
   rowSelection,
  },
  initialState: {
   pagination: {
    pageSize: pageSizes[0],
   },
  },
 });

 const handleDateRangeSelect = (dateRange: DateRange) => {
  if (filterByMonth && filterByMonth.onSelect) {
   filterByMonth.onSelect(dateRange);
  }
 };

 return (
  <div className="space-y-4">
   <div className="lg:flex items-center justify-between gap-3 md:w-full">
    <div>
     {searchBy && (
      <div>
       {loading?.status ? (
        <Skeleton className="w-56 h-9" />
       ) : (
        <div className="flex mb-5 lg:mb-0 rounded-md group">
         <div className="border border-r-0 rounded-l-md flex flex-col items-start justify-center pl-2 group-focus-within:bg-accent  duration-100">
          <Icons.Search className="w-4 h-4" />
         </div>
         <Input
          placeholder={`Search by ${searchBy.label} ...`}
          value={
           (table.getColumn(searchBy.field)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
           table.getColumn(searchBy.field)?.setFilterValue(event.target.value)
          }
          className="max-w-sm md:min-w-72 border-l-0 rounded-l-none  group-focus-within:bg-accent duration-100"
         />
        </div>
       )}
      </div>
     )}
    </div>
    <div className="md:flex lg:space-y-0 space-y-5 items-center gap-4">
     {!!table.getFilteredSelectedRowModel().rows.length && (
      <TooltipProvider>
       <Tooltip>
        <TooltipTrigger>
         <Button
          variant="destructive"
          onClick={() => onRemoveSelectedRows(rowSelection)}
          className="gap-2"
         >
          <Icons.Trash className="w-4 h-4" />
          Remove
         </Button>
        </TooltipTrigger>
        <TooltipContent>
         <p>Remove selected rows</p>
        </TooltipContent>
       </Tooltip>
      </TooltipProvider>
     )}
     {filterByMonth && (
      <div className="flex justify-center items-center gap-3">
       <div>
        {loading?.status ? (
         <Skeleton className="w-40 h-10" />
        ) : (
         <>
          <TooltipProvider>
           <Tooltip>
            <TooltipTrigger className="max-w-min">
             {filterByMonth.component === "DatePickerWithRange" && (
              <DatePickerWithRange
               selectedDateRange={filterByMonth.selectedDateRange}
               onSelect={handleDateRangeSelect}
               onClearFilters={filterByMonth.onClearFilters}
              />
             )}
            </TooltipTrigger>
            <TooltipContent>
             <p>Filter affiliates by month.</p>
            </TooltipContent>
           </Tooltip>
          </TooltipProvider>
         </>
        )}
       </div>
      </div>
     )}
     {exporter && (
      <div>
       {loading?.status ? (
        <Skeleton className="w-40 h-10" />
       ) : (
        <TooltipProvider>
         <Tooltip>
          <TooltipTrigger>{exporter}</TooltipTrigger>
          <TooltipContent>
           <p>Export as CSV</p>
          </TooltipContent>
         </Tooltip>
        </TooltipProvider>
       )}
      </div>
     )}
     {addItemButton && loading?.status ? (
      <Skeleton className="w-40 h-10" />
     ) : (
      addItemButton
     )}
    </div>
   </div>
   <div className="rounded-md border">
    <Table>
     <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
       <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header: Header<TData, unknown>) => {
         return (
          <TableHead
           key={header.id}
           colSpan={header.colSpan}
           style={{
            width: header.getSize() !== 150 ? header.getSize() : undefined,
           }}
          >
           {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
         );
        })}
       </TableRow>
      ))}
     </TableHeader>
     <TableBody>
      {loading?.status ? (
       Array.from({ length: loading?.rows || 4 }).map((_, index) => (
        <TableRow key={index}>
         {!loading?.noSelection && (
          <TableCell className="w-4">
           <Skeleton className="w-4 h-4 rounded-sm" />
          </TableCell>
         )}
         {Array.from({
          length: loading?.columns - 1,
         }).map((_, id) => (
          <TableCell key={id}>
           <Skeleton className="w-full h-6 rounded-sm" />
          </TableCell>
         ))}
        </TableRow>
       ))
      ) : table.getRowModel().rows?.length ? (
       table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
         {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
           {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
         ))}
        </TableRow>
       ))
      ) : (
       <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
         No results.
        </TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
   {pagination && (
    <div className="md:flex items-center justify-end space-x-2 py-4">
     <DataTablePagination
      table={table}
      loading={loading?.status}
      options={{
       pageSizes,
      }}
     />
    </div>
   )}
  </div>
 );
}
