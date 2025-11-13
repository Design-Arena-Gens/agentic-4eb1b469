"use client";

import { cn } from "@/lib/utils";

interface Column<T = Record<string, unknown>> {
  header: string;
  accessor: keyof T;
  align?: "left" | "center" | "right";
}

interface DataTableProps<T = Record<string, unknown>> {
  caption?: string;
  columns: ReadonlyArray<Column<T>>;
  data: ReadonlyArray<T>;
  getRowKey?: (row: T, index: number) => string;
}

export const DataTable = <T extends Record<string, unknown>>({
  caption,
  columns,
  data,
  getRowKey,
}: DataTableProps<T>) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-subtle">
      <table className="min-w-full border-collapse">
        {caption ? (
          <caption className="px-6 pb-4 pt-6 text-left text-sm font-medium text-muted-foreground">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                scope="col"
                className={cn(
                  "px-6 py-4 font-semibold",
                  column.align === "right" && "text-right",
                  column.align === "center" && "text-center",
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((row, index) => (
            <tr
              key={getRowKey?.(row, index) ?? `row-${index}`}
              className="border-t border-border/60 transition hover:bg-muted/40"
            >
              {columns.map((column) => (
                <td
                  key={`${column.header}-${String(column.accessor)}`}
                  className={cn(
                    "px-6 py-5 text-foreground/90",
                    column.align === "right" && "text-right",
                    column.align === "center" && "text-center",
                  )}
                >
                  {String(row[column.accessor] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
