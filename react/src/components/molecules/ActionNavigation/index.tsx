"use client"

import { ActionLinks } from "@/components/atoms";
import { Cart, MenuMobile } from "@/components/organisms";

const ActionNavigation = () => {
    return (
        <div className="relative flex items-center space-x-5 items-center">
            <Cart />
            <ActionLinks icon="FiUser" />
            <MenuMobile />
        </div>
    )
}

export default ActionNavigation;