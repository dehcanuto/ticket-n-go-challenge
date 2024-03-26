import Image from "next/image";
import Link from "next/link";

import { ActionNavigation, MenuNavigation } from "@/components/molecules";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white w-screen">
            <div className="flex justify-between px-5 xl:px-12 py-6 flex w-full items-center">
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
        </header>
    )
}

export default Header;