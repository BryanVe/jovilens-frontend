import { useBreadcrumbs } from '@/layouts/root/hooks'

export const Profile = () => {
  useBreadcrumbs([
    {
      label: 'Perfil',
    },
  ])

  return <div>Perfil</div>
}
