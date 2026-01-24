import { Table, type TTableColumn } from '@/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  Divider,
  Drawer,
  Group,
  NumberInput,
  Pagination,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from '@mantine/core'
import type { TPatientTableRow } from '../types'
import { useDisclosure, usePagination } from '@mantine/hooks'
import {
  faEllipsisV,
  faFilter,
  faMagnifyingGlass,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons'
import { DatePickerInput } from '@mantine/dates'
import './style.css'

const orderOptions = [
  'Apellido (A-Z)',
  'Apellido (Z-A)',
  'Atendidos recientemente',
  'Atendidos hace tiempo',
  'Edad (mayor a menor)',
  'Edad (menor a mayor)',
]

const patients: TPatientTableRow[] = [
  {
    id: 1,
    fullName: 'Juan Pérez',
    documentNumber: '12345678',
    phone: '555-1234',
    age: 35,
    lastConsultation: '2023-10-01',
  },
  {
    id: 2,
    fullName: 'María López',
    phone: '555-5678',
    age: 28,
    lastConsultation: '2023-09-15',
  },
  {
    id: 3,
    fullName: 'Carlos García',
    documentNumber: '11223344',
    phone: '555-9101',
    lastConsultation: '2023-08-20',
  },
  {
    id: 4,
    fullName: 'Ana Torres',
    documentNumber: '44332211',
    phone: '555-1213',
    age: 30,
  },
  {
    id: 5,
    fullName: 'Luis Martínez',
    documentNumber: '99887766',
    phone: '555-1415',
    age: 50,
    lastConsultation: '2023-06-05',
  },
  {
    id: 6,
    fullName: 'Sofía Fernández',
    documentNumber: '66778899',
    phone: '555-1617',
    age: 25,
    lastConsultation: '2023-05-25',
  },
  {
    id: 7,
    fullName: 'Diego Ramírez',
    documentNumber: '33445566',
    age: 38,
    lastConsultation: '2023-04-15',
  },
  {
    id: 8,
    fullName: 'Laura Gómez',
    documentNumber: '22114433',
    phone: '555-2021',
    age: 45,
    lastConsultation: '2023-03-10',
  },
  {
    id: 9,
    fullName: 'Laura Gómez',
    documentNumber: '22114433',
    phone: '555-2021',
    age: 45,
    lastConsultation: '2023-03-10',
  },
  {
    id: 10,
    fullName: 'Laura Gómez',
    documentNumber: '22114433',
    phone: '555-2021',
    age: 45,
    lastConsultation: '2023-03-10',
  },
]

const columns: TTableColumn<TPatientTableRow>[] = [
  {
    id: 'fullName',
    label: 'Nombre Completo',
    render: (data) => (
      <Anchor size="sm" fw={600}>
        {data.fullName}
      </Anchor>
    ),
  },
  {
    id: 'documentNumber',
    label: 'Documento',
    render: (data) => data.documentNumber ?? '--',
  },
  {
    id: 'phone',
    label: 'Teléfono',
    render: (data) => data.phone ?? '--',
  },
  {
    id: 'age',
    label: 'Edad',
    render: (data) => data.age ?? '--',
  },
  {
    id: 'lastConsultation',
    label: 'Última Consulta',
    render: (data) => data.lastConsultation ?? '--',
  },
  {
    id: 'actions',
    render: () => (
      <ActionIcon variant="subtle" color="gray" size="lg" radius="xl">
        <FontAwesomeIcon icon={faEllipsisV} />
      </ActionIcon>
    ),
  },
]

export const PatientsTable = () => {
  const pagination = usePagination({ total: patients.length })
  const [filtersDrawerOpened, { open: openFiltersDrawer, close: closeFiltersDrawer }] =
    useDisclosure(false)

  return (
    <>
      <Card withBorder radius="md">
        <Card.Section p="md">
          <Group>
            <Group flex={1}>
              <TextInput
                flex={1}
                maw={400}
                variant="filled"
                placeholder="Buscar por nombre, documento o teléfono"
                leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />}
              />
              <Button
                variant="default"
                c="gray.8"
                leftSection={<FontAwesomeIcon icon={faFilter} />}
                onClick={openFiltersDrawer}
              >
                Filtros
              </Button>
            </Group>
            <Group>
              <Text c="gray.6" size="sm">
                Ordenar por:
              </Text>
              <Select defaultValue="Apellido (A-Z)" data={orderOptions} fw={600} />
            </Group>
          </Group>
        </Card.Section>
        <Card.Section>
          <Divider />
          <Table data={patients} columns={columns} />
          <Divider />
          <Group p="md" justify="space-between">
            <Text c="gray.6" size="sm">
              Mostrando{' '}
              <Text span c="gray.8" fw={700}>
                1
              </Text>{' '}
              -{' '}
              <Text span c="gray.8" fw={700}>
                10
              </Text>{' '}
              de{' '}
              <Text span c="gray.8" fw={700}>
                45
              </Text>{' '}
              resultados
            </Text>
            <Pagination
              size="sm"
              total={patients.length}
              value={pagination.active}
              onChange={pagination.setPage}
              fw={600}
            />
          </Group>
        </Card.Section>
      </Card>
      <Drawer
        padding="lg"
        opened={filtersDrawerOpened}
        position="right"
        onClose={closeFiltersDrawer}
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
              Filtros
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
              name="favoriteFramework"
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
                    <Text fw={500} size="sm">
                      Todos
                    </Text>
                  }
                  description="Mostrar todos los pacientes"
                />
                <Radio
                  value="with-consultations"
                  label={
                    <Text fw={500} size="sm">
                      Con consultas
                    </Text>
                  }
                  description="Pacientes con historial médico"
                />
                <Radio
                  value="without-consultations"
                  label={
                    <Text fw={500} size="sm">
                      Sin consultas
                    </Text>
                  }
                  description="Solo pacientes registrados"
                />
              </Stack>
            </Radio.Group>
          </Stack>
          <Divider mx="-lg" my="lg" />
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
                  <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
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
                  <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                    Rango máximo
                  </Text>
                }
              />
            </Group>
          </Stack>
          <Divider mx="-lg" my="lg" />
          <Stack gap="xs">
            <Text fw={600} size="md">
              Última consulta
            </Text>
            <Group>
              <DatePickerInput
                flex={1}
                defaultValue={new Date()}
                label={
                  <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
                    Desde
                  </Text>
                }
              />
              <DatePickerInput
                flex={1}
                defaultValue={new Date()}
                label={
                  <Text fw={700} c="gray" size="xs" tt="uppercase" lts={0.1}>
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
    </>
  )
}
