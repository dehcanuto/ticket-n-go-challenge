import type { IconBaseProps } from 'react-icons'

export interface DynamicIconProps {
    iconFamily: string
    icon: string
}
  
export interface IconsMapping {
    [key: string]: React.ComponentType<IconBaseProps>
}