import { useBreadcrumbs } from '../../hooks'

export const Home = () => {
  useBreadcrumbs([
    {
      label: 'Inicio',
    },
  ])

  return <div>Inicio</div>
}
