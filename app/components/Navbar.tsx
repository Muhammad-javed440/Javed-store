"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const links = [
    {name:"Home", href:"/"},
    {name:"Men", href:"/Men"},
    {name:"Women", href:"/Women"},
    {name:"Teen", href:"/Teen"},
];

export default function Navbar(){
    const pathname = usePathname();
    return (
        <header className="mb-8 border-b  bg-red-700">
        <div className="flex item-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <Link href="/">
            <h1 className="text-2xl md:text-4xl font bold md:text-4xl text-white">Javed <span className="text-primary">Store</span></h1>
            </Link>
         <nav className="hidden gap-12 lg:flex ">
           {links.map((link,idx) => (
            <div key={idx}>
            {pathname === link.href ? (
                <Link className=" text-4xl font-semibold text-primary" href={link.href}>{link.name}</Link>
            ):(
               <Link href={link.href} className="text-4xl   font-semibold ml-10 text-white transition duration-100 ">{link.name}</Link>
            ) }
            </div>
           ))}
         </nav>
          <div className=" ">
          <Button variant={"outline"}
          className="flex flex-col gap-y-1.5 h-8 sm:w-20 md:h-12 ml-20 md:w-24 rounded-none hover:bg-yellow-400 ">
            <ShoppingBag/>
            <span className="hidden text-xs font-semibold text-gray-500 sm:block ">Cart</span>
          </Button>
          </div>
        </div>
        </header>
    )
}