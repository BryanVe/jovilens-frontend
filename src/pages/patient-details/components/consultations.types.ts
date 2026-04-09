export type TConsultationStatus = 'draft' | 'completed' | 'archived'

export type TConsultationStatusFilter = TConsultationStatus | 'all'

export type TConsultationTableRow = {
  id: string
  consultationDate: string
  reason: string
  consultationType: string
  optometristName: string
  optometristInitials: string
  optometristColor: string
  status: TConsultationStatus
  canEdit: boolean
}

export type TConsultationsFilters = {
  search: string
  status: TConsultationStatusFilter
  fromDate: string | null
  toDate: string | null
}
