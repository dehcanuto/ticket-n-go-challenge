import { MenuListPropsType } from "@/types/MenuList";
import { categoriesList } from "./categories";

export const menuList: MenuListPropsType[] = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/products',
        title: 'Produtos'
    },
    ...categoriesList,
]