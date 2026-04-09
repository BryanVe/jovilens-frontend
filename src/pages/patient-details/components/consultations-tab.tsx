import { Stack } from '@mantine/core'
import { ConsultationsFilters } from './consultations-filters'
import { ConsultationsTable } from './consultations-table'
import { useConsultationsTable } from '../hooks'

export const ConsultationsTab = () => {
  const {
    filters,
    paginatedConsultations,
    total,
    page,
    totalPages,
    hasActiveStatusFilter,
    setFilter,
    setPage,
    clearFilters,
    clearStatusFilter,
  } = useConsultationsTable()

  return (
    <Stack gap="sm">
      <ConsultationsFilters
        filters={filters}
        hasActiveStatusFilter={hasActiveStatusFilter}
        onFilterChange={setFilter}
        onClearFilters={clearFilters}
        onClearStatusFilter={clearStatusFilter}
      />

      <ConsultationsTable
        consultations={paginatedConsultations}
        page={page}
        total={total}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Stack>
  )
}
