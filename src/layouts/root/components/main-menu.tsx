import {
  faFolderOpen,
  faHouse,
  faIdCard,
  faUserGroup,
  faUsersGear,
} from '@fortawesome/free-solid-svg-icons'
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
  {
    id: 'medical-records',
    label: 'Historias Clínicas',
    icon: faFolderOpen,
    to: '/medical-records',
  },
  {
    id: 'users',
    label: 'Usuarios',
    icon: faUsersGear,
    to: '/users',
  },
  {
    id: 'roles-and-permissions',
    label: 'Roles y Permisos',
    icon: faIdCard,
    children: [
      {
        id: 'roles',
        label: 'Roles',
        to: '/roles',
      },
      {
        id: 'permissions',
        label: 'Permisos',
        to: '/permissions',
      },
    ],
  },
]

export const MainItems = () => {
  return (
    <Stack flex={1} p="md" gap={0}>
      <MenuItems items={menuItems} />
    </Stack>
  )
}
