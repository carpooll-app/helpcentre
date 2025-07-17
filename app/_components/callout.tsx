import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons'
import { Callout as RadixCallout, Link } from '@radix-ui/themes'
import { RichText } from '@/lib/markdown/markdown-renderer'

export interface CalloutFragment {
  type?: 'info' | 'warning' | 'error' | 'success'
  content: {
    json: {
      content: string
    }
  }
}

export const Callout = ({ type = 'info', content }: CalloutFragment) => {
  const { Icon, color } =
    theme[type as 'info' | 'warning' | 'error' | 'success']
  return (
    <RadixCallout.Root my="5" color={color} variant="surface">
      <RadixCallout.Icon>
        <Icon />
      </RadixCallout.Icon>
      <RichText
        content={content.json.content}
        components={{
          p: (props: any) => <RadixCallout.Text {...props} />,
          a: (props: any) => <Link {...props} />,
        }}
      />
    </RadixCallout.Root>
  )
}

const theme = {
  info: { Icon: InfoCircledIcon, color: 'blue' },
  warning: { Icon: ExclamationTriangleIcon, color: 'yellow' },
  error: { Icon: CrossCircledIcon, color: 'red' },
  success: { Icon: CheckCircledIcon, color: 'green' },
} as const
