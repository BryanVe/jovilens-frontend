import { useBreadcrumbs } from '@/hooks'

export const Profile = () => {
  useBreadcrumbs([
    {
      label: 'Perfil',
    },
  ])

  return <div>Perfil</div>
}
