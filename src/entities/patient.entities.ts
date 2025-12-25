export type TPatient = {
  id: string
  firstName: string
  lastName: string
  documentNumber?: string
  phone?: string
  birthDate?: string
  gender?: 'male' | 'female' | 'other'
  notes?: string
  createdAt: string
}
