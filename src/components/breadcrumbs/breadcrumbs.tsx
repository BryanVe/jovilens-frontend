import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Anchor, Text, Breadcrumbs as Breadcrumbs_ } from '@mantine/core'
import { Link } from 'react-router'
import type { TBreadcrumbsProps } from './types'

export const Breadcrumbs = ({ items }: TBreadcrumbsProps) => {
  if (items.length === 0) return null

  return (
    <Breadcrumbs_ separator={<FontAwesomeIcon size="2xs" icon={faChevronRight} />}>
      {items.map((item, index) =>
        item.to ? (
          <Anchor component={Link} key={index} size="sm" to={item.to} fw={600}>
            {item.label}
          </Anchor>
        ) : (
          <Text key={index} size="sm" fw={600}>
            {item.label}
          </Text>
        ),
      )}
    </Breadcrumbs_>
  )
}
