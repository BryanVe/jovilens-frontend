import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Alert,
  Anchor,
  Box,
  Button,
  Divider,
  Drawer,
  Group,
  NumberInput,
  rem,
  Select,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from '@mantine/core'
import {
  faArrowUpRightFromSquare,
  faInfoCircle,
  faMagnifyingGlass,
  faSave,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { DatePickerInput } from '@mantine/dates'
import type { TNewPatientDrawerProps } from './types'

const genderOptions = ['Masculino', 'Femenino', 'Otro']

export const NewPatientDrawer = (props: TNewPatientDrawerProps) => {
  const { opened, onClose } = props

  return (
    <Drawer
      padding="lg"
      opened={opened}
      position="right"
      onClose={onClose}
      styles={{
        body: {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          position: 'relative',
          overflowY: 'hidden',
        },
      }}
      title={
        <Group>
          <ThemeIcon variant="transparent">
            <FontAwesomeIcon icon={faUserPlus} />
          </ThemeIcon>
          <Text size="xl" fw={600}>
            Nuevo paciente
          </Text>
        </Group>
      }
    >
      <Divider mx="-lg" pos="sticky" top={0} />
      <Stack
        py="lg"
        mx="-lg"
        px="lg"
        gap={0}
        flex={1}
        style={{ overflowY: 'auto', overflowX: 'hidden' }}
      >
        <Stack gap="xs">
          <Text fw={600} size="md">
            Identificación
          </Text>
          <Stack>
            <Group align="end">
              <NumberInput
                variant="filled"
                hideControls
                flex={1}
                placeholder="70654321"
                label={
                  <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                    Número de Documento
                  </Text>
                }
              />
              <Button leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} />}>Buscar</Button>
            </Group>
            <Alert
              color="yellow.9"
              title="Paciente similar encontrado"
              icon={<FontAwesomeIcon icon={faInfoCircle} />}
              styles={{
                body: {
                  gap: rem(8),
                },
              }}
            >
              <Text c="yellow.8" size="xs" mb="xs">
                Se encontró un paciente con el mismo número de documento.
              </Text>
              <Anchor c="yellow" size="sm" href="#" fw={600}>
                Ver paciente
                <Box ml={rem(4)} component="span">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Box>
              </Anchor>
            </Alert>
            <TextInput
              variant="filled"
              placeholder="Juan Carlos"
              label={
                <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Nombres
                </Text>
              }
            />
            <Group>
              <TextInput
                flex={1}
                variant="filled"
                placeholder="Lopez"
                label={
                  <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                    Apellido Paterno
                  </Text>
                }
              />
              <TextInput
                flex={1}
                variant="filled"
                placeholder="Vargas"
                label={
                  <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                    Apellido Materno
                  </Text>
                }
              />
            </Group>
          </Stack>
        </Stack>
        <Divider mx="-lg" my="lg" />
        <Stack gap="xs">
          <Text fw={600} size="md">
            Contacto
          </Text>
          <Group>
            <NumberInput
              variant="filled"
              hideControls
              flex={1}
              placeholder="983456789"
              label={
                <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Teléfono
                </Text>
              }
            />
            <TextInput
              variant="filled"
              flex={1}
              placeholder="juan@gmail.com"
              label={
                <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Email
                </Text>
              }
            />
          </Group>
        </Stack>
        <Divider mx="-lg" my="lg" />
        <Stack gap="xs">
          <Text fw={600} size="md">
            Datos Básicos
          </Text>
          <Group>
            <DatePickerInput
              variant="filled"
              flex={1}
              defaultValue={new Date()}
              label={
                <Text fw={600} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Fecha de Nacimiento
                </Text>
              }
            />
            <Select
              variant="filled"
              flex={1}
              defaultValue="Masculino"
              data={genderOptions}
              fw={600}
              label={
                <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Género
                </Text>
              }
            />
          </Group>
        </Stack>
      </Stack>
      <Divider mx="-lg" mb="lg" />
      <Stack>
        <Button leftSection={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}>
          Guardar y crear consulta
        </Button>
        <Button variant="light" leftSection={<FontAwesomeIcon icon={faSave} />}>
          Solo guardar paciente
        </Button>
      </Stack>
    </Drawer>
  )
}
