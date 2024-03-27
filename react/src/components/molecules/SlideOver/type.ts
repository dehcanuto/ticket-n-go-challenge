import { ReactNode } from "react"

export interface SlideOverPropsType {
    title: string
    orientation: 'left' | 'right'
    children: ReactNode
    action: () => void
}