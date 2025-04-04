import {ColumnDef} from "@tanstack/react-table";
import {DataTable} from "@/components/ui/DataTable";

interface PostType {
    id: number;
    userId: number;
    title: string;
    body: string;
}
export default async function Posts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }

    const posts: PostType[] = await res.json();

    const columns: ColumnDef<PostType>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "title",
            header: "Title",
        },
        {
            accessorKey: "body",
            header: "Description",
        }
    ];
    return (
        <div className={"w-full"}>
            <DataTable
                columns={columns}
                data={posts.map((row) => ({id:row.id, title:row.title, body:row.body.substring(0,100) + "...", userId:row.userId}))}
                searchKey="title"
            />
        </div>
    )
}