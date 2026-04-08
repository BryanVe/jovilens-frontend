import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Group, rem, Stack, Text, ThemeIcon, type CardProps } from '@mantine/core'

type TClinicalObservationsCardProps = CardProps

export const ClinicalObservationsCard = (props: TClinicalObservationsCardProps) => {
  return (
    <Card p="lg" radius="md" withBorder {...props}>
      <Stack gap="sm" justify="space-between" h="100%">
        <Stack gap="sm">
          <Group gap="xs">
            <ThemeIcon variant="transparent" color="gray" size="sm">
              <FontAwesomeIcon icon={faRectangleList} size="lg" />
            </ThemeIcon>
            <Text fw={700} size="lg">
              Observaciones clínicas
            </Text>
          </Group>
          <Card bg="gray.0" p="sm">
            <Group justify="space-between" align="flex-start" gap="xs" wrap="nowrap">
              <ThemeIcon variant="transparent" color="gray" size="sm">
                <FontAwesomeIcon icon={faQuoteLeft} size="sm" />
              </ThemeIcon>
              <Text mt={2} c="dark.4" size="sm" fw={500} fs="italic" lh={1.55}>
                Paciente refiere leve fatiga visual al final de la jornada laboral, especialmente
                frente a pantallas. Se recomienda regla 20-20-20 y lubricación ocular a demanda. No
                se observan cambios significativos en fondo de ojo.
              </Text>
            </Group>
          </Card>
        </Stack>
        <Text c="gray.6" size="xs" fw={600} ta="end">
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            size="sm"
            transform={{
              flipX: true,
            }}
          />
          <Text span inherit ml={rem(4)}>
            Última actualización: 12 Oct 2025
          </Text>
        </Text>
      </Stack>
    </Card>
  )
}
