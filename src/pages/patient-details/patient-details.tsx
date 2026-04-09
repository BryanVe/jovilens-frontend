import { useBreadcrumbs } from '@/layouts/root/hooks'
import { faCakeCandles, faIdCard, faPen, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Badge, Button, Card, Group, Stack, Tabs, Title } from '@mantine/core'
import { useParams } from 'react-router'
import { ClinicalSummaryTab, ConsultationsTab } from './components'

const tabs = [
  { label: 'Resumen clínico', value: 'clinical-summary', component: <ClinicalSummaryTab /> },
  { label: 'Consultas', value: 'consultations', component: <ConsultationsTab /> },
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
      <Card>
        <Group w="100%" justify="space-between">
          <Group>
            <Avatar name="Juan Pérez" color="initials" size="xl" />
            <Stack>
              <Group gap="sm">
                <Title order={1}>Juan Pérez</Title>
                <Badge size="lg" variant="light">
                  Paciente frecuente
                </Badge>
              </Group>
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
      <Tabs
        defaultValue="consultations"
        styles={(theme) => ({
          list: {
            gap: theme.spacing.xl,
          },
          tab: {
            paddingInline: 0,
            fontWeight: 600,
            color: theme.colors.dark[6],
            '&[data-active]': {
              color: theme.colors.blue[6],
            },
          },
        })}
      >
        <Tabs.List>
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
