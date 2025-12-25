import { useContext, useEffect } from 'react'
import { BreadcrumbsContext } from '../contexts'
import type { TBreadcrumbsItem } from '../components'

export const useBreadcrumbs = (items: TBreadcrumbsItem[]) => {
  const { setBreadcrumbsItems } = useContext(BreadcrumbsContext)

  useEffect(() => {
    setBreadcrumbsItems?.(items)

    return () => {
      setBreadcrumbsItems?.([])
    }
  }, [items, setBreadcrumbsItems])
}
