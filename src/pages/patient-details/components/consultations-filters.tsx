import {
  faCalendarDays,
  faDownload,
  faMagnifyingGlass,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionIcon, Box, Button, Group, Select, Stack, Text, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import type { TConsultationsFilters } from './consultations.types'

const statusLabelByValue = {
  all: 'Todos',
  draft: 'Borrador',
  completed: 'Finalizada',
  archived: 'Archivada',
} as const

type TConsultationsFiltersProps = {
  filters: TConsultationsFilters
  hasActiveStatusFilter: boolean
  onFilterChange: <TKey extends keyof TConsultationsFilters>(
    key: TKey,
    value: TConsultationsFilters[TKey],
  ) => void
  onClearFilters: () => void
  onClearStatusFilter: () => void
}

const statusOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'draft', label: 'Borrador' },
  { value: 'completed', label: 'Finalizada' },
  { value: 'archived', label: 'Archivada' },
]

export const ConsultationsFilters = ({
  filters,
  hasActiveStatusFilter,
  onFilterChange,
  onClearFilters,
  onClearStatusFilter,
}: TConsultationsFiltersProps) => {
  return (
    <Stack gap="xs">
      <Group justify="space-between" align="flex-end" gap="sm">
        <Group flex={1} grow align="flex-end" gap="sm">
          <TextInput
            flex={1}
            label="Buscar"
            placeholder="Buscar por motivo..."
            leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />}
            size="md"
            value={filters.search}
            onChange={(event) => onFilterChange('search', event.currentTarget.value)}
          />

          <Select
            label="Estado"
            data={statusOptions}
            size="md"
            value={filters.status}
            onChange={(value) =>
              onFilterChange('status', (value ?? 'all') as TConsultationsFilters['status'])
            }
          />

          <DatePickerInput
            label="Desde"
            placeholder="Seleccionar fecha"
            leftSection={<FontAwesomeIcon icon={faCalendarDays} size="sm" />}
            size="md"
            value={filters.fromDate}
            onChange={(value) => onFilterChange('fromDate', value)}
            clearable
          />

          <DatePickerInput
            label="Hasta"
            placeholder="Seleccionar fecha"
            leftSection={<FontAwesomeIcon icon={faCalendarDays} size="sm" />}
            size="md"
            value={filters.toDate}
            onChange={(value) => onFilterChange('toDate', value)}
            clearable
          />
        </Group>

        <Group gap="sm">
          <Button variant="default" size="md" leftSection={<FontAwesomeIcon icon={faDownload} />}>
            Exportar
          </Button>
          <Button size="md" leftSection={<FontAwesomeIcon icon={faPlus} />}>
            Nueva consulta
          </Button>
        </Group>
      </Group>

      <Group gap="sm">
        {hasActiveStatusFilter && (
          <Box
            px="sm"
            py="xs"
            bg="gray.0"
            bd="1px solid var(--mantine-color-gray-2)"
            style={{ borderRadius: 'var(--mantine-radius-md)' }}
          >
            <Group gap="xs">
              <Text size="xs" fw={600} c="gray.7">
                Estado: {statusLabelByValue[filters.status]}
              </Text>
              <ActionIcon
                size="sm"
                variant="subtle"
                color="gray"
                aria-label="Quitar filtro de estado"
                onClick={onClearStatusFilter}
              >
                <FontAwesomeIcon icon={faXmark} size="xs" />
              </ActionIcon>
            </Group>
          </Box>
        )}

        <Button variant="light" color="gray" size="compact-sm" onClick={onClearFilters}>
          Limpiar filtros
        </Button>
      </Group>
    </Stack>
  )
}
