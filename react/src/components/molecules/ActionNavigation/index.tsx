"use client"

import { useContext } from "react";

import { ActionLinks } from "@/components/atoms";
import { SidebarContext } from "@/context/sidebar/context";

const ActionNavigation = () => {
    const { open, setOpenState } = useContext(SidebarContext);
    
    function handleCart () {
        throw new Error("Function not implemented.");
    }

    function handleUser () {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="flex items-center space-x-5 items-center">
            <ActionLinks icon="FiShoppingCart" action={handleCart} notified />
            <ActionLinks icon="FiUser" action={handleUser} />
            <ActionLinks style="xl:hidden" icon="FiMenu" action={() => setOpenState(!open)} />
        </div>
    )
}

export default ActionNavigation;