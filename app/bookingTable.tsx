import React, { useMemo } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { Customer } from "@/types/appwrite.types";

// interface Customer {
//   id: number;
//   name: string;
//   email: string;
//   petName: string;
//   petDetail: string;
//   service: string;
//   price: number;
//   employee: string;
//   updatedAt: string;
//   status: string;
// }

const data: Customer[] = [
  {
    id: 252,
    name: "John Doe",
    email: "john@gmail.com",
    petName: "Beau",
    petDetail: "Dog (Labrador Retriever)",
    service: "Grooming",
    price: 41.05,
    employee: "Susan Williams",
    updatedAt: "1 hour ago",
    status: "Completed",
  },
  {
    id: 252,
    name: "John Doe",
    email: "john@gmail.com",
    petName: "Beau",
    petDetail: "Dog (Labrador Retriever)",
    service: "Grooming",
    price: 41.05,
    employee: "Susan Williams",
    updatedAt: "1 hour ago",
    status: "Completed",
  },
  {
    id: 252,
    name: "John Doe",
    email: "john@gmail.com",
    petName: "Beau",
    petDetail: "Dog (Labrador Retriever)",
    service: "Grooming",
    price: 41.05,
    employee: "Susan Williams",
    updatedAt: "1 hour ago",
    status: "Completed",
  },
  // Add more data...
];

const Table: React.FC = () => {
  // Define columns for the table
  const columns = useMemo<ColumnDef<Customer>[]>(
    () => [
      {
        accessorKey: "id",
        header: () => <span>ID</span>,
        cell: (info: any) => (
          <a href={`#${info.getValue()}`} className="text-purple-500">
            {info?.getValue()}
          </a>
        ),
      },
      {
        accessorKey: "name",
        header: () => <span>Customer Name</span>,
        cell: (info) => (
          <div className="flex items-center space-x-2">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="h-8 w-8 rounded-full"
            />
            <div>
              <div>{info.row.original.name}</div>
              <div className="text-sm text-gray-500">
                {info.row.original.email}
              </div>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "petName",
        header: () => <span>Pet Name</span>,
        cell: (info: any) => (
          <span className="text-purple-500">{info?.getValue()}</span>
        ),
      },
      {
        accessorKey: "petDetail",
        header: "Pet Detail",
      },
      {
        accessorKey: "service",
        header: "Service",
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: (info) => <span className="text-purple-500">Currency</span>,
      },
      {
        accessorKey: "employee",
        header: "Employee",
      },
      {
        accessorKey: "updatedAt",
        header: "Updated At",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info: any) => (
          <span
            className={`${
              info.getValue() === "Completed"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            } px-2 py-1 rounded-full`}
          >
            {info?.getValue()}
          </span>
        ),
      },
    ],
    []
  );

  // Create the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-xs font-medium uppercase text-gray-500"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
