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

export const MenuItems = ({ items }: TMenuItemsProps) => {
  const location = useLocation()

  return items.map((item) => {
    const isActive = item.to === location.pathname
    const leftSection = item.icon ? <FontAwesomeIcon icon={item.icon} /> : undefined
    const commonProps: NavLinkProps = {
      variant: 'light',
      c: item.c,
      label: item.label,
      leftSection,
    }

    return item.to ? (
      <NavLink
        {...commonProps}
        key={item.label}
        active={isActive}
        component={Link}
        to={item.to}
        styles={(theme, props) => ({
          root: {
            color: props.active ? theme.colors.blue[6] : theme.colors.gray[7],
          },
        })}
      />
    ) : !Array.isArray(item.children) ? (
      <NavLink
        {...commonProps}
        key={item.label}
        component="button"
        onClick={item.onClick}
        styles={(theme) => ({
          root: {
            color: theme.colors.gray[7],
          },
        })}
      />
    ) : (
      <NavLink
        {...commonProps}
        key={item.label}
        component="button"
        childrenOffset={rem(28)}
        onClick={item.onClick}
        rightSection={
          <FontAwesomeIcon icon={isActive ? faChevronDown : faChevronRight} size="xs" />
        }
        styles={(theme) => ({
          root: {
            color: theme.colors.gray[7],
          },
        })}
      >
        {item.children.map((childItem) => {
          const isActive = childItem.to === location.pathname

          return (
            <NavLink
              key={childItem.label}
              c={childItem.c}
              active={isActive}
              component={Link}
              to={childItem.to}
              variant="light"
              label={childItem.label}
              styles={(theme, props) => ({
                root: {
                  color: props.active ? theme.colors.blue[6] : theme.colors.gray[7],
                },
              })}
            />
          )
        })}
      </NavLink>
    )
  })
}
