import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  ThemeIcon,
  type CardProps,
} from '@mantine/core'

type TLastPrescriptionCardProps = CardProps

export const LastPrescriptionCard = (props: TLastPrescriptionCardProps) => {
  return (
    <Card p="lg" radius="md" withBorder {...props}>
      <Stack>
        <Group justify="space-between">
          <Group>
            <ThemeIcon variant="transparent">
              <FontAwesomeIcon icon={faFileLines} size="xl" />
            </ThemeIcon>
            <Text fw={700} size="xl">
              Última Refracción
            </Text>
          </Group>
          <Button px={0} variant="transparent" leftSection={<FontAwesomeIcon icon={faDownload} />}>
            PDF
          </Button>
        </Group>
        <Card withBorder bg="gray.0">
          <Stack>
            <Badge size="lg" color="blue" variant="light" px={rem(8)} radius="sm">
              OD
            </Badge>
            <Group justify="space-between">
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Esfera
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  -2.25
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Cilindro
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  -0.75
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Eje
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  180°
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Adición
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  +2.00
                </Text>
              </Stack>
            </Group>
          </Stack>
        </Card>
        <Card withBorder bg="gray.0">
          <Stack>
            <Badge size="lg" color="blue" variant="light" px={rem(8)} radius="sm">
              OI
            </Badge>
            <Group justify="space-between">
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Esfera
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  -2.25
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Cilindro
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  -0.75
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Eje
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  180°
                </Text>
              </Stack>
              <Divider orientation="vertical" />
              <Stack gap={0}>
                <Text tt="uppercase" fw={600} c="gray" size={rem(13)}>
                  Adición
                </Text>
                <Text
                  c="dark"
                  fw={700}
                  style={{
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  +2.00
                </Text>
              </Stack>
            </Group>
          </Stack>
        </Card>
        <Divider />
        <Stack gap="xs">
          <Text c="dark.3" size={rem(13)} tt="uppercase" fw={700}>
            Recomendación
          </Text>
          <Text c="dark" fw={600} size={rem(14)}>
            Lentes Monofocales con Filtro Azul (Anti-reflex)
          </Text>
        </Stack>
        <Text mt="xs" c="gray.6" size={rem(12)} fw={600} fs="italic" ta="center">
          Basado en la última consulta finalizada
        </Text>
      </Stack>
    </Card>
  )
}
