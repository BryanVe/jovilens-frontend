import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  Divider,
  Drawer,
  Group,
  NumberInput,
  Radio,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core'
import { faFilter, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { DatePickerInput } from '@mantine/dates'
import type { TPatientsFiltersDrawerProps } from './types'

export const PatientsFiltersDrawer = (props: TPatientsFiltersDrawerProps) => {
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
            <FontAwesomeIcon icon={faFilter} />
          </ThemeIcon>
          <Text size="xl" fw={600}>
            Filtrar pacientes
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
        <Stack>
          <Radio.Group
            label={
              <Text fw={600} size="md">
                Estado de consultas
              </Text>
            }
          >
            <Stack mt="xs">
              <Radio
                value="all"
                label={
                  <Text fw={600} size="sm" c="gray.7">
                    Todos
                  </Text>
                }
                description="Mostrar todos los pacientes"
              />
              <Radio
                value="with-consultations"
                label={
                  <Text fw={600} size="sm" c="gray.7">
                    Con consultas
                  </Text>
                }
                description="Pacientes con historial médico"
              />
              <Radio
                value="without-consultations"
                label={
                  <Text fw={600} size="sm" c="gray.7">
                    Sin consultas
                  </Text>
                }
                description="Solo pacientes registrados"
              />
            </Stack>
          </Radio.Group>
        </Stack>
        <Divider my="lg" />
        <Stack gap="xs">
          <Text fw={600} size="md">
            Edad
          </Text>
          <Group>
            <NumberInput
              flex={1}
              min={0}
              max={150}
              placeholder="0"
              label={
                <Text fw={600} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Rango mínimo
                </Text>
              }
            />
            <NumberInput
              flex={1}
              min={0}
              max={150}
              placeholder="100"
              label={
                <Text fw={600} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Rango máximo
                </Text>
              }
            />
          </Group>
        </Stack>
        <Divider my="lg" />
        <Stack gap="xs">
          <Text fw={600} size="md">
            Última consulta
          </Text>
          <Group>
            <DatePickerInput
              flex={1}
              defaultValue={new Date()}
              label={
                <Text fw={600} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Desde
                </Text>
              }
            />
            <DatePickerInput
              flex={1}
              defaultValue={new Date()}
              label={
                <Text fw={600} c="gray" size="xs" tt="uppercase" lts={0.1}>
                  Hasta
                </Text>
              }
            />
          </Group>
        </Stack>
      </Stack>
      <Divider mx="-lg" mb="lg" />
      <Stack>
        <Button>Aplicar Filtros (2)</Button>
        <Button variant="default" leftSection={<FontAwesomeIcon icon={faRotateRight} />}>
          Limpiar Filtros
        </Button>
      </Stack>
    </Drawer>
  )
}
