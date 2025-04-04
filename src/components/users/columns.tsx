"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Full Name",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "website",
        header: "Website",
        cell: ({ row }) => (
            <a href={`https://${row.original.website}`} target="_blank" className="text-blue-500 underline">
                {row.original.website}
            </a>
        ),
    },
    {
        accessorKey: "company.name",
        header: "Company",
    },
];
