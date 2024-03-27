import { useMemo } from 'react'
import type { IconBaseProps } from 'react-icons'
import dynamic from 'next/dynamic'

import { FaRegCircle } from 'react-icons/fa'
import { FiCircle } from 'react-icons/fi'
import { DynamicIconProps, IconsMapping } from './types'

const DynamicIcon = ({ iconFamily, icon }: DynamicIconProps) => {
  // useMemo utilizado para nao ficar renderizando sempre o DynamicIcon e fazer apenas quando ouver alteração no componente.
  const renderIcon = useMemo(() => {
    const Icons: IconsMapping = {
      fa: dynamic(
        () =>
          import('react-icons/fa').then(mod => mod[icon]).then(e => (e === undefined ? FaRegCircle : e)) as Promise<
            React.ComponentType<IconBaseProps>
          >
      ),
      fi: dynamic(
        () =>
          import('react-icons/fi').then(mod => mod[icon]).then(e => (e === undefined ? FiCircle : e)) as Promise<
            React.ComponentType<IconBaseProps>
          >
      )
    }
  
    const Icon = iconFamily && icon ? Icons[iconFamily] : null
  
    return <>{Icon && <Icon />}</>
  }, [icon, iconFamily]);

  return renderIcon;
}

export default DynamicIcon