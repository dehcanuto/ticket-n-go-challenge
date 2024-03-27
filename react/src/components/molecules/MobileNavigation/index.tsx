import { NavLinks } from "@/components/atoms";
import { MenuListPropsType } from "@/types/MenuList";
import { menuList } from "@/utils/menu";
import { Key } from "react";

const MobileNavigation = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <nav className="flex px-4 mx-auto">
            <ul className="flex flex-col list-none text-white font-semibold font-heading space-y-8">
                {menuList.map((item: MenuListPropsType, key: Key) => 
                    <li key={key} onClick={closeMenu}><NavLinks {...item} /></li>)}
            </ul>
        </nav>
    )
}

export default MobileNavigation;