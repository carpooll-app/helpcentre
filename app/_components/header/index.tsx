/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Container,
  Flex,
  Grid,
  Link,
  VisuallyHidden,
} from '@radix-ui/themes'
import NextLink from 'next/link'
import s from './header.module.scss'
import { MobileNavbar } from './mobile-navbar'
import { DialogTriggerDesktop as Search } from '../search'
import Image from 'next/image'
import { clsx } from 'clsx'
import { sampleSettings, sampleIndexPage } from '@/lib/data/sample-data'

export type NavLinkFragment = {
  _id: string
  _title: string
  href: string
}

export const Header = () => {
  // Use local data instead of BaseHub
  const settings = sampleSettings
  const index = sampleIndexPage

  // Define new navigation links
  const navLinks = [
    {
      _id: '2',
      _title: 'How it Works',
      href: '/how-it-works'
    },
    {
      _id: '3',
      _title: 'Safety',
      href: '/safety'
    },
    {
      _id: '4',
      _title: 'Post a ride',
      href: '/post-ride'
    },
    {
      _id: '5',
      _title: 'Find a ride',
      href: '/find-ride'
    }
  ]

        return (
          <header className={s.header}>
            <Container
              size="4"
              px={{ initial: '5', md: '8' }}
              height="100%"
              className={s['header__head']}
              position="relative"
            >
              <Grid
                align="center"
                columns={{
                  initial: '1fr auto',
                  sm: 'auto fit-content(80%) minmax(auto, 1fr)',
                  md: '1fr minmax(300px, auto) 1fr',
                }}
                gapX="4"
                height="100%"
              >
                <Flex asChild align="center" flexShrink="0" width="fit-content">
                  <NextLink href="/">
                    <Image
                      // only hide on light-mode if there's a light-mode logo
                      className={clsx(
                  settings?.logoLightMode?.url && 'dark-only'
                      )}
                src={settings?.logo?.url || ''}
                alt={settings?.logo?.alt || ''}
                width={settings?.logo?.width || 150}
                height={settings?.logo?.height || 40}
                style={{ maxHeight: 28, objectFit: 'contain' }}
                    />
              {settings?.logoLightMode?.url && (
                      <Image
                        className="light-only"
                        src={settings.logoLightMode.url}
                  alt={settings.logoLightMode.alt || ''}
                  width={settings.logoLightMode.width || 150}
                  height={settings.logoLightMode.height || 40}
                  style={{ maxHeight: 28, objectFit: 'contain' }}
                      />
                    )}
              {(settings?.logo?.alt || settings?.logoLightMode?.alt) && (
                      <VisuallyHidden asChild>
                        <h2>
                    {settings?.logo?.alt || settings?.logoLightMode?.alt}
                        </h2>
                      </VisuallyHidden>
                    )}
                  </NextLink>
                </Flex>
                <Search className={s.search} hideOnHomepage />
                <Flex
                  gap="4"
                  align="center"
                  justify="end"
                  asChild
                  gridColumnStart="-2"
                  display={{ initial: 'none', sm: 'flex' }}
                >
                  <nav>
              {navLinks.map((item) => (
                        <Link key={item._id} color="gray" asChild size="2">
                          <NextLink href={item.href}>{item._title}</NextLink>
                        </Link>
              ))}
              <Button 
                asChild
                style={{ borderRadius: '16px', backgroundColor: 'var(--accent-9)', color: '#163300' }}
              >
                <NextLink href="/signup">Sign up</NextLink>
              </Button>
                  </nav>
                </Flex>
          <MobileNavbar links={navLinks} />
              </Grid>
            </Container>
          </header>
  )
}
