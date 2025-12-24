import { faHouse, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Stack } from '@mantine/core'
import { MenuItems, type TMenuItem } from './menu-items'

const menuItems: TMenuItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    icon: faHouse,
    to: '/',
  },
  {
    id: 'patients',
    label: 'Pacientes',
    icon: faUserGroup,
    to: '/patients',
  },
]

export const MainItems = () => {
  return (
    <Stack flex={1} p="md" gap={0}>
      <MenuItems items={menuItems} />
    </Stack>
  )
}
