import { AppShell, Burger, Divider, Flex, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router'
import { Sidebar } from './components'
import './style.css'
import { Breadcrumbs, type TBreadcrumbsItem } from '@/components'
import { useState } from 'react'
import { BreadcrumbsContext } from '@/contexts'

const NAVBAR_WIDTH = 300

export const Root = () => {
  const [opened, { toggle }] = useDisclosure()
  const [breadcrumbsItems, setBreadcrumbsItems] = useState<TBreadcrumbsItem[]>([])

  return (
    <BreadcrumbsContext.Provider value={{ setBreadcrumbsItems }}>
      <AppShell
        padding="md"
        header={{ height: 60 }}
        navbar={{
          width: NAVBAR_WIDTH,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Flex h="100%" gap={0}>
            <Group w={NAVBAR_WIDTH - 1}>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <div>Logo</div>
            </Group>
            <Divider orientation="vertical" />
            <Group flex={1} px="lg">
              <Breadcrumbs items={breadcrumbsItems} />
            </Group>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar>
          <Sidebar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </BreadcrumbsContext.Provider>
  )
}
