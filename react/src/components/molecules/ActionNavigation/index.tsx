"use client"

import { useContext } from "react";

import { ActionLinks } from "@/components/atoms";
import { SidebarContext } from "@/context/sidebar/context";
import { Cart } from "@/components/organisms";

const ActionNavigation = () => {
    const { open, setOpenState } = useContext(SidebarContext);

    function handleUser () {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="relative flex items-center space-x-5 items-center">
            <Cart />
            <ActionLinks icon="FiUser" action={handleUser} />
            <ActionLinks style="xl:hidden" icon="FiMenu" action={() => setOpenState(!open)} />
        </div>
    )
}

export default ActionNavigation;