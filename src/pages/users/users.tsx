import { useBreadcrumbs } from '@/layouts/root/hooks'

export const Users = () => {
  useBreadcrumbs([
    {
      label: 'Usuarios',
    },
  ])

  return <div>Usuarios</div>
}
