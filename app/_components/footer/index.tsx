import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import {
  Flex,
  IconButton,
  Separator,
  Text,
  VisuallyHidden,
  Box,
} from '@radix-ui/themes'
import Image from 'next/image'
import NextLink from 'next/link'
import { sampleSettings, sampleIndexPage } from '@/lib/data/sample-data'

export const Footer = () => {
  // Use local data instead of BaseHub
  const settings = sampleSettings
  const index = sampleIndexPage

  return (
    <Box style={{ borderTop: '1px solid var(--gray-3)' }}>
      {/* Main footer content */}
          <Flex
            px={{ initial: '5', md: '64px', lg: '142px' }}
            direction="column"
            justify="center"
            align="center"
            pt="9"
        pb="6"
          >
        {settings?.logo && (
              <Image
                className="dark-only"
                {...settings.logo}
                src={settings.logo.url}
                alt={settings.logo?.alt ?? ''}
            style={{ maxHeight: 28, objectFit: 'contain' }}
              />
            )}
        {settings?.logoLightMode && (
              <Image
                className="light-only"
                {...settings.logoLightMode}
                src={settings.logoLightMode.url}
                alt={settings.logoLightMode?.alt ?? ''}
            style={{ maxHeight: 28, objectFit: 'contain' }}
              />
            )}
            <Text size="1" color="gray" mt="3">
          {index?.rights}
            </Text>
        
            <Separator
              mt="6"
              mb="5"
              style={{
                maxWidth: 526,
                width: '91vw',
                backgroundColor: 'var(--focus-9)',
                maskImage:
                  'linear-gradient(90deg, transparent, black, transparent)',
                WebkitMaskImage:
                  'linear-gradient(90deg, transparent, black, transparent)',
              }}
            />
        
        {/* Social Media Links */}
            <Flex gap="3">
          <IconButton
            asChild
            variant="ghost"
            style={{ flexShrink: 0 }}
            color="gray"
            aria-label="Instagram"
          >
            <NextLink href="https://instagram.com/carpoollcom" target="_blank">
              {icons.instagram}
              <VisuallyHidden>Instagram</VisuallyHidden>
            </NextLink>
          </IconButton>
          
                  <IconButton
                    asChild
                    variant="ghost"
                    style={{ flexShrink: 0 }}
                    color="gray"
            aria-label="Facebook"
                  >
            <NextLink href="https://facebook.com/Carpooll.com" target="_blank">
              {icons.facebook}
              <VisuallyHidden>Facebook</VisuallyHidden>
                    </NextLink>
                  </IconButton>
          
          <IconButton
                asChild
            variant="ghost"
            style={{ flexShrink: 0 }}
            color="gray"
            aria-label="X (Twitter)"
              >
            <NextLink href="https://x.com/Carpooll.com" target="_blank">
              {icons.x}
              <VisuallyHidden>X (Twitter)</VisuallyHidden>
            </NextLink>
          </IconButton>
          
          <IconButton
            asChild
            variant="ghost"
            style={{ flexShrink: 0 }}
            color="gray"
            aria-label="LinkedIn"
          >
            <NextLink href="https://linkedin.com/company/Carpooll.com" target="_blank">
              {icons.linkedin}
              <VisuallyHidden>LinkedIn</VisuallyHidden>
                </NextLink>
          </IconButton>
              </Flex>
          </Flex>
    </Box>
  )
}

const icons = {
  instagram: (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: 'calc(var(--space-5) * var(--scaling))',
        height: 'calc(var(--space-5) * var(--scaling))',
      }}
    >
      <path
        d="M10 2.5C6.41015 2.5 3.5 5.41015 3.5 9C3.5 12.5898 6.41015 15.5 10 15.5C13.5898 15.5 16.5 12.5898 16.5 9C16.5 5.41015 13.5898 2.5 10 2.5ZM10 13.75C7.23858 13.75 5 11.5114 5 8.75C5 5.98858 7.23858 3.75 10 3.75C12.7614 3.75 15 5.98858 15 8.75C15 11.5114 12.7614 13.75 10 13.75ZM15.5 5.75C15.5 6.16421 15.1642 6.5 14.75 6.5C14.3358 6.5 14 6.16421 14 5.75C14 5.33579 14.3358 5 14.75 5C15.1642 5 15.5 5.33579 15.5 5.75Z"
        fill="currentColor"
      />
    </svg>
  ),
  facebook: (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: 'calc(var(--space-5) * var(--scaling))',
        height: 'calc(var(--space-5) * var(--scaling))',
      }}
    >
      <path
        d="M10 2.5C5.85775 2.5 2.5 5.85775 2.5 10C2.5 13.7433 5.24275 16.846 8.8285 17.4092V12.1675H6.9235V10H8.8285V8.34775C8.8285 6.46825 9.9475 5.43025 11.6613 5.43025C12.4818 5.43025 13.3397 5.5765 13.3397 5.5765V7.4215H12.3947C11.4625 7.4215 11.1722 7.99975 11.1722 8.593V10H13.252L12.9197 12.1675H11.1722V17.4092C14.7572 16.8467 17.5 13.7425 17.5 10C17.5 5.85775 14.1422 2.5 10 2.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  x: (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: 'calc(var(--space-5) * var(--scaling))',
        height: 'calc(var(--space-5) * var(--scaling))',
      }}
    >
      <path
        d="M7.5 3.75H3.125L8.28804 10.6341L3.40622 16.2499H5.06249L9.05519 11.6569L12.5 16.25H16.875L11.4948 9.07644L16.1251 3.75H14.4688L10.7277 8.05361L7.5 3.75ZM13.125 15L5.625 5H6.875L14.375 15H13.125Z"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: 'calc(var(--space-5) * var(--scaling))',
        height: 'calc(var(--space-5) * var(--scaling))',
      }}
    >
      <path
        d="M6.5 8.5V13.5H4.5V8.5H6.5ZM5.5 7.5C4.94772 7.5 4.5 7.05228 4.5 6.5C4.5 5.94772 4.94772 5.5 5.5 5.5C6.05228 5.5 6.5 5.94772 6.5 6.5C6.5 7.05228 6.05228 7.5 5.5 7.5ZM15.5 13.5H13.5V10.5C13.5 9.5 12.5 8.5 11.5 8.5C10.5 8.5 10.5 9.5 10.5 10.5V13.5ZM10 2.5C5.85775 2.5 2.5 5.85775 2.5 10C2.5 14.1422 5.85775 17.5 10 17.5C14.1422 17.5 17.5 14.1422 17.5 10C17.5 5.85775 14.1422 2.5 10 2.5Z"
        fill="currentColor"
      />
    </svg>
  ),
} as const
