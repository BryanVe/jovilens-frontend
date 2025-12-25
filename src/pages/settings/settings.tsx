import { useBreadcrumbs } from '@/hooks'

export const Settings = () => {
  useBreadcrumbs([
    {
      label: 'Configuración',
    },
  ])

  return <div>Configuración</div>
}
