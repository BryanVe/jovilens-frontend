import { useBreadcrumbs } from '@/layouts/root/hooks'
import { faCakeCandles, faIdCard, faPen, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Badge, Button, Card, Group, rem, Stack, Tabs, Text } from '@mantine/core'
import { useParams } from 'react-router'
import './style.css'
import { ClinicalSummaryTab } from './components'

const tabs = [
  { label: 'Resumen clínico', value: 'clinical-summary', component: <ClinicalSummaryTab /> },
  { label: 'Consultas', value: 'consultations' },
  { label: 'Datos', value: 'data' },
  { label: 'Archivos', value: 'files' },
]

export const PatientDetails = () => {
  useBreadcrumbs([
    {
      label: 'Inicio',
      to: '/',
    },
    {
      label: 'Pacientes',
      to: '/patients',
    },
    {
      label: 'Juan Pérez',
    },
  ])
  const { patientId } = useParams()

  console.log({
    patientId,
  })

  return (
    <Stack>
      <Card p="lg" radius="md" withBorder>
        <Group w="100%" justify="space-between">
          <Group>
            <Avatar name="Juan Pérez" color="initials" size="xl" />
            <Stack>
              <Text size={rem(32)} fw={700}>
                Juan Pérez
              </Text>
              <Group>
                <Badge
                  size="lg"
                  color="gray"
                  c="dark"
                  variant="light"
                  fw={600}
                  leftSection={<FontAwesomeIcon icon={faIdCard} />}
                >
                  DNI: 75212386
                </Badge>
                <Badge
                  size="lg"
                  color="gray"
                  c="dark"
                  variant="light"
                  fw={600}
                  tt="lowercase"
                  leftSection={<FontAwesomeIcon icon={faCakeCandles} />}
                >
                  25 años
                </Badge>
                <Badge
                  size="lg"
                  color="gray"
                  c="dark"
                  variant="light"
                  fw={600}
                  leftSection={<FontAwesomeIcon icon={faPhone} />}
                >
                  999 888 340
                </Badge>
              </Group>
            </Stack>
          </Group>
          <Group>
            <Button variant="default" size="md" leftSection={<FontAwesomeIcon icon={faPen} />}>
              Editar paciente
            </Button>
            <Button size="md" leftSection={<FontAwesomeIcon icon={faPlus} />}>
              Nueva consulta
            </Button>
          </Group>
        </Group>
      </Card>
      <Tabs defaultValue="clinical-summary">
        <Tabs.List
          styles={{
            list: {
              gap: rem(32),
            },
          }}
        >
          {tabs.map((tab) => (
            <Tabs.Tab key={tab.value} value={tab.value}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Panel key={tab.value} value={tab.value} pt="lg">
            {tab.component}
          </Tabs.Panel>
        ))}
      </Tabs>
    </Stack>
  )
}
