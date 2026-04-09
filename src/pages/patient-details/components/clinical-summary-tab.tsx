import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowRight,
  faCalendarDays,
  faCashRegister,
  faClock,
  faClockRotateLeft,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Button, Card, Grid, Group, Stack, Text, ThemeIcon } from '@mantine/core'
import type { ReactNode } from 'react'
import { AllergiesCard } from './allergies-card'
import { ClinicalObservationsCard } from './clinical-observations-card'
import { ConditionsCard } from './conditions.card'
import { LastPrescriptionCard } from './last-prescription-card'

const quickActions = [
  {
    title: 'Registrar cita',
    description: 'Agendar próxima visita',
    color: 'blue',
    icon: faCalendarDays,
  },
  {
    title: 'Enviar recordatorio',
    description: 'WhatsApp o Email',
    color: 'green',
    icon: faPaperPlane,
  },
  {
    title: 'Registrar venta',
    description: 'Marcos/lentes',
    color: 'orange',
    icon: faCashRegister,
  },
] as const

const historyEntries = [
  {
    date: '12 Oct 2023',
    reason: 'Control miopía',
    summary: 'Sin progresión significativa. Se mantiene fórmula y pautas de higiene visual.',
    status: { label: 'Finalizada', color: 'green' },
  },
  {
    date: '18 Ago 2023',
    reason: 'Molestia ocular',
    summary: 'Irritación leve asociada a uso prolongado de pantallas. Se indica lubricación.',
    status: { label: 'Seguimiento', color: 'blue' },
  },
  {
    date: '05 Jun 2023',
    reason: 'Primera evaluación',
    summary: 'Diagnóstico de miopía y astigmatismo. Se indican lentes monofocales.',
    status: { label: 'Archivada', color: 'gray' },
  },
] as const

type TQuickActionItemProps = {
  icon: ReactNode
  title: string
  description: string
  color: string
}

const QuickActionItem = ({ icon, title, description, color }: TQuickActionItemProps) => {
  return (
    <Card bg="gray.0" p="sm">
      <Group gap="sm" wrap="nowrap">
        <ThemeIcon size={40} radius="md" variant="light" color={color}>
          {icon}
        </ThemeIcon>
        <Stack gap={0}>
          <Text fw={700} size="sm">
            {title}
          </Text>
          <Text c="gray.7" size="xs">
            {description}
          </Text>
        </Stack>
      </Group>
    </Card>
  )
}

type THistoryEntryProps = {
  date: string
  reason: string
  summary: string
  status: {
    label: string
    color: string
  }
}

const HistoryEntry = ({ date, reason, summary, status }: THistoryEntryProps) => {
  return (
    <Stack gap="xs">
      <Group gap="xs">
        <Badge variant="light" color="gray" tt="unset" size="sm">
          {date}
        </Badge>
        <Badge variant="light" color={status.color} tt="unset" size="sm">
          {status.label}
        </Badge>
      </Group>
      <Text fw={700} size="sm">
        {reason}
      </Text>
      <Text c="gray.7" size="xs">
        {summary}
      </Text>
    </Stack>
  )
}

const AppointmentDetail = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) => {
  return (
    <Group align="flex-start" gap="xs" wrap="nowrap">
      <ThemeIcon variant="transparent" color="dark" size="sm">
        {icon}
      </ThemeIcon>
      <Stack gap={0}>
        <Text c="gray.7" fw={700} tt="uppercase" size="xs">
          {label}
        </Text>
        <Text fw={600} size="sm">
          {value}
        </Text>
      </Stack>
    </Group>
  )
}

export const ClinicalSummaryTab = () => {
  return (
    <Grid gap="md">
      <Grid.Col span={{ base: 12, lg: 8 }}>
        <Grid gap="md">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <LastPrescriptionCard h="100%" p="md" />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <ClinicalObservationsCard h="100%" p="md" />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <ConditionsCard h="100%" p="md" />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <AllergiesCard h="100%" p="md" />
          </Grid.Col>

          <Grid.Col span={12}>
            <Card>
              <Card.Section inheritPadding py="md">
                <Group justify="space-between" align="center" gap="sm">
                  <Group gap="xs" align="center">
                    <ThemeIcon variant="transparent" color="dark" size="sm">
                      <FontAwesomeIcon icon={faClockRotateLeft} />
                    </ThemeIcon>
                    <Text fw={700} size="lg">
                      Mini-historial
                    </Text>
                    <Text c="gray.7" size="sm">
                      Últimas 3 consultas
                    </Text>
                  </Group>

                  <Button
                    size="compact-sm"
                    variant="default"
                    rightSection={<FontAwesomeIcon icon={faArrowRight} size="sm" />}
                  >
                    Ver historial
                  </Button>
                </Group>
              </Card.Section>

              {historyEntries.map((entry, index) => (
                <Card.Section
                  key={`${entry.date}-${entry.reason}`}
                  withBorder={index < historyEntries.length - 1}
                  inheritPadding
                  py="sm"
                >
                  <HistoryEntry {...entry} />
                </Card.Section>
              ))}
            </Card>
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={{ base: 12, lg: 4 }}>
        <Stack gap="md">
          <Card p="md">
            <Stack gap="md">
              <Group justify="space-between" align="center" gap="sm">
                <Text fw={700} size="lg">
                  Próxima cita
                </Text>
                <Badge color="yellow" variant="light" size="sm" tt="uppercase">
                  Pendiente
                </Badge>
              </Group>

              <Card bg="gray.0" p="md" style={{ position: 'relative', overflow: 'hidden' }}>
                <ThemeIcon
                  size={72}
                  radius="xl"
                  variant="transparent"
                  color="gray"
                  style={{
                    position: 'absolute',
                    right: 'var(--mantine-spacing-xs)',
                    top: 'var(--mantine-spacing-xs)',
                    opacity: 0.16,
                  }}
                >
                  <FontAwesomeIcon icon={faCalendarDays} size="xl" />
                </ThemeIcon>

                <Stack gap="sm" style={{ position: 'relative', zIndex: 1 }}>
                  <AppointmentDetail
                    icon={<FontAwesomeIcon icon={faCalendarDays} size="sm" />}
                    label="Fecha"
                    value="24 Nov, 2023"
                  />
                  <AppointmentDetail
                    icon={<FontAwesomeIcon icon={faClock} size="sm" />}
                    label="Hora"
                    value="10:30 AM"
                  />
                  <AppointmentDetail
                    icon={<FontAwesomeIcon icon={faFileLines} size="sm" />}
                    label="Motivo"
                    value="Control miopía"
                  />
                </Stack>
              </Card>

              <Group grow>
                <Button variant="default" size="sm">
                  Reprogramar
                </Button>
                <Button size="sm">Confirmar</Button>
              </Group>
            </Stack>
          </Card>

          <Card p="md">
            <Stack gap="md">
              <Text fw={700} size="lg">
                Acciones rápidas
              </Text>
              <Stack gap="sm">
                {quickActions.map((action) => (
                  <QuickActionItem
                    key={action.title}
                    icon={<FontAwesomeIcon icon={action.icon} size="sm" />}
                    title={action.title}
                    description={action.description}
                    color={action.color}
                  />
                ))}
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
