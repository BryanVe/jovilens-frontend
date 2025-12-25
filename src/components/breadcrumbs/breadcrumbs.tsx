import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Anchor, Text, Breadcrumbs as Breadcrumbs_ } from '@mantine/core'

export type TBreadcrumbsItem = {
  label: string
  to?: string
}

export type TBreadcrumbsProps = {
  items: TBreadcrumbsItem[]
}

export const Breadcrumbs = ({ items }: TBreadcrumbsProps) => {
  if (items.length === 0) return null

  return (
    <Breadcrumbs_ separator={<FontAwesomeIcon size="2xs" icon={faChevronRight} />}>
      {items.map((item, index) =>
        item.to ? (
          <Anchor key={index} size="sm" href={item.to} fw={600}>
            {item.label}
          </Anchor>
        ) : (
          <Text key={index} size="sm" c="gray.8" fw={600}>
            {item.label}
          </Text>
        ),
      )}
    </Breadcrumbs_>
  )
}
