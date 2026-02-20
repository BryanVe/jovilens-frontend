import { Group } from '@mantine/core'
import { LastPrescriptionCard } from './last-prescription-card'
import { ClinicalObservationsCard } from './clinical-observations-card'
import { ConditionsCard } from './conditions.card'

export const ClinicalSummaryTab = () => {
  return (
    <Group w="100%" align="start" wrap="wrap">
      <LastPrescriptionCard />
      <ClinicalObservationsCard />
      <ConditionsCard />
    </Group>
  )
}
