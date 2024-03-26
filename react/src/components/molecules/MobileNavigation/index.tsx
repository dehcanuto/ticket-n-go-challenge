import { NavLinks } from "@/components/atoms";
import { MenuListPropsType } from "@/types/MenuList";
import { menuList } from "@/utils/menu";
import { Key } from "react";

const MobileNavigation = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div onClick={closeMenu} className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 w-screen max-w-sm overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 left-0 flex w-screen max-w-sm pr-10">
                        <div className="pointer-events-auto relative w-full">
                            <div className="flex h-full flex-col overflow-y-scroll bg-slate-700 py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <h2 className="text-base font-semibold leading-6 text-blue-500" id="slide-over-title">
                                        Menu
                                    </h2>
                                </div>
                                <div className="relative mt-8 flex-1 px-4 sm:px-6">
                                    <nav className="flex px-4 mx-auto">
                                        <ul className="flex flex-col list-none text-white font-semibold font-heading space-y-8">
                                            {menuList.map((item: MenuListPropsType, key: Key) => 
                                                <li key={key} onClick={closeMenu}><NavLinks {...item} /></li>)}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigation;