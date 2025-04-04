import {ColumnDef} from "@tanstack/react-table";
import {DataTable} from "@/components/ui/DataTable";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export default async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }

    const users: User[] = await res.json();

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: "Full Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "phone",
            header: "Phone",
        },
    ];



    return (
        <div className="w-full">
            <DataTable
                columns={columns}
                data={users}
                searchKey="name"
            />
        </div>
    );
}