import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <div className='h-screen flex'>
            {/*LEFT*/}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl-[14%]">
                <Link href='/' className='flex items-center justify-center lg:justify-start gap-2 p-5'>
                    <Image src='/images/logo.png' alt='logo' width={32} height={32}/>
                    <span className='hidden lg:block font-bold'>Dashboard</span>
                </Link>
                <SideBar/>
            </div>
            {/*RIGHT*/}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                <NavBar/>
                {children}
            </div>
        </div>
    )
}
