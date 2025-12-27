import { useBreadcrumbs } from '@/layouts/root/hooks'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Group, Stack, Text, Title } from '@mantine/core'
import { PatientsTable } from './components'

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

  return (
    <Stack>
      <Group>
        <Stack gap={0} flex={1}>
          <Title c="gray.8">Gestión de Pacientes</Title>
          <Text c="gray.6">Gestione la información y el historial de sus pacientes.</Text>
        </Stack>
        <Button leftSection={<FontAwesomeIcon icon={faPlus} />} size="md">
          Nuevo paciente
        </Button>
      </Group>
      <PatientsTable />
    </Stack>
  )
}
