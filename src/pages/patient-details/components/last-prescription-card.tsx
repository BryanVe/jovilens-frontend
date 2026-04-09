import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  ThemeIcon,
  type CardProps,
} from '@mantine/core'

const prescriptionByEye = [
  {
    eye: 'OD',
    values: [
      { label: 'Esfera', value: '-2.25' },
      { label: 'Cilindro', value: '-0.75' },
      { label: 'Eje', value: '180°' },
      { label: 'Adición', value: '+2.00' },
    ],
  },
  {
    eye: 'OI',
    values: [
      { label: 'Esfera', value: '-2.25' },
      { label: 'Cilindro', value: '-0.75' },
      { label: 'Eje', value: '180°' },
      { label: 'Adición', value: '+2.00' },
    ],
  },
] as const

type TLastPrescriptionCardProps = CardProps

export const LastPrescriptionCard = (props: TLastPrescriptionCardProps) => {
  return (
    <Card {...props}>
      <Stack gap="sm" justify="space-between" h="100%">
        <Stack gap="sm">
          <Group justify="space-between" align="center" gap="sm">
            <Group gap="xs">
              <ThemeIcon variant="transparent" size="sm">
                <FontAwesomeIcon icon={faFileLines} size="lg" />
              </ThemeIcon>
              <Text fw={700} size="lg">
                Última receta
              </Text>
            </Group>
            <Button
              size="compact-sm"
              variant="default"
              leftSection={<FontAwesomeIcon icon={faDownload} size="sm" />}
            >
              PDF
            </Button>
          </Group>

          <Stack gap="sm">
            {prescriptionByEye.map((prescription) => (
              <Card key={prescription.eye} bg="gray.0" p="sm">
                <Stack gap="sm">
                  <Badge size="md" color="gray" variant="light" tt="unset" w="fit-content">
                    {prescription.eye}
                  </Badge>

                  <Group align="stretch" wrap="nowrap" gap="sm">
                    {prescription.values.map((item, index) => (
                      <Group
                        key={item.label}
                        align="stretch"
                        gap="sm"
                        wrap="nowrap"
                        style={{ flex: 1 }}
                      >
                        <Stack gap={0} style={{ flex: 1 }}>
                          <Text tt="uppercase" fw={700} c="gray.7" size="xs">
                            {item.label}
                          </Text>
                          <Text fw={700} size="sm" style={{ fontVariantNumeric: 'tabular-nums' }}>
                            {item.value}
                          </Text>
                        </Stack>
                        {index < prescription.values.length - 1 && (
                          <Divider orientation="vertical" />
                        )}
                      </Group>
                    ))}
                  </Group>
                </Stack>
              </Card>
            ))}
          </Stack>

          <Divider />

          <Stack gap={0}>
            <Text c="gray.7" size="xs" tt="uppercase" fw={700}>
              Recomendación
            </Text>
            <Text fw={600} size="sm">
              Lentes monofocales con filtro azul (anti-reflex)
            </Text>
          </Stack>
        </Stack>

        <Text c="gray.7" size="xs" fw={600} fs="italic" ta="center">
          Basado en la última consulta finalizada
        </Text>
      </Stack>
    </Card>
  )
}
