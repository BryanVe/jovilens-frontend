import { useBreadcrumbs } from '../../hooks'

export const Patients = () => {
  useBreadcrumbs([
    {
      label: 'Inicio',
      to: '/',
    },
    {
      label: 'Pacientes',
    },
  ])

  return <div>Pacientes</div>
}
