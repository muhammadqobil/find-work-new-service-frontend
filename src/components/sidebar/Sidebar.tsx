"use client"
import React, {FC} from "react";
import {IconType} from "react-icons";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {LuMailCheck, LuUsers} from "react-icons/lu";


interface SidebarLinkProps {
    href: string,
    icon: IconType,
    label: string;
}

export const SidebarLink:FC<SidebarLinkProps> = ({href, icon: Icon, label}):React.JSX.Element => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link href={href} >
            <div className={`cursor-pointer flex items-center gap-3 p-0 px-4 w-[205px] h-[45px] rounded-md text-gray-900 ${isActive ? 'bg-blue-500 text-white' : ''}`}>
                <Icon className={`w-6 h-6`}/>
                <span className={`font-medium`}>{label}</span>
            </div>
        </Link>
    )
}

const Sidebar = ():React.JSX.Element =>{
    return (
        <div className={`fixed flex flex-col w-[17rem] bg-white h-full border-r border-gray-300`}>
            <h2 className={"p-[22px] px-[40px] mb-0 font-[500] text-2xl"}>Pages</h2>
            <div className={"w-full flex flex-col items-center justify-center gap-3"}>
                <SidebarLink href={"/"} icon={LuUsers} label={"Users"}/>
                <SidebarLink href={"/post"} icon={LuMailCheck} label={"Posts"}/>
            </div>
        </div>
    )
}

export default Sidebar;