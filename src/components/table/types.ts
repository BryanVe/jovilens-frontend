export type TDefaultTableData = {
  id: string | number
  [key: string]: string | number | boolean
}

export type TTableColumn<TTableData extends TDefaultTableData = TDefaultTableData> = {
  id: keyof TTableData | (string & {})
  label?: string
  render?: (data: TTableData) => React.ReactNode
}

export type TTableProps<TTableData extends TDefaultTableData = TDefaultTableData> = {
  data: TTableData[]
  columns: TTableColumn<TTableData>[]
}
