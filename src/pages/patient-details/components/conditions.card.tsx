import { faCircle, faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Card, Group, rem, Stack, Text, ThemeIcon, type CardProps } from '@mantine/core'

type TConditionsCardProps = CardProps

export const ConditionsCard = (props: TConditionsCardProps) => {
  return (
    <Card p="lg" radius="md" withBorder {...props}>
      <Stack>
        <Group>
          <ThemeIcon variant="transparent" color="yellow">
            <FontAwesomeIcon icon={faLaptopMedical} size="xl" />
          </ThemeIcon>
          <Text fw={700} size="xl">
            Condiciones
          </Text>
        </Group>
        <Group gap="xs" wrap="wrap" maw={rem(300)}>
          <Badge
            tt="unset"
            size="lg"
            variant="outline"
            color="yellow"
            bg="yellow.0"
            c="yellow.7"
            radius="sm"
            leftSection={<FontAwesomeIcon icon={faCircle} size="2xs" />}
          >
            Miopía
          </Badge>
          <Badge
            tt="unset"
            size="lg"
            variant="outline"
            color="yellow"
            bg="yellow.0"
            c="yellow.7"
            radius="sm"
            leftSection={<FontAwesomeIcon icon={faCircle} size="2xs" />}
          >
            Astigmatismo
          </Badge>
          <Badge tt="unset" size="lg" variant="outline" color="blue" bg="blue.0" radius="sm">
            Uso de PC &gt; 8h
          </Badge>
        </Group>
      </Stack>
    </Card>
  )
}
