import { Table } from "@tanstack/react-table";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Icons from "@/components/common/icons";
import { Skeleton } from "@/components/ui/skeleton";

type TOptions = {
 pageSizes?: number[];
};
interface DataTablePaginationProps<TData> {
 table: Table<TData>;
 loading?: boolean;
 options?: TOptions;
}

export default function DataTablePagination<TData>({
 table,
 loading,
 options,
}: DataTablePaginationProps<TData>) {
 const { pageSizes } = (options as TOptions) || {};

 return (
  <div className="flex md:flex-row flex-col items-center justify-between px-2 w-full">
   {loading ? (
    <Skeleton className="w-40 h-6 rounded-sm" />
   ) : (
    <div className="flex-1 text-sm text-muted-foreground">
     {table.getFilteredSelectedRowModel().rows.length} of{" "}
     {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
   )}
   <div className="flex flex-row items-center mt-5 space-x-2 md:space-x-6 lg:space-x-8">
    <div className="flex items-center space-x-2">
     {loading ? (
      <>
       <Skeleton className="rounded-sm w-28 h-6" />
       <Skeleton className="rounded-sm w-16 h-8" />
      </>
     ) : (
      pageSizes &&
      pageSizes?.length > 1 && (
       <>
        <p className="md:text-sm text-[12px] font-medium">Rows per page</p>
        <Select
         value={`${table.getState().pagination.pageSize}`}
         onValueChange={(value) => {
          table.setPageSize(Number(value));
         }}
        >
         <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
         </SelectTrigger>
         <SelectContent side="top">
          {pageSizes.map((pageSize) => (
           <SelectItem key={pageSize} value={`${pageSize}`}>
            {pageSize}
           </SelectItem>
          ))}
         </SelectContent>
        </Select>
       </>
      )
     )}
    </div>
    <div className="flex w-[100px] items-center justify-center md:text-sm text-[12px] font-medium">
     {loading ? (
      <Skeleton className="rounded-sm w-20 h-6" />
     ) : (
      <>
       Page {table.getState().pagination.pageIndex + 1} of{" "}
       {table.getPageCount()}
      </>
     )}
    </div>
    {loading ? (
     <div className="flex items-center space-x-2">
      <Skeleton className="rounded-sm w-8 h-8" />
      <Skeleton className="rounded-sm w-8 h-8" />
      <Skeleton className="rounded-sm w-8 h-8" />
      <Skeleton className="rounded-sm w-8 h-8" />
     </div>
    ) : (
     <div className="flex items-center space-x-2">
      <Button
       variant="outline"
       className="hidden h-8 w-8 p-0 lg:flex"
       onClick={() => table.setPageIndex(0)}
       disabled={!table.getCanPreviousPage()}
      >
       <span className="sr-only">Go to first page</span>
       <Icons.ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
       variant="outline"
       className="h-8 w-8 p-0"
       onClick={() => table.previousPage()}
       disabled={!table.getCanPreviousPage()}
      >
       <span className="sr-only">Go to previous page</span>
       <Icons.ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
       variant="outline"
       className="h-8 w-8 p-0"
       onClick={() => table.nextPage()}
       disabled={!table.getCanNextPage()}
      >
       <span className="sr-only">Go to next page</span>
       <Icons.ChevronRight className="h-4 w-4" />
      </Button>
      <Button
       variant="outline"
       className="hidden h-8 w-8 p-0 lg:flex"
       onClick={() => table.setPageIndex(table.getPageCount() - 1)}
       disabled={!table.getCanNextPage()}
      >
       <span className="sr-only">Go to last page</span>
       <Icons.ChevronsRight className="h-4 w-4" />
      </Button>
     </div>
    )}
   </div>
  </div>
 );
}
