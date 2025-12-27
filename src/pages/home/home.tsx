import { useBreadcrumbs } from '@/layouts/root/hooks'

export const Home = () => {
  useBreadcrumbs([
    {
      label: 'Inicio',
    },
  ])

  return <div>Inicio</div>
}
