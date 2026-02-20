import { Table, type TTableColumn } from '@/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  Divider,
  Group,
  Menu,
  Pagination,
  rem,
  Select,
  Text,
  TextInput,
} from '@mantine/core'
import type { TPatientTableRow } from '../types'
import { useDisclosure, usePagination } from '@mantine/hooks'
import {
  faArrowUpRightFromSquare,
  faCirclePlus,
  faEllipsisV,
  faFilter,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { PatientsFiltersDrawer } from './patients-filters-drawer'
import { Link } from 'react-router'

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
      <Anchor component={Link} size="sm" fw={600} to={`/patients/${data.id}`}>
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
      <Menu
        trigger="hover"
        shadow="md"
        width={200}
        position="right-end"
        withArrow
        arrowPosition="center"
        arrowSize={12}
      >
        <Menu.Target>
          <ActionIcon variant="light" color="gray" size="lg" radius="xl">
            <FontAwesomeIcon icon={faEllipsisV} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label fw={700} tt="uppercase" lts={0.3} fz={rem(11)}>
            Acciones
          </Menu.Label>
          <Menu.Item color="blue" fw={600} leftSection={<FontAwesomeIcon icon={faCirclePlus} />}>
            Nueva consulta
          </Menu.Item>
          <Menu.Item
            c="black"
            fw={600}
            leftSection={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          >
            Ver paciente
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    ),
  },
]

export const PatientsTable = () => {
  const pagination = usePagination({ total: patients.length })
  const [
    patientsFiltersDrawerOpened,
    { open: openPatientsFiltersDrawer, close: closePatientsFiltersDrawer },
  ] = useDisclosure(false)

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
                leftSection={<FontAwesomeIcon icon={faFilter} />}
                onClick={openPatientsFiltersDrawer}
              >
                Filtros
              </Button>
            </Group>
            <Group>
              <Text c="gray.7" size="sm">
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
            <Text c="gray.7" size="sm">
              Mostrando{' '}
              <Text span c="black" fw={700}>
                1
              </Text>{' '}
              -{' '}
              <Text span c="black" fw={700}>
                10
              </Text>{' '}
              de{' '}
              <Text span c="black" fw={700}>
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
      <PatientsFiltersDrawer
        opened={patientsFiltersDrawerOpened}
        onClose={closePatientsFiltersDrawer}
      />
    </>
  )
}
