import { InfoCircledIcon } from '@radix-ui/react-icons'
import { icons, LucideProps } from 'lucide-react'
import { pascalCase } from 'change-case'

export const Icon = ({ name, ...rest }: { name?: string } & LucideProps) => {
  // Handle undefined or empty icon names gracefully
  // This prevents the "Cannot read properties of undefined" error
  if (!name || typeof name !== 'string' || name.length === 0) {
    return <InfoCircledIcon {...(rest as any)} />
  }
  
  try {
    // Convert icon name to PascalCase and find the corresponding icon
    // Fallback to InfoCircledIcon if icon is not found
    const Icon =
      icons[
        pascalCase(name, { mergeAmbiguousCharacters: true }) as keyof typeof icons
      ] ?? InfoCircledIcon

    return <Icon {...rest} />
  } catch (error) {
    // Log warning and fallback to InfoCircledIcon for any errors
    console.warn(`Icon not found: ${name}`, error)
    return <InfoCircledIcon {...(rest as any)} />
  }
}
