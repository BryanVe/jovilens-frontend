import { useBreadcrumbs } from '@/layouts/root/hooks'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Group, Stack, Text, Title } from '@mantine/core'
import { NewPatientDrawer, PatientsTable } from './components'
import { useDisclosure } from '@mantine/hooks'
import './style.css'

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
  const [newPatientDrawerOpened, { open: openNewPatientDrawer, close: closeNewPatientDrawer }] =
    useDisclosure(false)

  return (
    <Stack>
      <Group>
        <Stack gap={0} flex={1}>
          <Title>Gestión de Pacientes</Title>
          <Text c="gray.7">Gestione la información y el historial de sus pacientes.</Text>
        </Stack>
        <Button
          leftSection={<FontAwesomeIcon icon={faPlus} />}
          size="md"
          onClick={openNewPatientDrawer}
        >
          Nuevo paciente
        </Button>
      </Group>
      <PatientsTable />
      <NewPatientDrawer opened={newPatientDrawerOpened} onClose={closeNewPatientDrawer} />
    </Stack>
  )
}
