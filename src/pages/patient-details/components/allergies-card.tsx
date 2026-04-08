import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Group, Stack, Text, ThemeIcon, type CardProps } from '@mantine/core'

type TAllergiesCardProps = CardProps

export const AllergiesCard = (props: TAllergiesCardProps) => {
  return (
    <Card p="lg" radius="md" withBorder {...props}>
      <Stack gap="sm">
        <Group gap="xs">
          <ThemeIcon variant="transparent" color="red" size="sm">
            <FontAwesomeIcon icon={faTriangleExclamation} size="lg" />
          </ThemeIcon>
          <Text fw={700} size="lg">
            Alergias
          </Text>
        </Group>

        <Card bg="red.0" radius="md" p="sm">
          <Group align="flex-start" gap="sm" wrap="nowrap">
            <ThemeIcon color="red" variant="light" size="sm" radius="xl">
              <FontAwesomeIcon icon={faTriangleExclamation} size="2xs" />
            </ThemeIcon>
            <Stack gap={2}>
              <Text fw={700} c="red.8" size="sm">
                Polen
              </Text>
              <Text c="red.7" size="xs">
                Reacción ocular estacional con enrojecimiento leve.
              </Text>
            </Stack>
          </Group>
        </Card>
      </Stack>
    </Card>
  )
}
