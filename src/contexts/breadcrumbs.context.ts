import { createContext } from 'react'
import type { TBreadcrumbsItem } from '../components'

type TBreadcrumbsContext = {
  setBreadcrumbsItems: React.Dispatch<React.SetStateAction<TBreadcrumbsItem[]>>
}

export const BreadcrumbsContext = createContext<Partial<TBreadcrumbsContext>>({})
