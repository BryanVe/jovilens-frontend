import { Table, type TTableColumn } from '@/components'
import { faEllipsisVertical, faEye, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Divider,
  Group,
  Menu,
  Pagination,
  Stack,
  Text,
} from '@mantine/core'
import dayjs from 'dayjs'
import { consultationStatusCopy } from '../hooks'
import type { TConsultationTableRow } from './consultations.types'

type TConsultationsTableProps = {
  consultations: TConsultationTableRow[]
  page: number
  total: number
  totalPages: number
  onPageChange: (page: number) => void
}

const columns: TTableColumn<TConsultationTableRow>[] = [
  {
    id: 'consultationDate',
    label: 'Fecha',
    render: (consultation) => (
      <Text fw={600} size="sm">
        {dayjs(consultation.consultationDate).format('DD MMM YYYY')}
      </Text>
    ),
  },
  {
    id: 'reason',
    label: 'Motivo / Tipo',
    render: (consultation) => (
      <Stack gap={0}>
        <Text fw={700} size="sm">
          {consultation.reason}
        </Text>
        <Text c="gray.7" size="xs">
          {consultation.consultationType}
        </Text>
      </Stack>
    ),
  },
  {
    id: 'optometristName',
    label: 'Optómetra',
    render: (consultation) => (
      <Group gap="sm">
        <Avatar color={consultation.optometristColor} radius="xl" size="sm">
          {consultation.optometristInitials}
        </Avatar>
        <Text size="sm">{consultation.optometristName}</Text>
      </Group>
    ),
  },
  {
    id: 'status',
    label: 'Estado',
    render: (consultation) => {
      const status = consultationStatusCopy[consultation.status]

      return (
        <Badge color={status.color} variant="light" tt="unset">
          {status.label}
        </Badge>
      )
    },
  },
  {
    id: 'actions',
    label: 'Acciones',
    render: (consultation) => (
      <Group gap="xs" justify="flex-end" wrap="nowrap">
        <ActionIcon variant="default" aria-label="Ver consulta">
          <FontAwesomeIcon icon={faEye} />
        </ActionIcon>

        <ActionIcon
          variant="subtle"
          color="gray"
          aria-label="Editar consulta"
          disabled={!consultation.canEdit}
        >
          <FontAwesomeIcon icon={faPen} />
        </ActionIcon>

        <Menu
          trigger="hover"
          shadow="md"
          width={200}
          position="right-end"
          withArrow
          arrowPosition="center"
          arrowSize={12}
        >
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" aria-label="Más opciones">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Acciones</Menu.Label>
            <Menu.Item leftSection={<FontAwesomeIcon icon={faEye} />}>Ver consulta</Menu.Item>
            <Menu.Item
              disabled={!consultation.canEdit}
              leftSection={<FontAwesomeIcon icon={faPen} />}
            >
              Editar consulta
            </Menu.Item>
            <Menu.Item leftSection={<FontAwesomeIcon icon={faPlus} />}>Nueva consulta</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    ),
  },
]

export const ConsultationsTable = ({
  consultations,
  page,
  total,
  totalPages,
  onPageChange,
}: TConsultationsTableProps) => {
  const from = total === 0 ? 0 : (page - 1) * 5 + 1
  const to = Math.min(page * 5, total)

  return (
    <Card>
      <Card.Section>
        <Divider />
        <Table data={consultations} columns={columns} horizontalSpacing="sm" verticalSpacing="xs" />
        <Divider />
      </Card.Section>

      <Card.Section p="md">
        <Group justify="space-between" align="center">
          <Text c="gray.7" size="sm">
            Mostrando{' '}
            <Text span fw={700}>
              {from}
            </Text>{' '}
            -{' '}
            <Text span fw={700}>
              {to}
            </Text>{' '}
            de{' '}
            <Text span fw={700}>
              {total}
            </Text>{' '}
            consultas
          </Text>

          <Pagination size="sm" total={totalPages} value={page} onChange={onPageChange} />
        </Group>
      </Card.Section>
    </Card>
  )
}
