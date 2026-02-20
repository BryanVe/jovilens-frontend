import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Group, rem, Stack, Text, ThemeIcon, type CardProps } from '@mantine/core'

type TClinicalObservationsCardProps = CardProps

export const ClinicalObservationsCard = (props: TClinicalObservationsCardProps) => {
  return (
    <Card p="lg" radius="md" withBorder {...props}>
      <Stack>
        <Group>
          <ThemeIcon variant="transparent" color="gray">
            <FontAwesomeIcon icon={faRectangleList} size="xl" />
          </ThemeIcon>
          <Text fw={700} size="xl">
            Observaciones clínicas
          </Text>
        </Group>
        <Card bg="gray.0">
          <Group justify="space-between" align="flex-start" gap="xs">
            <ThemeIcon variant="transparent" color="gray">
              <FontAwesomeIcon icon={faQuoteLeft} size="sm" />
            </ThemeIcon>
            <Text mt="xs" c="dark.3" size="sm" fw={600} fs="italic" maw={rem(230)}>
              Paciente refiere leve fatiga visual al final de la jornada laboral, especialmente
              frente a pantallas. Se recomienda regla 20-20-20 y lubricación ocular a demanda. No se
              observan cambios significativos en fondo de ojo.
            </Text>
          </Group>
        </Card>
        <Text mt="xs" c="gray.6" size="xs" fw={600} ta="end">
          <FontAwesomeIcon icon={faClockRotateLeft} size="lg" />
          <Text span inherit ml={rem(4)}>
            Última actualización: 12 Oct 2025
          </Text>
        </Text>
      </Stack>
    </Card>
  )
}
