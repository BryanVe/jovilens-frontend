export type TConsultation = {
  id: string
  patientId: string
  consultationDate: string
  source: 'paper' | 'digital'
  summary: TClinicalSummary
  createdAt: string
}

export type TClinicalSummary = {
  identification?: TIdentificationSection
  symptoms?: TSymptomsSection
  medicalHistory?: TMedicalHistorySection
  anteriorSegment?: TAnteriorSegmentSection
  lensometry?: TLensometrySection
  posteriorSegment?: TPosteriorSegmentSection
  diagnosis?: string
  treatment?: string
  nextVisitDate?: string
  signatures?: TSignaturesSection
}

export type TIdentificationSection = {
  address?: string
  occupation?: string
  maritalStatus?: string
}

export type TSymptomKey =
  | 'burning'
  | 'itching'
  | 'tearing'
  | 'chalazion'
  | 'hordeolum'
  | 'entropion'
  | 'ectropion'
  | 'pterygium'
  | 'tumor'
  | 'foreignBodySensation'
  | 'chemosis'
  | 'leukoma'
  | 'headache'
  | 'ocularPain'
  | 'proptosis'
  | 'leukocoria'

export type TSymptomsSection = {
  predefined?: Partial<Record<TSymptomKey, boolean>>
  congestion?: TCongestionSection
  additionalNotes?: string
}

export type TCongestionSection = {
  bulbar?: boolean
  palpebral?: boolean
  corneal?: boolean
  perikeratic?: boolean
}

export type TMedicalQuestionKey =
  | 'drugAllergy'
  | 'foodAllergy'
  | 'chronicDisease'
  | 'previousSurgery'

export type TMedicalHistorySection = {
  drugAllergy?: TMedicalConditionAnswer
  foodAllergy?: TMedicalConditionAnswer
  chronicDisease?: TMedicalConditionAnswer
  previousSurgery?: TMedicalConditionAnswer
}

export type TMedicalConditionAnswer = {
  hasCondition: boolean
  details?: string
}

export type TAnteriorSegmentSection = {
  distanceVisualAcuity?: TVisualAcuitySection
  nearVisualAcuity?: TVisualAcuitySection
  keratometry?: TKeratometrySection
  tonometry?: TTonometrySection
  refraction?: TRefractionSection
}

export type TVisualAcuitySection = {
  rightEye?: TEyeAcuity
  leftEye?: TEyeAcuity
}

export type TEyeAcuity = {
  withoutCorrection?: string
  withCorrection?: string
  withAutoRefraction?: string
}

export type TKeratometrySection = {
  rightEye?: string
  leftEye?: string
}

export type TTonometrySection = {
  schiotz?: TTonometryMeasurement
  goldmann?: TTonometryMeasurement
}

export type TTonometryMeasurement = {
  rightEye?: number
  leftEye?: number
  unit: 'mmHg'
}

export type TRefractionSection = {
  distance?: TBinocularRefraction
  add?: TAddSection
}

export type TBinocularRefraction = {
  rightEye?: TEyeRefraction
  leftEye?: TEyeRefraction
  interpupillaryDistance?: number
}

export type TEyeRefraction = {
  sphere?: number
  cylinder?: number
  axis?: number
  visualAcuity?: string
  prism?: string
}

export type TAddSection = {
  value?: string
  near?: string
  intermediate?: string
  alternative?: string
}

export type TLensometrySection = {
  rightEye?: TLensPrescription
  leftEye?: TLensPrescription
  add?: {
    near?: string
    intermediate?: string
  }
}

export type TLensPrescription = {
  sphere?: number
  cylinder?: number
  axis?: number
  interpupillaryDistance?: number
}

export type TPosteriorSegmentSection = {
  fundusExam?: {
    rightEye?: string
    leftEye?: string
  }
}

export type TSignaturesSection = {
  optometrist?: TMedicalProfessionalSignature
  ophthalmologist?: TMedicalProfessionalSignature
}

export type TMedicalProfessionalSignature = {
  name: string
  userId?: string
}
