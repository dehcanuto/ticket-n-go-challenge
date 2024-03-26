import { Key } from "react";
import { NavLinks } from "@/components/atoms";
import { MenuListPropsType } from "@/types/MenuList";
import { menuList } from "@/utils/menu";

const MenuNavigation = () => {
    return (
        <nav className="hidden md:flex px-4 mx-auto">
            <ul className="flex font-semibold font-heading space-x-12">
                {menuList.map((item: MenuListPropsType, key: Key) => <li key={key}><NavLinks {...item} /></li>)}
            </ul>
        </nav>
    )
}

export default MenuNavigation;