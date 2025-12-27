import { useBreadcrumbs } from '@/layouts/root/hooks'

export const Settings = () => {
  useBreadcrumbs([
    {
      label: 'Configuración',
    },
  ])

  return <div>Configuración</div>
}
