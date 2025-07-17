import { ReactNode } from 'react'
import { IconButton, Tooltip, VisuallyHidden } from '@radix-ui/themes'
import { Icon } from './icon'

type InlineIconProps = {
  name?: string
  tooltip?: string
  children?: ReactNode
}

export const InlineIcon = (props: InlineIconProps) => (
  <Tooltip content={props.tooltip ?? props.children}>
    <IconButton
      disabled
      asChild
      size="1"
      style={{ color: 'inherit', cursor: 'default' }}
    >
      <div>
        <VisuallyHidden>{props.tooltip ?? props.children}</VisuallyHidden>
        <Icon name={props.name} height={15} width={15} />
      </div>
    </IconButton>
  </Tooltip>
)
