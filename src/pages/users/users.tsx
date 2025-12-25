import { useBreadcrumbs } from '../../hooks'

export const Users = () => {
  useBreadcrumbs([
    {
      label: 'Usuarios',
    },
  ])

  return <div>Usuarios</div>
}
