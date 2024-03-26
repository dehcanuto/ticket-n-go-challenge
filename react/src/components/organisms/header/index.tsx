"use client"

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { SidebarContext } from "@/context/sidebar/context";
import { ActionNavigation, MenuNavigation, MobileNavigation } from "@/components/molecules";

const Header = () => {
    const { open, setOpenState } = useContext(SidebarContext);
    return (
        <>
            <header className="bg-gray-900 text-white w-screen">
                <div className="container mx-auto">
                    <div className="flex justify-between py-6 px-4 w-full items-center">
                        <Link href="/">
                            <Image
                                src="/images/logo-ticketandgo.svg"
                                alt="Ticket N Go"
                                width={180}
                                height={45}
                                priority
                            />
                        </Link>
                        <MenuNavigation />
                        <ActionNavigation />
                    </div>
                </div>
            </header>
            {open && <MobileNavigation closeMenu={() => setOpenState(false)} />}
        </>
    )
}

export default Header;