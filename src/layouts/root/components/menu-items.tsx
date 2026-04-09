import {
  faChevronDown,
  faChevronRight,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, rem, type NavLinkProps } from '@mantine/core'
import { Link, useLocation } from 'react-router'

type TMenuBaseItem = {
  id: string
  label: string
  icon?: IconDefinition
  c?: NavLinkProps['c']
}

type TMenuLinkItem = TMenuBaseItem & {
  to: string
  onClick?: never
  children?: never
}

type TMenuButtonItem = TMenuBaseItem & {
  onClick: () => void
  to?: never
  children?: never
}

type TMenuItemWithChildren = TMenuBaseItem & {
  children: TMenuLinkItem[]
  to?: never
  onClick?: never
}

export type TMenuItem = TMenuLinkItem | TMenuButtonItem | TMenuItemWithChildren

type TMenuItemsProps = {
  items: TMenuItem[]
}

const isItemActive = (to: string | undefined, pathname: string) => {
  if (!to) {
    return false
  }

  if (to === '/') {
    return pathname === '/'
  }

  return pathname === to || pathname.startsWith(`${to}/`)
}

export const MenuItems = ({ items }: TMenuItemsProps) => {
  const location = useLocation()

  return items.map((item) => {
    const isActive = isItemActive(item.to, location.pathname)
    const leftSection = item.icon ? <FontAwesomeIcon icon={item.icon} /> : undefined
    const className =
      item.c === 'red'
        ? 'root-sidebar-nav-link root-sidebar-nav-link-danger'
        : 'root-sidebar-nav-link'
    const commonProps: NavLinkProps = {
      variant: 'subtle',
      c: item.c,
      label: item.label,
      leftSection,
    }

    return item.to ? (
      <NavLink
        {...commonProps}
        className={className}
        key={item.label}
        active={isActive}
        component={Link}
        to={item.to}
      />
    ) : !Array.isArray(item.children) ? (
      <NavLink
        {...commonProps}
        className={className}
        key={item.label}
        component="button"
        onClick={item.onClick}
      />
    ) : (
      <NavLink
        {...commonProps}
        className={className}
        key={item.label}
        component="button"
        childrenOffset={rem(28)}
        onClick={item.onClick}
        rightSection={
          <FontAwesomeIcon icon={isActive ? faChevronDown : faChevronRight} size="xs" />
        }
      >
        {item.children.map((childItem) => {
          const isActive = isItemActive(childItem.to, location.pathname)
          const childClassName =
            childItem.c === 'red'
              ? 'root-sidebar-nav-link root-sidebar-nav-link-danger'
              : 'root-sidebar-nav-link'

          return (
            <NavLink
              className={childClassName}
              key={childItem.label}
              c={childItem.c}
              active={isActive}
              component={Link}
              to={childItem.to}
              variant="subtle"
              label={childItem.label}
            />
          )
        })}
      </NavLink>
    )
  })
}
