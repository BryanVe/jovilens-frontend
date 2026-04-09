import { faCircle, faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Card, Group, rem, Stack, Text, ThemeIcon, type CardProps } from '@mantine/core'

type TConditionsCardProps = CardProps

export const ConditionsCard = (props: TConditionsCardProps) => {
  return (
    <Card {...props}>
      <Stack gap="sm">
        <Group gap="xs">
          <ThemeIcon variant="transparent" color="yellow" size="sm">
            <FontAwesomeIcon icon={faLaptopMedical} size="lg" />
          </ThemeIcon>
          <Text fw={700} size="lg">
            Condiciones
          </Text>
        </Group>
        <Group gap="xs" wrap="wrap" maw={rem(320)}>
          <Badge
            tt="unset"
            size="md"
            variant="light"
            color="yellow"
            leftSection={<FontAwesomeIcon icon={faCircle} size="2xs" />}
          >
            Miopía
          </Badge>
          <Badge
            tt="unset"
            size="md"
            variant="light"
            color="yellow"
            leftSection={<FontAwesomeIcon icon={faCircle} size="2xs" />}
          >
            Astigmatismo
          </Badge>
          <Badge tt="unset" size="md" variant="light" color="gray">
            Uso de PC &gt; 8h
          </Badge>
        </Group>
      </Stack>
    </Card>
  )
}
