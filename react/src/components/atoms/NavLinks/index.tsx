import Link from "next/link";
import { MenuListPropsType } from "@/types/MenuList";

const NavLinks = ({ path, title }: MenuListPropsType) => {
    return (
        <Link href={path} className="hover:text-gray-200">
            {title}
        </Link>
    )
}

export default NavLinks;