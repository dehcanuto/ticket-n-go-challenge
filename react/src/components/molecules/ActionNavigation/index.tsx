"use client"

import { ActionLinks } from "@/components/atoms";

const ActionNavigation = () => {
    function handleFavorites () {
        throw new Error("Function not implemented.");
    }

    function handleCart () {
        throw new Error("Function not implemented.");
    }

    function handleUser () {
        throw new Error("Function not implemented.");
    }

    function handleMenu () {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="flex items-center space-x-5 items-center">
            <ActionLinks icon="FiHeart" action={handleFavorites} />
            <ActionLinks icon="FiShoppingCart" action={handleCart} notified />
            <ActionLinks icon="FiUser" action={handleUser} />
            <ActionLinks style="xl:hidden" icon="FiMenu" action={handleMenu} />
        </div>
    )
}

export default ActionNavigation;