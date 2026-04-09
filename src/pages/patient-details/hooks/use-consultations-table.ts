import { useState } from 'react'
import dayjs from 'dayjs'
import type {
  TConsultationsFilters,
  TConsultationStatus,
  TConsultationTableRow,
} from '../components/consultations.types'

const consultations: TConsultationTableRow[] = [
  {
    id: '1',
    consultationDate: '2023-11-24',
    reason: 'Consulta General',
    consultationType: 'Revisión de rutina',
    optometristName: 'Dr. Vera',
    optometristInitials: 'BV',
    optometristColor: 'blue',
    status: 'completed',
    canEdit: true,
  },
  {
    id: '2',
    consultationDate: '2023-10-18',
    reason: 'Adaptación Lentes',
    consultationType: 'Lentes de contacto',
    optometristName: 'Dra. Rojas',
    optometristInitials: 'MR',
    optometristColor: 'cyan',
    status: 'draft',
    canEdit: true,
  },
  {
    id: '3',
    consultationDate: '2023-09-15',
    reason: 'Ajuste de Montura',
    consultationType: 'Reparación menor',
    optometristName: 'Tec. Lopez',
    optometristInitials: 'AL',
    optometristColor: 'grape',
    status: 'completed',
    canEdit: false,
  },
  {
    id: '4',
    consultationDate: '2022-08-22',
    reason: 'Examen Visual',
    consultationType: 'Primera visita',
    optometristName: 'Dr. Vera',
    optometristInitials: 'BV',
    optometristColor: 'blue',
    status: 'archived',
    canEdit: false,
  },
  {
    id: '5',
    consultationDate: '2022-06-10',
    reason: 'Tonometría',
    consultationType: 'Presión intraocular',
    optometristName: 'Dr. Soto',
    optometristInitials: 'CS',
    optometristColor: 'green',
    status: 'completed',
    canEdit: false,
  },
  {
    id: '6',
    consultationDate: '2022-03-05',
    reason: 'Control de Miopía',
    consultationType: 'Seguimiento',
    optometristName: 'Dra. Rojas',
    optometristInitials: 'MR',
    optometristColor: 'cyan',
    status: 'completed',
    canEdit: false,
  },
]

const PAGE_SIZE = 5

const defaultFilters: TConsultationsFilters = {
  search: '',
  status: 'completed',
  fromDate: null,
  toDate: null,
}

const statusOrder: Record<TConsultationStatus, number> = {
  draft: 0,
  completed: 1,
  archived: 2,
}

export const consultationStatusCopy: Record<TConsultationStatus, { label: string; color: string }> =
  {
    draft: { label: 'Borrador', color: 'yellow' },
    completed: { label: 'Finalizada', color: 'green' },
    archived: { label: 'Archivada', color: 'gray' },
  }

export const useConsultationsTable = () => {
  const [filters, setFilters] = useState<TConsultationsFilters>(defaultFilters)
  const [page, setPage] = useState(1)

  const filteredConsultations = consultations
    .filter((consultation) => {
      const matchesSearch = [consultation.reason, consultation.consultationType]
        .join(' ')
        .toLowerCase()
        .includes(filters.search.trim().toLowerCase())

      const matchesStatus = filters.status === 'all' ? true : consultation.status === filters.status

      const matchesFromDate =
        filters.fromDate == null
          ? true
          : dayjs(consultation.consultationDate).valueOf() >= dayjs(filters.fromDate).valueOf()

      const matchesToDate =
        filters.toDate == null
          ? true
          : dayjs(consultation.consultationDate).valueOf() <= dayjs(filters.toDate).valueOf()

      return matchesSearch && matchesStatus && matchesFromDate && matchesToDate
    })
    .sort((left, right) => {
      if (left.consultationDate !== right.consultationDate) {
        return dayjs(right.consultationDate).valueOf() - dayjs(left.consultationDate).valueOf()
      }

      return statusOrder[left.status] - statusOrder[right.status]
    })

  const total = filteredConsultations.length
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE
  const paginatedConsultations = filteredConsultations.slice(start, end)

  const setFilter = <TKey extends keyof TConsultationsFilters>(
    key: TKey,
    value: TConsultationsFilters[TKey],
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }))
    setPage(1)
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
    setPage(1)
  }

  const clearStatusFilter = () => {
    setFilter('status', 'all')
  }

  return {
    filters,
    paginatedConsultations,
    total,
    page: safePage,
    totalPages,
    hasActiveStatusFilter: filters.status !== 'all',
    setFilter,
    setPage,
    clearFilters,
    clearStatusFilter,
  }
}
