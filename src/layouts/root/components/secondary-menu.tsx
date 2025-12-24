import { faGear, faRightFromBracket, faUsersGear } from '@fortawesome/free-solid-svg-icons'
import { Stack } from '@mantine/core'
import { MenuItems, type TMenuItem } from './menu-items'
import { useNavigate } from 'react-router'

export const SecondaryItems = () => {
  const navigate = useNavigate()

  const menuItems: TMenuItem[] = [
    {
      id: 'settings',
      label: 'Configuración',
      icon: faGear,
      to: '/settings',
    },
    {
      id: 'users',
      label: 'Usuarios',
      icon: faUsersGear,
      to: '/users',
    },
    {
      id: 'logout',
      c: 'red',
      label: 'Cerrar sesión',
      icon: faRightFromBracket,
      onClick: () => void navigate('/sign-in'),
    },
  ]

  return (
    <Stack p="md" gap={0}>
      <MenuItems items={menuItems} />
    </Stack>
  )
}
