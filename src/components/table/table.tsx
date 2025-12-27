import { Table as Table_ } from '@mantine/core'
import type { TDefaultTableData, TTableProps } from './types'

export function Table<TTableData extends TDefaultTableData = TDefaultTableData>(
  props: TTableProps<TTableData>,
) {
  const { columns, data } = props

  return (
    <Table_ tabularNums highlightOnHover verticalSpacing="sm" horizontalSpacing="md">
      <Table_.Thead>
        <Table_.Tr bg="gray.0">
          {columns.map((column) => (
            <Table_.Th key={column.id.toString()} tt="uppercase" fz="xs" lts={1}>
              {column.label}
            </Table_.Th>
          ))}
        </Table_.Tr>
      </Table_.Thead>
      <Table_.Tbody>
        {data.map((item) => (
          <Table_.Tr key={item.id}>
            {columns.map((column) => {
              const value = column.render ? column.render(item) : item[column.id]

              return <Table_.Td key={`${column.id.toString()}-${item.id}`}>{value}</Table_.Td>
            })}
          </Table_.Tr>
        ))}
      </Table_.Tbody>
    </Table_>
  )
}
